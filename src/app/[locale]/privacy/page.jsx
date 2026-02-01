"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* <Header /> */}

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div {...fadeIn} className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Ultimo aggiornamento: 04/01/2026
            </p>
          </motion.div>

          {/* Policy Content Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 space-y-12 text-gray-300 leading-relaxed shadow-2xl"
          >
            {/* Intro Section */}
            <section className="text-gray-300">
              <p>
                Questa Privacy Policy descrive le nostre politiche e procedure
                relative alla raccolta, all'uso e alla divulgazione delle
                informazioni quando si utilizza il Servizio e spiega i diritti
                relativi alla privacy e come la legge li protegge.
              </p>
              <p className="pt-5">
                Utilizziamo i Suoi dati personali per fornire e migliorare il
                Servizio. Utilizzando il Servizio, Lei acconsente alla raccolta
                e all'uso delle informazioni in conformità con questa Privacy
                Policy.
              </p>
            </section>

            {/* Interpretazione e Definizioni */}
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">
                Interpretazione e Definizioni
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white">
                  Interpretazione
                </h3>
                <p className="text-gray-400">
                  Le parole il cui iniziale è in maiuscolo hanno significati
                  definiti nelle seguenti condizioni. Le definizioni seguenti
                  avranno lo stesso significato indipendentemente dal fatto che
                  compaiano al singolare o al plurale.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-medium text-white">Definizioni</h3>
                <p className="text-gray-400">
                  Ai fini della presente Privacy Policy:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-sm text-gray-400">
                  <li>
                    <strong className="text-white">Account:</strong> indica un
                    account unico creato per consentirLe l'accesso al nostro
                    Servizio o a parti di esso.
                  </li>
                  <li>
                    <strong className="text-white">Affiliate:</strong> indica
                    un'entità che controlla, è controllata da o è sotto il
                    controllo comune di una parte.
                  </li>
                  <li>
                    <strong className="text-white">Company:</strong> (indicata
                    come "la Società", "Noi", "Ci" o "Nostro") si riferisce a
                    Martes AI.
                  </li>
                  <li>
                    <strong className="text-white">Cookies:</strong> sono
                    piccoli file collocati sul Suo dispositivo.
                  </li>
                  <li>
                    <strong className="text-white">Country:</strong> si
                    riferisce a: Italia.
                  </li>
                  <li>
                    <strong className="text-white">Device:</strong> indica
                    qualsiasi dispositivo che può accedere al Servizio.
                  </li>
                  <li>
                    <strong className="text-white">Personal Data:</strong>{" "}
                    indica qualsiasi informazione che riguarda un individuo
                    identificato o identificabile.
                  </li>
                  <li>
                    <strong className="text-white">Service:</strong> si
                    riferisce al Sito Web.
                  </li>
                  {/* Additional Definitions from image_2683f6.jpg */}
                  <li>
                    <strong className="text-white">Service Provider:</strong>{" "}
                    indica qualsiasi persona fisica o giuridica che tratta i
                    dati per conto della Società.
                  </li>
                  <li>
                    <strong className="text-white">Usage Data:</strong> indica i
                    dati raccolti automaticamente.
                  </li>
                  <li>
                    <strong className="text-white">Website:</strong> si
                    riferisce a Martes AI, accessibile da{" "}
                    <a
                      href="https://www.martes-ai.com/"
                      className="text-green-400 underline"
                    >
                      https://www.martes-ai.com/
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">You:</strong> indica
                    l'individuo che accede o utilizza il Servizio.
                  </li>
                </ul>
              </div>
            </section>

            {/* Raccolta e Utilizzo Section */}
            <section className="space-y-6 pt-10 border-t border-white/5">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Raccolta e Utilizzo dei Suoi Dati Personali
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Tipologie di Dati Raccolti
                </h3>
                <h4 className="text-lg font-medium text-white">
                  Dati Personali
                </h4>
                <p className="text-sm text-gray-400">
                  Mentre utilizza il nostro Servizio, potremmo chiederLe di
                  fornirci alcune informazioni personali identificabili che
                  possono essere utilizzate per contattarLa o identificarLa. Le
                  informazioni personali identificabili possono includere:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                  <li>Indirizzo email</li>
                  <li>Nome e cognome</li>
                  <li>Usage Data</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-medium text-white">Usage Data</h4>
                <p className="text-sm text-gray-400">
                  I Dati di Utilizzo vengono raccolti automaticamente durante
                  l'uso del Servizio.
                </p>
                <p className="text-sm text-gray-400">
                  Possono includere informazioni come l'indirizzo IP del
                  dispositivo, tipo di browser, versione del browser, pagine
                  visitate, data e ora, identificatori del dispositivo.
                </p>
              </div>
            </section>

            {/* New Tracking and Cookies Section from image_2683f6.jpg */}
            <section className="space-y-6 pt-10 border-t border-white/5">
              <h2 className="text-3xl font-semibold text-white">
                Tecnologie di Tracciamento e Cookies
              </h2>
              <p className="text-sm text-gray-400">
                Utilizziamo Cookie e tecnologie di tracciamento simili.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-sm text-gray-400">
                <li>
                  <strong className="text-white">Cookies Necessari:</strong>{" "}
                  Essenziali per il servizio.
                </li>
                <li>
                  <strong className="text-white">
                    Cookies di Funzionalità:
                  </strong>{" "}
                  Per ricordare le scelte.
                </li>
              </ul>
              <p className="text-sm text-gray-400">
                Per ulteriori informazioni, visita la nostra{" "}
                <a href="#" className="text-green-400 underline">
                  Cookie Policy
                </a>
                .
              </p>
            </section>

            {/* Utilizzo dei Dati Section */}
            <section className="space-y-4 pt-10 border-t border-white/5">
              <h2 className="text-3xl font-semibold text-white">
                Utilizzo dei Suoi Dati Personali
              </h2>
              <p className="text-sm text-gray-400">
                La Società può utilizzare i Dati Personali per:
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00FF85] rounded-full"></span>
                  Fornire e mantenere il Servizio
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00FF85] rounded-full"></span>
                  Gestire il Suo Account
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00FF85] rounded-full"></span>
                  Esecuzione di un contratto
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00FF85] rounded-full"></span>
                  ContattarLa via email o altri canali
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00FF85] rounded-full"></span>
                  Fornire notizie e offerte
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00FF85] rounded-full"></span>
                  Gestire le Sue richieste
                </li>
              </ul>
            </section>

            {/* Conservazione, Trasferimento, Modifiche */}
            <section className="space-y-8 pt-10 border-t border-white/5">
              <div>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Conservazione dei Dati
                </h2>
                <p className="text-sm text-gray-400">
                  Conserveremo i dati solo per il tempo necessario agli scopi
                  indicati এবং per adempiere agli obblighi di legge.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Trasferimento dei Dati
                </h2>
                <p className="text-sm text-gray-400">
                  I dati sono trattati presso gli uffici della Società e possono
                  essere trasferiti su computer fuori dalla Sua giurisdizione.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Modifiche alla Privacy Policy
                </h2>
                <p className="text-sm text-gray-400">
                  Potremmo aggiornare la nostra Privacy Policy. Informeremo
                  delle modifiche su questa pagina.
                </p>
              </div>
            </section>

            {/* Contact Section - Updated to text link like image_2683f6.jpg */}
            <section className="pt-10 border-t border-white/10">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Contattaci
              </h2>
              <p className="text-sm text-gray-400">
                Per domande sulla Privacy Policy: <br />
                Email:{" "}
                <a
                  href="mailto:contact@martes-ai.com"
                  className="text-green-400 hover:underline"
                >
                  contact@martes-ai.com
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default PrivacyPolicy;
