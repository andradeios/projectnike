import { Check, Target, Zap, Shield, TrendingUp, Users, Award } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Mira Perfeita",
    description: "Configurações otimizadas para acertar 100% das capas, mesmo em movimento",
  },
  {
    icon: Zap,
    title: "Reação Instantânea",
    description: "Painel 100% ajustavel para resposta rápida em qualquer situação",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Configurações legais que não violam os termos do Free Fire",
  },
  {
    icon: TrendingUp,
    title: "Evolução Garantida",
    description: "Veja sua performance melhorar em até 48 horas de uso",
  },
  {
    icon: Users,
    title: "Comunidade Exclusiva",
    description: "Acesso ao grupo VIP com dicas e estratégias dos melhores",
  },
  {
    icon: Award,
    title: "Atualizações Constantes",
    description: "Sempre atualizado com as melhores configs do momento",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Por Que Você Está <span className="text-primary">Perdendo Partidas?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A diferença entre um jogador comum e um PRO está nas{" "}
            <strong className="text-foreground">configurações certas</strong>. Pare de sofrer e comece a dominar!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
              <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                <Check className="h-5 w-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
