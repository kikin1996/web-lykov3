export const metadata = {
  title: 'Ochrana osobních údajů | Luční Háj',
  description: 'Informace o zpracování osobních údajů v souladu s GDPR.',
}

export default function GdprPage() {
  return (
    <main className="bg-neutral-offWhite min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-neutral-darkNavy mb-2 font-serif">
          Ochrana osobních údajů
        </h1>
        <p className="text-neutral-mediumGray mb-10 text-sm">
          Platné od 1. 1. 2024 | v souladu s nařízením EU 2016/679 (GDPR)
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-neutral-darkNavy">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Správce osobních údajů</h2>
            <p className="text-neutral-mediumGray leading-7">
              Správcem osobních údajů je společnost <strong>NIKASTAR s.r.o.</strong>, provozovatel
              projektu Luční Háj – Domy Pecerady (domypecerady.cz). Kontaktní osoba pro záležitosti
              ochrany osobních údajů:
            </p>
            <ul className="mt-3 space-y-1 text-neutral-mediumGray">
              <li><strong>Jméno:</strong> Eva Dvořáková</li>
              <li><strong>E-mail:</strong>{' '}
                <a href="mailto:edvorakova@visionreality.cz" className="text-primary-teal hover:underline">
                  edvorakova@visionreality.cz
                </a>
              </li>
              <li><strong>Telefon:</strong>{' '}
                <a href="tel:+420728262435" className="text-primary-teal hover:underline">
                  +420 728 262 435
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Jaké údaje zpracováváme</h2>
            <p className="text-neutral-mediumGray leading-7">
              Prostřednictvím kontaktního formuláře na našich stránkách zpracováváme následující osobní údaje:
            </p>
            <ul className="mt-3 space-y-1 text-neutral-mediumGray list-disc list-inside">
              <li>Jméno a příjmení</li>
              <li>E-mailová adresa</li>
              <li>Telefonní číslo</li>
              <li>Obsah zprávy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Účel a právní základ zpracování</h2>
            <p className="text-neutral-mediumGray leading-7">
              Vaše osobní údaje zpracováváme výhradně za účelem odpovědi na Váš dotaz a navázání
              obchodní komunikace v souvislosti s prodejem nemovitostí projektu Luční Háj.
            </p>
            <p className="text-neutral-mediumGray leading-7 mt-2">
              Právním základem zpracování je <strong>oprávněný zájem správce</strong> (čl. 6 odst. 1
              písm. f) GDPR) spočívající v možnosti reagovat na zaslaný dotaz, případně
              <strong> souhlas subjektu údajů</strong> (čl. 6 odst. 1 písm. a) GDPR) tam, kde jej
              výslovně udělíte.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Doba uchovávání údajů</h2>
            <p className="text-neutral-mediumGray leading-7">
              Osobní údaje uchováváme po dobu nezbytně nutnou k vyřízení Vašeho dotazu, nejdéle
              však <strong>3 roky</strong> od poslední komunikace. Po uplynutí této doby jsou údaje
              bezpečně smazány.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Příjemci osobních údajů</h2>
            <p className="text-neutral-mediumGray leading-7">
              Vaše údaje neprodáváme ani nepředáváme třetím stranám za účelem marketingu. Údaje
              mohou být sdíleny výhradně s poskytovateli technických služeb (provoz e-mailu,
              webový hosting) vázanými mlčenlivostí a zpracovatelskými smlouvami.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Vaše práva</h2>
            <p className="text-neutral-mediumGray leading-7 mb-3">
              V souladu s GDPR máte následující práva:
            </p>
            <ul className="space-y-2 text-neutral-mediumGray list-disc list-inside">
              <li><strong>Právo na přístup</strong> — kdykoli si můžete vyžádat kopii Vašich údajů, které uchováváme.</li>
              <li><strong>Právo na opravu</strong> — pokud jsou Vaše údaje nepřesné, opravíme je.</li>
              <li><strong>Právo na výmaz</strong> — můžete požádat o smazání Vašich údajů (právo být zapomenut).</li>
              <li><strong>Právo na omezení zpracování</strong> — za určitých podmínek můžete omezit zpracování.</li>
              <li><strong>Právo vznést námitku</strong> — proti zpracování na základě oprávněného zájmu.</li>
              <li><strong>Právo na přenositelnost</strong> — obdržet Vaše údaje ve strojově čitelném formátu.</li>
            </ul>
            <p className="text-neutral-mediumGray leading-7 mt-4">
              Svá práva uplatněte zasláním e-mailu na{' '}
              <a href="mailto:edvorakova@visionreality.cz" className="text-primary-teal hover:underline">
                edvorakova@visionreality.cz
              </a>. Na Vaši žádost odpovíme do 30 dnů.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Soubory cookie</h2>
            <p className="text-neutral-mediumGray leading-7">
              Naše stránky používají službu Google Analytics 4 pro anonymní sledování návštěvnosti.
              Tato služba může ukládat soubory cookie ve Vašem prohlížeči. Žádné osobní údaje
              prostřednictvím Google Analytics neshromažďujeme.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Dozorový úřad</h2>
            <p className="text-neutral-mediumGray leading-7">
              Máte právo podat stížnost u dozorového úřadu — Úřadu pro ochranu osobních údajů
              (ÚOOÚ), se sídlem Pplk. Sochora 27, 170 00 Praha 7,{' '}
              <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-primary-teal hover:underline">
                www.uoou.cz
              </a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
