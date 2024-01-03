'use client'
import React, { useState } from 'react'

export default function Qr_buttom(props) {
  const[disable,setdisable] = useState(true)

  const[message,setmessage] = useState('')

  const submithandle = (e)=>{
    e.preventDefault();
    props.link(message)
  }

  const messagehandle = (e)=>{
    setmessage(e.target.value)
    if (e.target.value.length> 0){
      setdisable(false)
    }
    else{
      setdisable(true)
    }
    if (e.target.value.length === 0){
      setmessage('')
      props.link('')
    }
  }

  return (
    <>
     <form onSubmit={(e)=>{submithandle(e);}} className='flex flex-col gap-4'>
          <input type="text" name="name" className='rounded-sm outline-none p-2 text-black'onChange={(e)=>{messagehandle(e)}}/>
          <input type="submit" disabled={disable} value={'Create QR'} className='text-xl font-bold bg-white gap-6 rounded-md px-5 py-3 hover:scale-125 transition-all disabled:bg-slate-600'></input>
      </form>
    </>
  )
}
