export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body style={{fontFamily:"Arial"}}>
        {children}
      </body>
    </html>
  )
}
