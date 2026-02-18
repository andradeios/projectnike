"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, Crown, ArrowRight, Trophy } from "lucide-react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState(15 * 60)
  const [showPopup499, setShowPopup499] = useState(false)
  const [showPopup999, setShowPopup999] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const handlePurchase = (url: string) => {
    window.open(url, "_blank")
  }

  const basicFeatures = [
    "Anti-Ban e Anti-BlackList",
    "Acesso ao melhor Painel",
    "Acesso ao Discord de suporte",
    "Funciona em iOS e Android",
  ]

  const mediumFeatures = [
    "Anti-Ban e Anti-BlackList",
    "Acesso ao melhor Painel",
    "Acesso ao Discord de suporte",
    "Atendimento prioritário",
    "Funciona em iOS e Android",
  ]

  const premiumFeatures = [
    "Anti-Ban e Anti-BlackList",
    "Acesso ao melhor Painel",
    "Acesso ao Discord de suporte",
    "Atendimento prioritário",
    "Ganhe apostados de Free Fire",
    "Bypass incluído, perfeito pra apostados",
    "Gelo invertido",
    "Skin Freestyle",
     "Funciona em iOS e Android",
  ]

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-bold uppercase text-primary glow-red">
            <Zap className="h-5 w-5" />
            Oferta Especial Termina em {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
          </div>
          <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Escolha Seu <span className="text-primary">Plano</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Acesso imediato ao melhor Painel do Free Fire. Full Capa, Full Vermelho, 100% Anti-Ban!
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <Card className="group relative overflow-hidden border-2 border-border bg-gradient-to-b from-card to-card/50 transition-all hover:border-primary hover:glow-red">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="relative">
              <div className="mb-2 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl font-black uppercase">Nike Cheats</CardTitle>
              </div>
              <CardDescription className="text-base font-semibold">Uso por 7 Dias</CardDescription>
              <div className="mt-4">
                <div className="mb-2 inline-block rounded-lg bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">
                  50% OFF
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-foreground">R$ 29,99</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground line-through">de R$ 59,99</div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <ul className="mb-6 space-y-3">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => setShowPopup499(true)}
                className="w-full bg-primary text-lg font-bold uppercase shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
                size="lg"
              >
                Comprar com Desconto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-border bg-gradient-to-b from-card to-card/50 transition-all hover:border-primary hover:glow-red">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="relative">
              <div className="mb-2 flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl font-black uppercase">Nike Cheats</CardTitle>
              </div>
              <CardDescription className="text-base font-semibold">Uso por 1 MÊS</CardDescription>
              <div className="mt-4">
                <div className="mb-2 inline-block rounded-lg bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">
                  50% OFF
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-foreground">R$ 69,99</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground line-through">de R$ 99,99</div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <ul className="mb-6 space-y-3">
                {mediumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => setShowPopup999(true)}
                className="w-full bg-primary text-lg font-bold uppercase shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
                size="lg"
              >
                Comprar com Desconto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-primary bg-gradient-to-b from-card to-card/50 shadow-xl shadow-primary/20 glow-red-strong">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
              <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 py-2 text-sm font-bold uppercase text-primary-foreground shadow-lg">
                <Crown className="h-4 w-4" />
                Mais Vendido
              </div>
            </div>
            <CardHeader className="relative pt-8">
              <div className="mb-2 flex items-center gap-2">
                <Crown className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl font-black uppercase">Nike Cheats</CardTitle>
              </div>
              <CardDescription className="text-base font-semibold">Vitalício</CardDescription>
              <div className="mt-4">
                <div className="mb-2 inline-block rounded-lg bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">
                  95% OFF
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-foreground">R$ 99,99</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground line-through">de R$358,00</div>
                <div className="mt-1 text-sm font-bold text-primary">Pague uma vez e use PRA SEMPRE</div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <ul className="mb-6 space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handlePurchase("https://go.plataformafortpay.com.br/y1gw1ggpqu")}
                className="w-full bg-primary text-lg font-bold uppercase shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
                size="lg"
              >
                Comprar com Desconto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-center text-sm font-semibold text-primary">
                Apenas <strong>15 vagas</strong> restantes neste preço
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">Pagamento 100% Seguro • Dados Protegidos • Acesso Imediato</p>
        </div>
      </div>

      <Dialog open={showPopup499} onOpenChange={setShowPopup499}>
        <DialogContent className="max-w-md border-2 border-primary glow-red">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-black uppercase text-primary">
              🔥 ESPERA! OFERTA ESPECIAL 🔥
            </DialogTitle>
            <DialogDescription className="text-center text-base text-foreground">
              Antes de continuar, veja esta oferta exclusiva!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg bg-primary/10 p-4 text-center">
              <p className="mb-2 text-sm font-semibold text-muted-foreground">
                Upgrade para o plano de 1 MÊS + Bônus por apenas:
              </p>
              <div className="mb-1 text-4xl font-black text-primary">R$ 69,99</div>
              <p className="text-sm text-muted-foreground line-through">de R$ 99,99</p>
              <p className="mt-2 text-xs font-bold text-primary">ECONOMIZE R$ 30,00 + GANHE MAIS TEMPO E RECEBA UM BÔNUS!</p>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">1 MÊS de acesso completo</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">Todos os recursos inclusos</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">Melhor custo-benefício</span>
              </li>
            </ul>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setShowPopup499(false)
                  handlePurchase("https://go.plataformafortpay.com.br/kfj2onukxt")
                }}
                className="flex-1 bg-primary font-bold uppercase shadow-lg hover:scale-105 hover:bg-primary/90"
              >
                SIM! QUERO O UPGRADE
              </Button>
              <Button
                onClick={() => {
                  setShowPopup499(false)
                  handlePurchase("https://go.plataformafortpay.com.br/trnwinhwbw")
                }}
                variant="outline"
                className="flex-1 border-border font-bold uppercase hover:border-primary"
              >
                NÃO, OBRIGADO
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPopup999} onOpenChange={setShowPopup999}>
        <DialogContent className="max-w-md border-2 border-primary glow-red">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-black uppercase text-primary">
              👑 ÚLTIMA CHANCE! OFERTA VIP 👑
            </DialogTitle>
            <DialogDescription className="text-center text-base text-foreground">
              Upgrade para o plano PERMANENTE com desconto exclusivo!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg bg-primary/10 p-4 text-center">
              <p className="mb-2 text-sm font-semibold text-muted-foreground">
                Upgrade para o plano PERMANENTE por apenas:
              </p>
              <div className="mb-1 text-4xl font-black text-primary">R$ 99,99</div>
              <p className="text-sm text-muted-foreground line-through">de R$ 358,00</p>
              <p className="mt-2 text-xs font-bold text-primary">ECONOMIZE SEU TEMPO E USE PRA SEMPRE!</p>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">Acesso vitalício ao painel</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">Todos os recursos inclusos</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="font-bold text-primary">Pague 1x e use SEMPRE</span>
              </li>
            </ul>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setShowPopup999(false)
                  handlePurchase("https://go.plataformafortpay.com.br/y1gw1ggpqu")
                }}
                className="flex-1 bg-primary font-bold uppercase shadow-lg hover:scale-105 hover:bg-primary/90"
              >
                SIM! QUERO VITALÍCIO
              </Button>
              <Button
                onClick={() => {
                  setShowPopup999(false)
                  handlePurchase("https://go.plataformafortpay.com.br/kfj2onukxt")
                }}
                variant="outline"
                className="flex-1 border-border font-bold uppercase hover:border-primary"
              >
                NÃO, OBRIGADO
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
