import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Build-a-Beer',
  description: 'Create a beer to call your own',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Container>
        <Header />
        {children}
        <Footer />
       </Container> </body>
    </html>
  )
}
