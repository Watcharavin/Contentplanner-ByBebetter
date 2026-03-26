import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'เครื่องกรองน้ำ - ระบบกรองน้ำสแตนเลสอุตสาหกรรม',
  description: 'ระบบกรองน้ำอุตสาหกรรมคุณภาพสูง ผลิตจากสแตนเลสทนการกัดกร่อน รับผลิตตามขนาดและรูปแบบที่ต้องการ',
  alternates: {
    canonical: 'https://www.wattanabrother.com/products/water-filter',
  },
  openGraph: {
    title: 'เครื่องกรองน้ำ | บริษัท วัฒนบราเดอร์ จำกัด',
    description: 'ระบบกรองน้ำสแตนเลสระดับอุตสาหกรรม',
    url: 'https://www.wattanabrother.com/products/water-filter',
  },
}

export default function WaterFilterPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-fog-gray py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-slate hover:text-steel-blue">หน้าแรก</Link>
            </li>
            <li className="text-slate">/</li>
            <li>
              <Link href="/products/" className="text-slate hover:text-steel-blue">สินค้า</Link>
            </li>
            <li className="text-slate">/</li>
            <li className="text-charcoal font-semibold">เครื่องกรองน้ำ</li>
          </ol>
        </div>
      </nav>

      {/* Product Header */}
      <section className="bg-steel-blue text-ice-white py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/products/"
            className="inline-flex items-center text-ice-white/80 hover:text-ice-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            กลับไปหน้าสินค้า
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">เครื่องกรองน้ำ</h1>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Product Image */}
              <div className="rounded-lg h-96 overflow-hidden">
                <Image
                  src="/images/water-filter.jpg"
                  alt="เครื่องกรองน้ำสแตนเลสอุตสาหกรรม วัฒนบราเดอร์"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="bg-ice-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-4">
                  ระบบกรองน้ำอุตสาหกรรม
                </h2>
                <p className="text-lg text-slate mb-6 leading-relaxed">
                  ระบบกรองน้ำระดับอุตสาหกรรมของเรา ผลิตจากสแตนเลสคุณภาพสูง
                  มั่นใจในประสิทธิภาพ ความทนทาน และความต้านทานการกัดกร่อน
                  ออกแบบมาสำหรับสภาพแวดล้อมอุตสาหกรรมที่ต้องการความแข็งแรง
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-charcoal mb-3">การใช้งาน:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-steel-blue mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">ระบบบำบัดน้ำอุตสาหกรรม</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-steel-blue mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">โรงงานแปรรูปเคมี</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-steel-blue mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">อุตสาหกรรมอาหารและเครื่องดื่ม</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-steel-blue mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">อุตสาหกรรมยา</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/contact/"
                  className="inline-block w-full bg-steel-blue hover:bg-steel-blue-dark text-ice-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  ขอใบเสนอราคา
                </Link>
              </div>
            </div>

            {/* Features & Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <div className="bg-ice-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">คุณสมบัติเด่น</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">ทนการกัดกร่อน</h3>
                      <p className="text-slate text-sm">ผลิตจากสแตนเลสคุณภาพสูง ทนทานยาวนาน</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">ประสิทธิภาพสูง</h3>
                      <p className="text-slate text-sm">เทคโนโลยีการกรองขั้นสูงเพื่อคุณภาพน้ำที่ดีที่สุด</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">ขนาดตามสั่ง</h3>
                      <p className="text-slate text-sm">มีหลายขนาดให้เลือก ตรงตามความต้องการของคุณ</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">บำรุงรักษาง่าย</h3>
                      <p className="text-slate text-sm">ออกแบบให้ทำความสะอาดและเปลี่ยนไส้กรองได้ง่าย</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Specifications */}
              <div className="bg-ice-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">ข้อมูลจำเพาะ</h2>
                <div className="space-y-4">
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">วัสดุ</span>
                      <span className="text-slate">สแตนเลส 304/316</span>
                    </div>
                  </div>
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">การประกอบ</span>
                      <span className="text-slate">เชื่อม/ไร้รอยต่อ</span>
                    </div>
                  </div>
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">ขนาด</span>
                      <span className="text-slate">ตามสั่ง</span>
                    </div>
                  </div>
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">ประเภทข้อต่อ</span>
                      <span className="text-slate">หน้าแปลน/เกลียว</span>
                    </div>
                  </div>
                  <div className="pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">ผิวสำเร็จ</span>
                      <span className="text-slate">ขัดเงา/ขัดด้าน</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-12 bg-ice-white rounded-lg shadow-lg p-8">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.wattanabrother.com/' },
                      { '@type': 'ListItem', position: 2, name: 'สินค้า', item: 'https://www.wattanabrother.com/products/' },
                      { '@type': 'ListItem', position: 3, name: 'เครื่องกรองน้ำ', item: 'https://www.wattanabrother.com/products/water-filter/' },
                    ],
                  }),
                }}
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: [
                      {
                        '@type': 'Question',
                        name: 'ความแตกต่างระหว่างสแตนเลส 304 และ 316 สำหรับเครื่องกรองน้ำคืออะไร?',
                        acceptedAnswer: { '@type': 'Answer', text: 'สแตนเลส 304 เหมาะสำหรับน้ำทั่วไปและน้ำสะอาด ส่วนสแตนเลส 316 มีส่วนผสมของโมลิบดีนัม ทำให้ทนต่อสารเคมีและคลอไรด์ได้ดีกว่า จึงแนะนำสำหรับอุตสาหกรรมอาหาร ยา และงานที่สัมผัสน้ำเกลือหรือสารเคมีกัดกร่อน' },
                      },
                      {
                        '@type': 'Question',
                        name: 'ใช้เวลาผลิตเครื่องกรองน้ำนานเท่าไหร่?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ขึ้นอยู่กับขนาดและความซับซ้อน โดยทั่วไปใช้เวลา 2–4 สัปดาห์นับจากวันยืนยันแบบและวัสดุ กรุณาติดต่อเพื่อรับกำหนดเวลาที่แน่นอน' },
                      },
                      {
                        '@type': 'Question',
                        name: 'รับผลิตขั้นต่ำกี่ชิ้น?',
                        acceptedAnswer: { '@type': 'Answer', text: 'รับผลิตตั้งแต่ 1 ชิ้นขึ้นไป ไม่มีจำนวนขั้นต่ำ เนื่องจากรับงานผลิตตามสั่งทุกขนาด' },
                      },
                      {
                        '@type': 'Question',
                        name: 'เครื่องกรองน้ำอุตสาหกรรมดูแลรักษาอย่างไร?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ควรล้างทำความสะอาดด้วยน้ำสะอาดทุก 3–6 เดือน และตรวจสอบข้อต่อ วาล์ว และซีลยางปีละครั้ง สำหรับระบบที่ใช้กับสารเคมีควรล้างด้วยน้ำสะอาดหลังใช้งานทุกครั้ง' },
                      },
                      {
                        '@type': 'Question',
                        name: 'มีบริการรับประกันและหลังการขายหรือไม่?',
                        acceptedAnswer: { '@type': 'Answer', text: 'มีการรับประกันงานผลิตและรอยเชื่อม พร้อมบริการซ่อมบำรุงและให้คำปรึกษาหลังการขาย ติดต่อทีมงานได้ตลอดเวลาทำการ' },
                      },
                    ],
                  }),
                }}
              />
              <h2 className="text-2xl font-bold text-charcoal mb-8">คำถามที่พบบ่อย</h2>
              <div className="space-y-6">
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">ความแตกต่างระหว่างสแตนเลส 304 และ 316 สำหรับเครื่องกรองน้ำคืออะไร?</h3>
                  <p className="text-slate leading-relaxed">สแตนเลส 304 เหมาะสำหรับน้ำทั่วไปและน้ำสะอาด ส่วนสแตนเลส 316 มีส่วนผสมของโมลิบดีนัม ทำให้ทนต่อสารเคมีและคลอไรด์ได้ดีกว่า จึงแนะนำสำหรับอุตสาหกรรมอาหาร ยา และงานที่สัมผัสน้ำเกลือหรือสารเคมีกัดกร่อน</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">ใช้เวลาผลิตเครื่องกรองน้ำนานเท่าไหร่?</h3>
                  <p className="text-slate leading-relaxed">ขึ้นอยู่กับขนาดและความซับซ้อน โดยทั่วไปใช้เวลา 2–4 สัปดาห์นับจากวันยืนยันแบบและวัสดุ กรุณาติดต่อเพื่อรับกำหนดเวลาที่แน่นอน</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">รับผลิตขั้นต่ำกี่ชิ้น?</h3>
                  <p className="text-slate leading-relaxed">รับผลิตตั้งแต่ 1 ชิ้นขึ้นไป ไม่มีจำนวนขั้นต่ำ เนื่องจากรับงานผลิตตามสั่งทุกขนาด</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">เครื่องกรองน้ำอุตสาหกรรมดูแลรักษาอย่างไร?</h3>
                  <p className="text-slate leading-relaxed">ควรล้างทำความสะอาดด้วยน้ำสะอาดทุก 3–6 เดือน และตรวจสอบข้อต่อ วาล์ว และซีลยางปีละครั้ง สำหรับระบบที่ใช้กับสารเคมีควรล้างด้วยน้ำสะอาดหลังใช้งานทุกครั้ง</p>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-2">มีบริการรับประกันและหลังการขายหรือไม่?</h3>
                  <p className="text-slate leading-relaxed">มีการรับประกันงานผลิตและรอยเชื่อม พร้อมบริการซ่อมบำรุงและให้คำปรึกษาหลังการขาย ติดต่อทีมงานได้ตลอดเวลาทำการ</p>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mt-12 bg-fog-gray p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-charcoal mb-6">สินค้าที่เกี่ยวข้อง</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Link href="/products/reactor/" className="bg-ice-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-charcoal mb-2">เครื่องปฏิกรณ์</h3>
                  <p className="text-slate text-sm">อุปกรณ์แปรรูปเคมี</p>
                </Link>
                <Link href="/products/plastic-mole/" className="bg-ice-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-charcoal mb-2">โม่พลาสติก</h3>
                  <p className="text-slate text-sm">ระบบแปรรูปวัสดุ</p>
                </Link>
                <Link href="/products/conveyor/" className="bg-ice-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-charcoal mb-2">สายพานลำเลียง</h3>
                  <p className="text-slate text-sm">ระบบขนส่งวัสดุ</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
