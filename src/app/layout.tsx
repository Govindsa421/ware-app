import './globals.css'
import Footer from './components/banner/Footer'
import Navbar from './components/banner/Navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
