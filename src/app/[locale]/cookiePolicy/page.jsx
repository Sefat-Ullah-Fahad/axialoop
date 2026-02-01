"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Cookie,
  ShieldCheck,
  BarChart3,
  MousePointer2,
  Users2,
  Mail,
} from "lucide-react";

const CookiePolicy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const sections = [
    {
      id: 1,
      title: "Cosa sono i cookie",
      icon: <Cookie className="text-[#00FF85]" size={24} />,
      content:
        "I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.",
    },
    {
      id: 2,
      title: "Tipologie di cookie utilizzati",
      icon: <ShieldCheck className="text-[#00FF85]" size={24} />,
      subsections: [
        {
          title: "2.1 Cookie tecnici essenziali",
          text: "Questi cookie sono necessari per il funzionamento del sito e non possono essere disattivati. Includono:",
          list: [
            "Cookie di sessione per la gestione del login",
            "Cookie per il salvataggio delle preferenze di consenso",
            "Cookie di sicurezza",
          ],
        },
        {
          title: "2.2 Cookie analitici",
          text: "Utilizziamo Google Analytics per raccogliere informazioni anonime su come gli utenti interagiscono con il nostro sito:",
          list: [
            "Statistiche di visualizzazione delle pagine",
            "Tempo di permanenza sul sito",
            "Provenienza geografica degli utenti",
          ],
        },
        {
          title: "2.3 Cookie di marketing",
          text: "Questi cookie vengono utilizzati per tracciare i visitatori attraverso i siti web. L'intento è quello di mostrare annunci pertinenti e coinvolgenti:",
          list: [
            "Cookie per il retargeting pubblicitario",
            "Cookie per l'analisi del comportamento degli utenti",
            "Cookie dei social media",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Durata dei cookie",
      icon: <BarChart3 className="text-[#00FF85]" size={24} />,
      content: "I cookie hanno durate diverse:",
      list: [
        {
          bold: "Cookie di sessione",
          text: "vengono eliminati alla chiusura del browser",
        },
        {
          bold: "Cookie persistenti",
          text: "rimangono attivi fino alla loro data di scadenza",
        },
      ],
    },
    {
      id: 4,
      title: "Come gestire i cookie",
      icon: <MousePointer2 className="text-[#00FF85]" size={24} />,
      content: "Puoi gestire le tue preferenze sui cookie in diversi modi:",
      list: [
        "Attraverso il banner dei cookie presente sul nostro sito",
        "Dalle impostazioni del tuo browser",
        "Utilizzando strumenti di opt-out specifici per i cookie di terze parti",
      ],
    },
    {
      id: 5,
      title: "Cookie di terze parti",
      icon: <Users2 className="text-[#00FF85]" size={24} />,
      content:
        "Il nostro sito utilizza servizi di terze parti che potrebbero impostare i loro cookie:",
      list: [
        "Google Analytics",
        "Google Ads",
        "Meta Pixel",
        "LinkedIn Insight Tag",
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#00FF85] selection:text-black">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Ultimo aggiornamento: 04/01/2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8 md:p-14 space-y-12 shadow-2xl"
          >
            {sections.map((section) => (
              <section key={section.id} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white italic">
                    {section.id}. {section.title}
                  </h2>
                </div>

                {section.content && (
                  <p className="text-gray-400 leading-relaxed ml-1">
                    {section.content}
                  </p>
                )}

                {section.subsections && (
                  <div className="grid gap-8 ml-2">
                    {section.subsections.map((sub, i) => (
                      <div key={i} className="space-y-3">
                        <h3 className="text-lg font-semibold text-white/90">
                          {sub.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {sub.text}
                        </p>
                        <ul className="grid gap-2">
                          {sub.list.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-3 text-sm text-gray-400"
                            >
                              <span className="w-1.5 h-1.5 bg-[#00FF85] rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.list && !section.subsections && (
                  <ul className="grid gap-3 ml-2">
                    {/* line 127: map function ekhon standard JS format e */}
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-[#00FF85] rounded-full mt-2 shrink-0" />
                        <span>
                          {typeof item === "string" ? (
                            item
                          ) : (
                            <>
                              <strong className="text-white">
                                {item.bold}:
                              </strong>{" "}
                              {item.text}
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="pt-10 border-t border-white/5">
              <h2 className="text-2xl font-bold text-white italic mb-4">
                6. Aggiornamenti della Cookie Policy
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ci riserviamo il diritto di modificare questa cookie policy in
                qualsiasi momento. Le modifiche saranno effettive dal momento
                della pubblicazione sul sito.
              </p>
            </section>

            <section className="pt-10 border-t border-white/5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white italic">
                    7. Contatti
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Per qualsiasi domanda relativa alla nostra cookie policy:
                  </p>
                </div>
                <a
                  href="mailto:contact@martes-ai.com"
                  className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#00FF85] transition-all duration-300 transform hover:scale-105"
                >
                  <Mail size={20} />
                  contact@martes-ai.com
                </a>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
