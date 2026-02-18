"use client"

import { useEffect, useRef } from "react"

export function AnimatedBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    const text = banner.querySelector(".banner-text") as HTMLElement
    if (!text) return

    // Clone the text for seamless loop
    const clone = text.cloneNode(true) as HTMLElement
    banner.appendChild(clone)

    let position = 0
    const speed = 1 // pixels per frame

    const animate = () => {
      position -= speed
      const textWidth = text.offsetWidth

      if (Math.abs(position) >= textWidth) {
        position = 0
      }

      text.style.transform = `translateX(${position}px)`
      clone.style.transform = `translateX(${position + textWidth}px)`

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary py-2.5">
      <div ref={bannerRef} className="animate-scroll flex whitespace-nowrap">
        <div className="flex items-center gap-12 px-4 text-sm font-bold uppercase tracking-wide text-primary-foreground">
          <span>PROMOÇÃO LIMITADA - OFERTA VAI ACABAR</span>
          <span>•</span>
          <span>O MELHOR PAINEL DO FREE FIRE</span>
          <span>•</span>
          <span>FULL CAPA GARANTIDO</span>
          <span>•</span>
          <span>ÚLTIMAS VAGAS DISPONÍVEIS</span>
          <span>•</span>
          <span>PROMOÇÃO LIMITADA - OFERTA VAI ACABAR</span>
          <span>•</span>
          <span>O MELHOR PAINEL DO FREE FIRE</span>
          <span>•</span>
          <span>FULL CAPA GARANTIDO</span>
          <span>•</span>
          <span>ÚLTIMAS VAGAS DISPONÍVEIS</span>
          <span>•</span>
        </div>
      </div>
    </div>
  )
}
