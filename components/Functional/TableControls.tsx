import styles from "./TableControls.module.css"

interface pageModel{
    currentPage: number,
    maxPage: number,
    onPageChange: Function
}

export interface pageChangeEvent{
    currentPage: number,
    pageDelta: number
}

export function GridTail({currentPage, maxPage, onPageChange}: pageModel){

    var showLeftArrow = currentPage == 0 || maxPage == 0 ? styles.blankArrow: styles.paginationControl;
    var showRightArrow = maxPage == 0 || currentPage == maxPage ? styles.blankArrow: styles.paginationControl;

    var clickLeft = ()=>onPageChange({currentPage, pageDelta: -1})
    var clickRight = ()=>onPageChange({currentPage, pageDelta: 1})

    return (
        <div className={styles.paginationGroup}>
            <div className={showLeftArrow} onClick={clickLeft}>&#171;</div>
            <div className={styles.paginationValue}>{currentPage+1}</div>
            <div className={showRightArrow} onClick={clickRight}>&#187;</div>
        </div>
    )
}