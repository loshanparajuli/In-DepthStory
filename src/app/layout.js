import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IDS Media Network',
  description: 'The Media group, GenZ Trusts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children} 
      <SpeedInsights/>
      </body>
      </html>
   
  );
}
