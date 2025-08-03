import React from 'react'


interface PageProps {
  params : {
    link?:string | string [];
  }


}

const page = async ({params} : PageProps) => {
   
  const awaitedParams = await params
  if(!awaitedParams?.link) {
    return <div> Erreur: Aucun lien fourni </div>
  }
  console.log(awaitedParams)

  return (
    <div>page</div>
  )
}

export default page