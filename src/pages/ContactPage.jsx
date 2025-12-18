import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import ContactHeroImage from '../components/contact/ContactHeroImage'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      {/* Top Navigation - jen vizuálně */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Product</a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Services</a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Blog</a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-700 border border-slate-300 rounded-full hover:bg-slate-50 transition-colors">
              Contact Us
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
              Try For Free
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Left Column - Photo + Contact Info */}
          <div className="space-y-6">
            {/* Hero Image */}
            <ContactHeroImage />

            {/* Contact Info */}
            <div className="rounded-[28px] bg-white border border-slate-200/70 shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-8">
              <ContactInfo />
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
