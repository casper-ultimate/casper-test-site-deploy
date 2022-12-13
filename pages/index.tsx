import { SessionProvider } from "next-auth/react"
import Layout from "../components/layout"
import { GetRoutes } from "../drivers/PageRoutes"

export default function IndexPage() {
  const route = GetRoutes()

  return (
      <Layout>
        <h1 onClick={()=>{
          route.toHomePage()
        }}>NextAuth.js Example</h1>      
      </Layout>
  )
}
