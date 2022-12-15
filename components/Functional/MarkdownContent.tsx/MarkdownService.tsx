import styles from './MarkdownContent.module.css'

export const mkStyles = styles;

export interface MarkupData{
    tag: string,
    text: string
}

export interface MarkupGroup{
    groupLabel: string,
    styleClasses: string[]|[],
    values: MarkupData[]
}

const MarkupTags = {
    div: (e:any) => <div>{e}</div>,
    bigLabel: (e:any)=> <h1>{e}</h1>,
    bigLabel2: (e:any)=> <div className={styles.sloganText}>{e}</div>,
}

function GetComponentFromMarkup(data: MarkupData):JSX.Element{
    return MarkupTags[data.tag as keyof typeof MarkupTags](data.text);
}

var getUsedClassesString = (classes: string[]):string => classes.join(' ');

export function MapMarkdownContent(markup: MarkupGroup[]){
    return markup.map(group => 
        (key: number)=>
        <div key={key} className={mkStyles.outerContainer}>
            <div className={getUsedClassesString(group.styleClasses)}>
                {group.values.map(((e,i)=>
                    <div key={i}>{GetComponentFromMarkup(e)}</div>
                    ))}
            </div>
        </div>
    )
}

export function MakeMarkupGroup(label: string, values: MarkupData[], styleClasses:string[]=[]): MarkupGroup{
    return {
        groupLabel: label,
        styleClasses: styleClasses,
        values: values
    }
}