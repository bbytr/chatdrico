import React from 'react'
import Chat from '../Components/Chat';
import { cookies } from 'next/headers';
import { redis } from '@/lib/redis';
import { ragChat } from '@/lib/rag-chat';


interface PageProps {
  params : {
    link?:string | string[];
  }


}
function reconstructUrl({url} : {url : string[]}) {
  const decodedComponents = url.map((Component) => decodeURIComponent(Component))
  return decodedComponents.join('/');
  
}
const page = async ({params} : PageProps) => {

  const sessionCookies = (await cookies()).get("sessionid")?.value
   
  const awaitedParams = await params
  if(!awaitedParams?.link) {
    return <div> Erreur: Aucun lien fourni </div>
  }
  const linkArray = Array.isArray(awaitedParams.link) ? awaitedParams.link : [awaitedParams.link]

  const decodelink = reconstructUrl({url : linkArray})
  const sessionId = (decodelink + "__" + sessionCookies).replace(/\//g,"") 
  const isAlreadyIndexed = await redis.sismember("indexed-url" , decodelink)
  
  if (!isAlreadyIndexed) {
    console.log("indexation en cours...")
    await ragChat.context.add({
      type : "html",
      source : decodelink,
      config : {chunkOverlap: 50, chunkSize: 200}
    })
    await redis.sadd("indexed-urls",decodelink)
  }

  const initialMessage = await ragChat.history.getMessages({ amount: 10, sessionId})

  return (
    <Chat decodedlink={decodelink}
          sessionId={sessionId}
          initialMessage={initialMessage}></Chat>
  )
}

export default page
