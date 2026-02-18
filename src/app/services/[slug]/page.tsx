"use client";

import { Reveal, InvertCard } from "@/components/animations/GSAPWrapper";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Cpu, Scale, Target, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

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
    ]
  };

  return (
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="bg-hub-graphite text-white py-40 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">Услуга</h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 leading-[0.9] max-w-4xl">{service.title}</h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-12">
              {service.subtitle}
            </p>
            <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none h-16 px-12 text-lg border-none flex gap-4 group">
              Получить консультацию
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 2. Для кого */}
      <section className="py-32 bg-white text-left">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center uppercase tracking-tight">ДЛЯ КОГО</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {service.forWhom.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-12 border border-hub-graphite/10 space-y-6 hover:shadow-xl transition-shadow">
                  <Target className="text-hub-emerald" size={40} />
                  <h4 className="text-2xl font-bold text-hub-black">{item.title}</h4>
                  <p className="text-hub-graphite/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Процесс работы */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-24 text-center uppercase tracking-tight">ЭТАПЫ РАБОТЫ</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {service.process.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="space-y-8 relative group">
                  <div className="text-7xl font-bold text-hub-emerald/10 transition-colors group-hover:text-hub-emerald/20">{item.step}</div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-hub-black">{item.title}</h4>
                    <p className="text-hub-graphite/50 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-10 -right-6 w-12 h-px bg-hub-graphite/10" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Результат */}
      <section className="py-32 bg-hub-deep-teal text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal direction="left">
              <div className="space-y-12">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight uppercase">ВАШ <br /><span className="text-hub-emerald">РЕЗУЛЬТАТ</span></h2>
                <div className="space-y-8">
                  {[
                    "Полная прозрачность и контроль над налогами.",
                    "Защита от субсидиарной ответственности владельцев.",
                    "Автоматизированный мониторинг законодательства.",
                    "Экономия ресурсов на Legal-функции."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <CheckCircle2 className="text-hub-emerald shrink-0" size={28} />
                      <p className="text-xl text-white/70">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="p-12 border border-white/10 bg-white/5 space-y-8">
                <h4 className="text-3xl font-bold tracking-tight">ГОТОВЫ НАЧАТЬ?</h4>
                <p className="text-white/40 text-lg leading-relaxed">Оставьте заявку, и мы проведем экспресс-аудит вашей ситуации в течение 24 часов.</p>
                <div className="space-y-6 pt-8 border-t border-white/10">
                   <div className="flex justify-between items-end">
                      <span className="text-sm uppercase tracking-widest text-white/30 font-bold">Срок реализации</span>
                      <span className="text-2xl font-bold text-hub-emerald">от 2 недель</span>
                   </div>
                   <div className="flex justify-between items-end">
                      <span className="text-sm uppercase tracking-widest text-white/30 font-bold">Стоимость</span>
                      <span className="text-2xl font-bold text-hub-emerald">от 150 000 ₽</span>
                   </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-left">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center uppercase tracking-tight">ВОПРОСЫ И ОТВЕТЫ</h2>
          </Reveal>
          <div className="space-y-12">
            {service.faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <HelpCircle className="text-hub-emerald shrink-0 mt-1" size={24} />
                    <h4 className="text-2xl font-bold text-hub-black">{faq.q}</h4>
                  </div>
                  <p className="pl-10 text-lg text-hub-graphite/60 leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Форма заявки */}
      <section className="py-40 bg-hub-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white border border-hub-graphite/10 p-12 md:p-20 shadow-2xl text-left">
            <Reveal>
              <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight text-center">ЗАПИСЬ НА КОНСУЛЬТАЦИЮ</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-hub-graphite/40 font-bold">Имя</label>
                    <input type="text" className="w-full border-b border-hub-graphite/10 py-4 focus:border-hub-emerald outline-none transition-colors text-lg" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-hub-graphite/40 font-bold">Телефон</label>
                    <input type="tel" className="w-full border-b border-hub-graphite/10 py-4 focus:border-hub-emerald outline-none transition-colors text-lg" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-hub-graphite/40 font-bold">Опишите задачу</label>
                  <textarea className="w-full border-b border-hub-graphite/10 py-4 focus:border-hub-emerald outline-none transition-colors text-lg resize-none h-32" placeholder="Краткое описание вашего запроса..." />
                </div>
                <Button className="w-full bg-hub-black hover:bg-hub-black/90 text-white rounded-none h-20 text-xl font-bold tracking-tight border-none mt-12">
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
                <p className="text-[10px] text-center text-hub-graphite/30 uppercase tracking-widest mt-8">
                  Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
