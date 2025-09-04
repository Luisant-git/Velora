import  { useEffect } from 'react';

const Seo = ({ title }: any) => {

  useEffect(() => {
    document.title = `Xintra - ${title}`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
