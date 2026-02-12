import { Icons } from "@/components/icons";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { HomeIcon, Paperclip } from "lucide-react";

export const DATA = {
  name: "David Urbanek",
  initials: "DU",
  url: "https://dillion.io",
  location: "Brno, Czech Republic",
  locationLink: "https://www.google.com/maps/place/brno",
  description:
    "jsem David, je mi 22 let a studuji podnikovou informatiku na MUNI. Věřím v to, že lidé by se měli více učit databáze než Excel :D",
  summary:
    "Studuji podnikovou informatiku na MUNI, kde jsem v posledním bakalářském semestru. Posledních dva roky se sám věnuji webovému vývoji, převážně ve frameworku Next.js. V současné době nejvíce pracuji v Antigravity a rád bych se více zajímal o agentic-based development. Rád bych po dokončení bakaláře pokračoval na magisterském studiu v oboru softwarové inženýrství.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "urbanek.dav@email.cz",
    tel: "+420606980435",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/david-urbanek",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/david-urb%C3%A1nek-144253268/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Partners Financial Services a.s.",
      href: "https://www.partners.cz/",
      badges: [],
      location: "Remote",
      title: "M365 Software Support - Tester",
      logoUrl: "/partners.png",
      start: "únor 2025",
      end: "současnost",
      description:
        "Poskytování technické podpory pro Microsoft 365 aplikace. Aktivně pomáhám poradcům s migrací na M365 ekosystém. V této práci jsem vytvořil AI agenta na vytváření edukačních materiálů a instruktážních videí, které zefektivňují onboarding proces a zvyšují uživatelskou spokojenost. Dabing videí je nasledně proveden za pomoci text to speech modelu v Eleven Labs.",
    },
    {
      company: "Anect a.s.",
      badges: [],
      href: "https://anect.com",
      location: "Brno, Czech Republic",
      title: "SOC/NOC Specialist",
      logoUrl: "/anect.png",
      start: "květen 2023",
      end: "prosinec 2024",
      description:
        "Monitorování IT infrastruktury a sítí klientů v režimu 24/7 s použitím pokročilých monitorovacích nástrojů. Identifikace a řešení bezpečnostních incidentů a síťových problémů v reálném čase. Analýza logů a síťového provozu pro detekci anomálií a potenciálních hrozeb. Spolupráce s technickými týmy na rychlém řešení kritických situací a minimalizaci dopadů na provoz klientů.",
    },
  ],
  education: [
    {
      school: "Masarykova univerzita",
      href: "https://www.muni.cz/",
      degree: "Bakalářský studijní program",
      logoUrl: "/muni.jpg",
      start: "2023",
      end: "současnost",
    },
    {
      school: "Gymnázium Brno Křenová",
      href: "https://www.gymkren.cz/",
      degree: "Maturita",
      logoUrl: "/krenka.png",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Virtuio",
      href: "https://virtuio.cz",
      dates: "prosinec 2025 - současnost",
      active: false,
      description:
        "Webová aplikace pro rezervaci virtuální reality. Umožňuje klientům si pohodlně rezervovat typ headsetu a následně za něj zaplatit. Aplikace využívá Stripe API pro zpracování plateb a Supabase pro uložení dat rezervací. Aplikace je aktuálně ve vývojové fázi a ještě není v produkci.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
      ],
      links: [
        {
          icon: <Icons.github className="size-3" />,
          type: "GitHub",
          href: "https://github.com/david-urbanek/virtuio",
        },
        {
          icon: <Icons.globe className="size-3" />,
          type: "Live Demo",
          href: "https://virtuio.cz",
        },
      ],
      image: "/virtuio.png",
      video: "",
    },
    {
      title: "Projekt do Softwarového inženýrství",
      href: "/project/uml.pdf",
      dates: "září 2025 - prosinec 2025",
      active: false,
      description:
        "Týmový projekt v rámci univeryitního kurzu Softwarového inženýrství, zaměřený na modelování fintechové aplikace ve standardu UML.",
      technologies: ["UML"],
      links: [
        {
          icon: <Paperclip className="size-3" />,
          type: "PDF",
          href: "/project/uml.pdf",
        },
      ],
      image: "/uml.png",
      video: "",
    },
    {
      title: "Malíř Beda",
      href: "https://malirbeda.cz",
      dates: "květen 2025 - září 2025",
      active: false,
      description:
        "Webová aplikace pro malířskou firmu s portfoliem realizací a vizualní identitou. Součástí je i automatické emailové zprávy po zaslaní poptávky.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Resend",
      ],
      links: [
        {
          icon: <Icons.github className="size-3" />,
          type: "GitHub",
          href: "https://github.com/david-urbanek/malirbeda",
        },
        {
          icon: <Icons.globe className="size-3" />,
          type: "Live Demo",
          href: "https://malirbeda.cz",
        },
      ],
      image: "/malirbeda.png",
      video: "",
    },
    {
      title: "Projekt v Salesforce",
      href: "/project/salesforce.pdf",
      dates: "září 2025 - prosinec 2025",
      active: false,
      description:
        "Vývoj v Salesforce platformě dle businesových požadavků, včetně vytváření automatizací pomocí Flows a custom reportů, objektů.",
      technologies: ["Salesforce"],
      links: [
        {
          icon: <Paperclip className="size-3" />,
          type: "PDF",
          href: "/project/salesforce.pdf",
        },
      ],
      image: "/salesforce.png",
      video: "",
    },
    {
      title: "Vinylové podlahy",
      href: "#",
      dates: "leden 2025 - současnost",
      active: true,
      description:
        "Poptávkový web pro prodej vinylových podlah s dynamickým produktovým katalogem, košíkem a poptávkovým formulářem. Projekt je aktuálně ve vývojové fázi.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Sanity CMS",
        "Zustand",
      ],
      links: [],
      image: "/in-progress.png",
      video: "",
    },
  ],
  hackathons: [] as any[],
};
