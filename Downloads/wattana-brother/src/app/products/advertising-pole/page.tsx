import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'เสาป้ายโฆษณา - โครงสร้างเหล็กสำหรับป้ายโฆษณา',
  description: 'รับผลิตเสาป้ายโฆษณาเหล็กและสแตนเลส โครงสร้างแข็งแรง ทนทาน รองรับป้ายขนาดใหญ่ ออกแบบตามความต้องการ',
  alternates: { canonical: 'https://www.wattanabrother.com/products/advertising-pole' },
  openGraph: {
    title: 'เสาป้ายโฆษณา | บริษัท วัฒนบราเดอร์ จำกัด',
    description: 'โครงสร้างเหล็กสำหรับป้ายโฆษณา',
    url: 'https://www.wattanabrother.com/products/advertising-pole',
  },
}

export default function AdvertisingPolePage() {
  return (
    <>
      <nav className="bg-fog-gray py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-slate hover:text-steel-blue">หน้าแรก</Link></li>
            <li className="text-slate">/</li>
            <li><Link href="/products/" className="text-slate hover:text-steel-blue">สินค้า</Link></li>
            <li className="text-slate">/</li>
            <li className="text-charcoal font-semibold">เสาป้ายโฆษณา</li>
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
          <h1 className="text-4xl md:text-5xl font-bold">เสาป้ายโฆษณา</h1>
        </div>
      </section>

      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Product Image */}
              <div className="rounded-lg h-96 overflow-hidden">
                <Image
                  src="/images/advertising-pole.jpg"
                  alt="เสาป้ายโฆษณาเหล็กและสแตนเลส วัฒนบราเดอร์"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="bg-ice-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-4">
                  โครงสร้างเสาป้ายโฆษณา
                </h2>
                <p className="text-lg text-slate mb-6 leading-relaxed">
                  รับผลิตเสาป้ายโฆษณาเหล็กและสแตนเลสคุณภาพสูง โครงสร้างแข็งแรงทนทาน
                  รองรับป้ายโฆษณาขนาดใหญ่ ออกแบบให้เหมาะกับสภาพพื้นที่และความต้องการของลูกค้า
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-charcoal mb-3">ประเภทงาน:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">เสาป้ายบิลบอร์ดริมถนน</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">เสาป้ายหน้าร้าน/อาคาร</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">โครงป้ายไฟ LED</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">เสาป้ายปั๊มน้ำมัน</span>
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
                      <p className="text-slate text-sm">ออกแบบให้รับแรงลมและน้ำหนักป้ายได้อย่างปลอดภัย</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">ทนทานต่อสภาพอากาศ</h3>
                      <p className="text-slate text-sm">เคลือบสีกันสนิมหรือชุบกัลวาไนซ์ ทนแดด ทนฝน</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">ออกแบบตามสั่ง</h3>
                      <p className="text-slate text-sm">ผลิตตามขนาดและรูปแบบที่ลูกค้าต้องการ</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">พร้อมติดตั้ง</h3>
                      <p className="text-slate text-sm">บริการติดตั้งโดยทีมช่างมืออาชีพ</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-ice-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">ข้อมูลจำเพาะ</h2>
                <div className="space-y-4">
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">วัสดุ</span>
                      <span className="text-slate">เหล็ก / สแตนเลส</span>
                    </div>
                  </div>
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">ความสูง</span>
                      <span className="text-slate">ตามสั่ง (3-20 เมตร)</span>
                    </div>
                  </div>
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">ขนาดป้าย</span>
                      <span className="text-slate">ตามความต้องการ</span>
                    </div>
                  </div>
                  <div className="border-b border-fog-gray pb-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-charcoal">การเคลือบผิว</span>
                      <span className="text-slate">พ่นสี / ชุบกัลวาไนซ์</span>
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
                      { '@type': 'ListItem', position: 3, name: 'เสาป้ายโฆษณา', item: 'https://www.wattanabrother.com/products/advertising-pole/' },
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
                        name: 'เสาป้ายโฆษณาต้องขออนุญาตจากหน่วยงานไหนบ้าง?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ต้องขออนุญาตกับเทศบาลหรือองค์กรปกครองส่วนท้องถิ่นในพื้นที่ หากตั้งอยู่ริมทางหลวงต้องขออนุญาตกรมทางหลวงด้วย ทางเราผลิตตามแบบที่ลูกค้าได้รับอนุมัติแล้ว' },
                      },
                      {
                        '@type': 'Question',
                        name: 'เสาทนแรงลมพายุได้ไหม?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ออกแบบตามมาตรฐานวิศวกรรมโครงสร้าง รับแรงลมตามพื้นที่ติดตั้งและขนาดป้าย กรุณาระบุพื้นที่ติดตั้งและขนาดป้ายเพื่อคำนวณแรงลมที่ถูกต้อง' },
                      },
                      {
                        '@type': 'Question',
                        name: 'ควรเลือกเสาเหล็กหรือเสาสแตนเลส?',
                        acceptedAnswer: { '@type': 'Answer', text: 'เหล็กพ่นสีกันสนิมราคาประหยัดกว่า เหมาะสำหรับพื้นที่ทั่วไป ส่วนสแตนเลสเหมาะสำหรับพื้นที่ชายฝั่งทะเลหรือที่มีความชื้นสูง เพราะทนการกัดกร่อนได้ดีกว่าและดูแลรักษาง่ายกว่า' },
                      },
                      {
                        '@type': 'Question',
                        name: 'ความสูงมาตรฐานสำหรับบิลบอร์ดริมถนนคือเท่าไหร่?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ขึ้นอยู่กับข้อกำหนดของแต่ละพื้นที่ โดยทั่วไปสูง 6–15 เมตร รับผลิตได้ตั้งแต่ 3–20 เมตรตามที่ลูกค้าต้องการและได้รับอนุญาต' },
                      },
                      {
                        '@type': 'Question',
                        name: 'มีบริการออกแบบโครงสร้างและติดตั้งไหม?',
                        acceptedAnswer: { '@type': 'Answer', text: 'มีบริการคำนวณโครงสร้างเบื้องต้น พร้อมทีมช่างบริการติดตั้งทั่วประเทศ สามารถทำงานร่วมกับวิศวกรที่ปรึกษาของลูกค้าได้' },
                      },
                    ],
                  }),
                }}
              />
              <h2 className="text-2xl font-bold text-charcoal mb-8">คำถามที่พบบ่อย</h2>
              <div className="space-y-6">
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">เสาป้ายโฆษณาต้องขออนุญาตจากหน่วยงานไหนบ้าง?</h3>
                  <p className="text-slate leading-relaxed">ต้องขออนุญาตกับเทศบาลหรือองค์กรปกครองส่วนท้องถิ่นในพื้นที่ หากตั้งอยู่ริมทางหลวงต้องขออนุญาตกรมทางหลวงด้วย ทางเราผลิตตามแบบที่ลูกค้าได้รับอนุมัติแล้ว</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">เสาทนแรงลมพายุได้ไหม?</h3>
                  <p className="text-slate leading-relaxed">ออกแบบตามมาตรฐานวิศวกรรมโครงสร้าง รับแรงลมตามพื้นที่ติดตั้งและขนาดป้าย กรุณาระบุพื้นที่ติดตั้งและขนาดป้ายเพื่อคำนวณแรงลมที่ถูกต้อง</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">ควรเลือกเสาเหล็กหรือเสาสแตนเลส?</h3>
                  <p className="text-slate leading-relaxed">เหล็กพ่นสีกันสนิมราคาประหยัดกว่า เหมาะสำหรับพื้นที่ทั่วไป ส่วนสแตนเลสเหมาะสำหรับพื้นที่ชายฝั่งทะเลหรือที่มีความชื้นสูง เพราะทนการกัดกร่อนได้ดีกว่าและดูแลรักษาง่ายกว่า</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">ความสูงมาตรฐานสำหรับบิลบอร์ดริมถนนคือเท่าไหร่?</h3>
                  <p className="text-slate leading-relaxed">ขึ้นอยู่กับข้อกำหนดของแต่ละพื้นที่ โดยทั่วไปสูง 6–15 เมตร รับผลิตได้ตั้งแต่ 3–20 เมตรตามที่ลูกค้าต้องการและได้รับอนุญาต</p>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-2">มีบริการออกแบบโครงสร้างและติดตั้งไหม?</h3>
                  <p className="text-slate leading-relaxed">มีบริการคำนวณโครงสร้างเบื้องต้น พร้อมทีมช่างบริการติดตั้งทั่วประเทศ สามารถทำงานร่วมกับวิศวกรที่ปรึกษาของลูกค้าได้</p>
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
                <Link href="/products/conveyor/" className="bg-ice-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-charcoal mb-2">สายพานลำเลียง</h3>
                  <p className="text-slate text-sm">ระบบขนส่ง</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
