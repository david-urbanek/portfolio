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
    "Ahoj, jsem David, je mi 22 let a momentálně studuji podnikovou informatiku na MUNI. Myslím si, že lidé by se měli více učit databáze než Excel :D",
  summary:
    "Momentálně studuji podnikovou informatiku na MUNI, kde jsem v posledním bakalářském semestru. Posledních dva roky se sám věnuji webovému vývoji, převážně ve frameworku Next.js. Momentálně nejvíce pracuji v Antigravity a rád bych se více zajímal o agentic-based development. Rád bych po dokončení bakaláře pokračoval na magisterském studiu v oboru softwarové inženýrství.",
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
    tel: "+420725448848",
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
      start: "leden 2021",
      end: "duben 2021",
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
        "Webová aplikace pro rezervaci virtuální reality. Umožňuje realitním kancelářím nahrávat 360° fotografie a vytvářet interaktivní virtuální prohlídky.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
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
      dates: "září 2024 - leden 2025",
      active: false,
      description:
        "Týmový projekt v rámci university, zaměřený na modelování fintechové aplikace ve s standardu UML.",
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
      href: "#",
      dates: "květen 2024 - září 2024",
      active: false,
      description:
        "Webové stránky pro malířskou firmu s portfoliem realizací a vizualní identitou.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
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
      title: "Projekt v Sales Force",
      href: "#",
      dates: "březen 2024 - červen 2024",
      active: false,
      description:
        "Customizace a vývoj v Salesforce platformě, včetně vytváření Apex tříd, Visualforce stránek a automatizace procesů pomocí Flow.",
      technologies: ["Salesforce", "Apex", "Visualforce", "SOQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Vinylové podlahy",
      href: "#",
      dates: "leden 2025 - současnost",
      active: true,
      description:
        "E-commerce řešení pro prodej vinylových podlah s pokročilým produktovým konfiguratorem, košíkem a integraciami platebních bran.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Stripe",
        "TailwindCSS",
        "Shadcn UI",
        "Sanity CMS",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
};
