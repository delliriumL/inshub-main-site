"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Reveal, FadeIn, ScaleIn, SlideIn, Stagger, Parallax } from "@/components/animations/GSAPWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Send } from "lucide-react";

// Типы для постов WordPress
interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
  category: string;
  image: string;
}

const categories = ["Все", "LegalTech", "AI", "Криптовалюты", "Кейсы"];

export default function BlogPage() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Все");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const mockPosts: WPPost[] = [
          {
            id: 1,
            title: { rendered: "Как AI меняет рынок юридических услуг в 2024 году" },
            excerpt: { rendered: "Анализируем ключевые тренды внедрения нейросетей в работу консалтинговых компаний. Какие роли исчезнут, а какие станут ключевыми?" },
            link: "/blog/ai-transforms-legal-services",
            date: "2024-02-15T12:00:00",
            category: "AI",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
          },
          {
            id: 2,
            title: { rendered: "Правовое регулирование цифровых активов" },
            excerpt: { rendered: "Разбираемся в тонкостях нового законодательства о ЦФА и криптовалютах. Что нужно знать инвестору и разработчику?" },
            link: "/blog/digital-assets-regulation",
            date: "2024-02-10T10:30:00",
            category: "Криптовалюты",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop"
          },
          {
            id: 3,
            title: { rendered: "Налоговые риски при использовании нейросетей" },
            excerpt: { rendered: "Почему важно правильно оформлять использование ИИ в производственных процессах. Судебная практика и рекомендации ФНС." },
            link: "/blog/tax-risks-neural-networks",
            date: "2024-02-05T09:15:00",
            category: "LegalTech",
            image: "https://images.unsplash.com/photo-1551288049-be0da1e7dce1?q=80&w=1000&auto=format&fit=crop"
          },
          {
            id: 4,
            title: { rendered: "M&A в эпоху неопределенности: защита сделок" },
            excerpt: { rendered: "Как структурировать сделки слияния и поглощения, когда рынки лихорадит. Инструменты защиты покупателя и продавца." },
            link: "/blog/ma-uncertainty-protection",
            date: "2024-02-01T14:20:00",
            category: "Кейсы",
            image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=1000&auto=format&fit=crop"
          },
          {
            id: 5,
            title: { rendered: "Токенизация недвижимости: правовой гайд" },
            excerpt: { rendered: "Разбираем юридические аспекты перевода физических активов в цифровой формат на блокчейне. Плюсы, минусы и подводные камни." },
            link: "/blog/real-estate-tokenization",
            date: "2024-01-28T11:00:00",
            category: "Криптовалюты",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
          }
        ];
        setPosts(mockPosts);
      } catch (error) {
        console.error("Error fetching WP posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = activeCategory === "Все" 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

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
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">Медиа & Экспертиза</h4>
          </SlideIn>
          <ScaleIn delay={0.1}>
            <h1 className="text-6xl md:text-[8rem] font-bold tracking-tight mb-12 leading-[0.9] uppercase max-w-5xl">
              ИНСАЙДЫ <br /><span className="text-hub-emerald">БУДУЩЕГО</span>
            </h1>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light">
              Аналитика, правовые стратегии и технологические тренды на стыке права и инноваций.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Categories & Filter - Style from Cases Page */}
      <section className="py-12 bg-white border-b border-hub-graphite/10 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="flex items-center gap-4 text-hub-graphite/40">
              <span className="text-xs uppercase font-bold tracking-widest">Фильтр по категориям:</span>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    activeCategory === cat ? 'text-hub-emerald' : 'text-hub-graphite/40 hover:text-hub-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Blog Feed - Premium Grid */}
      <section className="py-24 bg-white relative overflow-hidden min-h-[600px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-hub-graphite/[0.02] select-none pointer-events-none uppercase tracking-tighter z-0">
          ARTICLES
        </div>
        <div className="container mx-auto px-6 relative z-10">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/5] bg-white animate-pulse" />
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
                {filteredPosts.map((post, i) => (
                  <ScaleIn key={post.id} delay={i * 0.1}>
                    <Link href={post.link} className="group relative aspect-[4/5] overflow-hidden bg-white block border-none">
                      <img 
                        src={post.image} 
                        alt={post.title.rendered} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-hub-black via-hub-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-700" />
                      
                      <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                        <div className="flex justify-between items-start">
                          <span className="text-hub-emerald text-[10px] uppercase tracking-[0.3em] font-bold px-3 py-1 border border-hub-emerald/30 bg-hub-emerald/5 backdrop-blur-sm">
                            {post.category}
                          </span>
                          <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                            {new Date(post.date).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                        
                        <div className="space-y-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                          <div className="h-px w-12 bg-hub-emerald group-hover:w-full transition-all duration-700" />
                          <p className="text-white/80 text-sm font-medium leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                          <div className="flex items-center gap-3 text-hub-emerald text-[10px] font-bold uppercase tracking-[0.3em] pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                            Читать материал <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScaleIn>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center mt-16">
                <ScaleIn delay={0.3}>
                  <Button className="bg-hub-black hover:bg-hub-emerald text-white rounded-none h-16 px-12 text-lg font-bold uppercase tracking-widest transition-all duration-500">
                    Загрузить еще
                  </Button>
                </ScaleIn>
              </div>
            </>
          ) : (
            <div className="text-center py-24 text-hub-graphite/40 uppercase font-bold tracking-widest border border-dashed border-hub-graphite/10">
              Статей в этой категории пока нет
            </div>
          )}
        </div>
      </section>

      {/* 4. Telegram Insights - New Clean Style */}
      <section className="py-40 bg-hub-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-hub-graphite/[0.015] select-none pointer-events-none uppercase tracking-tighter z-0">
          TELEGRAM
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <SlideIn direction="left">
                <div className="space-y-6">
                  <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">Live Feed</h4>
                  <h2 className="text-5xl md:text-7xl font-bold text-hub-black tracking-tighter uppercase leading-[0.85]">
                    TELEGRAM <br /><span className="text-hub-emerald">INSIGHTS</span>
                  </h2>
                </div>
              </SlideIn>
              <FadeIn delay={0.2}>
                <Link href="https://t.me/insitehub" className="group flex items-center gap-4 bg-white p-6 border border-hub-graphite/5 hover:border-hub-emerald transition-all duration-500">
                  <div className="w-12 h-12 bg-hub-emerald flex items-center justify-center text-white">
                    <Send size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-hub-graphite/40">Подписаться</p>
                    <p className="text-sm font-bold text-hub-black tracking-widest">@pravo_ai_crypto</p>
                  </div>
                </Link>
              </FadeIn>
            </div>

            <Stagger stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
                {[
                  { 
                    title: "AI-агенты vs Младшие юристы", 
                    desc: "Разбор кейса Goldman Sachs: как автоматизация меняет структуру затрат в Tier-1 банках. Почему это коснется всех в течение 2 лет.",
                    time: "2 часа назад"
                  },
                  { 
                    title: "Стейблкоины и комплаенс 2024", 
                    desc: "Краткий гайд по новым правилам структурирования сделок. Как избежать блокировок и работать в белом поле.",
                    time: "5 часов назад"
                  },
                  { 
                    title: "ТОП-5 AI-инструментов", 
                    desc: "Тестируем решения для автоматизации комплаенс-проверок. Сравнение эффективности российских и зарубежных LLM.",
                    time: "Вчера"
                  },
                  { 
                    title: "Инсайд: Льготы для IT", 
                    desc: "Новые инициативы по поддержке компаний, внедряющих собственные AI-решения. Юридические нюансы оформления.",
                    time: "2 дня назад"
                  },
                ].map((item, i) => (
                  <ScaleIn key={i} delay={i * 0.1}>
                    <div className="bg-white p-12 h-full flex flex-col justify-between group hover:bg-hub-black transition-all duration-700">
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-hub-emerald font-mono text-xs tracking-widest">{item.time}</span>
                          <div className="w-2 h-2 rounded-full bg-hub-emerald animate-pulse opacity-0 group-hover:opacity-100" />
                        </div>
                        <h4 className="text-2xl font-bold tracking-tighter uppercase group-hover:text-white transition-colors">{item.title}</h4>
                        <p className="text-hub-graphite/50 text-lg font-light leading-relaxed group-hover:text-white/40 transition-colors">{item.desc}</p>
                      </div>
                      <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-hub-emerald">
                        Читать в Telegram <ExternalLink size={12} />
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </Stagger>
          </div>
        </div>
      </section>

      {/* 5. CTA Section - Style from About Page */}
      <section className="py-60 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScaleIn delay={0}>
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-6xl md:text-[5.5rem] font-bold leading-none uppercase tracking-tighter text-hub-black">
                НУЖНО БОЛЬШЕ <br />
                <span className="text-hub-emerald">ЭКСПЕРТИЗЫ?</span>
              </h2>
              <p className="text-hub-graphite/40 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Подпишитесь на нашу рассылку или запишитесь на консультацию для решения ваших задач.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <ScaleIn delay={0.1}>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-hub-black text-white hover:bg-hub-emerald transition-all duration-500 rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest">
                      Обсудить проект
                    </Button>
                  </Link>
                </ScaleIn>
                <ScaleIn delay={0.2}>
                  <Link href="https://t.me/insitehub" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto border-2 border-hub-black text-hub-black hover:bg-hub-black hover:text-white transition-all duration-500 rounded-none h-20 px-12 text-lg font-bold uppercase tracking-widest bg-transparent">
                      Telegram Канал
                    </Button>
                  </Link>
                </ScaleIn>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}


