"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function Result(){

    const [result, setResult] = useState()

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL)
          .then(function (response) {
            console.log(response.data)
            setResult(response.data.body)
          })
          .catch(function (error) {
            console.log(error);
          })
    },[])

    return(
        <div className = "flex h-screen">
            <span 
                className = "text-2xl mx-auto my-auto font-semibold text-blue-500 shadow-md rounded-md p-5 bg-gray-50">
                6 + 8 = {result}
            </span>
        </div>
    )
}