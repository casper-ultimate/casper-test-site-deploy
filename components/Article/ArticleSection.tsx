import styles from "./ArticleSection.module.css"

export function ArticleSection(){
    return (
        <div className={styles.articleBody}>  
            {
                (
                    new Array(5)
                    .fill(0)
                    .map(
                        (v,i)=>(
                            <div key={i} className={styles.articleContent}>
                                <div className={styles.articleTitle}>Hello world</div>                
                                <div className={styles.article}>Some content</div>
                            </div>
                        )
                ))
            }            
        </div>
    )
}