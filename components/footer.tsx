import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent">PROPV</h3>
            <p className="text-sm text-muted-foreground">Tecnologia e automação</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-foreground transition">
                  Hardware
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition">
                  Redes
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition">
                  Backup
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition">
                  Automação
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left text-sm text-muted-foreground">
              © 2025 PROPV. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="mailto:contato@propv.com.br"
                className="flex items-center gap-2 hover:text-foreground transition"
              >
                <Mail size={16} />
                contato@propv.com.br
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Barreiros, SC
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
