import MainHeader from "@/components/main-header/MainHeader.jsx"
import Canvas from "@/components/Canvas"

import "./globals.css"

export const metadata = {
  title: "Scott Barclay",
  description: "Software Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <MainHeader />
        <Canvas />
        {children}
      </body>
    </html>
  )
}