import Header from "./header"
import Footer from "./footer"
import type { ReactChildren } from "react"
import {Topbar} from "./Admin/Topbar"
import { Modal } from "./Functional/Modal/Modal"

interface Props {
  children: React.ReactNode,
  topBarVisible?: boolean
}

export default function Layout({ children, topBarVisible=true }: Props) {
 
  return (
    <div className={"body-fill"}>
      <Modal key={0} id={'modal-entry'}/>
      {topBarVisible ? <Topbar key={1}></Topbar>: <div></div>}
      {children}
    </div>
  )
}
