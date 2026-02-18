import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o Painel Nike Cheats?",
    answer:
      "Você recebe acesso imediato a um Painel completo com todas Funções Full Capa. Basta copiar e aplicar no seu Free Fire. Funciona em qualquer dispositivo Android ou iOS.",
  },
  {
    question: "É seguro? Vou ser banido?",
    answer:
      "Totalmente seguro! Milhares de jogadores usam sem nenhum problema. 100% dentro das regras do Free Fire.",
  },
  {
    question: "Funciona no meu celular?",
    answer:
      "Sim! Funciona em qualquer celular Android ou iOS. desde os mais simples até os tops de linha.",
  },
  {
    question: "Quanto tempo leva para melhorar?",
    answer:
      "A maioria dos jogadores nota diferença nas primeiras partidas. Em 48 horas de uso, você já vai estar dominando muito mais.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Oferecemos garantia de 7 dias. Se você não melhorar sua performance, devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "Como recebo o acesso?",
    answer:
      "Imediatamente após o pagamento, você recebe o acesso por Email. Em menos de 5 minutos você já está dando FULL CAPA.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tire suas dúvidas antes de começar a dominar
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
