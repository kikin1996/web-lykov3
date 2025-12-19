const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full bg-[#E6FFFA] text-[#00B89A] px-3 py-1 text-xs font-medium">
        Reach Out To Us
      </div>

      {/* H2 */}
      <h2 className="text-[34px] leading-[1.1] font-semibold tracking-tight text-slate-900 font-serif">
        We'd Love to Hear From You.
      </h2>

      {/* Email link */}
      <p className="text-slate-600 text-[15px] leading-6">
        Or just reach out manually to{' '}
        <a href="mailto:hello@luchnihaj.cz" className="text-[#00D9B5] underline underline-offset-2 hover:text-[#00B89A]">
          hello@luchnihaj.cz
        </a>
      </p>

      {/* Info boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {/* Email Support */}
        <div className="rounded-2xl bg-white border border-slate-200/70 p-5 shadow-none hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-[#E6FFFA] text-[#00D9B5] grid place-items-center flex-shrink-0">
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
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Email Support</h3>
              <p className="text-xs text-slate-500 mb-1">Our team can respond in real time.</p>
              <a href="mailto:hello@luchnihaj.cz" className="text-sm text-[#00D9B5] hover:text-[#00B89A]">
                hello@luchnihaj.cz
              </a>
            </div>
          </div>
        </div>

        {/* Visit Our Office */}
        <div className="rounded-2xl bg-white border border-slate-200/70 p-5 shadow-none hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-[#E6FFFA] text-[#00D9B5] grid place-items-center flex-shrink-0">
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
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Visit Our Office</h3>
              <p className="text-xs text-slate-500 mb-1">Visit our location in real life.</p>
              <p className="text-sm text-slate-700">Týnec nad Sázavou, Česká republika</p>
            </div>
          </div>
        </div>

        {/* Call Us Directly */}
        <div className="rounded-2xl bg-white border border-slate-200/70 p-5 shadow-none hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition sm:col-span-2">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-[#E6FFFA] text-[#00D9B5] grid place-items-center flex-shrink-0">
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
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Call Us Directly</h3>
              <p className="text-xs text-slate-500 mb-1">Available during working hours.</p>
              <a href="tel:+420123456789" className="text-sm text-[#00D9B5] hover:text-[#00B89A]">
                (+420) 123 - 456 - 789
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

