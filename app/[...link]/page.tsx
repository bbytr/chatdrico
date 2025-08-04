import React from 'react'
import Chat from '../Components/Chat';


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
   
  const awaitedParams = await params
  if(!awaitedParams?.link) {
    return <div> Erreur: Aucun lien fourni </div>
  }
  const linkArray = Array.isArray(awaitedParams.link) ? awaitedParams.link : [awaitedParams.link]

  const decodelink = reconstructUrl({url : linkArray})

  return (
    <Chat decodedlink={decodelink}></Chat>
  )
}

export default page