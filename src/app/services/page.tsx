"use client";

import { Reveal, InvertCard } from "@/components/animations/GSAPWrapper";
import { ArrowRight, ShieldCheck, Cpu, Briefcase, Scale, Globe, TrendingUp, Handshake, Search, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const allServices = [
  {
    title: "Правовой консалтинг",
    items: [
      { name: "Налоговый консалтинг и безопасность", href: "/services/tax-security", icon: ShieldCheck, desc: "Оптимизация налоговой нагрузки и защита от претензий регуляторов." },
      { name: "Структурирование бизнеса", href: "/services/business-structuring", icon: Briefcase, desc: "Создание устойчивых корпоративных структур для владельческого контроля." },
      { name: "Антикризисное управление и банкротство", href: "/services/crisis-management", icon: Scale, desc: "Правовая поддержка в сложных финансовых ситуациях." },
      { name: "Уголовно-правовая защита", href: "/services/criminal-defense", icon: ShieldCheck, desc: "Защита бизнеса и его владельцев в рамках уголовного судопроизводства." },
    ],
  },
  {
    title: "Tech & Innovation",
    items: [
      { name: "Blockchain, DeFi и Цифровые активы", href: "/services/blockchain-defi", icon: Globe, desc: "Юридическое сопровождение крипто-проектов и токенизации активов." },
      { name: "Использование нейросетей в процессах", href: "/services/ai-integration", icon: Cpu, desc: "Внедрение и правовая настройка AI-агентов в бизнес-процессы." },
      { name: "Цифровое и IT-право", href: "/services/digital-it-law", icon: Cpu, desc: "Сопровождение IT-компаний, защита ПО и интеллектуальной собственности." },
    ],
  },
  {
    title: "Корпоративное сопровождение",
    items: [
      { name: "Сопровождение сделок M&A", href: "/services/m-and-a", icon: Handshake, desc: "Полный цикл сопровождения сделок по покупке и продаже бизнеса." },
      { name: "Внешнеэкономическая деятельность (ВЭД)", href: "/services/foreign-economic", icon: Globe, desc: "Структурирование международных контрактов и расчетов." },
      { name: "Инвестиционные льготы", href: "/services/investment-incentives", icon: TrendingUp, desc: "Получение господдержки и налоговых преференций для инвестпроектов." },
    ],
  },
  {
    title: "Стратегия и экспертиза",
    items: [
      { name: "Управленческий консалтинг и коучинг", href: "/services/management-consulting", icon: Briefcase, desc: "Повышение эффективности управления и развитие лидерских компетенций." },
      { name: "Переговоры и медиация", href: "/services/negotiation-mediation", icon: Handshake, desc: "Досудебное урегулирование споров и фасилитация сложных переговоров." },
      { name: "Оценка и экономические экспертизы", href: "/services/economic-expertise", icon: Search, desc: "Независимая оценка активов и подготовка экспертных заключений." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="bg-hub-light py-40 relative border-b border-hub-graphite/5">
        <div className="container mx-auto px-6">
          <Reveal>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8 text-left">Каталог решений</h4>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-hub-black mb-12 leading-[0.85] text-left">НАШИ <br /><span className="text-hub-emerald">УСЛУГИ</span></h1>
            <p className="text-xl md:text-2xl text-hub-graphite/60 max-w-2xl leading-relaxed text-left">
              Мы объединяем фундаментальное право с технологиями завтрашнего дня, чтобы обеспечить кратный рост и безопасность вашего бизнеса.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Категории услуг */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 space-y-32">
          {allServices.map((category, i) => (
            <div key={i} className="space-y-16">
              <Reveal>
                <div className="flex items-center gap-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-hub-black whitespace-nowrap">{category.title}</h2>
                  <div className="h-px bg-hub-graphite/10 flex-grow" />
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
                {category.items.map((service, j) => (
                  <Reveal key={j} delay={j * 0.1}>
                    <Link href={service.href}>
                      <InvertCard className="h-full border-none p-12">
                        <div className="flex flex-col h-full text-left space-y-8">
                          <service.icon className="text-hub-emerald" size={48} />
                          <div className="space-y-4">
                            <h3 className="text-2xl font-bold leading-tight">{service.name}</h3>
                            <p className="text-hub-graphite/60 text-lg leading-relaxed group-hover:text-white/70">{service.desc}</p>
                          </div>
                          <div className="accent-icon mt-auto flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                            Подробнее <ArrowRight size={20} />
                          </div>
                        </div>
                      </InvertCard>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Как мы работаем */}
      <section className="py-40 bg-hub-deep-teal text-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-24 space-y-6">
              <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Процесс</h4>
              <h2 className="text-5xl md:text-7xl font-bold">АЛГОРИТМ УСПЕХА</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { step: "01", title: "Сверхглубокий аудит", desc: "Анализируем не только документы, но и скрытые технологические и финансовые потоки." },
              { step: "02", title: "Прототипирование", desc: "Создаем цифровую модель правового решения и тестируем ее на устойчивость." },
              { step: "03", title: "Имплементация", desc: "Развертываем решение и настраиваем автоматизированные системы контроля." },
              { step: "04", title: "Масштабирование", desc: "Адаптируем структуру под рост бизнеса и новые рыночные условия." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="space-y-8 text-left">
                  <span className="text-6xl font-bold text-hub-emerald/20">0{i + 1}</span>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold">{item.title}</h4>
                    <p className="text-white/40 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Статистика */}
      <section className="py-32 bg-hub-light">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-16 uppercase">РЕЗУЛЬТАТЫ В ЦИФРАХ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: "Сэкономлено налогов", value: "1.2 млрд ₽" },
                { label: "Сделок M&A на сумму", value: "$450 млн" },
                { label: "AI-автоматизация", value: "в 12 раз быстрее" },
              ].map((stat, i) => (
                <div key={i} className="p-12 bg-white border border-hub-graphite/10 space-y-4">
                  <div className="text-4xl md:text-5xl font-bold text-hub-emerald tracking-tighter">{stat.value}</div>
                  <div className="text-sm uppercase tracking-widest text-hub-graphite/40 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-40 container mx-auto px-6">
        <Reveal>
          <div className="max-w-5xl mx-auto bg-hub-black text-white p-16 md:p-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-hub-emerald" />
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">НУЖНО ИНДИВИДУАЛЬНОЕ <br /><span className="text-hub-emerald">РЕШЕНИЕ?</span></h2>
            <p className="text-xl text-white/40 max-w-2xl">Оставьте заявку, и мы подготовим для вас персональную стратегию трансформации и защиты.</p>
            <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none h-20 px-16 text-xl border-none">
              Обсудить задачу
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

