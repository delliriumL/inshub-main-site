"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Cpu, Briefcase, Scale, Globe, TrendingUp, Handshake, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Правовой консалтинг",
    icon: ShieldCheck,
    items: [
      { name: "Налоговая безопасность", href: "/services/tax-security" },
      { name: "Структурирование бизнеса", href: "/services/business-structuring" },
      { name: "Антикризис и банкротство", href: "/services/crisis-management" },
      { name: "Уголовно-правовая защита", href: "/services/criminal-defense" },
    ],
  },
  {
    title: "Tech & Innovation",
    icon: Cpu,
    items: [
      { name: "Blockchain & DeFi", href: "/services/blockchain-defi" },
      { name: "AI Интеграция", href: "/services/ai-integration" },
      { name: "Цифровое и IT-право", href: "/services/digital-it-law" },
    ],
  },
  {
    title: "Корпоративное развитие",
    icon: TrendingUp,
    items: [
      { name: "Сделки M&A", href: "/services/m-and-a" },
      { name: "ВЭД контракты", href: "/services/foreign-economic" },
      { name: "Инвестиционные льготы", href: "/services/investment-incentives" },
    ],
  },
  {
    title: "Экспертиза",
    icon: Search,
    items: [
      { name: "Управленческий консалтинг", href: "/services/management-consulting" },
      { name: "Медиация и переговоры", href: "/services/negotiation-mediation" },
      { name: "Экономические экспертизы", href: "/services/economic-expertise" },
    ],
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-hub-light/80 backdrop-blur-md border-b border-hub-graphite/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-hub-black group">
          INSITE <span className="text-hub-emerald group-hover:text-hub-black transition-colors">HUB</span>
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/about" className={cn("px-4 py-2 text-sm font-medium hover:text-hub-emerald transition-colors", "bg-transparent", "font-bold", "uppercase", "tracking-widest", "text-[10px]")}>
                  О нас
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:text-hub-emerald transition-colors bg-transparent">
                  Услуги
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white border border-hub-graphite/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 w-[600px] lg:w-[1000px]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                      {services.map((category) => (
                        <div key={category.title} className="space-y-6">
                          <div className="flex items-center gap-3">
                            <category.icon className="text-hub-emerald" size={18} />
                            <h4 className="text-[10px] uppercase tracking-[0.3em] text-hub-emerald font-bold">
                              {category.title}
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-[13px] text-hub-black/60 hover:text-hub-emerald transition-colors block leading-tight font-medium hover:translate-x-1 transition-transform"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 pt-8 border-t border-hub-graphite/5 flex justify-between items-center">
                      <p className="text-[10px] text-hub-graphite/40 uppercase tracking-widest font-bold">
                        Более 15 направлений глубокой экспертизы
                      </p>
                      <Link href="/services" className="text-[10px] text-hub-emerald font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
                        Все услуги <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/cases" className={cn("px-4 py-2 text-sm font-medium hover:text-hub-emerald transition-colors", "bg-transparent", "font-bold", "uppercase", "tracking-widest", "text-[10px]")}>
                  Кейсы
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" className={cn("px-4 py-2 text-sm font-medium hover:text-hub-emerald transition-colors", "bg-transparent", "font-bold", "uppercase", "tracking-widest", "text-[10px]")}>
                  Блог
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/calculator" className="hidden lg:block">
            <Button variant="outline" className="border-hub-black border-2 text-hub-black hover:bg-hub-black hover:text-white rounded-none px-6 font-bold uppercase tracking-widest text-[10px] h-12 transition-all">
              Калькулятор
            </Button>
          </Link>
          <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none px-8 font-bold uppercase tracking-widest text-[10px] h-12 flex gap-2 border-none shadow-lg shadow-hub-emerald/20 transition-all active:scale-95">
            Обсудить проект
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </header>
  );
}
