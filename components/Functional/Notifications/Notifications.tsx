import {useSession } from "next-auth/react"
import { GetModalService, ModalControls, ModalValues } from '../../Functional/ModalService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons"

import styles from './NotificationWidget.module.css'

export function NotificationWidget(){
    const 
    { 
        data: session, status
    } = useSession()

    //set useState to fire an update or something.

    var explodeSession = ():{NotificationCount: number} => {return {NotificationCount: 0}}//change this to session properties later.

    const { NotificationCount } = explodeSession();

    return (
        <div className={styles.root}>
            <span><FontAwesomeIcon className={'fa-regular'} icon={faEnvelope} /></span>
            <div className={styles.numberBadge}>{NotificationCount}</div>
        </div>
    )
}