import { SessionProvider } from "next-auth/react"
import LandingPageContent from "../components/Content/LandingPage"
import Layout from "../components/layout"
import { GetRoutes } from "../drivers/PageRoutes"
export default function IndexPage() {
  const route = GetRoutes()

  return (
      <Layout>
        <LandingPageContent/>
      </Layout>
  )
}
