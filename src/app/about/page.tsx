"use client";

import { Reveal, FadeIn, ScaleIn, SlideIn, Parallax, Stagger } from "@/components/animations/GSAPWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Shield, Zap, Cpu, Scale, Globe } from "lucide-react";
import Link from "next/link";

const team = [
  { name: "Александр Волков", role: "Managing Partner", desc: "Эксперт в области международного права и AI-трансформации бизнеса." },
  { name: "Елена Белова", role: "Head of LegalTech", desc: "Специализируется на внедрении нейросетей в юридические департаменты." },
  { name: "Дмитрий Соколов", role: "Tax & Security Expert", desc: "15+ лет опыта в налоговом структурировании и защите активов." },
];

const methodology = [
  { title: "Аудит и сбор данных", desc: "Глубокое погружение в процессы клиента с использованием AI-инструментов для анализа документации." },
  { title: "Проектирование архитектуры", desc: "Создание правовой и технологической модели решения задачи." },
  { title: "Внедрение и автоматизация", desc: "Интеграция решений в бизнес-процессы и настройка систем контроля." },
  { title: "Постоянный мониторинг", desc: "Сопровождение и адаптация системы к изменениям среды." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="bg-hub-graphite text-white py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Parallax speed={0.3}>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute -left-32 bottom-20 w-64 h-64 bg-hub-emerald/3 rounded-full blur-[80px]" />
        </Parallax>
        <div className="container mx-auto px-6 relative z-10">
          <SlideIn direction="left" delay={0}>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">О компании</h4>
          </SlideIn>
          <ScaleIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12 leading-[0.9]">МЫ ПЕРЕОПРЕДЕЛЯЕМ <br /><span className="text-hub-emerald">КОНСАЛТИНГ</span></h1>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              Insite Hub — это объединение элитной юридической экспертизы и передовых технологий искусственного интеллекта.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Ключевые достижения */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <SlideIn direction="left" delay={0}>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Insite Hub</h4>
                  <h2 className="text-6xl md:text-8xl font-bold text-hub-black leading-[0.85] tracking-tighter uppercase">КЛЮЧЕВЫЕ <br /><span className="text-hub-emerald">ДОСТИЖЕНИЯ</span></h2>
                </div>
                <FadeIn delay={0.2}>
                  <p className="text-2xl text-hub-graphite/50 leading-relaxed font-light max-w-xl">
                    Мы создали компанию, где юридическая точность встречается с математической предсказуемостью. Наш подход — это исключение неопределенности из бизнес-процессов.
                  </p>
                </FadeIn>
                <Stagger stagger={0.2}>
                  <div className="grid grid-cols-2 gap-12 pt-8">
                    <ScaleIn delay={0.3}>
                      <div className="space-y-2">
                        <div className="text-5xl font-bold text-hub-black tracking-tighter">98%</div>
                        <div className="text-[10px] uppercase tracking-widest text-hub-graphite/40 font-bold">Выигранных дел</div>
                      </div>
                    </ScaleIn>
                    <ScaleIn delay={0.4}>
                      <div className="space-y-2">
                        <div className="text-5xl font-bold text-hub-black tracking-tighter">150+</div>
                        <div className="text-[10px] uppercase tracking-widest text-hub-graphite/40 font-bold">M&A Сделок</div>
                      </div>
                    </ScaleIn>
                  </div>
                </Stagger>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-hub-light rounded-none border border-hub-graphite/5" />
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
                  alt="Architecture" 
                  className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
                />
                <div className="absolute inset-20 flex items-center justify-center p-12 text-center">
                  <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-hub-emerald/20 max-w-sm">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-hub-black">Системный подход</h3>
                      <p className="text-hub-black/70 text-base leading-relaxed">
                        Мы не решаем отдельные задачи. Мы строим комплексные системы, где юридическая экспертиза, технологии и бизнес-процессы работают как единый механизм.
                      </p>
                      <div className="pt-4">
                        <div className="w-16 h-px bg-hub-emerald mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 3. Подход к работе (Манифест) */}
      <section className="py-20 text-white relative overflow-hidden" style={{backgroundColor: '#0f2f36'}}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 text-left">
              <SlideIn direction="left" delay={0}>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Манифест</h4>
                    <h2 className="text-5xl md:text-7xl font-bold leading-[0.85] tracking-tighter uppercase">ФИЛОСОФИЯ <br /><span className="text-hub-emerald">ИНТЕЛЛЕКТА</span></h2>
                  </div>
                  <FadeIn delay={0.2}>
                    <p className="text-xl text-white/40 leading-tight font-light max-w-md">
                      Мы проектируем системы, где <span className="text-white">право становится алгоритмом</span>, а безопасность — автоматизированным процессом.
                    </p>
                  </FadeIn>
                  <ScaleIn delay={0.3}>
                    <div className="pt-4">
                      <div className="w-24 h-px bg-hub-emerald" />
                    </div>
                  </ScaleIn>
                </div>
              </SlideIn>
            </div>
            
            <div className="lg:col-span-8 space-y-px">
              <Stagger stagger={0.1}>
                {[
                  { 
                    title: "Структурность", 
                    desc: "Каждое решение — это четкий алгоритм. Мы исключаем человеческий фактор там, где важна точность, и усиливаем его там, где нужен креатив.",
                    tag: "Logic"
                  },
                  { 
                    title: "Технологичность", 
                    desc: "Собственные AI-разработки анализируют массивы данных, недоступные классическим юристам. Мы видим риски до того, как они станут проблемами.",
                    tag: "AI Engine"
                  },
                  { 
                    title: "Безопасность", 
                    desc: "Создаем многоуровневые системы защиты активов, устойчивые к любым изменениям среды. Ваша защита вшита в архитектуру бизнеса.",
                    tag: "Hardened"
                  },
                ].map((item, i) => (
                  <ScaleIn key={i} delay={i * 0.1}>
                    <div className="p-8 hover:bg-white/[0.02] transition-colors group relative overflow-hidden border-b border-white/5 last:border-0">
                      <div className="absolute top-0 left-0 w-1 h-0 bg-hub-emerald group-hover:h-full transition-all duration-700" />
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-hub-emerald font-mono text-sm tracking-widest">0{i + 1}</span>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold group-hover:text-hub-emerald transition-colors">{item.tag}</span>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-3xl font-bold tracking-tighter uppercase group-hover:text-hub-emerald transition-colors">{item.title}</h4>
                        <p className="text-white/40 text-lg font-light leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Команда */}
      <section className="py-40 bg-hub-light relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SlideIn direction="left" delay={0}>
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8 text-left">
              <div className="space-y-6">
                <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Наша команда</h4>
                <h2 className="text-5xl md:text-8xl font-bold text-hub-black leading-none uppercase tracking-tighter">КЛЮЧЕВЫЕ <br /><span className="text-hub-emerald">ЭКСПЕРТЫ</span></h2>
              </div>
              <FadeIn delay={0.2}>
                <p className="text-hub-graphite/50 text-xl max-w-md font-light leading-relaxed text-right">
                  Лучшие умы в области права и технологий, объединенные единой целью.
                </p>
              </FadeIn>
            </div>
          </SlideIn>

          <Stagger stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
              {[
                {
                  name: "Артем Инсайтов",
                  role: "Managing Partner",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
                  specialty: "M&A, Tax Strategy"
                },
                {
                  name: "Елена Вектор",
                  role: "Head of AI Legal",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
                  specialty: "LegalTech, IP Law"
                },
                {
                  name: "Михаил Громов",
                  role: "Senior Counsel",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
                  specialty: "Litigation, Asset Protection"
                }
              ].map((member, i) => (
                <ScaleIn key={i} delay={i * 0.1}>
                  <div className="group relative aspect-[3/4] overflow-hidden bg-hub-light border-none">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hub-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-700" />
                    <div className="absolute bottom-10 left-10 right-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <span className="text-hub-emerald text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">{member.role}</span>
                      <h4 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">{member.name}</h4>
                      <div className="h-px w-12 bg-hub-emerald mb-6" />
                      <p className="text-white/40 text-sm uppercase tracking-widest font-bold">{member.specialty}</p>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* 6. Финальный CTA - Редизайн под белый фон с двумя кнопками */}
      <section className="py-60 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScaleIn delay={0}>
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-6xl md:text-[5.5rem] font-bold leading-none uppercase tracking-tighter text-hub-black">
                ГОТОВЫ К <br />
                <span className="text-hub-emerald">ТРАНСФОРМАЦИИ?</span>
              </h2>
              <p className="text-hub-graphite/40 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Оставьте заявку на первичную стратегическую сессию <br className="hidden md:block" /> с нашими экспертами.
              </p>
              <Stagger stagger={0.1}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                  <ScaleIn delay={0.1}>
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto bg-hub-black text-white hover:bg-hub-emerald transition-all duration-500 rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest shadow-2xl">
                        Заполнить бриф
                      </Button>
                    </Link>
                  </ScaleIn>
                  <ScaleIn delay={0.2}>
                    <Link href="https://t.me/insitehub" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full sm:w-auto border-2 border-hub-black text-hub-black hover:bg-hub-black hover:text-white transition-all duration-500 rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest bg-transparent">
                        Написать в Telegram
                      </Button>
                    </Link>
                  </ScaleIn>
                </div>
              </Stagger>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
