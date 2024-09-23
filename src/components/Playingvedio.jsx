import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchdata } from '../utils/Rapidapi'

const Playingvedio = () => {
  const [vedio,setVedio] = useState()
  const [related,setRelated] = useState()
  const {id} = useParams()

  const fetchvedio = () =>{
    fetchdata(`/video/details/?id=${id}`).then((res)=>{
      console.log("vedio data :", res)
      setVedio(res)
    }
      
    ).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    fetchvedio();
  },[])
  return ( 
    <div className='w-full h-screen flex justify-center items-center bg-red-700' >
      Playing
    </div>
  )
}

export default Playingvedio
