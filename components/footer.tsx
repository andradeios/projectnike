import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <Image src="/semfundo.png" alt="Nike Cheats Logo" width={80} height={80} className="h-20 w-20" />

          <div className="text-center">
            <h3 className="mb-2 text-xl font-black uppercase text-foreground">Nike Cheats</h3>
            <p className="text-sm text-muted-foreground">O melhor Painel do Free Fire</p>
          </div>

          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <a href="https://instagram.com/dabocafnc" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              @dabocafnc
            </a>
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Nike Cheats. Todos os direitos reservados.</p>
            <p className="mt-2">100% Anti-Ban • Full Capa • Full Vermelho</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
