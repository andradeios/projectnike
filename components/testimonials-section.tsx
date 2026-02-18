import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    name: "Amanda R.",
    location: "São Paulo, SP",
    rating: 5,
    image: "/testimonials/profile-woman.png",
    text: "gente esse painel e perfeito msm to usando faz 1 mes e so capa so vermelho meu namorado fica ate c ciumes da minha mira agora kkkk 💗",
  },
  {
    name: "Pedro S.",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    image: "/testimonials/profile-2.png",
    text: "comprei ontem ja ganhei 5 apostado seguido no 4x4 o painel e so capa memo td bala vai na cabeca fiz clutch em x1 e ninguem acha o painel",
  },
  {
    name: "Rafael K.",
    location: "Belo Horizonte, MG",
    rating: 5,
    image: "/testimonials/profile-3.png",
    text: "cara to usando faz 2 mes e nunca tomei ban o painel e 100 porcento seguro e so vermelho so capa ganho td os apostado agora",
  },
  {
    name: "Gabriel T.",
    location: "Curitiba, PR",
    rating: 5,
    image: "/testimonials/profile-4.png",
    text: "melhor painel do ff so capa so vermelho meus amigo fica impressionado c minha mira e sem medo de ban",
  },
  {
    name: "Matheus L.",
    location: "Brasília, DF",
    rating: 5,
    image: "/testimonials/profile-5.png",
    text: "uso no android e no emulador funciona perfeitamente o painel e indetectavel ninguem acha so capa so vermelho recomendo mt",
  },
  {
    name: "Thiago R.",
    location: "Fortaleza, CE",
    rating: 5,
    image: "/testimonials/profile-6.png",
    text: "comprei o vitalicio e foi a melhor decisao painel so capa td bala na cabeca anti ban anti blacklist to dominando",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Veja o Que Nossos <span className="text-primary">Jogadores Dizem</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Mais de 5.000 jogadores já transformaram seu desempenho no Free Fire
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border bg-background transition-all hover:border-primary hover:glow-red"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
