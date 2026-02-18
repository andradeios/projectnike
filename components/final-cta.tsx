"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Crown } from "lucide-react"

export function FinalCta() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-card py-20 md:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Pare de <span className="text-primary">Perder Tempo</span> e Comece a Dominar Hoje!
          </h2>
          <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Enquanto você está lendo isso, <strong className="text-foreground">centenas de jogadores</strong> estão
            melhorando com nossos Paineis. Não fique para trás!
          </p>

          <div className="mb-12 flex flex-col items-center gap-6">
            <Button
              size="lg"
              onClick={scrollToPricing}
              className="group bg-primary px-8 text-xl font-bold uppercase hover:bg-primary/90"
            >
              Garantir Meu Acesso Agora
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-primary" />
                <span>Garantia de 7 Dias</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
            <p className="text-balance text-lg font-bold text-foreground">
              ⚠️ ATENÇÃO: O preço promocional pode acabar a qualquer momento. Garanta seu acesso agora antes que o valor
              aumente!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
