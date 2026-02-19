"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Cpu, Briefcase, Scale, Globe, TrendingUp, Handshake, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-hub-light/80 backdrop-blur-md border-b border-hub-graphite/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-hub-black group shrink-0">
          INSITE <span className="text-hub-emerald group-hover:text-hub-black transition-colors">HUB</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="gap-0 flex items-center">
              <NavigationMenuItem>
                <Link href="/about" className={cn("px-4 py-2 flex items-center h-10 text-[10px] font-bold uppercase tracking-widest hover:text-hub-emerald transition-colors bg-transparent")}>
                  О нас
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 h-10 text-[10px] font-bold uppercase tracking-widest hover:text-hub-emerald transition-colors bg-transparent border-none shadow-none focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
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
                <Link href="/cases" className={cn("px-4 py-2 flex items-center h-10 text-[10px] font-bold uppercase tracking-widest hover:text-hub-emerald transition-colors bg-transparent")}>
                  Кейсы
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" className={cn("px-4 py-2 flex items-center h-10 text-[10px] font-bold uppercase tracking-widest hover:text-hub-emerald transition-colors bg-transparent")}>
                  Блог
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <Link href="/calculator" className="hidden lg:block">
            <Button variant="outline" className="border-hub-black text-hub-black hover:bg-hub-black hover:text-white rounded-none border-2 px-6">
              Калькулятор
            </Button>
          </Link>
          <Link href="/contact" className="hidden sm:block">
            <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none px-6 flex gap-2 border-none">
              Обсудить проект
              <ArrowRight size={16} />
            </Button>
          </Link>

          {/* Mobile Menu (Burger) */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-hub-black border-none bg-transparent hover:bg-transparent p-0">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-white border-l border-hub-graphite/10 p-0 overflow-y-auto">
                <SheetHeader className="p-6 border-b border-hub-graphite/5 flex flex-row items-center justify-between space-y-0">
                  <SheetTitle className="text-xl font-bold tracking-tighter">
                    INSITE <span className="text-hub-emerald">HUB</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-6 space-y-8">
                  <Link href="/about" className="text-2xl font-bold uppercase tracking-tighter hover:text-hub-emerald transition-colors" onClick={() => setIsOpen(false)}>О нас</Link>
                  
                  <div className="space-y-6">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Услуги</h4>
                    <div className="grid grid-cols-1 gap-6">
                      {services.map((category) => (
                        <div key={category.title} className="space-y-4">
                          <div className="flex items-center gap-2 text-hub-black font-bold text-sm">
                            <category.icon size={16} className="text-hub-emerald" />
                            {category.title}
                          </div>
                          <ul className="space-y-3 pl-6 border-l border-hub-graphite/5">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} className="text-sm text-hub-black/60 hover:text-hub-emerald block" onClick={() => setIsOpen(false)}>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/cases" className="text-2xl font-bold uppercase tracking-tighter hover:text-hub-emerald transition-colors" onClick={() => setIsOpen(false)}>Кейсы</Link>
                  <Link href="/blog" className="text-2xl font-bold uppercase tracking-tighter hover:text-hub-emerald transition-colors" onClick={() => setIsOpen(false)}>Блог</Link>
                  <Link href="/calculator" className="text-2xl font-bold uppercase tracking-tighter hover:text-hub-emerald transition-colors" onClick={() => setIsOpen(false)}>Калькулятор</Link>
                  
                  <div className="pt-8">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-hub-emerald hover:opacity-90 text-white rounded-none h-16 text-lg font-bold uppercase tracking-widest border-none">
                        Обсудить проект
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
