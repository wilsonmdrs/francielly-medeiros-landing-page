export const metadata = {
  title: 'Francielly Medeiros | Lash Designer',
  description: 'Course',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
