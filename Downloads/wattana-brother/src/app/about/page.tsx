import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
  description: 'บริษัท วัฒนบราเดอร์ จำกัด ผู้เชี่ยวชาญงานผลิตเหล็กและสแตนเลส ก่อตั้งปี พ.ศ. 2527 ประสบการณ์กว่า 40 ปี',
  alternates: {
    canonical: 'https://www.wattanabrother.com/about',
  },
  openGraph: {
    title: 'เกี่ยวกับเรา | บริษัท วัฒนบราเดอร์ จำกัด',
    description: 'ผู้เชี่ยวชาญงานผลิตเหล็กและสแตนเลส ตั้งแต่ปี พ.ศ. 2527',
    url: 'https://www.wattanabrother.com/about',
  },
}

export default function AboutPage() {
  // รายชื่อลูกค้า
  const clients = [
    'Isuzu motors (Thailand) ltd.',
    'Atlascopco (Thailand) ltd.',
    'Patkol public company.',
    'Taikisha (Thailand) ltd.',
    'Standard can company limited.',
    'Ritta co.,ltd.',
    'Nissan diesel (Thailand) ltd.',
    'Lampton lighting technology co.ltd.',
    'Triumph steel co.,ltd.',
    'ABB (Thailand) co.,ltd.',
    'Goshu kohsan co.,ltd',
    'Sumitomo Rubber (Thailand) Co.,Ltd.',
    'Sumitomo Electric Wiring System(Thailand)Ltd.',
    'SEI Thai Electric Conductor Co.,Ltd.',
    'Honda Automobile (Thailand) Co.,Ltd.',
    'Honda Automobile (Thailand) Co.,Ltd.',
    'Thai NOK Co.,Ltd.',
    'Denso (Thailand) Co.,Ltd.',
    'Aisin Ai (Thailand) Co., Ltd.',
    'Canon Prachinburi (Thailand) Co.,Ltd.',
    'Canon Hi-tech (Thailand)Ltd.',
    'JTEKT (Thailand) Co.,Ltd.',
    'Takebe (Thailand) Co.,Ltd.',
    'Uni-Charm (Thailand) Co.,Ltd.',
    'Takeda Industry (Thailand) Co.,Ltd.',
    'Thai Koito Co.,Ltd.',
    'Fujikura Electronics (Thailand) Co.,Ltd.',
    'Fujikura Electronics (Thailand) Co.,Ltd.',
    'Tokai Rika (Thailand) Co.,Ltd.',
  ]

  return (
    <>
      {/* Page Header */}
      <section className="bg-steel-blue text-ice-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">เกี่ยวกับบริษัท วัฒนบราเดอร์ จำกัด</h1>
          <p className="text-xl text-fog-gray">ความเป็นเลิศในงานผลิตเหล็กและสแตนเลส ตั้งแต่ปี 1984</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <div className="bg-ice-white rounded-lg shadow-lg p-8 md:p-12 mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-charcoal mb-6">บริษัทของเรา</h2>
              <p className="text-lg text-slate mb-4 leading-relaxed">
                <strong className="text-charcoal">บริษัท วัฒนบราเดอร์ จำกัด</strong> ก่อตั้งขึ้นในปี พ.ศ. 2527 
                เราเป็นผู้เชี่ยวชาญด้านการผลิตงานเหล็กและสแตนเลสมาอย่างยาวนาน กว่า 40 ปี 
                ด้วยประสบการณ์และความเชี่ยวชาญที่สั่งสมมา ทำให้เราเป็นพันธมิตรที่เชื่อถือได้ 
                สำหรับธุรกิจที่ต้องการงานผลิตโลหะคุณภาพสูงตามแบบที่กำหนด
              </p>
              <p className="text-lg text-slate mb-4 leading-relaxed">
                เราให้ความสำคัญกับคุณภาพและความแม่นยำในทุกขั้นตอนการผลิต 
                พร้อมทีมงานช่างฝีมือและเครื่องจักรที่ทันสมัย เพื่อตอบโจทย์ความต้องการของภาคอุตสาหกรรมต่างๆ 
                ไม่ว่าจะเป็นอุตสาหกรรมยานยนต์ อิเล็กทรอนิกส์ เคมีภัณฑ์ และอื่นๆ อีกมากมาย
              </p>
            </div>

            {/* Mission & Values */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-ice-white rounded-lg shadow-lg p-8 animate-slide-left delay-200">
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
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">พันธกิจของเรา</h3>
                <p className="text-slate leading-relaxed">
                  มุ่งมั่นส่งมอบงานผลิตเหล็กและสแตนเลสคุณภาพสูง 
                  ที่เกินความคาดหวังของลูกค้า ด้วยความเชี่ยวชาญด้านวิศวกรรม 
                  งานฝีมือที่ประณีต และเทคโนโลยีการผลิตที่ทันสมัย
                </p>
              </div>

              <div className="bg-ice-white rounded-lg shadow-lg p-8 animate-slide-right delay-300">
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
                      strokeWidth={2} 
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">คุณค่าของเรา</h3>
                <p className="text-slate leading-relaxed">
                  คุณภาพ ความซื่อสัตย์ และความพึงพอใจของลูกค้าคือหัวใจหลักของเรา 
                  เราสร้างความสัมพันธ์ระยะยาวบนพื้นฐานของความไว้วางใจ 
                  ความน่าเชื่อถือ และการส่งมอบผลงานที่ยอดเยี่ยมอย่างต่อเนื่อง
                </p>
              </div>
            </div>

            {/* Experience & Expertise */}
            <div className="bg-ice-white rounded-lg shadow-lg p-8 md:p-12 mb-8 animate-scale-in delay-400">
              <h2 className="text-3xl font-bold text-charcoal mb-6">40 ปีแห่งความเป็นเลิศ</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-steel-blue mb-2">40+</div>
                  <p className="text-slate font-semibold">ปีประสบการณ์</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-steel-blue mb-2">1000+</div>
                  <p className="text-slate font-semibold">โปรเจกต์สำเร็จ</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-steel-blue mb-2">100+</div>
                  <p className="text-slate font-semibold">ลูกค้าองค์กร</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-ice-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold text-charcoal mb-6">ทำไมต้องเลือกบริษัท วัฒนบราเดอร์ จำกัด?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg 
                    className="w-6 h-6 text-steel-blue mr-3 mt-1 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-slate">
                    <strong className="text-charcoal">งานผลิตตามสั่ง:</strong> เชี่ยวชาญงานผลิตเหล็กและสแตนเลสตามแบบที่ลูกค้ากำหนด
                  </span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-6 h-6 text-steel-blue mr-3 mt-1 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-slate">
                    <strong className="text-charcoal">เครื่องจักรทันสมัย:</strong> มีเครื่องจักรที่ทันสมัยสำหรับงานตัดเหล็กหนา ตัดโค้ง และผลิตถังแบบต่างๆ
                  </span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-6 h-6 text-steel-blue mr-3 mt-1 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-slate">
                    <strong className="text-charcoal">ควบคุมคุณภาพ:</strong> กระบวนการควบคุมคุณภาพที่เข้มงวด เพื่อให้มั่นใจว่าทุกชิ้นงานตรงตามมาตรฐานสูงสุด
                  </span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-6 h-6 text-steel-blue mr-3 mt-1 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-slate">
                    <strong className="text-charcoal">ทีมงานมืออาชีพ:</strong> ช่างฝีมือและวิศวกรที่มีประสบการณ์หลายสิบปีรวมกัน
                  </span>
                </li>
              </ul>
            </div>

            {/* Client List - ใหม่ */}
            <div className="bg-ice-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-charcoal mb-6">ลูกค้าองค์กรของเรา</h2>
              <p className="text-slate mb-6">
                เราภูมิใจที่ได้ให้บริการและได้รับความไว้วางใจจากบริษัทชั้นนำทั้งในและต่างประเทศ:
              </p>
              
              <div className="bg-fog-gray rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-steel-blue mb-4">
                  We manufacture to these companies :
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {clients.map((client, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-steel-blue font-semibold mr-3 flex-shrink-0">
                        {index + 1}.
                      </span>
                      <span className="text-slate">{client}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-steel-blue/10 rounded-lg p-6 border-l-4 border-steel-blue">
                <p className="text-charcoal font-semibold">
                  ✨ รายชื่อเหล่านี้เป็นเพียงส่วนหนึ่งของลูกค้าที่ไว้วางใจให้เราผลิตชิ้นส่วนและอุปกรณ์สำคัญ 
                  เราพร้อมที่จะเป็นพันธมิตรทางธุรกิจของคุณ
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link 
                href="/contact/"
                className="inline-block bg-steel-blue hover:bg-steel-blue-dark text-ice-white font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                ติดต่อเราวันนี้
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}