"use client";

import { Reveal, InvertCard } from "@/components/animations/GSAPWrapper";
import { ArrowLeft, CheckCircle2, Trophy, Target, Lightbulb, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CasePageProps {
  params: { slug: string };
}

export default function CaseSinglePage({ params }: CasePageProps) {
  // В реальном приложении данные подгружаются по slug
  const caseData = {
    title: "AI-трансформация юридического департамента",
    client: "Global Retail Network",
    category: "LegalTech",
    results: [
      { label: "Экономия времени", value: "70%" },
      { label: "Точность анализа", value: "99.8%" },
      { label: "ROI проекта", value: "340%" },
    ],
    task: "Клиент столкнулся с проблемой обработки более 5000 входящих договоров в месяц. Ручная проверка занимала слишком много времени, приводила к ошибкам и задержкам в бизнес-процессах.",
    context: "Крупная ритейл-сеть с разветвленной структурой филиалов. Юридический отдел перегружен рутиной, что мешало заниматься стратегическими задачами и M&A сделками.",
    solution: "Мы разработали и внедрили кастомную AI-систему на базе проприетарных LLM-моделей, обученных на российской и международной судебной практике. Система автоматически классифицирует риски, подсвечивает отклонения от корпоративных стандартов и предлагает формулировки для правок.",
    conclusion: "Проект стал эталоном цифровой трансформации в отрасли. Клиент не только сократил издержки, но и повысил прозрачность принятия решений на всех уровнях управления.",
  };

  return (
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="bg-hub-graphite text-white py-40 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-left">
          <Reveal>
            <Link href="/cases" className="flex items-center gap-2 text-hub-emerald font-bold uppercase tracking-widest text-xs mb-12 hover:opacity-70 transition-opacity">
              <ArrowLeft size={16} /> Назад к кейсам
            </Link>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">{caseData.category}</h4>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-12 leading-[0.9] max-w-5xl">{caseData.title}</h1>
            <div className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-white/10">
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-4">Клиент</p>
                  <p className="text-2xl font-bold">{caseData.client}</p>
               </div>
               {caseData.results.map((res, i) => (
                 <div key={i}>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-4">{res.label}</p>
                    <p className="text-4xl font-bold text-hub-emerald tracking-tighter">{res.value}</p>
                 </div>
               ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Задача & Контекст */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <Reveal direction="left">
              <div className="space-y-8 text-left">
                <div className="flex items-center gap-4 text-hub-emerald">
                  <Target size={32} />
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-hub-black">ЗАДАЧА</h2>
                </div>
                <p className="text-xl text-hub-graphite/70 leading-relaxed italic">
                  "{caseData.task}"
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="space-y-8 text-left">
                <div className="flex items-center gap-4 text-hub-emerald">
                  <BarChart size={32} />
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-hub-black">КОНТЕКСТ</h2>
                </div>
                <p className="text-xl text-hub-graphite/70 leading-relaxed">
                  {caseData.context}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Решение (Full Width) */}
      <section className="py-32 bg-hub-light border-y border-hub-graphite/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal>
            <div className="space-y-12 text-left">
              <div className="flex items-center gap-4 text-hub-emerald">
                <Lightbulb size={40} />
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-hub-black">РЕШЕНИЕ</h2>
              </div>
              <div className="p-12 bg-white border border-hub-graphite/10 shadow-xl space-y-8">
                <p className="text-2xl text-hub-black leading-relaxed font-medium">
                  {caseData.solution}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-hub-graphite/10">
                   <div className="flex gap-4 items-start">
                      <CheckCircle2 className="text-hub-emerald shrink-0" size={24} />
                      <p className="text-sm text-hub-graphite/60 font-bold uppercase tracking-widest">Интеграция с корпоративным контуром</p>
                   </div>
                   <div className="flex gap-4 items-start">
                      <CheckCircle2 className="text-hub-emerald shrink-0" size={24} />
                      <p className="text-sm text-hub-graphite/60 font-bold uppercase tracking-widest">Безопасность данных On-premise</p>
                   </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Результат & Вывод */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <div className="space-y-12 text-left">
                  <div className="flex items-center gap-4 text-hub-emerald">
                    <Trophy size={48} />
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-hub-black">ВЫВОД</h2>
                  </div>
                  <p className="text-2xl text-hub-graphite/70 leading-relaxed">
                    {caseData.conclusion}
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <div className="bg-hub-deep-teal p-12 text-white space-y-10 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-hub-emerald/10 rounded-full blur-3xl" />
                  <h4 className="text-xl font-bold tracking-tight">КЛЮЧЕВОЙ ЭФФЕКТ</h4>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <div className="text-5xl font-bold text-hub-emerald">×12</div>
                      <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Ускорение процессов</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-5xl font-bold text-hub-emerald">0%</div>
                      <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Критических ошибок</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-40 container mx-auto px-6">
        <Reveal>
          <div className="max-w-5xl mx-auto bg-hub-black text-white p-16 md:p-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">НУЖЕН АНАЛОГИЧНЫЙ <br /><span className="text-hub-emerald">РЕЗУЛЬТАТ?</span></h2>
            <p className="text-xl text-white/40 max-w-2xl">Запишитесь на демонстрацию наших AI-решений или получите консультацию по вашей задаче.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none h-20 px-12 text-xl border-none">
                Обсудить проект
              </Button>
              <Button variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-hub-black rounded-none h-20 px-12 text-xl">
                Скачать PDF кейс
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
