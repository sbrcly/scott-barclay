import MainHeader from "@/components/main-header/MainHeader.jsx"
import "./globals.css"

export const metadata = {
  title: "Scott Barclay",
  description: "Software Developer",
}

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
