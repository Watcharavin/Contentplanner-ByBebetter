import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'สายพานลำเลียง - ระบบขนส่งวัสดุอุตสาหกรรม',
  description: 'ระบบสายพานลำเลียงที่แข็งแรง สำหรับการขนส่งวัสดุอุตสาหกรรมและการผสานรวมสายการผลิต',
  alternates: { canonical: 'https://www.wattanabrother.com/products/conveyor' },
  openGraph: {
    title: 'สายพานลำเลียง | บริษัท วัฒนบราเดอร์ จำกัด',
    description: 'ระบบสายพานลำเลียงอุตสาหกรรม',
    url: 'https://www.wattanabrother.com/products/conveyor',
  },
}

export default function ConveyorPage() {
  return (
    <>
      <nav className="bg-fog-gray py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-slate hover:text-steel-blue">หน้าแรก</Link></li>
            <li className="text-slate">/</li>
            <li><Link href="/products/" className="text-slate hover:text-steel-blue">สินค้า</Link></li>
            <li className="text-slate">/</li>
            <li className="text-charcoal font-semibold">สายพานลำเลียง</li>
          </ol>
        </div>
      </nav>

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
          <h1 className="text-4xl md:text-5xl font-bold">สายพานลำเลียง</h1>
        </div>
      </section>

      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Product Image */}
              <div className="rounded-lg h-96 overflow-hidden">
                <Image
                  src="/images/conveyor.jpg"
                  alt="สายพานลำเลียงสแตนเลสอุตสาหกรรม วัฒนบราเดอร์"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="bg-ice-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-4">
                  ระบบสายพานลำเลียงอุตสาหกรรม
                </h2>
                <p className="text-lg text-slate mb-6 leading-relaxed">
                  ระบบสายพานลำเลียงที่แข็งแรง ออกแบบสำหรับการขนส่งวัสดุอุตสาหกรรมและการผสานรวมสายการผลิต
                  โครงเหล็กแบบหนักหน่วงช่วยให้มั่นใจในประสิทธิภาพที่เชื่อถือได้และยาวนาน
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-charcoal mb-3">คุณสมบัติ:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">โครงเหล็กแบบหนักหน่วง</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">ควบคุมความเร็วได้</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">การออกแบบแบบโมดูลาร์</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">ประสิทธิภาพที่ยาวนาน</span>
                    </li>
                  </ul>
                </div>

                <Link href="/contact/" className="inline-block w-full bg-steel-blue hover:bg-steel-blue-dark text-ice-white font-bold py-3 px-6 rounded-lg transition-colors text-center">
                  ขอใบเสนอราคา
                </Link>
              </div>
            </div>

            {/* Features & Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
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
                      <h3 className="font-bold text-charcoal mb-1">โครงสร้างแข็งแรง</h3>
                      <p className="text-slate text-sm">โครงเหล็กแบบหนักหน่วงรับน้ำหนักได้มาก</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">ปรับความเร็วได้</h3>
                      <p className="text-slate text-sm">ระบบควบคุมความเร็วที่ยืดหยุ่นตามการใช้งาน</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">ออกแบบแบบโมดูลาร์</h3>
                      <p className="text-slate text-sm">สามารถต่อขยายหรือปรับเปลี่ยนได้ตามความต้องการ</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">ทนทานยาวนาน</h3>
                      <p className="text-slate text-sm">ออกแบบให้ใช้งานได้ยาวนานในสภาพแวดล้อมอุตสาหกรรม</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-ice-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">ข้อมูลจำเพาะ</h2>
                <div className="space-y-4">
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">วัสดุโครง</span>
                      <span className="text-slate">เหล็กหนักหน่วง</span>
                    </div>
                  </div>
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">ความยาว</span>
                      <span className="text-slate">ตามสั่ง</span>
                    </div>
                  </div>
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">ความกว้างสายพาน</span>
                      <span className="text-slate">ตามความต้องการ</span>
                    </div>
                  </div>
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">ระบบขับเคลื่อน</span>
                      <span className="text-slate">มอเตอร์ไฟฟ้า</span>
                    </div>
                  </div>
                  <div className="pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">การติดตั้ง</span>
                      <span className="text-slate">พร้อมบริการติดตั้ง</span>
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
                      { '@type': 'ListItem', position: 3, name: 'สายพานลำเลียง', item: 'https://www.wattanabrother.com/products/conveyor/' },
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
                        name: 'สายพานลำเลียงรับน้ำหนักได้มากสุดเท่าไหร่?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ขึ้นอยู่กับขนาดโครงและประเภทสายพาน โดยทั่วไปรับได้ตั้งแต่ 50–2,000 กก./เมตร กรุณาระบุน้ำหนักสูงสุดที่ต้องการเพื่อออกแบบโครงสร้างให้เหมาะสม' },
                      },
                      {
                        '@type': 'Question',
                        name: 'มีสายพานแบบสแตนเลสสำหรับอุตสาหกรรมอาหารไหม?',
                        acceptedAnswer: { '@type': 'Answer', text: 'มีครับ รับผลิตโครงสายพานสแตนเลส 304/316 สำหรับอุตสาหกรรมอาหารและยา พร้อมสายพานพลาสติกเกรด Food-grade ตามมาตรฐาน FDA ได้' },
                      },
                      {
                        '@type': 'Question',
                        name: 'ความเร็วสายพานปรับได้ไหม?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ปรับได้ผ่านระบบ Inverter (VFD) ที่ติดตั้งพร้อมมอเตอร์ สามารถควบคุมความเร็วได้อย่างละเอียดตามความต้องการของกระบวนการผลิต' },
                      },
                      {
                        '@type': 'Question',
                        name: 'รับผลิตสายพานลำเลียงแบบเอียงได้ไหม?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ได้ครับ รับผลิตสายพานแบบเอียงได้ถึง 30–45 องศา พร้อมชั้นกั้นวัสดุและระบบป้องกันการไหลย้อนตามความเหมาะสมของงาน' },
                      },
                      {
                        '@type': 'Question',
                        name: 'ระยะเวลาการผลิตและติดตั้งนานเท่าไหร่?',
                        acceptedAnswer: { '@type': 'Answer', text: 'โดยปกติใช้เวลาผลิต 3–6 สัปดาห์ขึ้นอยู่กับขนาดและความซับซ้อน การติดตั้งใช้เวลา 1–3 วัน ทีมช่างพร้อมให้บริการทั่วประเทศ' },
                      },
                    ],
                  }),
                }}
              />
              <h2 className="text-2xl font-bold text-charcoal mb-8">คำถามที่พบบ่อย</h2>
              <div className="space-y-6">
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">สายพานลำเลียงรับน้ำหนักได้มากสุดเท่าไหร่?</h3>
                  <p className="text-slate leading-relaxed">ขึ้นอยู่กับขนาดโครงและประเภทสายพาน โดยทั่วไปรับได้ตั้งแต่ 50–2,000 กก./เมตร กรุณาระบุน้ำหนักสูงสุดที่ต้องการเพื่อออกแบบโครงสร้างให้เหมาะสม</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">มีสายพานแบบสแตนเลสสำหรับอุตสาหกรรมอาหารไหม?</h3>
                  <p className="text-slate leading-relaxed">มีครับ รับผลิตโครงสายพานสแตนเลส 304/316 สำหรับอุตสาหกรรมอาหารและยา พร้อมสายพานพลาสติกเกรด Food-grade ตามมาตรฐาน FDA ได้</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">ความเร็วสายพานปรับได้ไหม?</h3>
                  <p className="text-slate leading-relaxed">ปรับได้ผ่านระบบ Inverter (VFD) ที่ติดตั้งพร้อมมอเตอร์ สามารถควบคุมความเร็วได้อย่างละเอียดตามความต้องการของกระบวนการผลิต</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">รับผลิตสายพานลำเลียงแบบเอียงได้ไหม?</h3>
                  <p className="text-slate leading-relaxed">ได้ครับ รับผลิตสายพานแบบเอียงได้ถึง 30–45 องศา พร้อมชั้นกั้นวัสดุและระบบป้องกันการไหลย้อนตามความเหมาะสมของงาน</p>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-2">ระยะเวลาการผลิตและติดตั้งนานเท่าไหร่?</h3>
                  <p className="text-slate leading-relaxed">โดยปกติใช้เวลาผลิต 3–6 สัปดาห์ขึ้นอยู่กับขนาดและความซับซ้อน การติดตั้งใช้เวลา 1–3 วัน ทีมช่างพร้อมให้บริการทั่วประเทศ</p>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mt-12 bg-fog-gray p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-charcoal mb-6">สินค้าที่เกี่ยวข้อง</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Link href="/products/water-filter/" className="bg-ice-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-charcoal mb-2">เครื่องกรองน้ำ</h3>
                  <p className="text-slate text-sm">ระบบกรอง</p>
                </Link>
                <Link href="/products/reactor/" className="bg-ice-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-charcoal mb-2">เครื่องปฏิกรณ์</h3>
                  <p className="text-slate text-sm">อุปกรณ์แปรรูปเคมี</p>
                </Link>
                <Link href="/products/plastic-mole/" className="bg-ice-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-charcoal mb-2">โม่พลาสติก</h3>
                  <p className="text-slate text-sm">แปรรูปวัสดุ</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
