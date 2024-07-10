import React,{useEffect, useState} from 'react'
import { BsMoonFill } from 'react-icons/bs'
import { PiSunLight } from 'react-icons/pi'

const Darkmode = () => {
    const [dark, setDark] = useState(false)
    const ele = document.documentElement
    useEffect(()=>{
        if(dark){
            ele.classList.add("dark")
        }else{
            ele.classList.remove("dark")
        }
    },[dark])
  return (
    <div>
      {
        dark ?  <BsMoonFill onClick={()=>setDark(false)}/>:<PiSunLight onClick={()=>setDark(true)}/> 
      }
    </div>
  )
}

export default Darkmode
