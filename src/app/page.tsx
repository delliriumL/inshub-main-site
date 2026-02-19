"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Cpu, Scale, ShieldCheck, Zap, CheckCircle2, Quote, Star, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Reveal, InvertCard, FadeIn, ScaleIn, SlideIn, Stagger, Parallax } from "@/components/animations/GSAPWrapper";
import { Marquee } from "@/components/ui/Marquee";

const marqueeItems1 = [
  "Strategic Legal Architecture",
  "*AI Integration*",
  "Global Asset Protection",
  "M&A Advisory",
  "*Cyber Security*",
  "Venture Capital",
  "Regulatory Compliance",
  "*Digital Transformation*",
];

const marqueeItems2 = [
  "Tax Optimization",
  "*DeFi Legal*",
  "Intellectual Property",
  "Risk Management",
  "*NextGen Consulting*",
  "Corporate Strategy",
  "Blockchain Law",
  "*Future Proof*",
];

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
  {
    title: "Защита активов",
    desc: "Создание устойчивых структур для сохранения капитала в любых юрисдикциях.",
    category: "Wealth",
    href: "/services/asset-protection"
  },
  {
    title: "Крипто-комплаенс",
    desc: "Легализация криптоактивов, работа с биржами и международные переводы.",
    category: "Crypto",
    href: "/services/crypto-legal"
  },
  {
    title: "Судебные споры",
    desc: "Представительство в сложных арбитражных делах и корпоративных конфликтах.",
    category: "Litigation",
    href: "/services/dispute-resolution"
  },
  {
    title: "GR и Лоббизм",
    desc: "Взаимодействие с государственными органами и защита интересов на уровне регуляторов.",
    category: "Relations",
    href: "/services/gr"
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

const reviews = [
  {
    name: "Александр Коваль",
    role: "Legal Director, Global Retail",
    text: "Система AI-аудита от Insite Hub позволила нам сократить время проверки контрактов на 70%. Это не просто софт, это новый уровень правовой безопасности. Команда проанализировала более 5000 договоров и выявила критические риски, которые мы упускали годами. Рекомендации по автоматизации проверок сэкономили нам миллионы и предотвратили потенциальные судебные издержки.",
    result: "70%",
    metric: "Efficiency",
    slug: "ai-legal-dept",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Марина Соколовская",
    role: "CFO, Heavy Industry Group",
    text: "Благодаря налоговому структурированию мы легально сэкономили более 120 млн рублей за год. Профессионализм и технологичность на высшем уровне. Insite Hub разработала для нас комплексную систему защиты активов, которая включает международные холдинги, оптимизацию налоговой нагрузки и защиту от рейдерских захватов. Результат превзошел все наши ожидания.",
    result: "120 млн ₽",
    metric: "Tax Savings",
    slug: "tax-optimization",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Виктор Смирнов",
    role: "CEO, SaaS Startup",
    text: "Сопровождение M&A сделки прошло безупречно. Команда учла все IT-нюансы и защитила нашу интеллектуальную собственность. Due diligence выявила скрытые риски в лицензионных соглашениях, а юридическая структура сделки позволила максимизировать оценку компании. Без экспертизы Insite Hub мы бы потеряли значительную часть стоимости.",
    result: "$15M",
    metric: "Exit Value",
    slug: "ma-it-exit",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
  }
];

interface CounterProps {
  end: number;
  duration?: number;
  className?: string;
}

const Counter = ({ end, duration = 2, className }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className={className}>{count}</span>;
};

export default function HomePage() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActivePrinciple((prev) => (prev + 1) % principles.length);
    }, 3000); // Переключение каждые 3 секунды
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden bg-white">
      {/* 1. Hero - Редизайн: Темный, шрифтовой, с шейдерами */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hub-black">
        {/* Анимированный фон (Геометрия) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-hub-emerald/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2 animate-float" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-hub-cyan/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 animate-float [animation-delay:2s]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
          <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl">
            <SlideIn direction="left" delay={0}>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-12 bg-hub-emerald" />
                <span className="text-[12px] uppercase tracking-[0.5em] text-hub-emerald font-bold">Insite Hub — Deep LegalTech</span>
              </div>
            </SlideIn>

            <ScaleIn delay={0.1}>
              <h1 className="text-7xl md:text-[9rem] font-bold tracking-tight text-white mb-12 leading-[0.8] uppercase">
                STRATEGIC <br />
                <span className="text-hub-emerald">LEGAL</span> <br />
                ARCHITECTURE
              </h1>
            </ScaleIn>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end mt-12">
              <div className="md:col-span-8">
                <FadeIn delay={0.2}>
                  <p className="text-2xl md:text-4xl text-white/60 leading-tight mb-16 font-light max-w-3xl">
                    Мы проектируем <span className="text-white font-medium">интеллектуальные системы</span> защиты и управления, превращая правовые риски в стратегические преимущества.
                  </p>
                </FadeIn>

                <Reveal delay={0.3} direction="up">
                  <div className="flex flex-col sm:flex-row items-center gap-10">
                    <Link href="/contact">
                      <Button className="bg-hub-emerald hover:bg-white hover:text-hub-black text-hub-black rounded-none h-24 px-16 text-2xl font-bold uppercase tracking-widest transition-all duration-700 shadow-[0_0_50px_rgba(14,204,126,0.2)] group border-none">
                        Начать проект
                        <ArrowRight className="ml-4 group-hover:translate-x-3 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/about" className="group">
                      <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300">
                        <span className="text-sm uppercase tracking-widest font-medium">Узнать больше</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-4 hidden md:block">
                <SlideIn direction="right" delay={0.4}>
                  <div className="space-y-8 border-l border-white/10 pl-12 py-4">
                    <Stagger stagger={0.2}>
                      <div className="space-y-0 group">
                        <div className="flex items-baseline gap-1">
                          <Counter end={15} duration={2} className="text-5xl font-bold text-white tracking-tighter group-hover:text-hub-emerald transition-colors" />
                          <span className="text-5xl font-bold text-white tracking-tighter">+</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mt-0">Лет экспертизы</div>
                      </div>
                      <div className="space-y-0 group">
                        <div className="flex items-baseline gap-1">
                          <Counter end={1200} duration={2.5} className="text-5xl font-bold text-white tracking-tighter group-hover:text-hub-emerald transition-colors" />
                          <span className="text-5xl font-bold text-white tracking-tighter">M+</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mt-0">Активов защищено</div>
                      </div>
                      <div className="space-y-0 group">
                        <div className="flex items-baseline gap-1">
                          <Counter end={500} duration={2} className="text-5xl font-bold text-white tracking-tighter group-hover:text-hub-emerald transition-colors" />
                          <span className="text-5xl font-bold text-white tracking-tighter">+</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mt-0">Проектов завершено</div>
                      </div>
                    </Stagger>
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-white py-10 overflow-hidden flex flex-col gap-4">
        <Marquee items={marqueeItems1} direction="left" speed={60} />
        <Marquee items={marqueeItems2} direction="right" speed={60} />
      </section>

      {/* 2. Направления деятельности */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Декоративный текст на фоне */}
        <Parallax speed={0.3}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-hub-graphite/[0.015] select-none pointer-events-none uppercase tracking-tighter z-0">
            SOLUTIONS
          </div>
        </Parallax>
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn delay={0}>
            <div className="text-center mb-24 space-y-6">
              <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Экспертиза</h4>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-hub-black mb-12 leading-[0.85] uppercase">СФЕРЫ <br /><span className="text-hub-emerald">ЭКСПЕРТИЗЫ</span></h2>
              <p className="text-xl text-hub-graphite/60 max-w-3xl mx-auto leading-relaxed">
                Мы объединяем фундаментальное право с технологиями завтрашнего дня, чтобы обеспечить кратный рост и безопасность вашего бизнеса.
              </p>
              <div className="pt-8">
                <Link href="/services" className="inline-flex items-center gap-3 text-hub-emerald hover:text-hub-black transition-colors duration-300 group">
                  <span className="text-sm uppercase tracking-widest font-medium">Все услуги</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>

          <Stagger stagger={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
              {keyServices.map((service, i) => (
                <ScaleIn key={i} delay={i * 0.05}>
                  <Link href={service.href}>
                    <div className="h-[350px] bg-white hover:bg-hub-black transition-all duration-700 group p-10 flex flex-col justify-between relative overflow-hidden border-none">
                      <div className="absolute -inset-full bg-gradient-to-tr from-hub-emerald/5 to-transparent translate-x-[-100%] translate-y-[100%] group-hover:translate-x-[0%] group-hover:translate-y-[0%] transition-transform duration-1000 ease-in-out" />
                      
                      <div className="space-y-6 relative z-10">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-hub-emerald font-bold">
                          {service.category}
                        </span>
                        <h3 className="text-2xl font-bold leading-tight group-hover:text-white transition-colors uppercase tracking-tight">{service.title}</h3>
                        <p className="text-base text-hub-graphite/40 leading-relaxed group-hover:text-white/40 transition-colors font-light">
                          {service.desc}
                        </p>
                      </div>

                      <div className="relative z-10 flex justify-end">
                        <div className="w-12 h-12 border border-hub-graphite/10 flex items-center justify-center group-hover:border-hub-emerald group-hover:text-hub-emerald transition-all duration-500">
                          <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScaleIn>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* 3. О подходе (Манифест) */}
      <section className="py-40 bg-hub-light border-y border-hub-graphite/5 relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 border border-hub-emerald/5 rounded-full pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 text-left">
              <SlideIn direction="left" delay={0}>
                <div className="space-y-10">
                  <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Манифест</h4>
                  <h2 className="text-5xl md:text-6xl font-bold text-hub-black leading-tight">МЫ ОТРИЦАЕМ <br />ШАБЛОНЫ</h2>
                  <p className="text-xl text-hub-graphite/60 leading-relaxed">
                    Классический консалтинг слишком медленен для 2024 года. Мы внедряем структурный, алгоритмизированный подход, где юрист — это не просто советник, а архитектор систем безопасности.
                  </p>
                </div>
              </SlideIn>
            </div>
            <div className="lg:col-span-6 lg:offset-1 space-y-16 text-left">
              <Stagger stagger={0.2}>
                {principles.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.2}>
                    <div 
                      className="flex gap-10 group cursor-pointer"
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setActivePrinciple(i);
                      }}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className={`text-5xl font-bold transition-all duration-700 ${
                        activePrinciple === i 
                          ? "text-hub-emerald scale-125 drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]" 
                          : "text-hub-emerald/20 group-hover:text-hub-emerald/40 group-hover:scale-110"
                      }`}>
                        0{i + 1}
                      </span>
                      <div className={`space-y-4 pt-2 transition-all duration-700 ${
                        activePrinciple === i ? "translate-x-4" : "group-hover:translate-x-2"
                      }`}>
                        <h4 className={`text-2xl font-bold transition-colors duration-700 ${
                          activePrinciple === i ? "text-hub-emerald" : "text-hub-black group-hover:text-hub-emerald/60"
                        }`}>
                          {item.title}
                        </h4>
                        <p className={`text-lg leading-relaxed transition-colors duration-700 ${
                          activePrinciple === i ? "text-hub-graphite/80" : "text-hub-graphite/50"
                        }`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Что говорят о нас (Отзывы-крутилка) */}
      <section className="py-40 bg-white text-hub-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <SlideIn direction="left" delay={0}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="space-y-6">
                <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Отзывы</h4>
                <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter">ЧТО ГОВОРЯТ <br /><span className="text-hub-emerald">ЛЮДИ</span></h2>
              </div>
              <div className="text-right hidden md:block">
                <div className="text-[10rem] font-bold text-hub-graphite/[0.03] select-none leading-none">TRUST</div>
              </div>
            </div>
          </SlideIn>

          <FadeIn delay={0.2}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 6000 }}
              pagination={{ clickable: true }}
              className="pb-20 reviews-swiper"
            >
              {reviews.map((review, i) => (
                <SwiperSlide key={i}>
                  <ScaleIn delay={i * 0.1}>
                    <div className="border border-hub-graphite/10 rounded-lg overflow-hidden min-h-[400px] bg-white">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch h-full">
                        <div className="lg:col-span-5 relative group overflow-hidden bg-hub-light">
                          <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        <div className="lg:col-span-7 flex flex-col justify-center p-8 space-y-8 bg-hub-light">
                          <div className="space-y-4">
                            <Quote className="text-hub-emerald" size={32} />
                            <p className="text-2xl text-hub-graphite/70 leading-relaxed font-light line-clamp-4">
                              {review.text}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-xl font-bold text-hub-black">{review.name}</h4>
                              <p className="text-hub-graphite/50">{review.role}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-hub-emerald">{review.result}</div>
                              <div className="text-sm text-hub-graphite/40 uppercase tracking-widest">{review.metric}</div>
                            </div>
                          </div>
                          <div className="pt-4">
                            <Link href={`/cases/${review.slug}`} className="inline-flex items-center gap-3 text-hub-emerald hover:text-hub-black transition-colors duration-300 group">
                              <span className="text-sm uppercase tracking-widest font-medium">Смотреть кейс</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeIn>
        </div>
      </section>

      {/* 5. Блок экспертизы (Legal + AI) - Версия 1 */}
      <section className="bg-hub-deep-teal py-40 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <SlideIn direction="left" delay={0}>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight text-left uppercase">
                МЫ НЕ ПРОСТО <br />
                <span className="text-hub-emerald">ДАЕМ СОВЕТЫ</span>. <br />
                МЫ СТРОИМ СИСТЕМЫ.
              </h2>
            </SlideIn>
            <div className="space-y-12 text-left">
              <Stagger stagger={0.2}>
                {[
                  { title: "Глубокая аналитика", desc: "Каждое решение подкреплено данными и многоуровневой проверкой рисков." },
                  { title: "Технологический стек", desc: "Используем AI-агентов для ускорения рутинных процессов в 10 раз." },
                  { title: "Правовая броня", desc: "Создаем структуру, которая выдержит любые внешние и внутренние вызовы." },
                ].map((item, i) => (
                  <ScaleIn key={i} delay={i * 0.1}>
                    <div className="flex gap-8 group">
                      <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-hub-emerald transition-colors shrink-0">
                        <CheckCircle2 className="text-hub-emerald" size={32} />
                      </div>
                      <div className="space-y-2 pt-2">
                        <h4 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h4>
                        <p className="text-white/40 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Финальный CTA */}
      <section className="py-40 container mx-auto px-6">
        <ScaleIn delay={0} className="flex justify-center">
          <div className="max-w-5xl w-full space-y-12 text-center">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
              ГОТОВЫ К <br />
              <span className="text-hub-emerald">ТРАНСФОРМАЦИИ?</span>
            </h2>
            <p className="text-2xl text-hub-graphite/40 leading-relaxed max-w-3xl mx-auto">
              Оставьте заявку на первичную стратегическую сессию с нашими экспертами.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-hub-black text-white hover:bg-hub-emerald transition-all duration-500 rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest shadow-2xl">
                  Заполнить бриф
                </Button>
              </Link>
              <Link href="https://t.me/insitehub" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-hub-black text-hub-black hover:bg-hub-black hover:text-white transition-all duration-500 rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest bg-transparent">
                  Написать в Telegram
                </Button>
              </Link>
            </div>
          </div>
        </ScaleIn>
      </section>
    </div>
  );
}
