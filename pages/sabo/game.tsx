import { ReactElement, useEffect, useState } from "react"
import { GridTail, pageChangeEvent } from "../../components/Functional/TableControls"
import Layout from "../../components/layout"
import { GameListedRecord, GetGameRecordsWithGuessState, GetGameRecordsWithVotingState, GetActiveGameRecordsOfUser, GameListedRecords, PaginationValue } from "../../drivers/GameDataDriver"
import styles from "./game.module.css"

function GameScreen(){
    var [category, setCategory] = useState("test") 
    return (
        <div className={styles.screen}>
            <div className={styles.categoryContainer}>
                {category}
            </div>
                <div style={{borderBottom: '1px solid gray'}}></div>
                <div className={styles.contentContainer}>
            </div>
        </div>
    )
}

enum SaboGameState{
    LOBBY,
    NEW_GAME,
    OTHER,
}

interface SubStateValue{
    StateCallback: Function
}

export default function Game() {
    const [gameState, setGameState] = useState(SaboGameState.LOBBY);

    var result;

    switch(gameState){
        case SaboGameState.LOBBY: 
            result = DoGamesList({StateCallback: ()=>{setGameState(SaboGameState.NEW_GAME)}})
        break;
        case SaboGameState.OTHER: 
            result = <div>other</div>//DoGamesList({StateCallback: ()=>{setGameState(SaboGameState.NEW_GAME)}})
        break;
        case SaboGameState.NEW_GAME: 
            result = <div>new game</div>//DoGamesList({StateCallback: ()=>{setGameState(SaboGameState.NEW_GAME)}})
        break;
    }

    return (
        <Layout>
            <div>{result}</div>
        </Layout>
    )
}

function DoGamesList(input: SubStateValue){
    var onNewGameClick = ()=> input.StateCallback();
    
    return (
        <div className={styles.lobbyGrid}>
            <div 
                className={styles.newGameButton}
                onClick={onNewGameClick}
                >{
                    'CreateNewGame'
                }</div>
            <div>Your Games
                <RenderGameRecordTable func={GetActiveGameRecordsOfUser}/>
            </div>
            <div>Open Games
                <RenderGameRecordTable func={GetGameRecordsWithGuessState}/>
            </div>
        </div>
    )
}

function Clamp(input:number, lowerRange:number, upperRange:number){
    var upperResult = input - upperRange 
    var lowerResult = input + lowerRange

    if(lowerResult <= 0)
        return lowerResult
    
    if(upperResult >= 0)
        return upperResult

    return input;
}

function RenderGameRecordTable({func}:{func:Function}){

    var [{hash,games}, setGameRecords]:[{hash:number, games: GameListedRecords}, Function] = useState({hash: Math.random(), games: {} as GameListedRecords})

    var gamesRecords:PaginationValue = {page: 0, itemsPerPage: 5}

    var updateGrid = ()=>{
        func(gamesRecords).then((e:GameListedRecords)=>setGameRecords({hash: Date.now(), games:e}))
    }

    useEffect(()=>updateGrid(), [])

    var listOfGames = games.records?.map((e,i) => GenerateGameListItem(e, hash))

    return (
        <div className={styles.gameListGrid}>
            {listOfGames}
            <GridTail 
                maxPage={games.maxPage} 
                currentPage={Number.isInteger(games.page)?games.page:0} 
                onPageChange={(evt:pageChangeEvent)=>{
                    var change = Clamp(evt.pageDelta, 0, games.maxPage)+games.page
                    
                    gamesRecords = {page: change, itemsPerPage: gamesRecords.itemsPerPage}
                    updateGrid()
                }}
            />
        </div>
    )
}

function GenerateGameListItem({id, content, gameState, turn, gameplayStatus}: GameListedRecord, hash: number){
    
    var showTurns = gameState == 'guessing'? turn : '-/-';
    
    return (
        <div key={`${id}`} className={styles.gameListRow}>
        <div className={styles.gameListItem}>{gameState}</div>
            <div className={styles.gameListItem}>{showTurns}</div>
            {<div className={[styles.gameListItem, styles.gameListItemAction].join(' ')}>{gameplayStatus}</div>}
        </div>
    )
}
