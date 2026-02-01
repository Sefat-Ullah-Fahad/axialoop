"use client";
import React from "react";
import { motion } from "framer-motion";

const TerminiDiServizio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Header section typically goes here */}

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div {...fadeIn} className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Termini di Servizio</h1>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              ULTIMO AGGIORNAMENTO: 04/01/2026
            </p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 space-y-12 text-gray-300 leading-relaxed shadow-2xl"
          >
            {/* 1. Introduzione */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                1. Introduzione
              </h2>
              <p className="text-sm">
                Le presenti Condizioni Generali di Servizio ("Condizioni
                Generali" o "Contratto") disciplinano i termini e le condizioni
                per l'uso del software e dei servizi Martes AI offerti in
                modalità SaaS ("Servizi") da Martes AI, accessibili attraverso
                il sito web{" "}
                <a
                  href="https://www.martes-ai.com"
                  className="text-green-400 underline"
                >
                  https://www.martes-ai.com
                </a>{" "}
                ("Piattaforma").
              </p>
            </section>

            {/* 2. Definizioni */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                2. Definizioni
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-white">"Cliente":</strong> La persona
                  fisica o giuridica che utilizza i Servizi di Martes AI.
                </li>
                <li>
                  <strong className="text-white">"Software":</strong> Il
                  software basato su AI fornito da Martes AI, inclusi chatbot,
                  automazioni e strumenti di analisi.
                </li>
                <li>
                  <strong className="text-white">"Servizi":</strong> L'insieme
                  delle funzionalità offerte, inclusi chatbot, automazioni e
                  consulenze AI.
                </li>
                <li>
                  <strong className="text-white">"Dati del Cliente":</strong>{" "}
                  Qualsiasi informazione o contenuto caricato dal Cliente sulla
                  Piattaforma.
                </li>
              </ul>
            </section>

            {/* 3. Oggetto del Contratto */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                3. Oggetto del Contratto
              </h2>
              <p className="text-sm">
                Martes AI concede al Cliente una licenza d'uso non esclusiva,
                non trasferibile e non sub-licenziabile per accedere e
                utilizzare i Servizi.
              </p>
            </section>

            {/* 4. Registrazione e Accesso */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                4. Registrazione e Accesso alla Piattaforma
              </h2>
              <p className="text-sm">
                Gli utenti non creano un account su Martes AI. Per accedere ai
                Servizi, il Cliente può contattarci via email o prenotare un
                appuntamento tramite Calendly.
              </p>
            </section>

            {/* 5. Abbonamenti */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                5. Abbonamenti, Pagamenti e Disdetta
              </h2>
              <div className="pt-2">
                <h3 className="text-lg font-medium text-white mb-2">
                  5.1 Modalità di Pagamento
                </h3>
                <p className="text-sm mb-2">
                  Martes AI offre soluzioni software con:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Pagamenti one-shot (una tantum)</li>
                  <li>Collaborazioni con rinnovo mensile o annuale</li>
                </ul>
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-medium text-white mb-2">
                  5.2 Disdetta e Rimborsi
                </h3>
                <p className="text-sm">
                  Le condizioni di disdetta e rimborsi sono stabilite
                  individualmente nel contratto fornito al Cliente.
                </p>
              </div>
            </section>

            {/* 6. Proprietà Intellettuale */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                6. Proprietà Intellettuale
              </h2>
              <p className="text-sm">
                Martes AI detiene tutti i diritti sul Software, inclusi codice
                sorgente e algoritmi. Il Cliente non può copiare, modificare o
                distribuire il Software senza autorizzazione.
              </p>
            </section>

            {/* 7. Limitazione di Responsabilità */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                7. Limitazione di Responsabilità
              </h2>
              <p className="text-sm">
                Martes AI fornisce i Servizi "così come sono" senza alcuna
                garanzia di risultato. Il Cliente è responsabile dei contenuti
                generati tramite il Software.
              </p>
            </section>

            {/* 8. Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                8. Trattamento dei Dati e Privacy
              </h2>
              <p className="text-sm">
                L'informativa privacy è disponibile su{" "}
                <a
                  href="https://www.martes-ai.com/privacy"
                  className="text-green-400 underline"
                >
                  https://www.martes-ai.com/privacy
                </a>
                .
              </p>
            </section>

            {/* 9. Modifiche */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                9. Modifiche ai Termini di Servizio
              </h2>
              <p className="text-sm">
                Martes AI si riserva il diritto di modificare le presenti
                Condizioni Generali con un preavviso di 30 giorni. Se il Cliente
                non accetta le modifiche, può recedere dal contratto senza
                penalità.
              </p>
            </section>

            {/* 10. Forza Maggiore */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                10. Forza Maggiore
              </h2>
              <p className="text-sm">
                Martes AI non sarà responsabile per ritardi o interruzioni dei
                Servizi causati da eventi di forza maggiore, inclusi disastri
                naturali o guasti tecnologici.
              </p>
            </section>

            {/* 11. Legge Applicabile */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                11. Legge Applicabile e Foro Competente
              </h2>
              <p className="text-sm">
                Le presenti Condizioni Generali sono regolate dalla legge
                italiana. Per eventuali controversie, il foro competente è Roma.
              </p>
            </section>

            {/* 12. Contatti */}
            <section className="pt-10 border-t border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Contatti
              </h2>
              <p className="text-sm mb-6">
                Per informazioni o assistenza, contattaci via email
                all'indirizzo:{" "}
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

      {/* Footer section typically goes here */}
    </div>
  );
};

export default TerminiDiServizio;
