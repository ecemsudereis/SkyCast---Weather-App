import './styles/main.scss'

export const metadata = {
  title: 'SkyCast - Weather App',
  description: 'Weather forecast app for every city',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
