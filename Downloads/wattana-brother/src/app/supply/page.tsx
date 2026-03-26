import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'บริการและความสามารถ',
  description: 'บริการขึ้นรูปโลหะและสแตนเลสตามสั่ง รวมถึงถังความดัน ถังผสมเคมี และโซลูชันเหล็กอุตสาหกรรม',
  alternates: {
    canonical: 'https://www.wattanabrother.com/supply',
  },
}

export default function SupplyPage() {
  const services = [
    {
      title: 'งานขึ้นรูปโลหะตามสั่ง',
      description: 'ผลิตเหล็กและสแตนเลสตามสั่งตามแบบและข้อกำหนดทางเทคนิคเฉพาะของท่าน',
      icon: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z'
    },
    {
      title: 'บริการตัดเหล็ก',
      description: 'ตัดเหล็กหนาและเหล็กโค้งอย่างแม่นยำตามข้อกำหนดของท่าน ด้วยอุปกรณ์ที่ทันสมัย',
      icon: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879'
    },
    {
      title: 'ถังความดัน',
      description: 'ถังความดันเหล็กและสแตนเลสที่ผลิตตามมาตรฐานอุตสาหกรรมสำหรับการใช้งานอุตสาหกรรมต่างๆ',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    },
    {
      title: 'ถังผสมเคมี',
      description: 'ถังเฉพาะทางที่ออกแบบสำหรับการแปรรูปเคมี การผสม และการจัดการวัสดุกัดกร่อน',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    },
    {
      title: 'ถังเก็บของเหลว',
      description: 'โซลูชันการจัดเก็บที่ทนทานสำหรับวัสดุของเหลวต่างๆ พร้อมขนาดและข้อกำหนดที่ปรับแต่งได้',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      title: 'ขึ้นรูปฝาถัง',
      description: 'ฝาถังเหล็กและสแตนเลสตามสั่งและอุปกรณ์เสริมที่ผลิตให้เหมาะกับข้อกำหนดเฉพาะของท่าน',
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
    }
  ]

  return (
    <>
      <section className="bg-steel-blue text-ice-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">บริการและความสามารถ</h1>
          <p className="text-xl text-fog-gray">บริการขึ้นรูปโลหะครบวงจร</p>
        </div>
      </section>

      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-ice-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-6">ความสามารถของเรา</h2>
              <p className="text-lg text-slate leading-relaxed mb-6">
                เรารับงานผลิตโลหะและสแตนเลสตามแบบ ตัดเหล็กหนาและเหล็กโค้งตามสั่ง 
                ถังความดันเหล็ก ถังความดันสแตนเลส ถังผสมเคมี ถังเก็บของเหลว 
                และขึ้นรูปฝาถังเหล็กและสแตนเลส
              </p>
              <p className="text-lg text-slate leading-relaxed">
                ด้วยประสบการณ์กว่า 40 ปี และโรงงานผลิตที่ทันสมัย 
                บริษัท วัฒนบราเดอร์ จำกัด มอบโซลูชันการขึ้นรูปโลหะคุณภาพเยี่ยม
                สำหรับการใช้งานอุตสาหกรรมที่หลากหลาย
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-ice-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-steel-blue rounded-full flex items-center justify-center mb-4">
                    <svg 
                      className="w-8 h-8 text-ice-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d={service.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
                  <p className="text-slate">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-navy text-ice-white rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">ทำไมต้องเลือกบริการของเรา?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent-cyan">การรับประกันคุณภาพ</h3>
                  <p className="text-fog-gray">ทุกโครงการผ่านการควบคุมคุณภาพอย่างเข้มงวด เพื่อให้มั่นใจว่าตรงตามมาตรฐานสูงสุด</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent-cyan">ทีมงานผู้เชี่ยวชาญ</h3>
                  <p className="text-fog-gray">ช่างฝีมือและวิศวกรที่มีทักษะ พร้อมประสบการณ์รวมหลายสิบปี</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent-cyan">โซลูชันตามสั่ง</h3>
                  <p className="text-fog-gray">บริการขึ้นรูปที่ออกแบบเฉพาะเพื่อตอบสนองข้อกำหนดเฉพาะของท่าน</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent-cyan">การส่งมอบตรงเวลา</h3>
                  <p className="text-fog-gray">ตารางการผลิตที่เชื่อถือได้ และการทำโครงการให้เสร็จตรงเวลา</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-blue text-ice-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">พร้อมเริ่มโครงการของคุณแล้วหรือยัง?</h2>
          <p className="text-xl text-fog-gray mb-8 max-w-2xl mx-auto">
            ติดต่อเราวันนี้ เพื่อปรึกษาเกี่ยวกับความต้องการในการขึ้นรูปโลหะของคุณ และรับใบเสนอราคาแบบกำหนดเอง
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