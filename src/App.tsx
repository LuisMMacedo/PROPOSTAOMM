/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, MessageSquare } from 'lucide-react';

export default function App() {
  const [personalization, setPersonalization] = useState({
    cliente: 'drajessicapadilha',
    data: '2026',
    footerInfo: 'Proposta exclusiva 2026'
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cliente = params.get('cliente');
    const data = params.get('data') || new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

    if (cliente) {
      setPersonalization({
        cliente,
        data,
        footerInfo: `Proposta exclusiva ${cliente} • ${data}`
      });
    } else if (data) {
      setPersonalization(prev => ({ ...prev, data }));
    }
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen selection:bg-amber selection:text-branco">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(196,98,10,0.1)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(196,98,10,0.06)_0%,transparent_50%),linear-gradient(180deg,#080808_0%,#0f0a07_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber to-transparent" />
        
        <div className="wrap relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-amber" />
            Proposta Estratégica • OMM • 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-bebas text-[clamp(56px,9vw,110px)] leading-[0.92] text-branco mb-2 tracking-wider"
          >
            SUA MARCA<span className="text-amber block">SENDO VISTA.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[17px] text-text-secondary max-w-[520px] mb-12 font-light leading-relaxed"
          >
            Um sistema mensal de autoridade visual que transforma presença digital em confiança — e confiança em cliente.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex gap-8 flex-wrap"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted">Preparado por</span>
              <span className="font-display text-[15px] font-bold text-branco">Miguel Macedo • OMM</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted">Destinado a</span>
              <span className="font-display text-[15px] font-bold text-branco">{personalization.cliente}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted">Data</span>
              <span className="font-display text-[15px] font-bold text-branco">{personalization.data}</span>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 right-8 [writing-mode:vertical-rl] text-[10px] tracking-[0.15em] uppercase text-muted flex items-center gap-2">
          Role para ver
          <div className="w-px h-12 bg-gradient-to-b from-amber to-transparent" />
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-preto py-20 border-t border-amber/15">
        <div className="wrap">
          <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber text-center mb-8">
            O método em prática
          </div>
          <div className="max-w-[480px] mx-auto border border-amber/20 overflow-hidden">
            <div className="relative pt-[177.78%]">
              <iframe 
                src="https://player.vimeo.com/video/1176647278?badge=0&autopause=0&player_id=0&app_id=58479" 
                className="absolute inset-0 w-full h-full"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                title="VIDEO HEADER OMM"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PERGUNTAS */}
      <section className="py-24 border-t border-amber/15">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-amber" />
            Antes de qualquer proposta
          </motion.div>
          <motion.h2 {...fadeUp} className="font-bebas text-[clamp(36px,5vw,56px)] leading-none text-branco mb-5 tracking-widest">
            Três perguntas que definem tudo
          </motion.h2>
          <motion.p {...fadeUp} className="text-base text-text-secondary max-w-[600px] leading-relaxed font-light mb-14">
            Antes de ligar qualquer câmera, eu preciso entender o seu negócio por dentro. São essas respostas que constroem o conteúdo certo — não o conteúdo bonito.
          </motion.p>
          
          <div className="flex flex-col gap-0.5">
            {[
              { num: '01', title: 'Quem exatamente compra de você?', desc: 'Não "todo mundo". Um perfil real — com um problema real, uma dor específica, uma razão concreta pra escolher você e não o concorrente. Quanto mais preciso isso estiver, mais certeiro o conteúdo.', highlight: true },
              { num: '02', title: 'O que trava essa compra?', desc: 'Qual é a objeção número um que faz o cliente hesitar antes de fechar? Medo, desconfiança, preço, comparação com concorrente? O conteúdo certo derruba essa objeção antes da pessoa te chamar.' },
              { num: '03', title: 'Como cada vídeo resolve isso?', desc: 'Cada post tem uma função no funil. Não é "aparecer". É construir confiança, derrubar objeção ou gerar uma ação. Sem essa clareza, o conteúdo existe mas não trabalha.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className={`bg-s1 border border-amber/15 p-8 relative overflow-hidden transition-colors hover:border-amber/35 group`}
              >
                <div className={`absolute left-0 top-0 w-0.5 h-full ${item.highlight ? 'bg-amber' : 'bg-s3'}`} />
                <div className="font-bebas text-[11px] tracking-[0.15em] text-amber mb-2.5 opacity-70">PERGUNTA {item.num}</div>
                <div className="font-display text-lg font-bold text-branco leading-tight mb-2">{item.title}</div>
                <div className="text-[13px] text-text-secondary leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 border-t border-amber/15">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-amber" />
            Como funciona
          </motion.div>
          <motion.h2 {...fadeUp} className="font-bebas text-[clamp(36px,5vw,56px)] leading-none text-branco mb-5 tracking-widest">
            O processo mensal
          </motion.h2>
          <motion.p {...fadeUp} className="text-base text-text-secondary max-w-[600px] leading-relaxed font-light mb-14">
            Quatro semanas com etapas definidas. Você foca no seu negócio — eu cuido de tudo que aparece no digital.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {[
              { num: '01', week: 'Semana 1', title: 'Estratégia e roteiros', desc: 'Reunião online de alinhamento. Entendo seu negócio, seu cliente e o que está travando a venda. A partir disso eu escrevo os roteiros do mês — você não precisa pensar em nada pra falar na câmera.' },
              { num: '02', week: 'Semana 2', title: 'Diária de captação', desc: 'Eu vou até você. Um bloco de gravação no seu espaço — câmera, luz, direção. Você aparece sabendo exatamente o que falar. O mês inteiro de conteúdo gravado de uma vez.' },
              { num: '03', week: 'Semana 3', title: 'Edição e entrega', desc: 'Edição completa com legendas, trilha e calendário de publicação. Tudo entregue pronto — você só aprova e publica.' },
              { num: '04', week: 'Semana 4', title: 'Métricas e próximo mês', desc: 'Reunião online de fechamento. Analisamos o que funcionou, o que ajustamos e alinhamos a estratégia do mês seguinte.' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="bg-s1 p-8"
              >
                <div className="font-bebas text-[56px] leading-none text-s3 mb-4">{step.num}</div>
                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-amber mb-2">{step.week}</div>
                <div className="font-display text-sm font-bold text-branco mb-2.5">{step.title}</div>
                <div className="text-[12px] text-text-secondary leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="py-24 border-t border-amber/15">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-amber" />
            O investimento
          </motion.div>
          <motion.h2 {...fadeUp} className="font-bebas text-[clamp(36px,5vw,56px)] leading-none text-branco mb-5 tracking-widest">
            Escolha o seu plano
          </motion.h2>
          <motion.p {...fadeUp} className="text-base text-text-secondary max-w-[600px] leading-relaxed font-light mb-14">
            Três níveis de presença. Cada um pensado para um momento diferente do negócio. Todos com estratégia, roteiro e direção.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5">
            {[
              { 
                tag: 'Plano Presença', 
                name: 'PRESENÇA', 
                price: '1.500', 
                period: 'por mês • contrato 6 meses', 
                items: ['4 posts estratégicos por mês', '4 Reels com roteiro e direção', 'Meia diária de captação (3h)', '1 look por gravação', 'Roteiros completos em todos os posts', 'Calendário de publicação'],
                note: 'Ideal para quem está construindo presença e quer começar com consistência.'
              },
              { 
                tag: 'Plano Performance', 
                name: 'PERFORMANCE', 
                price: '2.500', 
                period: 'por mês • contrato 6 meses', 
                items: ['8 posts estratégicos por mês', '8 Reels com roteiro e direção', 'Meia diária de captação (4h)', '1 a 2 looks por gravação', 'Fotos lifestyle e GIFs inclusos', 'Relatório mensal de métricas', 'Roteiros completos em todos os posts'],
                highlight: true,
                box: 'O plano mais contratado. Volume e estratégia equilibrados para quem quer crescer com consistência.',
                note: 'Contrato 6 meses. Saída sem multa após o 3º mês com 15 dias de aviso.'
              },
              { 
                tag: 'Plano Premium', 
                name: 'PREMIUM', 
                price: '5.000', 
                period: 'por mês • contrato 6 meses', 
                items: ['12 posts estratégicos por mês', 'Reels, fotos lifestyle, GIFs e vlog', 'Diária completa de captação (8h)', '2 a 3 looks por gravação', 'Análise semanal de métricas', 'Reunião mensal de estratégia', 'Roteiros em todos os formatos'],
                note: 'Para marcas que querem dominar o digital com presença consistente e estratégia completa.'
              }
            ].map((plano, i) => (
              <motion.div 
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className={`bg-s1 p-9 relative overflow-hidden transition-colors ${plano.highlight ? 'bg-s2 border border-amber/35' : ''}`}
              >
                {plano.highlight && <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber" />}
                <div className={`text-[10px] font-semibold tracking-[0.15em] uppercase mb-5 ${plano.highlight ? 'text-amber' : 'text-muted'}`}>{plano.tag}</div>
                <div className="font-bebas text-[28px] tracking-wider text-branco mb-1">{plano.name}</div>
                <div className="font-bebas text-[clamp(40px,5vw,56px)] leading-none text-branco mb-1 tracking-tight">
                  <span className="text-[0.4em] text-text-secondary font-sans font-light align-middle mr-1">R$</span>
                  {plano.price}
                </div>
                <div className="text-[12px] text-muted mb-7">{plano.period}</div>
                
                <ul className="flex flex-col gap-2.5 mb-7">
                  {plano.items.map((item, j) => (
                    <li key={j} className="text-[13px] text-text-secondary flex gap-2.5 items-start leading-snug">
                      <ArrowRight className="w-3 h-3 text-amber shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                {plano.box && (
                  <div className="bg-amber/10 border border-amber/25 p-4 mb-5 rounded-sm">
                    <p className="text-[12px] text-bege leading-relaxed">{plano.box}</p>
                  </div>
                )}
                
                <div className="mt-auto pt-4 border-t border-amber/15 text-[11px] text-muted leading-relaxed">
                  {plano.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IGNICAO */}
      <section className="py-24 border-t border-amber/15">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-amber" />
            Quer testar antes de se comprometer?
          </motion.div>
          <motion.h2 {...fadeUp} className="font-bebas text-[clamp(36px,5vw,56px)] leading-none text-branco mb-5 tracking-widest">
            Projeto Ignição
          </motion.h2>
          <motion.p {...fadeUp} className="text-base text-text-secondary max-w-[600px] leading-relaxed font-light mb-14">
            Para quem quer ver o resultado na prática antes de assinar um plano mensal.
          </motion.p>
          
          <motion.div 
            {...fadeUp}
            className="bg-s1 border border-amber/15 p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber to-transparent" />
            
            <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-amber mb-3">Projeto Pontual • Sem contrato</div>
                <div className="font-bebas text-[clamp(32px,4vw,48px)] tracking-wider text-branco leading-none">IGNIÇÃO</div>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed max-w-[480px]">
                  Um bloco de captação, 2 reels editados e entregues. Você vê o resultado, sente o processo e decide se quer continuar. Sem compromisso de longo prazo.
                </p>
              </div>
              <div className="lg:text-right">
                <div className="font-bebas text-[clamp(48px,6vw,72px)] leading-none text-amber tracking-tight">R$800</div>
                <div className="text-[11px] text-muted uppercase tracking-widest mt-1">pagamento único</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {[
                '1 a 2 horas de captação no seu espaço',
                '2 Reels editados com roteiro e direção',
                'Legendas, trilha e legendas dinâmicas',
                'Entrega em até 7 dias úteis',
                'Sem contrato mensal ou fidelidade',
                'Valor abatido no plano mensal se continuar'
              ].map((item, i) => (
                <div key={i} className="bg-s2 border border-amber/15 p-4 flex gap-2.5 items-start">
                  <ArrowRight className="w-3.5 h-3.5 text-amber shrink-0 mt-1" />
                  <span className="text-[13px] text-text-secondary leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 border-t border-amber/15">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-amber" />
            Por que a OMM
          </motion.div>
          <motion.h2 {...fadeUp} className="font-bebas text-[clamp(36px,5vw,56px)] leading-none text-branco mb-14 tracking-widest">
            O que muda na prática
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {[
              { title: 'Filmmaker estratégico', desc: 'Cada decisão de imagem tem função comercial. Enquadramento, tom, roteiro — tudo pensado para gerar resultado, não para parecer bonito.' },
              { title: 'Você nunca improvisa na câmera', desc: 'Cada vídeo tem roteiro escrito com gancho, desenvolvimento e CTA. Você sabe exatamente o que falar antes de ligar a câmera.' },
              { title: 'Um dia resolve o mês inteiro', desc: 'Gravamos tudo de uma vez em um bloco planejado. Seu negócio não para e o mês de conteúdo fica pronto.' },
              { title: 'Parceiro de imagem', desc: 'A OMM entra como sócio estratégico de imagem. Seu crescimento digital é o portfólio que me abre o próximo cliente.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="bg-s1 p-9"
              >
                <div className="font-display text-[15px] font-bold text-branco mb-2.5">{item.title}</div>
                <div className="text-[13px] text-text-secondary leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center relative overflow-hidden border-t border-amber/15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(196,98,10,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="wrap relative z-10">
          <motion.h2 {...fadeUp} className="font-bebas text-[clamp(48px,7vw,88px)] leading-[0.95] text-branco mb-6 tracking-wider">
            Próximo passo:<span className="text-amber block">uma conversa.</span>
          </motion.h2>
          <motion.p {...fadeUp} className="text-base text-text-secondary max-w-[480px] mx-auto mb-12 leading-relaxed font-light">
            Quero entender o momento do seu negócio e mostrar como o sistema funciona na prática. 20 minutos são suficientes.
          </motion.p>
          
          <motion.div {...fadeUp} className="flex flex-col items-center gap-2">
            <div className="font-display text-lg font-bold text-branco">Miguel Macedo</div>
            <div className="text-[12px] text-muted tracking-widest uppercase">Filmmaker Estratégico • OMM • Piratininga SP</div>
            <a 
              href="https://wa.me/5514991137404" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 mt-5 bg-amber/15 border border-amber/40 text-amber px-9 py-3.5 font-bebas text-xl tracking-widest rounded-sm transition-all hover:bg-amber/25 hover:border-amber/60"
            >
              <MessageSquare className="w-5 h-5" />
              WHATSAPP
            </a>
            <a 
              href="https://instagram.com/omacedomiguel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 text-[13px] text-muted tracking-wide flex items-center gap-1.5 hover:text-amber transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              @omacedomiguel
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-amber/15 py-8">
        <div className="wrap">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-bebas text-xl text-muted tracking-widest">OMM • Organização • Método • Movimento</div>
            <div className="text-[12px] text-muted">{personalization.footerInfo}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
