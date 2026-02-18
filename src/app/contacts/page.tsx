"use client";

import { Reveal } from "@/components/animations/GSAPWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactsPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="container mx-auto px-6 py-24">
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-hub-black mb-8">КОНТАКТЫ</h1>
          <p className="text-xl text-hub-graphite/60 max-w-2xl leading-relaxed text-left">
            Свяжитесь с нами для обсуждения вашего проекта или получения консультации от наших экспертов.
          </p>
        </Reveal>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div className="space-y-12 text-left">
            <Reveal direction="left">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-hub-emerald/10 flex items-center justify-center shrink-0">
                    <Mail className="text-hub-emerald" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-hub-graphite/60">hello@insitehub.ai</p>
                    <p className="text-hub-graphite/60">support@insitehub.ai</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-hub-emerald/10 flex items-center justify-center shrink-0">
                    <Phone className="text-hub-emerald" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">Телефон</h4>
                    <p className="text-hub-graphite/60">+7 (495) 000-00-00</p>
                    <p className="text-hub-graphite/60">+7 (999) 000-00-00</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-hub-emerald/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-hub-emerald" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">Адрес</h4>
                    <p className="text-hub-graphite/60">Москва, Пресненская наб., 12</p>
                    <p className="text-hub-graphite/60">Башня Федерация, 45 этаж</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="p-8 bg-hub-graphite text-white space-y-4">
                <h4 className="font-bold">МЫ В TELEGRAM</h4>
                <p className="text-white/50 text-sm">Самые свежие новости LegalTech и AI в нашем канале.</p>
                <Button className="bg-hub-emerald hover:opacity-90 text-white rounded-none w-full border-none">
                  Подписаться @pravo_ai_crypto
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="right">
            <div className="bg-white border border-hub-graphite/10 p-8 md:p-12 shadow-2xl text-left">
              <h3 className="text-3xl font-bold mb-8">НАПИШИТЕ НАМ</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Иван Иванов" className="rounded-none border-hub-graphite/10 focus:border-hub-emerald focus:ring-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input id="company" placeholder="ООО Инсайт" className="rounded-none border-hub-graphite/10 focus:border-hub-emerald focus:ring-0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" className="rounded-none border-hub-graphite/10 focus:border-hub-emerald focus:ring-0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full border border-hub-graphite/10 p-3 rounded-none focus:border-hub-emerald focus:outline-none focus:ring-0 text-sm"
                    placeholder="Опишите вашу задачу..."
                  />
                </div>
                <Button className="w-full bg-hub-emerald hover:opacity-90 text-white rounded-none h-14 text-lg flex gap-3 border-none group">
                  Отправить заявку
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
