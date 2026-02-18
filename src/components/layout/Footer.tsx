import Link from "next/link";
import { ArrowRight, Mail, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/GSAPWrapper";

export default function Footer() {
  return (
    <footer className="bg-hub-black text-hub-light py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              INSITE <span className="text-hub-emerald">HUB</span>
            </Link>
            <p className="text-sm text-hub-light/50 max-w-xs leading-relaxed">
              Интеллектуальный консалтинг на стыке юриспруденции и технологий. Мы создаем правовые решения для будущего.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-hub-emerald font-bold mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-hub-emerald transition-colors">О нас</Link></li>
              <li><Link href="/services" className="text-sm hover:text-hub-emerald transition-colors">Услуги</Link></li>
              <li><Link href="/cases" className="text-sm hover:text-hub-emerald transition-colors">Кейсы</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-hub-emerald transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-hub-emerald font-bold mb-6">Контакты</h4>
            <ul className="space-y-3">
              <li className="text-sm text-hub-light/70">hello@insitehub.ai</li>
              <li className="text-sm text-hub-light/70">+7 (999) 000-00-00</li>
              <li className="text-sm text-hub-light/70">Москва, Сити, Башня Федерация</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-hub-emerald font-bold mb-6">Сообщество</h4>
            <ul className="space-y-3">
              <li><Link href="https://t.me/pravo_ai_crypto" className="text-sm hover:text-hub-emerald transition-colors">Telegram @pravo_ai_crypto</Link></li>
              <li><Link href="#" className="text-sm hover:text-hub-emerald transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="text-sm hover:text-hub-emerald transition-colors">VC.ru</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-[10px] text-hub-light/30 uppercase tracking-widest">
            2024 INSITE HUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] text-hub-light/30 hover:text-hub-light transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] text-hub-light/30 hover:text-hub-light transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
