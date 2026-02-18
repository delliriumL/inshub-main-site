"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Cpu, Scale, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, InvertCard } from "@/components/animations/GSAPWrapper";

const keyServices = [
  {
    title: "Налоговый консалтинг",
    desc: "Комплексная безопасность и оптимизация налоговой нагрузки для крупного бизнеса.",
    category: "LegalTech",
    href: "/services/tax-security"
  },
  {
    title: "Цифровое и IT-право",
    desc: "Правовое сопровождение IT-продуктов, защита интеллектуальной собственности и данных.",
    category: "Tech",
    href: "/services/digital-it-law"
  },
  {
    title: "AI Integration",
    desc: "Внедрение нейросетей в юридические и бизнес-процессы для кратного роста эффективности.",
    category: "Future",
    href: "/services/ai-integration"
  },
  {
    title: "M&A Сопровождение",
    desc: "Структурирование и защита сложных сделок по слиянию и поглощению компаний.",
    category: "Corporate",
    href: "/services/m-and-a"
  },
];

const principles = [
  { title: "Структурность", desc: "Мы не используем абстрактные советы. Каждое решение — это четкий алгоритм действий с прогнозируемым результатом." },
  { title: "Технологичность", desc: "Собственные AI-разработки позволяют нам анализировать массивы данных, недоступные классическим юристам." },
  { title: "Безопасность", desc: "Создаем многоуровневые системы защиты активов, устойчивые к изменениям в законодательстве и внешним вызовам." },
];

