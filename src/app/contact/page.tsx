"use client";

import { Reveal } from "@/components/animations/GSAPWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Send, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-0 pb-24 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="bg-hub-graphite text-white py-40 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-hub-emerald font-bold mb-8">Контактная информация</h4>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tight mb-12 leading-[0.85]">ОБСУДИТЬ <br /><span className="text-hub-emerald">ПРОЕКТ</span></h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed">
              Готовы к трансформации вашего бизнеса? Свяжитесь с нами любым удобным способом или заполните бриф.
            </p>
          </Reveal>
        </div>
        
        {/* Декоративный элемент */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
        </div>
      </section>

      {/* 2. Контент */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Левая колонка: Форма */}
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <div className="bg-hub-light p-10 md:p-16 border border-hub-graphite/5">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-hub-graphite/40">Ваше имя</Label>
                          <Input id="name" placeholder="Иван Иванов" className="bg-white border-hub-graphite/10 rounded-none h-14" required />
                        </div>
                        <div className="space-y-4">
                          <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-hub-graphite/40">Email</Label>
                          <Input id="email" type="email" placeholder="example@mail.com" className="bg-white border-hub-graphite/10 rounded-none h-14" required />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <Label htmlFor="company" className="text-xs uppercase tracking-widest font-bold text-hub-graphite/40">Компания</Label>
                        <Input id="company" placeholder="Название вашей компании" className="bg-white border-hub-graphite/10 rounded-none h-14" />
                      </div>

                      <div className="space-y-4">
                        <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-hub-graphite/40">Сообщение или описание задачи</Label>
                        <Textarea id="message" placeholder="Расскажите кратко о вашем проекте..." className="bg-white border-hub-graphite/10 rounded-none min-h-[150px] resize-none" required />
                      </div>

                      <Button type="submit" className="w-full bg-hub-black hover:bg-hub-emerald text-white rounded-none h-20 text-xl font-bold uppercase tracking-widest transition-colors flex gap-4 group">
                        Отправить заявку
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                      
                      <p className="text-xs text-hub-graphite/40 text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                      </p>
                    </form>
                  ) : (
                    <div className="py-20 text-center space-y-8">
                      <div className="w-24 h-24 bg-hub-emerald/10 text-hub-emerald rounded-full flex items-center justify-center mx-auto">
                        <Send size={40} />
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-4xl font-bold uppercase">Спасибо!</h2>
                        <p className="text-xl text-hub-graphite/60">Ваша заявка принята. Мы свяжемся с вами в течение рабочего дня.</p>
                      </div>
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="border-hub-black border-2 rounded-none h-14 px-8 font-bold uppercase tracking-widest">
                        Отправить еще раз
                      </Button>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Правая колонка: Инфо */}
            <div className="lg:col-span-5 space-y-16">
              <Reveal direction="right">
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold uppercase">Прямые контакты</h3>
                    <div className="h-1 w-20 bg-hub-emerald" />
                  </div>

                  <div className="space-y-10">
                    <div className="flex gap-6 group">
                      <div className="w-16 h-16 bg-hub-light flex items-center justify-center group-hover:bg-hub-emerald group-hover:text-white transition-colors shrink-0">
                        <Mail size={24} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-widest font-bold text-hub-graphite/40">Электронная почта</p>
                        <a href="mailto:hello@insitehub.ru" className="text-2xl font-bold hover:text-hub-emerald transition-colors">hello@insitehub.ru</a>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-16 h-16 bg-hub-light flex items-center justify-center group-hover:bg-hub-emerald group-hover:text-white transition-colors shrink-0">
                        <Phone size={24} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-widest font-bold text-hub-graphite/40">Телефон</p>
                        <a href="tel:+74950000000" className="text-2xl font-bold hover:text-hub-emerald transition-colors">+7 (495) 000-00-00</a>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-16 h-16 bg-hub-light flex items-center justify-center group-hover:bg-hub-emerald group-hover:text-white transition-colors shrink-0">
                        <MessageSquare size={24} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-widest font-bold text-hub-graphite/40">Telegram</p>
                        <a href="https://t.me/insitehub" className="text-2xl font-bold hover:text-hub-emerald transition-colors">@insitehub_expert</a>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-16 h-16 bg-hub-light flex items-center justify-center group-hover:bg-hub-emerald group-hover:text-white transition-colors shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-widest font-bold text-hub-graphite/40">Офис</p>
                        <p className="text-2xl font-bold">Москва-Сити, <br />Башня Федерация</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.2}>
                <div className="bg-hub-black p-10 text-white space-y-6">
                  <h4 className="text-xl font-bold uppercase tracking-tight">Бесплатная консультация</h4>
                  <p className="text-white/50 leading-relaxed">
                    Первая стратегическая сессия (30 минут) проводится бесплатно. Мы разберем ваш запрос и предложим варианты решения.
                  </p>
                  <div className="pt-4">
                    <Button variant="link" className="text-hub-emerald p-0 font-bold uppercase tracking-widest flex gap-2 items-center hover:no-underline hover:opacity-70">
                      Забронировать время <ArrowRight size={18} />
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
