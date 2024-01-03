'use client'
import React from 'react'
import { useQRCode } from 'next-qrcode';

export default function Canva_QR(props) {
  console.log(props.url);
    const { Canvas } = useQRCode();
  return (
    <>
    <Canvas
      text={props.url}
      options={{
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 350,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      }}
      ></Canvas>
    </>
  )
}
