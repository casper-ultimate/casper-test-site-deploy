import Link from 'next/link';
import styles from './LandingPageV2.module.css'

var titleImageLocation = 'https://cuscasperplatform.blob.core.windows.net/test/AVATAR4_SHADING.png'
var backgroundImageLocation = 'https://cuscasperplatform.blob.core.windows.net/test/bluedatacenter.png'

export function LandingPageV2(){
    var pageImage = (<div className={[
        styles.fullScreen,
        styles.noRepeatImage,
        styles.imageHeightMax,
        styles.contain,
        styles.absolute,
        styles.z1
    ].join(' ')} style={{backgroundImage: `url(${titleImageLocation})`}}/>)
    
    var pageImage2 = (<div className={[
        styles.unfullScreen,
        styles.bkCenter,
        styles.noRepeatImage,
        styles.imageHeightMax,
        styles.cover,
        styles.absolute,
        styles.z1
    ].join(' ')} style={{backgroundImage: `url(${backgroundImageLocation})`}}/>)

    return (
        <div className={styles.landingPageContentContainer}>{
            <div className={[
                styles.landingPageContent,
            ].join(' ')}>{
                pageImage
            }{
                pageImage2
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
    {href:'#about_blank', content:'Home'},
    {href:'#about_blank', content:'About'},
    {href:'#about_blank', content:'Sign in'},
].map(({href,content}:{href:string, content:string},i)=><Link key={i} href={href}>{content}</Link>);

var inlineCard = (
    <div className={[
        styles.imageHeightMax,
        styles.noRepeatImage,
        styles.cover,
        styles.flexRow,
        styles.noIndent,
        styles.gap20,
        styles.justifyCenter,
        styles.radius8
    ].join(' ')}
    style={{backgroundImage: `url(${titleImageLocation})`, aspectRatio: 1, filter: `hue-rotate(160deg) opacity(0.68)`}}>{
        <div>Project</div>}{<div>CASPER</div>
    }</div>)

function GetText(){
    return (
    <div className={[
        styles.flexRow,
        styles.landingPageAlignment,
        styles.pad20,
        styles.scrollFit,
        styles.maxW1400,
        styles.z2,
    ].join(' ')}>
        <div className={[
            styles.fontColor,
            styles.swipePadding,
            styles.swipeMode,
            styles.bkRed,
            styles.relative,
            styles.preWrap,
            styles.width1,
            styles.paraLine,
            styles.paragraphContainer,
            styles.paragraphItems,
        ].join(' ')}>{
            [
                GetImageCard(inlineCard),
                GetTextCard(`Welcome to Project Casper! We are a community-driven platform that is dedicated to supporting content creators and helping them engage with their viewers. Our goal is to bring new technologies to the streaming ecosystem that will revolutionize the way creators and viewers interact.`),
                GetTextCard(`We believe that everyone has something unique and valuable to share with the world, and our platform is designed to give content creators the tools they need to succeed. Whether you are a seasoned creator looking to take your channel to the next level or a newcomer just starting out, we have something for you.`),
                GetTextCard(`With Project Casper, you can expect a seamless streaming experience, innovative features that enhance viewer engagement, and a supportive community of like-minded creators. Our team is constantly working to improve the platform and add new features, so you can focus on what you do best: creating amazing content.`),
                GetTextCard(`Whether you're a content creator looking to take your stream to the next level, or a viewer looking to support and connect with your favorite creators, Project Casper has something for everyone. So join us today and be a part of the future of streaming.`),
                (i:number)=><div key={i}></div>
            ].map((e,i)=>(e(i)))
            }</div>
    </div>)
}

function GetTextCard(text:any){
    return (a:number) =><div key={a}
        className={[
            styles.blurBk,
        ].join(' ')}><div className={[
            styles.pad20,
        ].join(' ')}>{text}</div>
    </div>
}

function GetImageCard(item:any){
    return (a:number) =><div key={a} className={[
        styles.pad20,
        styles.flexRow,
        styles.blurBk,
        styles.unfullScreen,
        styles.pad25_75
    ].join(' ')}>{item}</div>
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