const casesPreview = [
  { title: "AI-аудит 5000+ договоров", result: "70%", metric: "экономия времени", client: "Global Retail" },
  { title: "Налоговое структурирование", result: "120 млн", metric: "₽ сэкономлено", client: "Heavy Industry" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-hub-light pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-hub-black max-w-4xl leading-[0.9] mb-8">
              ИНТЕЛЛЕКТУАЛЬНЫЙ <br />
              <span className="text-hub-emerald">КОНСАЛТИНГ</span> БУДУЩЕГО
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-hub-graphite/60 max-w-2xl mb-12 leading-relaxed">
              Insite Hub — лидер в области LegalTech консалтинга. Мы объединяем глубокую юридическую экспертизу с технологиями ИИ для решения задач вашего бизнеса.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none h-16 px-10 text-lg flex gap-3 border-none group">
                Обсудить проект
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/services" className="text-hub-black font-semibold flex gap-2 items-center hover:text-hub-emerald transition-colors">
                Все услуги <ChevronRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
        {/* Background Element */}
        <div className="absolute top-1/2 right-[-10%] translate-y-[-50%] w-[600px] h-[600px] bg-hub-emerald/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* 2. Направления деятельности */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12 text-left">
              <div className="space-y-6">
                <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Направления</h4>
                <h2 className="text-5xl md:text-7xl font-bold text-hub-black leading-none uppercase">СФЕРЫ <br />ЭКСПЕРТИЗЫ</h2>
              </div>
              <div className="flex flex-col items-end gap-6">
                <p className="text-hub-graphite/50 max-w-md text-lg leading-relaxed text-right">
                  Комплексные решения для бизнеса в новой цифровой реальности. От классического права до блокчейна.
                </p>
                <Link href="/services" className="text-hub-emerald font-bold flex items-center gap-2 group hover:opacity-70 transition-opacity">
                  СМОТРЕТЬ ВСЕ УСЛУГИ <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
            {keyServices.map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link href={service.href}>
                  <InvertCard className="h-[400px] border-none group/card">
                    <div className="space-y-8 flex flex-col h-full text-left">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-hub-emerald font-bold">
                        {service.category}
                      </span>
                      <h3 className="text-2xl font-bold leading-tight group-hover:text-white transition-colors">{service.title}</h3>
                      <p className="text-base text-hub-graphite/60 leading-relaxed group-hover:text-white transition-colors">
                        {service.desc}
                      </p>
                      <div className="accent-icon mt-auto flex justify-end">
                        <div className="w-12 h-12 border border-current flex items-center justify-center group-hover:text-white transition-colors">
                          <ArrowRight size={20} />
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

      {/* 3. О подходе (Манифест) */}
      <section className="py-40 bg-hub-light border-y border-hub-graphite/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 text-left">
              <Reveal direction="left">
                <div className="space-y-10">
                  <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Манифест</h4>
                  <h2 className="text-5xl md:text-6xl font-bold text-hub-black leading-tight">МЫ ОТРИЦАЕМ <br />ШАБЛОНЫ</h2>
                  <p className="text-xl text-hub-graphite/60 leading-relaxed">
                    Классический консалтинг слишком медленен для 2024 года. Мы внедряем структурный, алгоритмизированный подход, где юрист — это не просто советник, а архитектор систем безопасности.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:offset-1 space-y-16 text-left">
              {principles.map((item, i) => (
                <Reveal key={i} delay={i * 0.2}>
                  <div className="flex gap-10 group">
                    <span className="text-5xl font-bold text-hub-emerald/20 group-hover:text-hub-emerald transition-colors duration-500">0{i + 1}</span>
                    <div className="space-y-4 pt-2">
                      <h4 className="text-2xl font-bold text-hub-black">{item.title}</h4>
                      <p className="text-hub-graphite/50 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Кейсы */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex justify-between items-end mb-24">
              <h2 className="text-5xl md:text-7xl font-bold uppercase">КЕЙСЫ</h2>
              <Link href="/cases" className="text-hub-emerald font-bold flex gap-2 items-center hover:opacity-70 transition-opacity uppercase tracking-widest text-sm">
                Смотреть все <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {casesPreview.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link href={`/cases`}>
                  <InvertCard className="p-12 h-full flex flex-col justify-between group cursor-pointer border-none shadow-sm hover:shadow-2xl transition-all">
                    <div className="space-y-6 text-left">
                      <span className="text-xs uppercase tracking-widest text-hub-graphite/40 font-bold group-hover:text-white/40">{item.client}</span>
                      <h3 className="text-4xl font-bold group-hover:text-white transition-colors">{item.title}</h3>
                    </div>
                    <div className="mt-20 flex items-end justify-between border-t border-hub-graphite/10 pt-10 text-left">
                      <div>
                        <div className="text-5xl font-bold text-hub-emerald mb-2">{item.result}</div>
                        <div className="text-sm uppercase tracking-widest text-hub-graphite/50 font-bold group-hover:text-white/30">{item.metric}</div>
                      </div>
                      <div className="accent-icon">
                        <ArrowRight size={40} />
                      </div>
                    </div>
                  </InvertCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Блок экспертизы (Legal + AI) - Версия 1 */}
      <section className="bg-hub-deep-teal py-40 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight text-left uppercase">
                МЫ НЕ ПРОСТО <br />
                <span className="text-hub-emerald">ДАЕМ СОВЕТЫ</span>. <br />
                МЫ СТРОИМ СИСТЕМЫ.
              </h2>
            </Reveal>
            <div className="space-y-12 text-left">
              {[
                { title: "Глубокая аналитика", desc: "Каждое решение подкреплено данными и многоуровневой проверкой рисков." },
                { title: "Технологический стек", desc: "Используем AI-агентов для ускорения рутинных процессов в 10 раз." },
                { title: "Правовая броня", desc: "Создаем структуру, которая выдержит любые внешние и внутренние вызовы." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.2}>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-hub-emerald transition-colors shrink-0">
                      <CheckCircle2 className="text-hub-emerald" size={32} />
                    </div>
                    <div className="space-y-2 pt-2">
                      <h4 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h4>
                      <p className="text-white/40 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Финальный CTA */}
      <section className="py-40 container mx-auto px-6">
        <Reveal className="flex justify-center">
          <div className="max-w-5xl w-full space-y-12 text-center">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
              ГОТОВЫ К <br /> 
              <span className="text-hub-emerald">ТРАНСФОРМАЦИИ?</span>
            </h2>
            <p className="text-xl md:text-2xl text-hub-graphite/40 max-w-2xl mx-auto font-medium text-center">
              Оставьте заявку на первичную стратегическую сессию с нашими экспертами.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Button className="bg-hub-black text-white rounded-none h-20 px-16 text-xl border-none font-bold uppercase tracking-widest shadow-2xl hover:bg-hub-emerald transition-colors">
                Заполнить бриф
              </Button>
              <Button variant="outline" className="border-hub-black border-2 text-hub-black rounded-none h-20 px-16 text-xl font-bold uppercase tracking-widest hover:bg-hub-black hover:text-white transition-all">
                Написать в Telegram
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}


