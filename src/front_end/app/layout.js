import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/NavBarCustom'
import NavBarCustom from './components/NavBarCustom'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Build-a-Beer',
  description: 'Create a beer to call your own',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       {/* <Container> */}
        {/* <NavBarCustom onSearch={(username) => console.log('Search initiated:', username)}/> */}
        <NavBarCustom />
        {children}
        {/* <Footer /> */}
       {/* </Container>  */}
       </body>
    </html>
  )
}
