import Header from "./header"
import Footer from "./footer"
import type { ReactChildren } from "react"
import {Topbar} from "./Admin/Topbar"
import { Modal } from "./Functional/Modal/Modal"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
 
  return (
    <div className={"body-fill"}>
      <Modal key={0} id={'modal-entry'}/>
      <Topbar key={1}></Topbar>
      {children}
    </div>
  )
}
