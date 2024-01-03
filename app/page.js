'use client'
import Image from 'next/image'
import Qr_buttom from './components/Qr_buttom'
import Canva_QR from './components/Canva_QR';
import { useState } from 'react';

export default function Home() {
  console.log('hight');
  const[url,seturl] = useState('')
  return (
    <main>
      <div className='bg-indigo-950 flex min-h-screen'>
        <div className='items-center justify-center w-1/2 flex'> 
          {
            url == '' ?(
              <Image src='/Planehg.svg' width={700} height={700}></Image>
            ):(<Canva_QR url={url}></Canva_QR>)
          }
        </div>
        <div className='items-center justify-center w-1/2 flex flex-col gap-6'> 
          <p className='text-white font-extrabold text-3xl animate-bounce'> Welcome to QR code Maker </p>
          <Qr_buttom link ={seturl}></Qr_buttom>
        </div>
      </div> 
    </main>
  )
}
