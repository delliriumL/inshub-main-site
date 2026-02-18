"use client";

import { useState } from "react";
import { Reveal, InvertCard } from "@/components/animations/GSAPWrapper";
import { ArrowRight, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = ["Все", "LegalTech", "Tax", "Blockchain", "M&A"];

const cases = [
  {
    title: "AI-трансформация юридического департамента",
    client: "Крупный ритейлер",
    result: "70%",
    metric: "сокращение времени",
    category: "LegalTech",
    slug: "ai-legal-dept",
    desc: "Автоматизация проверки типовых договоров и внедрение системы интеллектуального поиска по базе знаний."
  },
  {
    title: "Налоговая оптимизация холдинга",
    client: "Производственная группа",
    result: "120 млн",
    metric: "₽ в год сэкономлено",
    category: "Tax",
    slug: "tax-optimization",
    desc: "Реструктуризация внутренних потоков и применение льгот для НИОКР в рамках промышленного кластера."
  },
  {
    title: "Защита активов в DeFi",
    client: "Крипто-фонд",
    result: "$5M",
    metric: "возвращено средств",
    category: "Blockchain",
    slug: "defi-protection",
    desc: "Правовое сопровождение процесса возврата заблокированных активов через международный арбитраж."
  },
  {
    title: "M&A сделка в IT-секторе",
    client: "SaaS Стартап",
    result: "$15M",
    metric: "сумма экзита",
    category: "M&A",
    slug: "ma-it-exit",
    desc: "Полное юридическое сопровождение продажи компании стратегическому инвестору с учетом интеллектуальных прав."
  },
];

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredCases = activeCategory === "Все" 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  return (
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="bg-hub-light py-40 relative border-b border-hub-graphite/5 text-left">
        <div className="container mx-auto px-6">
          <Reveal>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">Портфолио</h4>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-hub-black mb-12 leading-[0.85]">РЕАЛЬНЫЕ <br /><span className="text-hub-emerald">РЕЗУЛЬТАТЫ</span></h1>
            <p className="text-xl md:text-2xl text-hub-graphite/60 max-w-2xl leading-relaxed">
              Мы не просто консультируем — мы внедряем решения, которые приносят измеримую пользу бизнесу.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Фильтрация */}
      <section className="py-12 bg-white border-b border-hub-graphite/10 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="flex items-center gap-4 text-hub-graphite/40">
              <Filter size={18} />
              <span className="text-xs uppercase font-bold tracking-widest">Фильтр по категориям:</span>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeCategory === cat ? 'text-hub-emerald' : 'text-hub-graphite/40 hover:text-hub-black'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Сетка кейсов */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
            {filteredCases.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.1}>
                <Link href={`/cases/${item.slug}`}>
                  <InvertCard className="h-full flex flex-col justify-between group p-12 border-none">
                    <div className="space-y-10 text-left">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase tracking-widest text-hub-emerald font-bold border border-hub-emerald px-3 py-1">
                          {item.category}
                        </span>
                        <span className="text-sm text-hub-graphite/40 font-medium group-hover:text-white/40">{item.client}</span>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-4xl font-bold leading-tight group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-lg text-hub-graphite/60 leading-relaxed group-hover:text-white/60">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="mt-20 pt-10 border-t border-hub-graphite/10 flex items-end justify-between text-left">
                      <div className="space-y-2">
                        <p className="text-[10px] uppercase tracking-widest text-hub-graphite/50 font-bold group-hover:text-white/30">Результат</p>
                        <div className="flex items-baseline gap-2">
                           <p className="text-4xl md:text-5xl font-bold text-hub-emerald tracking-tighter">{item.result}</p>
                           <p className="text-sm uppercase tracking-widest text-hub-graphite/50 font-bold group-hover:text-white/30">{item.metric}</p>
                        </div>
                      </div>
                      <div className="accent-icon">
                        <div className="w-16 h-16 border border-current flex items-center justify-center transition-transform group-hover:scale-110">
                          <ArrowRight size={32} />
                        </div>
                      </div>
                    </div>
                  </InvertCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-40 container mx-auto px-6">
        <Reveal>
          <div className="bg-hub-deep-teal p-16 md:p-24 text-white text-center space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <h2 className="text-4xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight relative z-10 uppercase">ХОТИТЕ ТАКОЙ ЖЕ <br /><span className="text-hub-emerald">РЕЗУЛЬТАТ?</span></h2>
            <p className="text-xl md:text-2xl text-white/50 max-w-xl mx-auto relative z-10 leading-relaxed">Давайте обсудим вашу задачу и построим эффективную стратегию решения.</p>
            <div className="pt-10 relative z-10">
              <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none h-20 px-16 text-xl border-none font-bold tracking-tight">
                Оставить заявку
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

