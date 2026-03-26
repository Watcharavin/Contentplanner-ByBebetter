import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-ice-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-steel-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-slide-left">
            <h3 className="text-xl font-bold mb-4 gradient-text">บริษัท วัฒนบราเดอร์ จำกัด</h3>
            <p className="text-slate mb-2 transition-colors duration-300 hover:text-fog-gray">
              ก่อตั้งตั้งแต่ปี พ.ศ. 2527
            </p>
            <p className="text-slate mb-4 transition-colors duration-300 hover:text-fog-gray">
              ผู้เชี่ยวชาญงานขึ้นรูปโลหะและสแตนเลส ด้วยประสบการณ์กว่า 40 ปี
            </p>
            <div className="text-slate">
              <strong className="text-ice-white">โทรศัพท์:</strong>
              <div className="mt-1 space-y-1">
                <a href="tel:+6627498115" className="block hover:text-accent-cyan transition-colors duration-300">
                  02-749-8115-6
                </a>
                <a href="tel:+66811381555" className="block hover:text-accent-cyan transition-colors duration-300">
                  081-138-1555
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in delay-200">
            <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              {[
                { name: 'เกี่ยวกับเรา', href: '/about/' },
                { name: 'โรงงาน', href: '/factory/' },
                { name: 'สินค้า', href: '/products/' },
                { name: 'บริการ', href: '/supply/' },
                { name: 'ติดต่อเรา', href: '/contact/' },
              ].map((link) => (
                <li key={link.href} className="footer-link-item">
                  <Link
                    href={link.href}
                    className="footer-link text-slate hover:text-accent-cyan transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                      {link.name}
                    </span>
                    <svg
                      className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-right delay-300">
            <h3 className="text-lg font-semibold mb-4">บริการของเรา</h3>
            <ul className="space-y-2">
              {[
                'งานขึ้นรูปโลหะและสแตนเลส',
                'ผลิตถังแรงดันอุตสาหกรรม',
                'ถังผสมสารเคมี',
                'ถังเก็บของเหลว',
                'บริการตัดเหล็ก',
                'โซลูชันเหล็กตามสั่ง',
              ].map((service) => (
                <li
                  key={service}
                  className="text-slate flex items-start transition-all duration-300 hover:text-fog-gray hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-1 text-accent-cyan flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel-blue mt-8 pt-8 text-center animate-fade-in delay-500">
          <p className="text-slate text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-ice-white font-semibold hover:text-accent-cyan transition-colors duration-300">
              บริษัท วัฒนบราเดอร์ จำกัด
            </span>{' '}
            สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  )
}
