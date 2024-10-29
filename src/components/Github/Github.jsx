import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/iSitanshu')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <>
        <h1>{data.followers}</h1>
        <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Github