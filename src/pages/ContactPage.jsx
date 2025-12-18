import ContactForm from '../components/contact/ContactForm'
import ContactHeroImage from '../components/contact/ContactHeroImage'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FB] pt-20 pb-10 px-4">
      {/* Hlavní karta - jeden velký blok */}
      <div className="max-w-6xl mx-auto rounded-[28px] bg-white border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.12)] overflow-hidden">
        {/* Horní část: foto vlevo, formulář vpravo */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Levý sloupec - foto */}
          <div className="min-h-[420px]">
            <ContactHeroImage />
          </div>

          {/* Pravý sloupec - formulář */}
          <div className="p-10 pt-24">
            <ContactForm />
          </div>
        </div>

        {/* Spodní část - 3 info boxy */}
        <div className="border-t border-slate-100 p-10 lg:p-12">
          {/* Nadpis sekce */}
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium mb-6">
              Reach Out To Us
            </div>
            <h2 className="text-[34px] leading-[1.1] font-semibold tracking-tight text-slate-900 font-serif mb-6">
              We'd Love to Hear From You.
            </h2>
            <p className="text-slate-600 text-[15px] leading-6 mb-3">
              Have a question or want to get in touch? We're here to help and would love to hear from you.
            </p>
            <p className="text-slate-600 text-[15px] leading-6 mb-8">
              Feel free to reach out through any of the contact methods below, and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {/* Email Support */}
            <div className="text-left">
              <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Email Support</h3>
              <p className="text-sm text-slate-600 mb-1">Our team can respond in real time.</p>
              <a href="mailto:hello@luchnihaj.cz" className="text-sm text-indigo-600 underline hover:text-indigo-700">
                hello@luchnihaj.cz
              </a>
            </div>

            {/* Visit Office */}
            <div className="text-left">
              <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Visit Office</h3>
              <p className="text-sm text-slate-600 mb-1">Visit our location in real life.</p>
              <p className="text-sm text-indigo-600 underline">Týnec nad Sázavou, Česká republika</p>
            </div>

            {/* Call Us */}
            <div className="text-left">
              <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Call Us</h3>
              <p className="text-sm text-slate-600 mb-1">Available during working hours.</p>
              <a href="tel:+420123456789" className="text-sm text-indigo-600 underline hover:text-indigo-700">
                (+420) 123 - 456 - 789
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
