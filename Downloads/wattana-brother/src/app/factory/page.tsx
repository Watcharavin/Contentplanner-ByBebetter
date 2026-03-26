import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'โรงงาน',
  description: 'สำรวจโรงงานที่ทันสมัยของบริษัท วัฒนบราเดอร์ จำกัด สำหรับการผลิตโลหะและสแตนเลส ถังความดัน และงานขึ้นรูปโลหะอุตสาหกรรม',
  alternates: {
    canonical: 'https://www.wattanabrother.com/factory',
  },
  openGraph: {
    title: 'โรงงาน | บริษัท วัฒนบราเดอร์ จำกัด',
    description: 'โรงงานขึ้นรูปโลหะที่ทันสมัย',
    url: 'https://www.wattanabrother.com/factory',
  },
}

export default function FactoryPage() {
  const capabilities = [
    {
      title: 'งานผลิตโลหะและสแตนเลส',
      description: 'ขึ้นรูปตามแบบและความต้องการเฉพาะของท่าน',
    },
    {
      title: 'บริการตัดเหล็ก',
      description: 'ตัดเหล็กหนาและเหล็กโค้งด้วยความแม่นยำและความเที่ยงตรง',
    },
    {
      title: 'ถังความดัน',
      description: 'ถังความดันเหล็กและสแตนเลสสำหรับงานอุตสาหกรรม',
    },
    {
      title: 'ถังผสมเคมี',
      description: 'ถังเฉพาะทางสำหรับกระบวนการผสมและแปรรูปเคมี',
    },
    {
      title: 'ถังเก็บของเหลว',
      description: 'ถังเก็บที่ทนทานสำหรับวัสดุของเหลวต่างๆ',
    },
    {
      title: 'ขึ้นรูปฝาถัง',
      description: 'ฝาถังเหล็กและสแตนเลสตามแบบและอุปกรณ์เสริม',
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="bg-steel-blue text-ice-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">โรงงานของเรา</h1>
          <p className="text-xl text-fog-gray">โรงงานผลิตที่ทันสมัย</p>
        </div>
      </section>

      {/* Hero Image Section */}
      <section 
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-factory.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-charcoal opacity-50" aria-hidden="true"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-ice-white mb-4">
              การผลิตที่ทันสมัย
            </h2>
            <p className="text-xl text-fog-gray">
              โรงงานของเราติดตั้งเครื่องจักรและเครื่องมือที่ทันสมัย 
              พร้อมรับงานขึ้นรูปโลหะที่ซับซ้อนทุกขนาด
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-navy text-ice-white py-4 px-8 mb-8 rounded-lg">
              <h2 className="text-3xl font-bold">ความสามารถของเรา</h2>
            </div>

            <div className="bg-ice-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <p className="text-lg text-slate leading-relaxed mb-8">
                เรารับงานผลิตโลหะและสแตนเลสตามแบบ ตัดเหล็กหนาและเหล็กโค้งตามสั่ง 
                ถังความดันเหล็ก ถังความดันสแตนเลส ถังผสมเคมี ถังเก็บของเหลว 
                และขึ้นรูปฝาถังเหล็กและสแตนเลส
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="border-l-4 border-steel-blue pl-6 py-2">
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-slate">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-20 bg-ice-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              เครื่องจักรและเทคโนโลยี
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-fog-gray rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-steel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-10 h-10 text-ice-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  การตัดที่แม่นยำ
                </h3>
                <p className="text-slate">
                  เครื่องจักรตัดที่ทันสมัยสำหรับเหล็กหนาและเหล็กโค้ง ด้วยความแม่นยำสูง
                </p>
              </div>

              <div className="bg-fog-gray rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-steel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-10 h-10 text-ice-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  ระบบเชื่อม
                </h3>
                <p className="text-slate">
                  อุปกรณ์เชื่อมระดับมืออาชีพ เพื่อความแข็งแรงและคุณภาพที่เหนือกว่า
                </p>
              </div>

              <div className="bg-fog-gray rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-steel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-10 h-10 text-ice-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  ควบคุมคุณภาพ
                </h3>
                <p className="text-slate">
                  การทดสอบและตรวจสอบอย่างละเอียด เพื่อให้มั่นใจว่าทุกชิ้นงานมีคุณภาพตามมาตรฐาน
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              ขั้นตอนการผลิตของเรา
            </h2>

            <div className="space-y-6">
              <div className="bg-ice-white rounded-lg shadow-md p-6 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-steel-blue text-ice-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">ปรึกษาการออกแบบ</h3>
                  <p className="text-slate">
                    เราทำงานร่วมกับลูกค้าอย่างใกล้ชิด เพื่อเข้าใจความต้องการและข้อกำหนดเฉพาะของโครงการ
                  </p>
                </div>
              </div>

              <div className="bg-ice-white rounded-lg shadow-md p-6 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-steel-blue text-ice-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">เลือกวัสดุ</h3>
                  <p className="text-slate">
                    คัดเลือกวัสดุเหล็กหรือสแตนเลสที่เหมาะสม ตามความต้องการของโครงการ
                  </p>
                </div>
              </div>

              <div className="bg-ice-white rounded-lg shadow-md p-6 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-steel-blue text-ice-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">ขึ้นรูปอย่างแม่นยำ</h3>
                  <p className="text-slate">
                    ตัด เชื่อม และขึ้นรูป โดยใช้เครื่องจักรที่ทันสมัยและช่างฝีมือที่มีทักษะ
                  </p>
                </div>
              </div>

              <div className="bg-ice-white rounded-lg shadow-md p-6 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-steel-blue text-ice-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">ตรวจสอบคุณภาพ</h3>
                  <p className="text-slate">
                    ทดสอบและตรวจสอบอย่างเข้มงวด เพื่อให้มั่นใจว่าทุกผลิตภัณฑ์มีคุณภาพตามมาตรฐานสูงของเรา
                  </p>
                </div>
              </div>

              <div className="bg-ice-white rounded-lg shadow-md p-6 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-steel-blue text-ice-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">จัดส่ง</h3>
                  <p className="text-slate">
                    บรรจุหีบห่ออย่างระมัดระวัง และจัดส่งตรงเวลาไปยังสถานที่ที่ท่านกำหนด
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-steel-blue text-ice-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            พร้อมเริ่มโครงการของคุณแล้วหรือยัง?
          </h2>
          <p className="text-xl text-fog-gray mb-8 max-w-2xl mx-auto">
            ติดต่อเราวันนี้ เพื่อปรึกษาเกี่ยวกับงานขึ้นรูปโลหะของคุณ 
            และเรียนรู้ว่าโรงงานของเราจะทำให้แบบของคุณเป็นจริงได้อย่างไร
          </p>
          <Link 
            href="/contact/"
            className="inline-block bg-ice-white text-steel-blue hover:bg-fog-gray font-bold py-4 px-10 rounded-lg transition-colors text-lg"
          >
            ติดต่อเรา
          </Link>
        </div>
      </section>
    </>
  )
}