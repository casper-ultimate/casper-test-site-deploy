
export interface GameListedRecord{
    id: number,
    content: string,
    gameState: string,
    turn: string,
    gameplayStatus: string,
}

export interface GameListedRecords{
    records: GameListedRecord[],
    page: number,
    maxPage: number,
    itemsPerPage: number,
    index: number,
}

export interface PaginationValue{
    page: number,
    itemsPerPage: number
}

/*
    Create a game instance.
    Who created the game?
*/
export function CreateNewGame(){

}

//{id:i, content:`${e}`, gameState: "guessing", turn: '3/5'}
var sampleRecords : GameListedRecord[] = new Array(0,0,0,0)
.map((e,i)=> 
    ({
        id: i,
        content: `${e}`,
        gameState: 'guessing2',
        turn: '3/5',
        gameplayStatus: 'Join'
    })
)

export async function GetGameRecordsWithGuessState({page, itemsPerPage}:PaginationValue){
    return {
        records: sampleRecords.map(e=>{e.gameState=`guessing ${page}`; return e}),
        page: page,
        maxPage: 2,
        index: 0,
        itemsPerPage: 5,
    }
}

export function GetGameRecordsWithVotingState({page, itemsPerPage}:PaginationValue){
    return {
        records: sampleRecords.map(e=>{e.gameState='voting'; return e}),
        page: page,
        maxPage: 2,
        index: 0,
        itemsPerPage: 5,
    }
}

export function GetGameRecordsWithCompletedState({page, itemsPerPage}:PaginationValue){
    return {
        records: sampleRecords.map(e=>{e.gameState='complete'; return e}),
        page: page,
        maxPage: 2,
        index: 0,
        itemsPerPage: 5,
    }
}


//get the game records which the user is a part of.
export async function GetActiveGameRecordsOfUser({page, itemsPerPage}:PaginationValue){

    return {
        records: sampleRecords.map(e=>{e.gameState=`guessing ${page}`; return e}),
        page: page,
        maxPage: 2,
        index: 0,
        itemsPerPage: 5,
    }
}

/*
    GetGameSession by id
    
    GameSessionData: all of it in a json object
*/
export function GetGameSession(){

}