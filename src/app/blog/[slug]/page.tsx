"use client";

import { Reveal, InvertCard, FadeIn, ScaleIn, SlideIn, Stagger, Parallax } from "@/components/animations/GSAPWrapper";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag, Share2, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

// Моковые данные для постов (для демонстрации)
const mockPostsData: Record<string, any> = {
  "ai-transforms-legal-services": {
    title: "Как AI меняет рынок юридических услуг в 2024 году",
    subtitle: "Анализируем ключевые тренды внедрения нейросетей в работу консалтинговых компаний. Какие роли исчезнут, а какие станут ключевыми?",
    content: `
      <p class="text-xl text-hub-graphite/70 leading-relaxed mb-12 font-light">Искусственный интеллект уже не будущее — это настоящее, которое трансформирует юридическую индустрию с беспрецедентентной скоростью. От автоматизации рутинных задач до предиктивной аналитики, AI-технологии меняют то, как юристы работают, консультируют и создают ценность для клиентов.</p>
      
      <h2 class="text-3xl font-bold text-hub-black mb-6 uppercase tracking-tight">Текущая ситуация на рынке</h2>
      <p class="mb-8">По данным McKinsey, до 25% работы юристов может быть автоматизировано с помощью существующих технологий. Это не означает замены юристов, а скорее их эволюцию — от исполнителей к стратегическим консультантам.</p>
      
      <div class="my-12 p-8 border-l-4 border-hub-emerald bg-hub-light italic text-xl text-hub-black font-medium">
        "AI не заменит юристов, но юристы, использующие AI, заменят тех, кто этого не делает." — Legal Tech Vision 2024
      </div>
      
      <h3 class="text-2xl font-bold text-hub-black mb-4">Ключевые области трансформации</h3>
      
      <h4 class="text-xl font-bold text-hub-emerald mb-2">1. Договорная работа</h4>
      <p class="mb-8">AI-системы уже сегодня способны анализировать тысячи страниц договоров за минуты, выявляя риски, несоответствия и возможности для оптимизации. Системы сокращают время на due diligence на 60-80%.</p>
      
      <h4 class="text-xl font-bold text-hub-emerald mb-2">2. Исследование и аналитика</h4>
      <p class="mb-8">Нейросети могут обрабатывать огромные массивы судебной практики, законодательства и регуляторных актов, предоставляя юристам релевантную информацию в реальном времени.</p>
      
      <h2 class="text-3xl font-bold text-hub-black mb-6 uppercase tracking-tight">Новые роли и компетенции</h2>
      <ul class="space-y-4 mb-12">
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-hub-emerald mt-2.5 shrink-0" />
          <span><strong>Legal Engineer</strong> — специалист на стыке права и технологий</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-hub-emerald mt-2.5 shrink-0" />
          <span><strong>Legal Data Scientist</strong> — аналитик юридических данных</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-hub-emerald mt-2.5 shrink-0" />
          <span><strong>AI Ethics Counsel</strong> — консультант по этике AI</span>
        </li>
      </ul>
    `,
    author: "Александр Петров",
    date: "2024-02-15",
    readTime: "12 мин",
    category: "AI",
    tags: ["LegalTech", "AI", "Трансформация"],
    image: "https://images.unsplash.com/photo-1551288049-be0da1e7dce1?w=1200&h=600&fit=crop"
  },
  "digital-assets-regulation": {
    title: "Правовое регулирование цифровых активов",
    subtitle: "Разбираемся в тонкостях нового законодательства о ЦФА и криптовалютах. Что нужно знать инвестору и разработчику?",
    content: `
      <p class="text-xl text-hub-graphite/70 leading-relaxed mb-12 font-light">Регулирование цифровых активов становится все более структурированным по всему миру. 2024 год ознаменовался принятием ключевых законодательных актов, которые определяют правила игры.</p>
      
      <h2 class="text-3xl font-bold text-hub-black mb-6 uppercase tracking-tight">Глобальный контекст</h2>
      <p class="mb-8">EU приняла MiCA regulation — первый всеобъемлющий регуляторный фреймворк для крипто-активов. Это создает правовую определенность для бизнеса.</p>
      
      <h3 class="text-2xl font-bold text-hub-black mb-4">Ключевые изменения</h3>
      <p class="mb-8">Введение обязательного лицензирования для провайдеров услуг и строгие требования к прозрачности выпускаемых токенов.</p>
    `,
    author: "Мария Иванова",
    date: "2024-02-10",
    readTime: "8 мин",
    category: "Криптовалюты",
    tags: ["Регулирование", "ЦФА", "Web3"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop"
  },
  "tax-risks-neural-networks": {
    title: "Налоговые риски при использовании нейросетей",
    subtitle: "Почему важно правильно оформлять использование ИИ в производственных процессах. Судебная практика и рекомендации ФНС.",
    content: `
      <p class="text-xl text-hub-graphite/70 leading-relaxed mb-12 font-light">Внедрение нейросетей в бизнес-процессы создает новые налоговые риски, которые многие компании упускают из виду.</p>
      
      <h2 class="text-3xl font-bold text-hub-black mb-6 uppercase tracking-tight">Новые вызовы</h2>
      <p class="mb-8">Вопросы амортизации AI-активов и налогообложения трансграничных лицензионных платежей за использование моделей становятся критическими.</p>
    `,
    author: "Дмитрий Соколов",
    date: "2024-02-05",
    readTime: "10 мин",
    category: "LegalTech",
    tags: ["Налоги", "AI", "Compliance"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop"
  },
  "ma-uncertainty-protection": {
    title: "M&A в эпоху неопределенности: защита сделок",
    subtitle: "Как структурировать сделки слияния и поглощения, когда рынки лихорадит. Инструменты защиты покупателя и продавца.",
    content: `
      <p class="text-xl text-hub-graphite/70 leading-relaxed mb-12 font-light">В условиях высокой волатильности рынков и геополитической нестабильности классические подходы к M&A сделкам требуют пересмотра.</p>
      <h2 class="text-3xl font-bold text-hub-black mb-6 uppercase tracking-tight">Гибкость в структурировании</h2>
      <p class="mb-8">Мы видим рост популярности механизмов отложенных платежей (earn-outs) и специфических условий закрытия сделки, которые минимизируют риски для обеих сторон.</p>
    `,
    author: "Евгений Романов",
    date: "2024-02-01",
    readTime: "15 мин",
    category: "Кейсы",
    tags: ["M&A", "Инвестиции", "Риски"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
  },
  "real-estate-tokenization": {
    title: "Токенизация недвижимости: правовой гайд",
    subtitle: "Разбираем юридические аспекты перевода физических активов в цифровой формат на блокчейне. Плюсы, минусы и подводные камни.",
    content: `
      <p class="text-xl text-hub-graphite/70 leading-relaxed mb-12 font-light">Токенизация недвижимости открывает новые горизонты для инвесторов, обеспечивая ликвидность там, где ее раньше не было.</p>
      <h2 class="text-3xl font-bold text-hub-black mb-6 uppercase tracking-tight">Юридическая оболочка</h2>
      <p class="mb-8">Ключевой вызов — это синхронизация цифрового реестра с государственными системами регистрации прав собственности. Мы разработали модель, которая позволяет легально реализовать этот переход.</p>
    `,
    author: "Ирина Власова",
    date: "2024-01-28",
    readTime: "11 мин",
    category: "Криптовалюты",
    tags: ["Blockchain", "Недвижимость", "FinTech"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = mockPostsData[slug] || mockPostsData["ai-transforms-legal-services"];
  
  const relatedPosts = Object.entries(mockPostsData)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({ ...value, slug: key }));

  return (
    <div className="flex flex-col gap-0 pb-0 overflow-x-hidden bg-white">
      {/* 1. Hero Section - Style from About Page */}
      <section className="bg-hub-graphite text-white pt-48 pb-64 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <Parallax speed={0.3}>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute -left-32 bottom-20 w-64 h-64 bg-hub-emerald/3 rounded-full blur-[80px]" />
        </Parallax>
        
        <div className="container mx-auto px-6 relative z-10">
          <SlideIn direction="left" delay={0}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-hub-emerald font-bold uppercase tracking-[0.4em] text-[10px] mb-12 hover:gap-4 transition-all duration-300 group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Назад в блог
            </Link>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">{post.category}</span>
              <div className="h-px w-12 bg-white/10" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Insights</span>
            </div>
          </SlideIn>
          
          <ScaleIn delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-12 leading-[0.9] uppercase max-w-5xl">
              {post.title}
            </h1>
          </ScaleIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center gap-12 text-white/40 border-t border-white/5 pt-12">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-hub-emerald block">Автор</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white">{post.author}</span>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-hub-emerald block">Дата</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white">{new Date(post.date).toLocaleDateString('ru-RU')}</span>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-hub-emerald block">Время</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white">{post.readTime} чтения</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="relative z-20 -mt-32 pb-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="w-full lg:w-2/3">
              <FadeIn>
                <div className="bg-white border border-hub-graphite/5 overflow-hidden mb-20 shadow-2xl shadow-hub-black/5">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8 md:p-16 lg:p-24">
                    <div 
                      className="prose prose-xl prose-hub max-w-none 
                        prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-bold prose-headings:text-hub-black
                        prose-p:leading-relaxed prose-p:text-hub-graphite/70 prose-p:font-light prose-p:text-xl
                        prose-blockquote:border-l-4 prose-blockquote:border-hub-emerald prose-blockquote:bg-hub-light prose-blockquote:p-12 
                        prose-blockquote:not-italic prose-blockquote:text-2xl prose-blockquote:font-medium prose-blockquote:text-hub-black
                        prose-strong:font-bold prose-strong:text-hub-black"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    
                    <div className="mt-24 pt-12 border-t border-hub-graphite/10 flex flex-wrap gap-3">
                      {post.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-4 py-2 bg-hub-light text-hub-graphite/40 text-[10px] font-bold uppercase tracking-[0.2em] border border-hub-graphite/5 hover:border-hub-emerald hover:text-hub-emerald transition-colors cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/3 sticky top-32 space-y-12">
              {/* Share Block */}
              <div className="space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-hub-emerald border-b border-hub-graphite/5 pb-6">Поделиться</h4>
                <div className="flex gap-4">
                  <button className="w-12 h-12 border border-hub-graphite/10 flex items-center justify-center text-hub-graphite hover:bg-hub-black hover:text-white hover:border-hub-black transition-all duration-500">
                    <Share2 size={18} />
                  </button>
                  <button className="w-12 h-12 border border-hub-graphite/10 flex items-center justify-center text-hub-graphite hover:bg-hub-black hover:text-white hover:border-hub-black transition-all duration-500">
                    <MessageCircle size={18} />
                  </button>
                </div>
              </div>
              
              {/* Newsletter - Integrated Style */}
              <div className="bg-hub-graphite p-12 text-white relative overflow-hidden group border border-white/5">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="relative z-10 space-y-10">
                  <div className="space-y-4">
                    <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none">STAY <br /><span className="text-hub-emerald">INSIDE</span></h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">Эксклюзивная аналитика LegalTech и AI в вашей почте.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="EMAIL"
                      className="w-full bg-white/5 border border-white/10 px-6 py-5 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-hub-emerald transition-colors placeholder:text-white/10"
                    />
                    <Button className="w-full bg-hub-emerald text-white hover:bg-white hover:text-hub-black rounded-none h-16 font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500">
                      Подписаться
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Posts - Style from Experts Grid */}
      <section className="py-40 bg-hub-light border-t border-hub-graphite/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <SlideIn direction="left">
              <div className="space-y-6">
                <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold">More Context</h4>
                <h2 className="text-5xl md:text-7xl font-bold text-hub-black tracking-tighter uppercase leading-none">ЧИТАЙТЕ <br /><span className="text-hub-graphite/30">ДАЛЕЕ</span></h2>
              </div>
            </SlideIn>
            <Link href="/blog" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-hub-graphite/40 hover:text-hub-black transition-colors">
              Все материалы <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <Stagger stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hub-graphite/10 border border-hub-graphite/10">
              {relatedPosts.map((item, i) => (
                <ScaleIn key={i} delay={i * 0.1}>
                  <Link href={`/blog/${item.slug}`} className="group relative aspect-[4/5] overflow-hidden bg-white block">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hub-black via-hub-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-700" />
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-between z-10 text-left">
                      <div className="flex justify-between items-start">
                        <span className="text-hub-emerald text-[10px] uppercase tracking-[0.3em] font-bold px-3 py-1 bg-hub-emerald/5 border border-hub-emerald/20 backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                      
                      <div className="space-y-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter leading-tight">{item.title}</h3>
                        <div className="h-px w-12 bg-hub-emerald group-hover:w-full transition-all duration-700" />
                        <div className="flex items-center gap-3 text-hub-emerald text-[10px] font-bold uppercase tracking-[0.3em] pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                          Читать материал <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
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

      {/* 4. CTA Block - Style from About Page */}
      <section className="py-60 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScaleIn delay={0}>
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-6xl md:text-[5.5rem] font-bold leading-none uppercase tracking-tighter text-hub-black">
                НУЖЕН <br />
                <span className="text-hub-emerald">ЭКСПЕРТНЫЙ ВЗГЛЯД?</span>
              </h2>
              <p className="text-hub-graphite/40 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Закажите консультацию или аналитический разбор вашей задачи.
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
