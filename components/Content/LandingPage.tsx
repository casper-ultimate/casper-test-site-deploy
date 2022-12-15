import { MapMarkdownContent, MarkupGroup, MarkupData, mkStyles, MakeMarkupGroup } from "../Functional/MarkdownContent.tsx/MarkdownService"
import styles from "./LandingPage.module.css"


//TODO change this to pull the site data.
//probably use redis to cache the content so we don't pull it from a resource that sits on the server so often.
function GetTextContent(): MarkupGroup[] {
    return [
        MakeMarkupGroup('title', [
            {
                tag: 'bigLabel',
                text: 'Welcome to the'
            },
            {
                tag: 'bigLabel2',
                text: 'Streamer Asset Platform!'
            },
        ], 
        [
            mkStyles.subItem_2_theme,
            mkStyles.centerPiece,
            mkStyles.boxedGroup, 
            mkStyles.pad_10,

        ]),

        MakeMarkupGroup('explainer', [
            'There will be many many features that we are planning for the platform.',
            'This platform is meant to assist streamers and viewers provide an even better experience than just a video player, and alerts.',
            'The goal for us is to create a group of systems which enhance the viewer experience and allow for better interactivity between the content creators and their audience.',
            'Our mission is to create a platform for everyone that relies on entertaining their audience as their livelihood to have an avenue of success through our services.'
        ].map(e=>({
            tag: 'div',
            text: e
        })),
        [
            mkStyles.titleTheme,
            mkStyles.titledParagraph,
            mkStyles.oneAndOneHalfLineHeight,
            mkStyles.centerPiece,
            mkStyles.boxedGroup,
            mkStyles.pad_15_g1,
            mkStyles.mar_rm_10_g1,
            mkStyles.contentFontSize
        ]),
        
        MakeMarkupGroup('explainer2', [
            'Not just the Streamers...',
            'We are focusing on everyone. This probably also includes you, the reader, since you are here.',
            'The types of individuals we can promote more business values towards:',
            'Graphics Artists',
            'Content Creators',
            'Web Developers',
            'Game Development Companies',
            'Engineers',
            'Corporate Sponsors',
            'Memelords',
            'You name it. If you can figure out a way, you can likely succeed financially through the platform.'
        ].map(e=>({
            tag: 'div',
            text: e
        })),
        [
            mkStyles.titleTheme,
            mkStyles.titledParagraph,
            mkStyles.centerPiece,
            mkStyles.boxedGroup,
            mkStyles.pad_15_g1,
            mkStyles.mar_rm_10_g1,
            mkStyles.contentFontSize,
            mkStyles.oneAndOneHalfLineHeight,
        ]),

        MakeMarkupGroup('Second_Milestones', [
            'blah',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed arcu non odio euismod lacinia at. Pellentesque nec nam aliquam sem et tortor consequat. Fringilla ut morbi tincidunt augue. Volutpat ac tincidunt vitae semper quis lectus. Mattis molestie a iaculis at erat. Consectetur a erat nam at lectus urna. Quis enim lobortis scelerisque fermentum dui faucibus. Quis lectus nulla at volutpat diam ut. Quis risus sed vulputate odio ut enim blandit volutpat. Ut faucibus pulvinar elementum integer enim neque. A diam sollicitudin tempor id. Pharetra sit amet aliquam id diam. Mauris vitae ultricies leo integer. Massa massa ultricies mi quis hendrerit dolor magna eget est. Ultricies leo integer malesuada nunc vel risus. Urna duis convallis convallis tellus id interdum velit laoreet. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Ullamcorper dignissim cras tincidunt lobortis feugiat.'
        ].map(e=>({
            tag: 'div',
            text: e
        })),
        [
            mkStyles.titleTheme,
            mkStyles.titledParagraph,
            mkStyles.centerPiece,
            mkStyles.boxedGroup,
            mkStyles.pad_15_g1,
            mkStyles.mar_rm_10_g1,
            mkStyles.contentFontSize,
            mkStyles.oneAndOneHalfLineHeight,
        ]),     
    ]
}

export default function LandingPageContent(){

    var content = MapMarkdownContent(GetTextContent())
    return (
        <div className={styles.landingPageContentContainer}>{
            <div className={styles.landingPageContent}>{
                content.map((e,i) => e(i))
            }</div>
        }</div>)
}
