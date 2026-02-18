"use client"

import { useState, useEffect, useRef } from "react"

export function VslSection() {
  const [showButton, setShowButton] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 180000) // 3 minutos (muda se quiser)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-black py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
  Assista o Vídeo <span className="text-purple-900">Até o Final</span>
</h2>


      <div className="max-w-7xl mx-auto aspect-video">
   <video
    className="w-full h-full rounded-2xl shadow-2xl"
    autoPlay
    muted
    controls
    controlsList="nofullscreen"
    playsInline
  >
    <source src="/videos/vsl.MP4" type="video/MP4" />
  </video>

</div>


      {showButton && (
        <div className="mt-10">
          <a
            href="#pricing"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
          >
            QUERO GARANTIR AGORA
          </a>
        </div>
      )}
    </section>
  )
}
