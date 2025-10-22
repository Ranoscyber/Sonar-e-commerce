import axios from "axios"
import { useEffect, useState } from "react"

function useGetLimitProducts() {

  const [data,setData] = useState([])
  useEffect(()=>{
    const fetchData = async () =>{
      try{
          const res = await axios.get('https://fakestoreapi.com/products?limit=8')
          setData(res.data)
      }
      catch(error){
        console.log("Error : ",error)
      }
    }
    fetchData()
  },[])

  return {
    data
  }
    
  
}

export default useGetLimitProducts