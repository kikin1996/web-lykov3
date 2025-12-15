const AboutProjectPage = () => {
  return (
    <div className="pt-24 pb-20 bg-neutral-offWhite min-h-screen">
      <div className="container mx-auto px-5 lg:px-20 max-w-4xl">
        <div className="bg-white rounded-xl shadow-medium p-8 lg:p-12">
          <div className="text-center mb-12">
            <p className="text-overline mb-4">O projektu</p>
            <h1 className="text-h1 mb-6">Ecohau Riverside</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-h2 mb-4">Historie a vize projektu</h2>
              <p className="text-body-regular mb-4">
                Ecohau Riverside vznikl z vize vytvořit moderní rezidenční komplex, který kombinuje 
                luxusní bydlení s udržitelnými řešeními a respektem k životnímu prostředí. Projekt 
                je výsledkem pečlivého plánování a spolupráce předních architektů a developerů.
              </p>
              <p className="text-body-regular">
                Naším cílem je poskytnout rezidentům nejen kvalitní bydlení, ale také komunitní 
                prostor, kde se mohou cítit jako doma a užívat si všech výhod moderního životního stylu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-h2 mb-4">Architektonické prvky</h2>
              <p className="text-body-regular mb-4">
                Architektura Ecohau Riverside je charakteristická svým moderním designem, který 
                harmonicky kombinuje čisté linie s organickými prvky. Budovy jsou navrženy tak, 
                aby maximálně využívaly denní světlo a poskytovaly výhledy do okolní přírody.
              </p>
              <ul className="space-y-2 text-body-regular">
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">•</span>
                  <span>Moderní architektonický design s důrazem na funkčnost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">•</span>
                  <span>Maximální využití denního světla a prostoru</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">•</span>
                  <span>Kvalitní materiály a řemeslné zpracování</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">•</span>
                  <span>Harmonické propojení interiéru a exteriéru</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-h2 mb-4">Udržitelnost a ekologické aspekty</h2>
              <p className="text-body-regular mb-4">
                Ecohau Riverside je navržen s ohledem na životní prostředí a udržitelnost. 
                Projekt využívá moderní technologie a ekologická řešení, která snižují dopad 
                na životní prostředí a zároveň zajišťují komfortní bydlení.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-neutral-offWhite rounded-lg">
                  <h3 className="text-h4 mb-2">Energetická účinnost</h3>
                  <p className="text-body-small text-neutral-mediumGray">
                    Moderní izolační systémy a energeticky účinné technologie pro snížení spotřeby energie.
                  </p>
                </div>
                <div className="p-6 bg-neutral-offWhite rounded-lg">
                  <h3 className="text-h4 mb-2">Obnovitelné zdroje</h3>
                  <p className="text-body-small text-neutral-mediumGray">
                    Využití solární energie a dalších obnovitelných zdrojů pro udržitelný provoz.
                  </p>
                </div>
                <div className="p-6 bg-neutral-offWhite rounded-lg">
                  <h3 className="text-h4 mb-2">Zelené plochy</h3>
                  <p className="text-body-small text-neutral-mediumGray">
                    Rozsáhlé zahrady a zelené plochy pro zlepšení kvality ovzduší a životního prostředí.
                  </p>
                </div>
                <div className="p-6 bg-neutral-offWhite rounded-lg">
                  <h3 className="text-h4 mb-2">Recyklace</h3>
                  <p className="text-body-small text-neutral-mediumGray">
                    Komplexní systém třídění odpadu a recyklace pro minimalizaci dopadu na životní prostředí.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-h2 mb-4">Timeline projektu</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary-teal pl-6">
                  <h3 className="text-h4 mb-2">Fáze 1: Plánování a příprava</h3>
                  <p className="text-body-small text-neutral-mediumGray mb-2">2022 - 2023</p>
                  <p className="text-body-regular">
                    Komplexní plánování projektu, získání povolení a příprava staveniště.
                  </p>
                </div>
                <div className="border-l-2 border-primary-teal pl-6">
                  <h3 className="text-h4 mb-2">Fáze 2: Výstavba</h3>
                  <p className="text-body-small text-neutral-mediumGray mb-2">2023 - 2024</p>
                  <p className="text-body-regular">
                    Realizace výstavby všech bloků a dokončení infrastruktury projektu.
                  </p>
                </div>
                <div className="border-l-2 border-primary-teal pl-6">
                  <h3 className="text-h4 mb-2">Fáze 3: Dokončení a předání</h3>
                  <p className="text-body-small text-neutral-mediumGray mb-2">2024 - 2025</p>
                  <p className="text-body-regular">
                    Dokončení interiérů, vybavení společných prostor a předání bytů novým majitelům.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProjectPage






