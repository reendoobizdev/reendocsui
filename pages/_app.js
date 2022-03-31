import AdminLayout from '../layouts/AdminLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  )
}

export default MyApp
