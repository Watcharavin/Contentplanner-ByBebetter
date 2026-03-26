import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ClientLogos from '@/components/ClientLogos'

export const metadata: Metadata = {
  title: 'รับผลิตถังสแตนเลส งานโลหะตามสั่ง สมุทรปราการ',
  description: 'บริษัท วัฒนบราเดอร์ จำกัด สมุทรปราการ รับผลิตงานสแตนเลสและโลหะตามสั่ง ถังแรงดัน ถังผสมสารเคมี เครื่องกรองน้ำ สายพานลำเลียง งานขึ้นรูปโลหะครบวงจร ประสบการณ์กว่า 40 ปี',
  alternates: {
    canonical: 'https://www.wattanabrother.com',
  },
}

export default function Home() {
  const products = [
    { name: 'ถังกรองน้ำ', slug: 'water-filter', image: '/images/water-filter.jpg', desc: 'ถังกรองน้ำอุตสาหกรรมคุณภาพสูง' },
    { name: 'ถังปฏิกรณ์', slug: 'reactor', image: '/images/reactor.jpg', desc: 'ถังปฏิกรณ์สำหรับงานเคมี' },
    { name: 'เครื่องบดพลาสติก', slug: 'plastic-mole', image: '/images/plastic-mole.jpg', desc: 'เครื่องบดพลาสติกประสิทธิภาพสูง' },
    { name: 'สายพานลำเลียง', slug: 'conveyor', image: '/images/conveyor.jpg', desc: 'ระบบสายพานลำเลียงครบวงจร' },
    { name: 'เสาป้ายโฆษณา', slug: 'advertising-pole', image: '/images/advertising-pole.jpg', desc: 'โครงสร้างเสาป้ายโฆษณาแข็งแรง' },
    { name: 'ฝาถังเหล็กและแสตนเลส', slug: 'tank-lid', image: '/images/tank-lid.jpg', desc: 'ฝาถังเหล็กและแสตนเลสขึ้นรูปตามสั่ง' },
  ]

  const services = [
    {
      icon: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z',
      title: 'งานตัดเหล็กตามแบบ',
      description: 'บริการตัดเหล็กหนา เหล็กโค้ง และเหล็กพิเศษตามแบบที่ลูกค้าต้องการ'
    },
    {
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      title: 'ถังแรงดันอุตสาหกรรม',
      description: 'ผลิตถังแรงดันเหล็กและสแตนเลสคุณภาพสูง'
    },
    {
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      title: 'ถังผสมสารเคมี',
      description: 'ถังผสมที่ออกแบบเพื่อความปลอดภัยสูงสุด'
    },
    {
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      title: 'งานขึ้นรูปโลหะ',
      description: 'งานขึ้นรูปฝาถัง โครงสร้าง และชิ้นส่วนโลหะ'
    }
  ]

  const stats = [
    { number: '40+', label: 'ปีประสบการณ์', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { number: '1000+', label: 'โปรเจกต์สำเร็จ', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { number: '100+', label: 'ลูกค้าองค์กร', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { number: '24/7', label: 'บริการหลังการขาย', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
  ]

  const industriesServed = [
    { name: 'อุตสาหกรรมยานยนต์', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 5h-2v4H7l5 6 5-6h-4V5z M3 13h2v4h14v-4h2v6H3v-6z' },
    { name: 'อุตสาหกรรมเคมีภัณฑ์', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { name: 'อุตสาหกรรมอาหาร', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'อุตสาหกรรมน้ำมันและก๊าซ', icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z' },
    { name: 'อุตสาหกรรมอิเล็กทรอนิกส์', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
    { name: 'โรงงานผลิตพลาสติก', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  ]

  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-factory.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/70 to-steel-blue/60" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-steel-blue/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 text-center text-ice-white px-4 py-20">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Wattana Brother Logo"
                width={144}
                height={144}
                priority
                className="h-24 sm:h-28 md:h-36 w-auto"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
            <span className="text-sm font-medium">บริษัท วัฒนบราเดอร์ จำกัด · ก่อตั้งตั้งแต่ปี พ.ศ. 2527</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            รับผลิตงานสแตนเลสและโลหะตามสั่ง สมุทรปราการ
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-fog-gray mb-4 font-light">
            ถังแรงดัน · ถังผสมสารเคมี · งานขึ้นรูปโลหะ · สแตนเลสอุตสาหกรรม
          </p>
          <p className="text-lg text-fog-gray/80 mb-10 max-w-2xl mx-auto">
            ด้วยประสบการณ์กว่า 40 ปี เราพร้อมผลิตงานคุณภาพตามความต้องการของคุณ
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="group inline-flex items-center justify-center gap-2 bg-steel-blue hover:bg-steel-blue-dark text-ice-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span>ขอใบเสนอราคา</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-navy text-ice-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              <span>ดูผลิตภัณฑ์</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-ice-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section - Floating Cards */}
      <section className="relative -mt-16 z-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-steel-blue to-accent-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-3xl md:text-5xl font-bold text-steel-blue mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-slate font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Modern Design */}
      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-factory.jpg"
                    alt="โรงงานผลิตบริษัท วัฒนบราเดอร์ จำกัด สมุทรปราการ"
                    width={1920}
                    height={1080}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-steel-blue text-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold">27+</div>
                  <div className="text-sm opacity-80">ปีประสบการณ์</div>
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-steel-blue/10 rounded-full px-4 py-2 mb-4">
                  <span className="w-2 h-2 bg-steel-blue rounded-full" />
                  <span className="text-sm font-semibold text-steel-blue">เกี่ยวกับเรา</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  ประสบการณ์กว่า 40 ปี ในงานอุตสาหกรรมโลหะ
                </h2>
                <p className="text-slate text-lg mb-6 leading-relaxed">
                  บริษัท วัฒนบราเดอร์ จำกัด ดำเนินธุรกิจด้านการผลิตงานเหล็กและสแตนเลสมาตั้งแต่ปี พ.ศ. 2527
                  ด้วยประสบการณ์มากกว่า 40 ปี เราเชี่ยวชาญงานผลิตตามแบบ งานโครงสร้าง และงานถังอุตสาหกรรม
                </p>
                <ul className="space-y-3 mb-8">
                  {['ทีมช่างฝีมือคุณภาพ', 'เครื่องจักรทันสมัย', 'ควบคุมคุณภาพทุกขั้นตอน', 'ส่งมอบตรงเวลา'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-steel-blue/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-charcoal font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-2 bg-steel-blue hover:bg-steel-blue-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <span>อ่านเพิ่มเติม</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-steel-blue/10 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-steel-blue rounded-full" />
              <span className="text-sm font-semibold text-steel-blue">บริการของเรา</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">บริการครบวงจร</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              เราให้บริการครบวงจรด้านงานเหล็กและสแตนเลส พร้อมทีมช่างมืออาชีพ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-fog-gray hover:bg-steel-blue rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-steel-blue group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-7 h-7 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal group-hover:text-white mb-2 transition-colors">{service.title}</h3>
                <p className="text-slate group-hover:text-white/80 text-sm transition-colors">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Showcase Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/images/bg-factory.jpg)' }}
        />
        <div className="absolute inset-0 bg-navy/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent-cyan rounded-full" />
              <span className="text-sm font-medium">ศักยภาพการผลิต</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">โรงงานผลิตครบวงจร</h2>
            <p className="text-lg text-fog-gray mb-8 leading-relaxed">
              เรารับผลิตงานเหล็กและสแตนเลสตามแบบที่ลูกค้ากำหนด ครอบคลุมงานตัดเหล็กหนา งานตัดโค้ง
              งานขึ้นรูปถังแรงดัน ถังผสมสารเคมี ถังเก็บของเหลว รวมถึงงานขึ้นรูปฝาถังสำหรับงานอุตสาหกรรม
            </p>
            <Link
              href="/factory/"
              className="inline-flex items-center gap-2 bg-white text-steel-blue hover:bg-fog-gray font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>ดูขั้นตอนการผลิต</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section - Modern Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-steel-blue/10 rounded-full px-4 py-2 mb-4">
                <span className="w-2 h-2 bg-steel-blue rounded-full" />
                <span className="text-sm font-semibold text-steel-blue">ผลิตภัณฑ์</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">ผลิตภัณฑ์ของเรา</h2>
            </div>
            <Link
              href="/products/"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-steel-blue hover:text-steel-blue-dark font-semibold transition-colors"
            >
              <span>ดูทั้งหมด</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}/`}
                className="group bg-fog-gray rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-charcoal group-hover:text-steel-blue transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-steel-blue/10 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-steel-blue rounded-full" />
              <span className="text-sm font-semibold text-steel-blue">ลูกค้าของเรา</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">อุตสาหกรรมที่เราให้บริการ</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              ผลิตภัณฑ์และบริการของเราครอบคลุมหลากหลายอุตสาหกรรม
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industriesServed.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 mx-auto bg-steel-blue group-hover:bg-steel-blue-dark rounded-xl flex items-center justify-center mb-3 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-charcoal">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* CTA Section - Enhanced */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-steel-blue to-steel-blue-dark" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              พร้อมเริ่มโปรเจกต์ของคุณหรือยัง?
            </h2>
            <p className="text-xl text-fog-gray mb-10 max-w-2xl mx-auto">
              ติดต่อเราวันนี้เพื่อรับคำปรึกษาและใบเสนอราคาฟรี ทีมงานของเราพร้อมให้บริการ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white text-steel-blue hover:bg-fog-gray font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span>ติดต่อเรา</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Phone Numbers */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6627498115"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl py-3 px-6 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">02-749-8115-6</span>
              </a>
              <a
                href="tel:+66811381555"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl py-3 px-6 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">081-138-1555</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data - Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'บริการรับผลิตงานโลหะและสแตนเลส',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'รับผลิตถังแรงดันสแตนเลส', url: 'https://www.wattanabrother.com/products/reactor/' },
              { '@type': 'ListItem', position: 2, name: 'รับผลิตเครื่องกรองน้ำอุตสาหกรรม', url: 'https://www.wattanabrother.com/products/water-filter/' },
              { '@type': 'ListItem', position: 3, name: 'รับผลิตฝาถังเหล็กและสแตนเลส', url: 'https://www.wattanabrother.com/products/tank-lid/' },
              { '@type': 'ListItem', position: 4, name: 'รับผลิตสายพานลำเลียง', url: 'https://www.wattanabrother.com/products/conveyor/' },
              { '@type': 'ListItem', position: 5, name: 'รับผลิตเครื่องบดพลาสติก', url: 'https://www.wattanabrother.com/products/plastic-mole/' },
              { '@type': 'ListItem', position: 6, name: 'รับผลิตเสาป้ายโฆษณา', url: 'https://www.wattanabrother.com/products/advertising-pole/' },
            ],
          }),
        }}
      />
    </>
  )
}
