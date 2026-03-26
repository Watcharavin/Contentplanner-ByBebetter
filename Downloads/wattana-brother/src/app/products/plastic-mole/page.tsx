import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'โม่พลาสติก - อุปกรณ์แปรรูปวัสดุ',
  description: 'อุปกรณ์เฉพาะทางสำหรับการแปรรูปพลาสติกและการจัดการวัสดุ โครงสร้างเหล็กที่ทนทาน',
  alternates: { canonical: 'https://www.wattanabrother.com/products/plastic-mole' },
  openGraph: {
    title: 'โม่พลาสติก | บริษัท วัฒนบราเดอร์ จำกัด',
    description: 'อุปกรณ์แปรรูปพลาสติก',
    url: 'https://www.wattanabrother.com/products/plastic-mole',
  },
}

export default function PlasticMolePage() {
  return (
    <>
      <nav className="bg-fog-gray py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-slate hover:text-steel-blue">หน้าแรก</Link></li>
            <li className="text-slate">/</li>
            <li><Link href="/products/" className="text-slate hover:text-steel-blue">สินค้า</Link></li>
            <li className="text-slate">/</li>
            <li className="text-charcoal font-semibold">โม่พลาสติก</li>
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
          <h1 className="text-4xl md:text-5xl font-bold">โม่พลาสติก</h1>
        </div>
      </section>

      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Product Image */}
              <div className="rounded-lg h-96 overflow-hidden">
                <Image
                  src="/images/plastic-mole.jpg"
                  alt="เครื่องบดพลาสติกอุตสาหกรรม วัฒนบราเดอร์"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="bg-ice-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-4">
                  อุปกรณ์แปรรูปพลาสติก
                </h2>
                <p className="text-lg text-slate mb-6 leading-relaxed">
                  อุปกรณ์เฉพาะทางสำหรับการแปรรูปพลาสติกและการจัดการวัสดุในสภาพแวดล้อมการผลิต
                  สร้างด้วยโครงสร้างเหล็กที่ทนทานเพื่อประสิทธิภาพที่ยาวนาน
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-charcoal mb-3">คุณสมบัติ:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">โครงสร้างเหล็กที่ทนทาน</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">ประมวลผลวัสดุได้อย่างมีประสิทธิภาพ</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">สามารถปรับแต่งการกำหนดค่าได้</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-steel-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate">ต้องการการบำรุงรักษาต่ำ</span>
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
                      <p className="text-slate text-sm">ผลิตจากเหล็กคุณภาพสูงเพื่อความทนทาน</p>
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
                      <p className="text-slate text-sm">แปรรูปพลาสติกได้อย่างรวดเร็วและมีประสิทธิภาพ</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-steel-blue rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-ice-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">ปรับแต่งได้</h3>
                      <p className="text-slate text-sm">สามารถกำหนดค่าตามความต้องการเฉพาะ</p>
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
                      <p className="text-slate text-sm">ออกแบบให้ดูแลรักษาได้สะดวก ประหยัดเวลา</p>
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
                      <span className="text-slate">เหล็กคุณภาพสูง</span>
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
                      <span className="font-semibold text-charcoal">กำลังการผลิต</span>
                      <span className="text-slate">ตามความต้องการ</span>
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
                      { '@type': 'ListItem', position: 3, name: 'โม่พลาสติก', item: 'https://www.wattanabrother.com/products/plastic-mole/' },
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
                        name: 'โม่พลาสติกใช้กับพลาสติกประเภทใดได้บ้าง?',
                        acceptedAnswer: { '@type': 'Answer', text: 'รองรับพลาสติกหลายประเภท เช่น PE, PP, PVC, ABS และเม็ดพลาสติกทั่วไป สามารถออกแบบใบมีดและความเร็วรอบให้เหมาะสมกับวัสดุแต่ละชนิด' },
                      },
                      {
                        '@type': 'Question',
                        name: 'กำลังการผลิตต่อชั่วโมงเป็นเท่าไหร่?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ขึ้นอยู่กับขนาดเครื่องและชนิดวัสดุ รับผลิตตั้งแต่ขนาดเล็กสำหรับงานทดสอบจนถึงขนาดอุตสาหกรรม กรุณาระบุปริมาณที่ต้องการต่อชั่วโมงเพื่อออกแบบให้เหมาะสม' },
                      },
                      {
                        '@type': 'Question',
                        name: 'ใบมีดต้องเปลี่ยนบ่อยแค่ไหน?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ขึ้นอยู่กับวัสดุที่บดและชั่วโมงการใช้งาน โดยทั่วไปใบมีดทำจากเหล็กกล้าความแข็งสูง ทนทาน และสามารถลับใหม่หรือเปลี่ยนได้ง่าย' },
                      },
                      {
                        '@type': 'Question',
                        name: 'รับผลิตขนาดเล็กสุดและใหญ่สุดเท่าไหร่?',
                        acceptedAnswer: { '@type': 'Answer', text: 'รับผลิตหลายขนาดตามความต้องการ ตั้งแต่ขนาดทดสอบขนาดเล็กไปจนถึงโม่ขนาดอุตสาหกรรม กรุณาติดต่อเพื่อรับใบเสนอราคาตามความต้องการจริง' },
                      },
                      {
                        '@type': 'Question',
                        name: 'ทำความสะอาดและเปลี่ยนวัสดุได้ง่ายไหม?',
                        acceptedAnswer: { '@type': 'Answer', text: 'ออกแบบให้เปิดฝาและถอดใบมีดได้ง่าย สะดวกในการทำความสะอาดและเปลี่ยนวัสดุ ลดเวลา Downtime ระหว่างการเปลี่ยนล็อตการผลิต' },
                      },
                    ],
                  }),
                }}
              />
              <h2 className="text-2xl font-bold text-charcoal mb-8">คำถามที่พบบ่อย</h2>
              <div className="space-y-6">
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">โม่พลาสติกใช้กับพลาสติกประเภทใดได้บ้าง?</h3>
                  <p className="text-slate leading-relaxed">รองรับพลาสติกหลายประเภท เช่น PE, PP, PVC, ABS และเม็ดพลาสติกทั่วไป สามารถออกแบบใบมีดและความเร็วรอบให้เหมาะสมกับวัสดุแต่ละชนิด</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">กำลังการผลิตต่อชั่วโมงเป็นเท่าไหร่?</h3>
                  <p className="text-slate leading-relaxed">ขึ้นอยู่กับขนาดเครื่องและชนิดวัสดุ รับผลิตตั้งแต่ขนาดเล็กสำหรับงานทดสอบจนถึงขนาดอุตสาหกรรม กรุณาระบุปริมาณที่ต้องการต่อชั่วโมงเพื่อออกแบบให้เหมาะสม</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">ใบมีดต้องเปลี่ยนบ่อยแค่ไหน?</h3>
                  <p className="text-slate leading-relaxed">ขึ้นอยู่กับวัสดุที่บดและชั่วโมงการใช้งาน โดยทั่วไปใบมีดทำจากเหล็กกล้าความแข็งสูง ทนทาน และสามารถลับใหม่หรือเปลี่ยนได้ง่าย</p>
                </div>
                <div className="border-b border-fog-gray pb-6">
                  <h3 className="font-bold text-charcoal mb-2">รับผลิตขนาดเล็กสุดและใหญ่สุดเท่าไหร่?</h3>
                  <p className="text-slate leading-relaxed">รับผลิตหลายขนาดตามความต้องการ ตั้งแต่ขนาดทดสอบขนาดเล็กไปจนถึงโม่ขนาดอุตสาหกรรม กรุณาติดต่อเพื่อรับใบเสนอราคาตามความต้องการจริง</p>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-2">ทำความสะอาดและเปลี่ยนวัสดุได้ง่ายไหม?</h3>
                  <p className="text-slate leading-relaxed">ออกแบบให้เปิดฝาและถอดใบมีดได้ง่าย สะดวกในการทำความสะอาดและเปลี่ยนวัสดุ ลดเวลา Downtime ระหว่างการเปลี่ยนล็อตการผลิต</p>
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
