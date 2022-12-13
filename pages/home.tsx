import { SessionProvider } from "next-auth/react"
import { ArticleSection } from "../components/Article/ArticleSection"
import Layout from "../components/layout"
import layoutStyles from "../components/LayoutCss/layout.module.css"

export default function Home() {
  return (
      <Layout>
        <div className={"inner-body-fill"}>
          <div className={layoutStyles["page-content-container"]}>
            <ArticleSection/>
          </div>
        </div>
      </Layout>
  )
}
