import { SessionProvider } from "next-auth/react"
import { LandingPageV2 } from "../components/Content/LandingPageV2"
import Layout from "../components/layout"
import { GetRoutes } from "../drivers/PageRoutes"
export default function IndexPage() {
  const route = GetRoutes()

  return (
      <Layout topBarVisible={false}>
        <LandingPageV2/>
      </Layout>
  )
}
