import { GetModalService, ModalControls, ModalValues } from '../Functional/ModalService'
import { signIn, signOut, useSession } from "next-auth/react"
import styles from './Topbar.module.css'
import { NotificationWidget } from '../Functional/Notifications/Notifications'

export function Topbar(){
    const { data: session, status } = useSession()

    const modalService = GetModalService()

    return (
        <div 
            id={"topbar"}
            className={styles.topbar}
        >
            <div 
                id={"topbar-item_1"}
                className={styles.item}
            >A</div>
            <div 
                id={"topbar-item_2"}
                className={styles.item}
            >B</div>
            <div 
                id={"topbar-item_3"}
                className={[styles.item, styles.endAdmin].join(' ')}
            >
                <NotificationWidget></NotificationWidget>
                <div className={styles.userAdminSection}
                    onClick={UserAdminClick(session, modalService)}
                >{
                    GetUserAdminItem(modalService)
                }</div>
            </div>
        </div>
    )
}

function GetUserAdminModal(session: any){
    var count = 0
    var inSession = session?.user !== undefined

    var elementNotInSession = !inSession ? (
        <div key={inSession.toString()}>
            <span className={styles.notSignedInText}>{
                "You are not signed in"
            }</span>
            <div
                className={styles.logoutButton}            
            >
                <a
                href={`/api/auth/signin`}
                className={styles.logoutLink}
                onClick={(e) => {
                    e.preventDefault()
                    signIn()
                }}
                >{
                    "Sign in"
                }</a>
            </div>
      </div>
    ) : null
    console.log(session?.user?.image)
    var elementInSession = inSession ? (
        <div 
            key={inSession.toString()}
            className={styles.signedInTextContainer}    
        >
            {session.user.image && (
                <img loading={"lazy"} referrerPolicy={"no-referrer"} className={styles.avatar} src={session.user.image}/>
            )}
            <div
            className={styles.logoutButton}
            >
            <a
                href={`/api/auth/signout`}
                className={styles.logoutLink}
                onClick={(e) => {
                    e.preventDefault()
                    signOut()
                }}
                >{"Sign out"}</a>
        </div>
            <span 
                className={styles.signedInText}>
            <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            
        </div>
    ) : undefined

    return [
        elementInSession??elementNotInSession
    ]
}

function UserAdminClick(session: any, modalService: ModalValues){

    var title = session?.user? 'User' : 'Sign in'

    return ()=>{
        modalService?.open!(
            {
                id: 'userRegistrationModal1',
                title: title,
                modalClass: styles.signinModal,
                options: [ModalControls.CLOSE_TAB],
                element: GetUserAdminModal(session),
                close: ()=>{}
            }
        )}
}

function GetUserAdminItem(modalService : ModalValues){
    var UserAdminItem = (<div>User</div>)

    return UserAdminItem
}