import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wattanabrother.com'),
  title: {
    default: 'บริษัท วัฒนบราเดอร์ จำกัด - ผู้เชี่ยวชาญงานโลหะและสแตนเลส ตั้งแต่ปี 1984',
    template: '%s | บริษัท วัฒนบราเดอร์ จำกัด'
  },
  description: 'บริษัท วัฒนบราเดอร์ จำกัด ผู้เชี่ยวชาญงานขึ้นรูปโลหะและสแตนเลสกว่า 40 ปี รับผลิตถังแรงดัน ถังผสมสารเคมี งานตัดเหล็ก และโซลูชันเหล็กอุตสาหกรรม',
  keywords: ['งานโลหะ', 'สแตนเลส', 'ถังแรงดัน', 'ถังผสมสารเคมี', 'ตัดเหล็ก', 'ขึ้นรูปโลหะ', 'โรงงานเหล็ก', 'กรุงเทพ'],
  authors: [{ name: 'บริษัท วัฒนบราเดอร์ จำกัด' }],
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://www.wattanabrother.com',
    siteName: 'บริษัท วัฒนบราเดอร์ จำกัด',
    title: 'บริษัท วัฒนบราเดอร์ จำกัด - ผู้เชี่ยวชาญงานโลหะและสแตนเลส',
    description: 'ผู้เชี่ยวชาญงานขึ้นรูปโลหะและสแตนเลสกว่า 40 ปี รับผลิตถังแรงดัน ถังผสมสารเคมี',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'โรงงานบริษัท วัฒนบราเดอร์ จำกัด',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'บริษัท วัฒนบราเดอร์ จำกัด',
    description: 'ผู้เชี่ยวชาญงานโลหะและสแตนเลส',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://www.wattanabrother.com',
              name: 'บริษัท วัฒนบราเดอร์ จำกัด',
              alternateName: 'Wattana Brother Co., Ltd.',
              description: 'ผู้เชี่ยวชาญงานขึ้นรูปโลหะและสแตนเลส รับผลิตถังแรงดัน ถังผสมสารเคมี งานตัดเหล็ก ตั้งแต่ปี 1984',
              url: 'https://www.wattanabrother.com',
              logo: 'https://www.wattanabrother.com/logo.png',
              image: 'https://www.wattanabrother.com/og-image.jpg',
              foundingDate: '1984',
              telephone: ['+66-2-749-8115', '+66-81-138-1555'],
              email: 'wattanabrother@hotmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'ซอย แบริ่ง 26',
                addressLocality: 'ตำบล สำโรงเหนือ อำเภอเมืองสมุทรปราการ',
                addressRegion: 'สมุทรปราการ',
                postalCode: '10270',
                addressCountry: 'TH',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '13.650187',
                longitude: '100.607742',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00',
              },
              priceRange: '$$',
              currenciesAccepted: 'THB',
              paymentAccepted: 'Cash, Bank Transfer',
              areaServed: 'Thailand',
              serviceType: ['งานขึ้นรูปโลหะ', 'งานสแตนเลส', 'ถังแรงดัน', 'ถังผสมสารเคมี', 'งานตัดเหล็ก'],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {/* Add padding-top to prevent content from being hidden under fixed header */}
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}