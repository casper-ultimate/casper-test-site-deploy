import Link from 'next/link';
import styles from './LandingPageV2.module.css'

var titleImageLocation = 'https://cuscasperplatform.blob.core.windows.net/test/solo-avatar.png'

export function LandingPageV2(){
    var pageImage = (<div className={[
        styles.noRepeatImage,
        styles.imageHeightMax,
        styles.absolute,
        styles.z1
    ].join(' ')} style={{backgroundImage: `url(${titleImageLocation})`}}/>)

    return (
        <div className={styles.landingPageContentContainer}>{
            <div className={[
                styles.landingPageContent,
            ].join(' ')}>{
                pageImage
            }{
                GetLinks()
            }{
                GetText()
            }{
                GetCarouselButtons()
            }</div>
        }
        </div>)
}

var LandingPageLinks = [
    <Link href={'#about_blank'}>Home</Link>,
    <Link href={'#about_blank'}>About</Link>,
    <Link href={'#about_blank'}>Sign in</Link>,
];

function GetText(){
    return (
    <div className={[
        styles.flexRow,
        styles.justifyEnd,
        styles.pad20,
        styles.scrollFit,
    ].join(' ')}>
        <div className={[
            styles.fontColor,
            styles.z2,
            styles.bkRed,
            styles.relative,
            styles.preWrap,
            styles.width1,
            styles.paraLine,
            styles.paragraphContainer,
            styles.swipeMode,
            styles.paragraphItems
        ].join(' ')}>{
            [
                `Welcome to Project Casper! We are a community-driven platform that is dedicated to supporting content creators and helping them engage with their viewers. Our goal is to bring new technologies to the streaming ecosystem that will revolutionize the way creators and viewers interact.`,
                `We believe that everyone has something unique and valuable to share with the world, and our platform is designed to give content creators the tools they need to succeed. Whether you are a seasoned creator looking to take your channel to the next level or a newcomer just starting out, we have something for you.`,
                `With Project Casper, you can expect a seamless streaming experience, innovative features that enhance viewer engagement, and a supportive community of like-minded creators. Our team is constantly working to improve the platform and add new features, so you can focus on what you do best: creating amazing content.`,
                `Whether you're a content creator looking to take your stream to the next level, or a viewer looking to support and connect with your favorite creators, Project Casper has something for everyone. So join us today and be a part of the future of streaming.`,
            ].map((e,i)=>(<div key={i}><div className={styles.blurBk}>{e}</div></div>))
            }</div>
    </div>)
}

function GetCarouselButtons(){
    return (<div className={[
        styles.fontColor,
        styles.z2,
        styles.justifyEnd,
        styles.flexRow,
        styles.pad20,
    ].join(' ')}>test</div>)
}

function GetLinks(){
    var len = LandingPageLinks.length
    if(len == 1) len++;
    return (<div className={[
            styles.z2,
            styles.sticky0,
            styles.gridForm,
            styles.oneAndOneHalfLineHeight,
            styles.flexRow,
            styles.gap20,
            styles.justifyEnd,
            styles.pad20,
            styles.linkContainer
        ].join(' ')}>
        {LandingPageLinks.map((e,i)=>(
        <div key={i} 
            className={[
                styles.linkUnderline,
            ].join(' ')}>
            {e}
        </div>))}
    </div>)
}