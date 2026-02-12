import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Kontakt</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Kontaktujte mě
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Líbí se vám moje práce? Tak mi klidně zavolejte nebo napište email a
          rád se s vámi spojím!
        </p>
        <div className="flex gap-4 mt-4">
          <Button asChild variant="default" size="lg">
            <a
              href={`tel:${DATA.contact.tel}`}
              className="flex items-center gap-2"
            >
              <Phone className="size-4" />
              Zavolat
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="flex items-center gap-2"
            >
              <Mail className="size-4" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
