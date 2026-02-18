"use client";

import { Reveal } from "@/components/animations/GSAPWrapper";
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
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">О компании</h4>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12 leading-[0.9]">МЫ ПЕРЕОПРЕДЕЛЯЕМ <br /><span className="text-hub-emerald">КОНСАЛТИНГ</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              Insite Hub — это объединение элитной юридической экспертизы и передовых технологий искусственного интеллекта.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Кто мы (Философия) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal direction="left">
              <div className="space-y-10">
                <h2 className="text-5xl md:text-6xl font-bold text-hub-black">ФИЛОСОФИЯ <br />ИНТЕЛЛЕКТА</h2>
                <div className="space-y-6 text-lg text-hub-graphite/70 leading-relaxed">
                  <p>Мы верим, что право — это не застывший набор правил, а динамичная система, которую можно и нужно оптимизировать с помощью технологий.</p>
                  <p>Наше позиционирование строится на трех столпах: математическая точность, правовая безупречность и технологическое превосходство.</p>
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Shield, title: "Защита", desc: "Абсолютная безопасность активов." },
                { icon: Zap, title: "Скорость", desc: "AI ускоряет процессы в 10 раз." },
                { icon: Target, title: "Результат", desc: "Только измеримые показатели." },
                { icon: Globe, title: "Масштаб", desc: "Работаем по всему миру." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-8 border border-hub-graphite/10 space-y-4 hover:border-hub-emerald transition-colors group">
                    <item.icon className="text-hub-emerald group-hover:scale-110 transition-transform" size={40} />
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-sm text-hub-graphite/50">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Подход к работе (Методология) */}
      <section className="py-32 bg-hub-light border-y border-hub-graphite/5">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-24">МЕТОДОЛОГИЯ <br />ВЗАИМОДЕЙСТВИЯ</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {methodology.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="space-y-6 relative">
                  <span className="text-6xl font-bold text-hub-emerald/10 absolute -top-10 -left-4">0{i + 1}</span>
                  <h4 className="text-2xl font-bold text-hub-black relative z-10">{item.title}</h4>
                  <p className="text-hub-graphite/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Экспертиза Legal + AI */}
      <section className="py-32 bg-hub-deep-teal text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal direction="left">
              <div className="space-y-12">
                <h2 className="text-5xl md:text-6xl font-bold">LEGAL + AI: <br /><span className="text-hub-emerald">СИНЕРГИЯ</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-4 p-8 border border-white/10 bg-white/5">
                    <Cpu className="text-hub-emerald" size={48} />
                    <h4 className="text-2xl font-bold">Tech Expertise</h4>
                    <ul className="text-sm text-white/50 space-y-2">
                      <li>• Свои LLM-модели</li>
                      <li>• Автоматизация KYC/AML</li>
                      <li>• Смарт-контракты</li>
                    </ul>
                  </div>
                  <div className="space-y-4 p-8 border border-white/10 bg-white/5">
                    <Scale className="text-hub-emerald" size={48} />
                    <h4 className="text-2xl font-bold">Legal Mastery</h4>
                    <ul className="text-sm text-white/50 space-y-2">
                      <li>• Налоговое право</li>
                      <li>• M&A сделки</li>
                      <li>• Уголовная защита</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="bg-hub-graphite p-12 border border-white/5 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-hub-emerald/5 animate-pulse" />
                <p className="text-2xl font-bold text-center relative z-10 leading-tight">МЫ ОБЪЕДИНЯЕМ <br /> КОД И ЗАКОН</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Команда */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-24 space-y-6">
              <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Лица</h4>
              <h2 className="text-5xl md:text-7xl font-bold text-hub-black">КОМАНДА ЭКСПЕРТОВ</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-[3/4] bg-hub-light mb-8 overflow-hidden relative border border-hub-graphite/5">
                    <div className="absolute inset-0 bg-hub-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="w-full h-full flex items-center justify-center text-hub-graphite/10 font-bold text-6xl uppercase tracking-tighter">
                      INSITE
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-hub-emerald text-sm font-bold uppercase tracking-widest mb-6">{member.role}</p>
                  <p className="text-hub-graphite/50 leading-relaxed">{member.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-32 container mx-auto px-6">
        <Reveal>
          <div className="bg-hub-emerald p-16 md:p-24 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight lg:max-w-3xl">ГОТОВЫ ОБСУДИТЬ <br />ВАШУ СТРАТЕГИЮ?</h2>
            <Button className="bg-hub-black hover:bg-hub-black/90 text-white rounded-none h-20 px-12 text-xl flex gap-4 border-none shrink-0 shadow-2xl">
              Связаться с нами
              <ArrowRight size={24} />
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

