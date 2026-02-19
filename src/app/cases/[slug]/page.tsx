import { Reveal, FadeIn, ScaleIn, SlideIn, Parallax, Stagger } from "@/components/animations/GSAPWrapper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CasePageProps {
  params: { slug: string };
}

export default function CaseSinglePage({ params }: CasePageProps) {
  const caseData = {
    type: "LEGAL TRANSFORMATION",
    tags: ["AI", "REGULATORY", "CORPORATE"],
    title: "AI-ТРАНСФОРМАЦИЯ ЮРИДИЧЕСКОГО ДЕПАРТАМЕНТА",
    year: "2024",
    client: "Global Retail Network",
    context: {
      subtitle: "Контекст / Исходная ситуация",
      text: "Компания столкнулась с правовой неопределённостью при внедрении ИИ в критичный бизнес-процесс на фоне меняющегося регулирования. Масштаб операций требовал декомпозиции процессов на юридически значимые модули для минимизации рисков."
    },
    risk: {
      title: "Ключевой риск",
      text: "Риск признания автоматизированных решений юридически ничтожными в случае судебного оспаривания из-за отсутствия четкой методологии подтверждения воли субъекта в цифровой среде."
    },
    implementation: {
      subtitle: "ЧТО МЫ СДЕЛАЛИ",
      title: "ЭТАПЫ",
      accent: "ПРОЕКТА",
      description: "Мы не просто внедряем технологии — мы создаем юридически значимый результат через системную трансформацию.",
      steps: [
        { title: "Правовой аудит", desc: "Провели глубокий анализ текущих процессов обработки данных и выявили критические точки правовой неопределенности.", tag: "Audit" },
        { title: "Разработка LLM", desc: "Настроили кастомную языковую модель на базе судебной практики и внутренних регламентов клиента.", tag: "Development" },
        { title: "Защитная архитектура", desc: "Спроектировали юридический контур, исключающий риск оспаривания автоматизированных решений.", tag: "Architecture" },
        { title: "Внедрение систем", desc: "Интегрировали AI-инструменты в рабочий процесс юридического департамента с обучением сотрудников.", tag: "Deployment" }
      ]
    },
    result: {
      title: "Результат",
      points: [
        { label: "Снижение рисков", value: "95%" },
        { label: "Скорость внедрения", value: "2x" },
        { label: "Защищенность", value: "High" }
      ],
      text: "Проект обеспечил юридическую устойчивость модели и возможность её масштабирования на весь международный контур компании."
    },
    metadata: {
      status: "реализовано",
      format: "стратегия / сопровождение"
    }
  };

  return (
    <div className="flex flex-col gap-0 pb-0 overflow-x-hidden bg-white">
      {/* 1. Hero - Style from About Page */}
      <section className="bg-hub-graphite text-white py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Parallax speed={0.3}>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute -left-32 bottom-20 w-64 h-64 bg-hub-emerald/3 rounded-full blur-[80px]" />
        </Parallax>
        <div className="container mx-auto px-6 relative z-10">
          <SlideIn direction="left" delay={0}>
            <Link href="/cases" className="inline-flex items-center gap-2 text-hub-emerald font-bold uppercase tracking-[0.4em] text-[10px] mb-12 hover:gap-4 transition-all duration-300 group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Назад
            </Link>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">{caseData.type} — {caseData.year}</h4>
          </SlideIn>
          <ScaleIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12 leading-[0.9] uppercase max-w-5xl">
              {caseData.title}
            </h1>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-4 pt-12 border-t border-white/5">
              {caseData.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 px-4 py-2 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Context & Risk - Style from AboutAchievements */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <SlideIn direction="left">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Insite Hub</h4>
                  <h2 className="text-6xl md:text-8xl font-bold text-hub-black leading-[0.85] tracking-tighter uppercase">КОНТЕКСТ <br /><span className="text-hub-emerald">& РИСК</span></h2>
                </div>
                <FadeIn delay={0.2}>
                  <p className="text-2xl text-hub-graphite/50 leading-relaxed font-light max-w-xl">
                    {caseData.context.text}
                  </p>
                </FadeIn>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="relative aspect-square md:aspect-video lg:aspect-square">
                <div className="absolute inset-0 bg-hub-light border border-hub-graphite/5" />
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-20">
                  <div className="bg-white/95 backdrop-blur-sm p-10 border border-hub-emerald/20 w-full">
                    <div className="space-y-6">
                      <h4 className="text-[10px] uppercase tracking-[0.4em] text-hub-emerald font-bold">{caseData.risk.title}</h4>
                      <p className="text-hub-black text-xl md:text-2xl font-medium leading-relaxed uppercase tracking-tight">
                        {caseData.risk.text}
                      </p>
                      <div className="pt-4">
                        <div className="w-16 h-px bg-hub-emerald" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 3. Implementation - Style from Philosophy (Dark Blue) */}
      <section className="py-40 text-white relative overflow-hidden" style={{backgroundColor: '#0f2f36'}}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 text-left">
              <SlideIn direction="left">
                <div className="space-y-8 sticky top-40">
                  <div className="space-y-4">
                    <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">{caseData.implementation.subtitle}</h4>
                    <h2 className="text-5xl md:text-7xl font-bold leading-[0.85] tracking-tighter uppercase">{caseData.implementation.title} <br /><span className="text-hub-emerald">{caseData.implementation.accent}</span></h2>
                  </div>
                  <FadeIn delay={0.2}>
                    <p className="text-xl text-white/40 leading-tight font-light max-w-md">
                      {caseData.implementation.description}
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
                {caseData.implementation.steps.map((item, i) => (
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

      {/* 4. Results - Style from achievements grid */}
      <section className="py-40 bg-hub-light relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="text-center space-y-6">
              <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">{caseData.result.title}</h4>
              <h2 className="text-6xl md:text-8xl font-bold text-hub-black leading-none uppercase tracking-tighter">ЭФФЕКТ <br /><span className="text-hub-emerald">РЕШЕНИЯ</span></h2>
            </div>

            <Stagger stagger={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
                {caseData.result.points.map((point, i) => (
                  <ScaleIn key={i} delay={i * 0.1}>
                    <div className="bg-white p-12 text-center group hover:bg-hub-black transition-all duration-500">
                      <div className="space-y-4">
                        <div className="text-5xl font-bold text-hub-black group-hover:text-hub-emerald tracking-tighter transition-colors">{point.value}</div>
                        <div className="text-[10px] uppercase tracking-widest text-hub-graphite/40 font-bold group-hover:text-white/40 transition-colors">{point.label}</div>
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </Stagger>

            <FadeIn delay={0.4}>
              <p className="text-2xl text-hub-graphite/50 leading-relaxed font-light text-center max-w-3xl mx-auto">
                {caseData.result.text}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Next Case - Emerald Slim Style */}
      <section className="py-24 bg-hub-emerald text-white relative overflow-hidden group cursor-pointer">
        <Link href="/cases/tax-optimization" className="absolute inset-0 z-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-60">Следующий проект</span>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                Налоговая оптимизация
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">Смотреть</span>
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-hub-emerald transition-all duration-500">
                <ArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold uppercase tracking-tighter opacity-[0.03] pointer-events-none whitespace-nowrap">
          NEXT CASE NEXT CASE
        </div>
      </section>

      {/* 6. CTA - From About Page */}
      <section className="py-60 bg-white relative overflow-hidden border-t border-hub-graphite/5">
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
                      <Button className="w-full sm:w-auto bg-hub-black text-white hover:bg-hub-emerald transition-all duration-500 rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest">
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
