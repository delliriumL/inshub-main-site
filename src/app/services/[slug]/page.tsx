"use client";

import { useState, useEffect } from "react";
import { Reveal, InvertCard, FadeIn, ScaleIn, SlideIn, Stagger, Parallax } from "@/components/animations/GSAPWrapper";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Cpu, Scale, Target, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";

const marqueeItems = [
  "Strategic Legal Architecture",
  "*AI Integration*",
  "Global Asset Protection",
  "M&A Advisory",
  "*Cyber Security*",
  "Venture Capital",
  "Regulatory Compliance",
  "*Digital Transformation*",
];

interface ServicePageProps {
  params: { slug: string };
}

export default function ServiceSinglePage({ params }: ServicePageProps) {
  // В реальном приложении данные подгружаются по slug
  const service = {
    title: "Налоговый консалтинг и безопасность",
    subtitle: "Комплексная защита активов и оптимизация налоговых обязательств в условиях меняющегося законодательства.",
    forWhom: [
      { title: "Собственники бизнеса", desc: "Защита личного капитала и владельческий контроль над активами." },
      { title: "Финансовые директора", desc: "Минимизация налоговых рисков и автоматизация отчетности." },
      { title: "IT-компании", desc: "Применение налоговых льгот и работа в специальных экономических зонах." },
    ],
    features: [
      { title: "Налоговый аудит", desc: "Выявление переплат и скрытых рисков в текущей структуре." },
      { title: "Международное планирование", desc: "Работа с иностранными юрисдикциями и КИК." },
      { title: "Сопровождение проверок", desc: "Полная защита интересов при взаимодействии с ФНС." },
      { title: "AI-мониторинг", desc: "Система раннего предупреждения о налоговых рисках." },
    ],
    process: [
      { step: "01", title: "Экспресс-анализ", desc: "Бесплатный первичный аудит основных показателей." },
      { step: "02", title: "Глубокое погружение", desc: "Детальное изучение всех цепочек и контрагентов." },
      { step: "03", title: "Разработка стратегии", desc: "Формирование дорожной карты оптимизации." },
      { step: "04", title: "Реализация", desc: "Внедрение изменений и постановка на мониторинг." },
    ],
    faqs: [
      { q: "Как AI помогает в налоговом консалтинге?", a: "Мы используем нейросети для анализа огромных массивов судебной практики и выявления паттернов, которые могут указывать на потенциальные риски до того, как они станут критическими." },
      { q: "Безопасно ли использовать ваши методы оптимизации?", a: "Мы работаем исключительно в правовом поле, используя законные преференции, льготы и структурные изменения, которые выдерживают любую проверку." },
    ],
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
  };

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col gap-0 pb-0 overflow-x-hidden bg-white">
      {/* 1. Hero - Style from About Page */}
      <section className="bg-hub-graphite text-white pt-48 pb-64 relative overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <Parallax speed={-0.2} className="h-full w-full">
            <div className="absolute inset-0 bg-hub-graphite/80 z-10" />
            <img 
              src={service.heroImage} 
              alt={service.title}
              className="w-full h-full object-cover scale-110"
            />
          </Parallax>
        </div>

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-10" />
        <Parallax speed={0.3}>
          <div 
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none transition-transform duration-300 ease-out" 
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          />
          <div 
            className="absolute -left-32 bottom-20 w-96 h-96 bg-hub-emerald/5 rounded-full blur-[120px] transition-transform duration-500 ease-out" 
            style={{ transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)` }}
          />
        </Parallax>
        
        <div className="container mx-auto px-6 relative z-10">
          <SlideIn direction="left" delay={0}>
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Услуга</span>
              <div className="h-px w-16 bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Solutions</span>
            </div>
          </SlideIn>
          
          <ScaleIn delay={0.1}>
            <h1 className="text-6xl md:text-[7rem] font-bold tracking-tight mb-16 leading-[0.85] uppercase max-w-5xl">
              {service.title}
            </h1>
          </ScaleIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-3xl text-white/60 max-w-3xl leading-relaxed mb-16 font-light">
              {service.subtitle}
            </p>
          </FadeIn>
          
          <SlideIn direction="left" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest border-none flex gap-4 group">
                Обсудить проект
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-white/20 text-white hover:bg-white hover:text-hub-black rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest bg-transparent transition-all duration-500">
                Скачать презентацию
              </Button>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* 2. Для кого - Architecture from Achievements */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Animated Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-6 md:grid-cols-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border-[0.5px] border-hub-black aspect-square animate-pulse" 
                style={{ animationDelay: `${i * 0.05}s`, animationDuration: '4s' }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <SlideIn direction="left">
                <div className="space-y-8 sticky top-40">
                  <h4 className="text-[12px] uppercase tracking-[0.5em] text-hub-emerald font-bold">Целевая аудитория</h4>
                  <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-tight text-hub-black">
                    ДЛЯ ТЕХ, КТО <br /><span className="text-hub-emerald">СТРОИТ БУДУЩЕЕ</span>
                  </h2>
                  <div className="w-24 h-px bg-hub-emerald" />
                </div>
              </SlideIn>
            </div>
            
            <div className="lg:col-span-7 space-y-px bg-hub-graphite/10 border border-hub-graphite/10">
              <Stagger stagger={0.1}>
                {service.forWhom.map((item, i) => (
                  <div key={i} className="bg-white p-12 md:p-16 hover:bg-hub-light transition-all duration-700 group flex gap-10">
                    <div className="w-16 h-16 bg-hub-emerald/5 flex items-center justify-center shrink-0 group-hover:bg-hub-emerald group-hover:text-white transition-all duration-700">
                      <Target size={28} />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-hub-black uppercase tracking-tight">{item.title}</h4>
                      <p className="text-lg text-hub-graphite/60 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Marquee Separation */}
      <Marquee items={marqueeItems} direction="left" speed={40} className="bg-hub-light border-y border-hub-graphite/10" />

      {/* 3. Особенности - Grid from Experts/Team */}
      <section className="py-0 bg-hub-light overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hub-graphite/10 border-y border-hub-graphite/10">
          {service.features.map((feature, i) => (
            <ScaleIn key={i} delay={i * 0.1}>
              <div className="bg-white p-12 md:p-16 space-y-8 group hover:bg-hub-black transition-all duration-700 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-hub-emerald/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-12 h-12 border border-hub-emerald/20 flex items-center justify-center text-hub-emerald group-hover:bg-hub-emerald group-hover:text-white transition-all duration-700">
                    <Cpu size={20} className="group-hover:rotate-[360deg] transition-transform duration-1000" />
                  </div>
                  <span className="text-[10px] font-mono text-hub-graphite/20 group-hover:text-white/20">0{i + 1}</span>
                </div>
                <div className="relative z-10 space-y-4 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <h4 className="text-xl font-bold uppercase tracking-tight text-hub-black group-hover:text-white transition-colors">{feature.title}</h4>
                  <p className="text-sm text-hub-graphite/50 group-hover:text-white/40 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>

      {/* 4. Этапы - Style from Manifesto */}
      <section className="py-40 bg-hub-graphite text-white overflow-hidden relative" style={{backgroundColor: '#0f2f36'}}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5">
              <SlideIn direction="left">
                <div className="space-y-12 sticky top-40">
                  <div className="space-y-6">
                    <h4 className="text-[12px] uppercase tracking-[0.5em] text-hub-emerald font-bold">Workflow</h4>
                    <h2 className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tighter uppercase">
                      ПУТЬ К <br />
                      <span className="text-hub-emerald">РЕЗУЛЬТАТУ</span>
                    </h2>
                  </div>
                  <p className="text-xl text-white/40 leading-relaxed font-light max-w-md">
                    Прозрачный алгоритм реализации вашего проекта: от первичного аудита до финальной защиты.
                  </p>
                  <div className="w-32 h-px bg-hub-emerald" />
                </div>
              </SlideIn>
            </div>
            
            <div className="lg:col-span-7 space-y-px bg-white/5 border border-white/10">
              <Stagger stagger={0.15}>
                {service.process.map((item, i) => (
                  <div key={i} className="p-12 hover:bg-white/[0.03] transition-all duration-700 group relative overflow-hidden border-b border-white/10 last:border-0 cursor-default">
                    <div className="absolute top-0 left-0 w-1 h-0 bg-hub-emerald group-hover:h-full transition-all duration-700" />
                    <div className="flex justify-between items-start mb-10">
                      <span className="text-hub-emerald font-mono text-xl tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">{item.step}</span>
                      <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 text-white/20 group-hover:text-hub-emerald transition-all duration-700" />
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase group-hover:text-hub-emerald transition-colors duration-500">{item.title}</h4>
                      <p className="text-white/40 text-lg font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500 max-w-2xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ - Strict Minimal Style */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="w-full md:w-1/3">
              <SlideIn direction="left">
                <div className="space-y-6">
                  <h4 className="text-[12px] uppercase tracking-[0.5em] text-hub-emerald font-bold">FAQ</h4>
                  <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-hub-black">ЧАСТЫЕ <br />ВОПРОСЫ</h2>
                </div>
              </SlideIn>
            </div>
            <div className="w-full md:w-2/3">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {service.faqs.map((faq, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <AccordionItem value={`item-${i}`} className="border border-hub-graphite/10 px-0 rounded-none data-[state=open]:border-hub-emerald transition-colors">
                      <AccordionTrigger className="hover:no-underline py-8 px-8">
                        <span className="text-xl md:text-2xl font-bold text-hub-black tracking-tight text-left uppercase">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-12 px-8">
                        <p className="text-lg text-hub-graphite/60 leading-relaxed font-light">{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </FadeIn>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Финальный CTA - Style from About Page */}
      <section className="py-60 bg-hub-light relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScaleIn delay={0}>
            <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-6xl md:text-[5.5rem] font-bold leading-none uppercase tracking-tighter text-hub-black">
                ГОТОВЫ К <br />
                <span className="text-hub-emerald">БЕЗОПАСНОМУ РОСТУ?</span>
              </h2>
              <p className="text-hub-graphite/40 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed uppercase tracking-widest text-[14px]">
                Персональная консультация с экспертом Insite Hub
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-hub-black text-white hover:bg-hub-emerald transition-all duration-500 rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest">
                    Начать проект
                  </Button>
                </Link>
                <Link href="https://t.me/insitehub" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-hub-black text-hub-black hover:bg-hub-black hover:text-white transition-all duration-500 rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest bg-transparent">
                    Связаться в Telegram
                  </Button>
                </Link>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
