import { useEffect } from "react";
import { useParams } from "react-router-dom"

const CarInfo = () => {
    const {id} = useParams();
    useEffect(()=>{
        if(!id) return

    })
  return (
    <div>CarInfo ID: {id}</div>
  )
}

export default CarInfo