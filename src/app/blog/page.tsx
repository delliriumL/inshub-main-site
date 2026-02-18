"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Reveal, InvertCard } from "@/components/animations/GSAPWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Mail, Bell } from "lucide-react";

// Типы для постов WordPress
interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
  category: string;
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
            link: "#",
            date: "2024-02-15T12:00:00",
            category: "AI",
          },
          {
            id: 2,
            title: { rendered: "Правовое регулирование цифровых активов" },
            excerpt: { rendered: "Разбираемся в тонкостях нового законодательства о ЦФА и криптовалютах. Что нужно знать инвестору и разработчику?" },
            link: "#",
            date: "2024-02-10T10:30:00",
            category: "Криптовалюты",
          },
          {
            id: 3,
            title: { rendered: "Налоговые риски при использовании нейросетей" },
            excerpt: { rendered: "Почему важно правильно оформлять использование ИИ в производственных процессах. Судебная практика и рекомендации ФНС." },
            link: "#",
            date: "2024-02-05T09:15:00",
            category: "LegalTech",
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
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="bg-hub-light py-40 relative border-b border-hub-graphite/5 text-left">
        <div className="container mx-auto px-6">
          <Reveal>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">Медиа</h4>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-hub-black mb-12 leading-[0.85]">БЛОГ <br /><span className="text-hub-emerald">ЭКСПЕРТИЗЫ</span></h1>
            <p className="text-xl md:text-2xl text-hub-graphite/60 max-w-2xl leading-relaxed">
              Аналитика, инсайды и практические рекомендации на стыке права и технологий.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Категории (Фильтр) */}
      <section className="py-12 bg-white border-b border-hub-graphite/10 sticky top-20 z-40">
        <div className="container mx-auto px-6 text-left">
          <div className="flex flex-wrap gap-6 md:gap-12">
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
      </section>

      {/* 3. Лента статей */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
            {loading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="h-[500px] bg-hub-graphite/5 animate-pulse" />
              ))
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post, i) => (
                <Reveal key={post.id} delay={i * 0.1}>
                  <InvertCard className="h-[500px] flex flex-col justify-between text-left p-12 border-none">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-hub-emerald font-bold uppercase tracking-widest">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-hub-graphite/30 font-bold">
                          {new Date(post.date).toLocaleDateString('ru-RU')}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold leading-tight group-hover:text-white transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      <div className="text-lg text-hub-graphite/60 leading-relaxed group-hover:text-white/60 line-clamp-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </div>
                    <Link href={post.link} className="accent-icon mt-8 flex items-center gap-4 font-bold text-sm uppercase tracking-widest group">
                      Читать статью
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </InvertCard>
                </Reveal>
              ))
            ) : (
              <div className="col-span-full py-24 text-center text-hub-graphite/40 uppercase font-bold tracking-widest">
                Статей в этой категории пока нет
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Блок Telegram */}
      <section className="bg-hub-light py-40 border-y border-hub-graphite/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 space-y-12 text-left">
              <Reveal direction="left">
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter">TELEGRAM <br /><span className="text-hub-emerald">INSIGHTS</span></h2>
                  <p className="text-xl text-hub-graphite/60 leading-relaxed">
                    Подписывайтесь на наш канал <span className="text-hub-emerald font-bold">@pravo_ai_crypto</span>. Короткие заметки, оперативные новости и экспертное мнение в реальном времени.
                  </p>
                </div>
                <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none h-20 px-12 text-lg border-none flex gap-4 mt-8 shadow-xl shadow-hub-emerald/20">
                  Подписаться на канал
                  <ExternalLink size={20} />
                </Button>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { text: "Почему AI-агенты скоро заменят младших юристов в международных компаниях? Разбор кейса Goldman Sachs.", time: "2 часа назад" },
                { text: "Как безопасно структурировать сделку через стейблкоины в 2024 году. Краткий гайд по новым правилам.", time: "5 часов назад" },
                { text: "ТОП-5 нейросетей для автоматизации комплаенс-проверок. Тестируем российские и зарубежные решения.", time: "Вчера" },
                { text: "Инсайд: Новые льготы для IT-компаний, внедряющих российские LLM-модели.", time: "2 дня назад" }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1} className="bg-white p-10 border border-hub-graphite/10 flex flex-col justify-between text-left hover:shadow-xl transition-shadow">
                  <p className="text-lg text-hub-graphite/80 leading-relaxed italic">"{item.text}"</p>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-hub-emerald animate-pulse" />
                      <span className="text-[10px] text-hub-emerald font-bold uppercase tracking-widest">Telegram Post</span>
                    </div>
                    <span className="text-[10px] text-hub-graphite/30 font-bold">{item.time}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

