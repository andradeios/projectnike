export function StatsSection() {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-4xl font-black text-primary">5.247</div>
            <div className="text-sm uppercase tracking-wide text-muted-foreground">Jogadores Ativos</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-black text-primary">98%</div>
            <div className="text-sm uppercase tracking-wide text-muted-foreground">Melhoraram a Mira</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-black text-primary">4.9★</div>
            <div className="text-sm uppercase tracking-wide text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-black text-primary">24h</div>
            <div className="text-sm uppercase tracking-wide text-muted-foreground">Acesso Imediato</div>
          </div>
        </div>
      </div>
    </section>
  )
}
