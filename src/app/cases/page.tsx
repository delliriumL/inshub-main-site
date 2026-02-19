"use client";

import { useState, useEffect } from "react";
import { Reveal, InvertCard, FadeIn, ScaleIn, SlideIn, Stagger, Parallax } from "@/components/animations/GSAPWrapper";
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
  {
    title: "Внедрение AI-комплаенс системы",
    client: "Финансовый банк",
    result: "95%",
    metric: "точность проверки",
    category: "LegalTech",
    slug: "ai-compliance",
    desc: "Разработка и внедрение нейросетевой системы для автоматической проверки транзакций на соответствие нормативным требованиям."
  },
  {
    title: "Международное налоговое планирование",
    client: "Технологическая компания",
    result: "$45M",
    metric: "налоговых выгод",
    category: "Tax",
    slug: "international-tax",
    desc: "Оптимизация налоговой нагрузки через использование международных соглашений и структурирование интеллектуальной собственности."
  },
  {
    title: "Защита интеллектуальной собственности",
    client: "IT-корпорация",
    result: "12",
    metric: "патентов защищено",
    category: "LegalTech",
    slug: "ip-protection",
    desc: "Комплексная защита портфеля патентов и товарных знаков в юрисдикциях США, ЕС и Азии."
  },
  {
    title: "Структурирование крипто-бизнеса",
    client: "Крипто-стартап",
    result: "100%",
    metric: "соответствие регулятору",
    category: "Blockchain",
    slug: "crypto-structuring",
    desc: "Полная легализация криптовалютного бизнеса в соответствии с законодательством нескольких юрисдикций."
  },
  {
    title: "Слияние ритейл-сетей",
    client: "Торговая группа",
    result: "$200M",
    metric: "стоимость сделки",
    category: "M&A",
    slug: "retail-merger",
    desc: "Юридическое сопровождение слияния двух крупных ритейл-сетей с учетом антимонопольного законодательства."
  },
  {
    title: "Автоматизация договорной работы",
    client: "Нефтегазовая компания",
    result: "80%",
    metric: "ускорение процессов",
    category: "LegalTech",
    slug: "contract-automation",
    desc: "Внедрение системы интеллектуального анализа и генерации договоров с использованием технологии NLP."
  },
  {
    title: "Налоговая реструктуризация холдинга",
    client: "Промышленный конгломерат",
    result: "300 млн",
    metric: "₽ экономии",
    category: "Tax",
    slug: "holding-restructuring",
    desc: "Перестройка налоговой структуры международного холдинга для минимизации налоговых рисков и оптимизации платежей."
  },
  {
    title: "ICO и токенизация активов",
    client: "Блокчейн-проект",
    result: "$25M",
    metric: "собрано средств",
    category: "Blockchain",
    slug: "ico-tokenization",
    desc: "Полное юридическое сопровождение ICO, включая подготовку whitepaper, terms и compliance с регуляторами."
  },
];

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [visibleCases, setVisibleCases] = useState(8); // Показываем первые 8 кейсов
  const [loading, setLoading] = useState(false);

  const filteredCases = activeCategory === "Все" 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  const displayedCases = filteredCases.slice(0, visibleCases);
  const hasMore = filteredCases.length > visibleCases;

  // Сброс количества видимых кейсов при смене категории
  useEffect(() => {
    setVisibleCases(8);
  }, [activeCategory]);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCases(prev => Math.min(prev + 8, filteredCases.length));
      setLoading(false);
    }, 500);
  };

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
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">Портфолио</h4>
          </SlideIn>
          <ScaleIn delay={0.1}>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-white mb-12 leading-[0.85]">РЕАЛЬНЫЕ <br /><span className="text-hub-emerald">РЕЗУЛЬТАТЫ</span></h1>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              Мы не просто консультируем — мы внедряем решения, которые приносят измеримую пользу бизнесу.
            </p>
          </FadeIn>
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
      <section className="py-24 bg-white min-h-[600px] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-hub-graphite/[0.02] select-none pointer-events-none uppercase tracking-tighter z-0">
          CASES
        </div>
        <div className="container mx-auto px-6 relative z-10">
          {displayedCases.length > 0 ? (
            <>
              <Stagger stagger={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
                  {displayedCases.map((item, i) => {
                    const isEvenRow = Math.floor(i / 2) % 2 === 0;
                    const isBlack = (isEvenRow && i % 2 === 0) || (!isEvenRow && i % 2 !== 0);
                    
                    return (
                      <ScaleIn key={item.slug} delay={i * 0.1}>
                        <Link href={`/cases/${item.slug}`}>
                          <div className={`h-full flex flex-col justify-between group p-12 transition-colors duration-500 ${
                            isBlack ? 'bg-hub-black text-white' : 'bg-white text-hub-black'
                          }`}>
                            <div className="space-y-10 text-left">
                              <div className="flex justify-between items-start">
                                <span className={`text-[10px] uppercase tracking-widest font-bold border px-3 py-1 ${
                                  isBlack ? 'text-hub-emerald border-hub-emerald' : 'text-hub-emerald border-hub-emerald'
                                }`}>
                                  {item.category}
                                </span>
                                <span className={`text-sm font-medium ${
                                  isBlack ? 'text-white/40' : 'text-hub-graphite/40'
                                }`}>{item.client}</span>
                              </div>
                              <div className="space-y-6">
                                <h3 className="text-4xl font-bold leading-tight uppercase tracking-tighter">
                                  {item.title}
                                </h3>
                                <p className={`text-lg leading-relaxed font-light ${
                                  isBlack ? 'text-white/60' : 'text-hub-graphite/60'
                                }`}>
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                            <div className={`mt-20 pt-10 border-t flex items-end justify-between text-left ${
                              isBlack ? 'border-white/10' : 'border-hub-graphite/10'
                            }`}>
                              <div className="space-y-2">
                                <p className={`text-[10px] uppercase tracking-widest font-bold ${
                                  isBlack ? 'text-white/30' : 'text-hub-graphite/50'
                                }`}>Результат</p>
                                <div className="flex items-baseline gap-2">
                                   <p className="text-4xl md:text-5xl font-bold text-hub-emerald tracking-tighter">{item.result}</p>
                                   <p className={`text-sm uppercase tracking-widest font-bold ${
                                     isBlack ? 'text-white/30' : 'text-hub-graphite/50'
                                   }`}>{item.metric}</p>
                                </div>
                              </div>
                              <div className="accent-icon">
                                <div className={`w-16 h-16 border border-current flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                                  isBlack ? 'text-hub-emerald' : 'text-hub-black group-hover:text-hub-emerald'
                                }`}>
                                  <ArrowRight size={32} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </ScaleIn>
                    );
                  })}
                </div>
              </Stagger>
              
              {/* Кнопка загрузки */}
              {hasMore && (
                <div className="flex justify-center mt-16">
                  <ScaleIn delay={0.3}>
                    <Button
                      onClick={loadMore}
                      disabled={loading}
                      className="bg-hub-emerald hover:opacity-90 text-white rounded-none h-16 px-12 text-lg border-none flex gap-4 shadow-xl shadow-hub-emerald/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Загрузка...
                        </>
                      ) : (
                        <>
                          Показать еще кейсы
                          <ArrowRight size={20} />
                        </>
                      )}
                    </Button>
                  </ScaleIn>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-24 text-hub-graphite/40 uppercase font-bold tracking-widest">
              Кейсов в этой категории пока нет
            </div>
          )}
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-40 container mx-auto px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-hub-graphite/[0.01] select-none pointer-events-none uppercase tracking-tighter z-0">
          CONTACT
        </div>
        <ScaleIn delay={0}>
          <div className="bg-hub-deep-teal p-16 md:p-24 text-white text-center space-y-10 relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <h2 className="text-4xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight relative z-10 uppercase">ХОТИТЕ ТАКОЙ ЖЕ <br /><span className="text-hub-emerald">РЕЗУЛЬТАТ?</span></h2>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-white/50 max-w-xl mx-auto relative z-10 leading-relaxed">Давайте обсудим вашу задачу и построим эффективную стратегию решения.</p>
            </FadeIn>
            <ScaleIn delay={0.3}>
              <div className="pt-10 relative z-10">
                <Link href="/contact">
                  <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none h-20 px-16 text-xl border-none font-bold tracking-tight">
                    Оставить заявку
                  </Button>
                </Link>
              </div>
            </ScaleIn>
          </div>
        </ScaleIn>
      </section>
    </div>
  );
}

