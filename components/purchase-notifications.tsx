"use client"

import { useEffect, useState } from "react"
import { ShoppingCart } from "lucide-react"

const notifications = [
  { name: "Lucas M.", location: "São Paulo - SP", plan: "Permanente" },
  { name: "Pedro S.", location: "Rio de Janeiro - RJ", plan: "30 Dias" },
  { name: "Rafael K.", location: "Belo Horizonte - MG", plan: "Permanente" },
  { name: "Gabriel T.", location: "Curitiba - PR", plan: "Permanente" },
  { name: "Matheus L.", location: "Porto Alegre - RS", plan: "3 Meses" },
  { name: "Thiago R.", location: "Brasília - DF", plan: "Permanente" },
  { name: "Felipe A.", location: "Salvador - BA", plan: "Permanente" },
  { name: "Bruno C.", location: "Fortaleza - CE", plan: "30 Dias" },
  { name: "Diego M.", location: "Recife - PE", plan: "Permanente" },
  { name: "Rodrigo P.", location: "Manaus - AM", plan: "3 Meses" },
  { name: "Gustavo L.", location: "Goiânia - GO", plan: "Permanente" },
  { name: "André F.", location: "Belém - PA", plan: "30 Dias" },
  { name: "Vinicius S.", location: "Vitória - ES", plan: "Permanente" },
  { name: "Marcelo R.", location: "Natal - RN", plan: "3 Meses" },
  { name: "Leandro P.", location: "João Pessoa - PB", plan: "Permanente" },
]

export function PurchaseNotifications() {
  const [visible, setVisible] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(0)

  useEffect(() => {
    const showNotification = () => {
      setVisible(true)
      setCurrentNotification((prev) => (prev + 1) % notifications.length)

      setTimeout(() => {
        setVisible(false)
      }, 5000)
    }

    const interval = setInterval(showNotification, 8000)
    setTimeout(showNotification, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  const notification = notifications[currentNotification]

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-left-5 fade-in duration-500">
      <div className="flex items-center gap-3 rounded-lg border border-primary/50 bg-card/95 p-4 shadow-2xl backdrop-blur-sm">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
          <ShoppingCart className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-foreground">{notification.name}</p>
          <p className="text-xs text-muted-foreground">{notification.location}</p>
          <p className="mt-1 text-xs font-semibold text-primary">
            Comprou o plano <strong>{notification.plan}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
