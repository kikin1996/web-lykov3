const AboutUsPage = () => {
  const team = [
    {
      name: 'Robert Novák',
      role: 'Generální ředitel',
      description: 'S více než 15 lety zkušeností v realitním developmentu vede tým Ecohau Riverside.',
    },
    {
      name: 'Marie Svobodová',
      role: 'Hlavní architektka',
      description: 'Autorka architektonického návrhu projektu s důrazem na udržitelnost a moderní design.',
    },
    {
      name: 'Jan Dvořák',
      role: 'Projektový manažer',
      description: 'Zajišťuje plynulý průběh výstavby a dodržení všech termínů a standardů kvality.',
    },
  ]

  const projects = [
    {
      name: 'Riverside Park',
      location: 'Praha 5',
      year: '2020',
      description: 'Rezidenční komplex s 120 byty a rozsáhlými zahradami.',
    },
    {
      name: 'Green Valley',
      location: 'Brno',
      year: '2018',
      description: 'Ekologický projekt s důrazem na udržitelnost a moderní technologie.',
    },
  ]

  return (
    <div className="pt-24 pb-20 bg-neutral-offWhite min-h-screen">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-12">
            <p className="text-overline mb-4">O nás</p>
            <h1 className="text-h1 mb-6">O developerské společnosti</h1>
            <p className="text-body-large text-neutral-mediumGray">
              Jsme tým zkušených profesionálů s vášní pro vytváření kvalitního bydlení.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-medium p-8 lg:p-12 mb-12">
            <h2 className="text-h2 mb-6">Naše společnost</h2>
            <p className="text-body-regular mb-4">
              Naše developerská společnost má dlouholetou tradici v oblasti rezidenčního developmentu. 
              Specializujeme se na vytváření moderních, udržitelných a kvalitních bytových projektů, 
              které splňují nejvyšší standardy bydlení.
            </p>
            <p className="text-body-regular">
              Naším cílem je nejen stavět byty, ale vytvářet domovy a komunity, kde se lidé cítí 
              dobře a mohou naplno užívat svůj životní styl. Každý projekt je pro nás jedinečný 
              a přistupujeme k němu s maximální péčí a profesionalitou.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-h2 mb-4">Náš tým</h2>
            <p className="text-body-large text-neutral-mediumGray">
              Seznamte se s klíčovými osobami za projektem Ecohau Riverside.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-medium p-6 text-center">
                <div className="w-24 h-24 bg-neutral-lightGray rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-h4 mb-2">{member.name}</h3>
                <p className="text-body-small text-primary-teal mb-3">{member.role}</p>
                <p className="text-body-small text-neutral-mediumGray">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* References */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-h2 mb-4">Reference a předchozí projekty</h2>
            <p className="text-body-large text-neutral-mediumGray">
              Projekty, na které jsme hrdí a které dokazují naši kvalitu.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-medium p-6">
                <h3 className="text-h3 mb-2">{project.name}</h3>
                <p className="text-body-small text-neutral-mediumGray mb-3">
                  {project.location} • {project.year}
                </p>
                <p className="text-body-regular">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-medium p-8 lg:p-12">
            <h2 className="text-h2 mb-6 text-center">Certifikace a ocenění</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-neutral-offWhite rounded-lg">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-h4 mb-2">Certifikace BREEAM</h3>
                <p className="text-body-small text-neutral-mediumGray">
                  Certifikace pro udržitelné budovy
                </p>
              </div>
              <div className="text-center p-6 bg-neutral-offWhite rounded-lg">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-h4 mb-2">Ocenění za architekturu</h3>
                <p className="text-body-small text-neutral-mediumGray">
                  Cena za nejlepší rezidenční projekt 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage






