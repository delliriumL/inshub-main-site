"use client";

import { useState, useEffect } from "react";
import { Reveal } from "@/components/animations/GSAPWrapper";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calculator as CalcIcon, CheckCircle2, Info } from "lucide-react";
import { Input } from "@/components/ui/input";

const servicePrices = {
  "tax": { price: 150000, name: "Налоговый консалтинг", options: ["Аудит", "Структурирование", "Защита"] },
  "ai": { price: 250000, name: "AI Интеграция", options: ["LLM-агенты", "Автоматизация", "Compliance AI"] },
  "legal": { price: 100000, name: "IT-Право", options: ["IP-защита", "M&A", "ВЭД"] },
  "crypto": { price: 200000, name: "Blockchain & DeFi", options: ["Токенизация", "Лицензирование", "Смарт-контракты"] },
};

export default function CalculatorPage() {
  const [selectedService, setSelectedService] = useState<keyof typeof servicePrices>("tax");
  const [complexity, setComplexity] = useState(1);
  const [isUrgent, setIsUrgent] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let base = servicePrices[selectedService].price * complexity;
    if (isUrgent) base *= 1.5;
    setTotal(base);
  }, [selectedService, complexity, isUrgent]);

  return (
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="bg-hub-light py-40 relative border-b border-hub-graphite/5">
        <div className="container mx-auto px-6">
          <Reveal>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">Инструмент</h4>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-hub-black mb-12 leading-[0.85]">УМНЫЙ <br /><span className="text-hub-emerald">РАСЧЕТ</span></h1>
            <p className="text-xl md:text-2xl text-hub-graphite/60 max-w-2xl leading-relaxed">
              Получите предварительную оценку стоимости вашего проекта за 1 минуту. Алгоритм учитывает сложность, срочность и специфику задачи.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Калькулятор */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white border border-hub-graphite/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Настройки */}
            <div className="lg:w-2/3 p-8 md:p-16 space-y-16 border-r border-hub-graphite/5">
              <Reveal>
                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-hub-emerald mb-4">
                    <CheckCircle2 size={20} />
                    <span className="text-xs uppercase font-bold tracking-widest">Шаг 01: Выбор направления</span>
                  </div>
                  <Tabs defaultValue="tax" onValueChange={(v) => setSelectedService(v as any)} className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0">
                      {Object.entries(servicePrices).map(([key, value]) => (
                        <TabsTrigger 
                          key={key} 
                          value={key}
                          className="rounded-none border border-hub-graphite/10 data-[state=active]:bg-hub-black data-[state=active]:text-white h-16 text-xs font-bold uppercase tracking-wider"
                        >
                          {value.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-10">
                  <div className="flex items-center gap-4 text-hub-emerald mb-4">
                    <CheckCircle2 size={20} />
                    <span className="text-xs uppercase font-bold tracking-widest">Шаг 02: Параметры проекта</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <Label className="text-sm font-bold uppercase text-hub-black tracking-widest">Сложность</Label>
                      <div className="flex gap-2">
                        {[1, 1.5, 2].map((val) => (
                          <button
                            key={val}
                            onClick={() => setComplexity(val)}
                            className={`flex-grow h-14 border font-bold transition-all ${complexity === val ? 'bg-hub-emerald border-hub-emerald text-white' : 'border-hub-graphite/10 text-hub-black hover:border-hub-black'}`}
                          >
                            {val === 1 ? 'Base' : val === 1.5 ? 'Pro' : 'Elite'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Label className="text-sm font-bold uppercase text-hub-black tracking-widest">Срочность</Label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setIsUrgent(false)}
                          className={`flex-grow h-14 border font-bold transition-all ${!isUrgent ? 'bg-hub-black border-hub-black text-white' : 'border-hub-graphite/10 text-hub-black hover:border-hub-black'}`}
                        >
                          Стандарт
                        </button>
                        <button
                          onClick={() => setIsUrgent(true)}
                          className={`flex-grow h-14 border font-bold transition-all ${isUrgent ? 'bg-hub-emerald border-hub-emerald text-white' : 'border-hub-graphite/10 text-hub-black hover:border-hub-black'}`}
                        >
                          ASAP (+50%)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="pt-10 border-t border-hub-graphite/5">
                <div className="flex gap-4 items-start p-6 bg-hub-light text-hub-graphite/60 text-sm leading-relaxed">
                  <Info className="text-hub-emerald shrink-0" size={20} />
                  <p>Это предварительный расчет. Мы используем AI для первичной оценки, но финальная стоимость формируется после детального анализа вашей документации нашими экспертами.</p>
                </div>
              </div>
            </div>

            {/* Результат и Форма */}
            <div className="lg:w-1/3 bg-hub-graphite text-white p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-12">
                <div className="space-y-4 text-left">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-hub-emerald font-bold">ИТОГОВАЯ ОЦЕНКА</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-white/40">{servicePrices[selectedService].name}</p>
                    <div className="text-6xl font-bold tracking-tighter text-white">
                      {total.toLocaleString('ru-RU')} <span className="text-2xl font-normal opacity-30">₽</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-left">
                   <h4 className="text-[10px] uppercase tracking-[0.3em] text-hub-emerald font-bold">ПОЛУЧИТЬ СМЕТУ</h4>
                   <form className="space-y-4">
                      <Input placeholder="Ваше имя" className="bg-white/5 border-white/10 h-14 rounded-none focus:border-hub-emerald transition-colors" />
                      <Input placeholder="Телефон или Telegram" className="bg-white/5 border-white/10 h-14 rounded-none focus:border-hub-emerald transition-colors" />
                      <Button className="w-full bg-hub-emerald hover:opacity-90 text-white rounded-none h-16 text-lg font-bold uppercase tracking-widest border-none mt-4 group">
                        ОТПРАВИТЬ
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </Button>
                   </form>
                   <p className="text-[10px] text-center text-white/20 uppercase tracking-widest leading-relaxed">
                     Мы свяжемся с вами в течение 15 минут для уточнения деталей.
                   </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Что входит в расчет */}
      <section className="py-32 bg-hub-light">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 uppercase tracking-tight">ЧЕМУ ВЫ ПЛАТИТЕ</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Экспертиза", desc: "Работу ведут юристы уровня Senior и партнеры фирмы с опытом в M&A и Tech." },
              { title: "Технологии", desc: "Использование AI-агентов позволяет нам проводить аудит в 12 раз быстрее конкурентов." },
              { title: "Гарантии", desc: "Мы несем полную ответственность за результат и чистоту предлагаемых решений." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="space-y-6 p-10 bg-white border border-hub-graphite/10 text-left">
                  <div className="w-12 h-12 bg-hub-emerald/10 flex items-center justify-center text-hub-emerald">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-hub-graphite/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

