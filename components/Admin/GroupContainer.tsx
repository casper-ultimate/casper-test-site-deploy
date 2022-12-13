import React from "react"

export function GroupContainer({Entries} : {Entries?: {Id: string, Node: React.ReactNode}[]}){
    
    var entries = Entries?.map((e:{Id: string, Node: React.ReactNode},i) =>(
        <div id={e.Id} key={i}>{e.Node}</div>)
    )
    
    return (<div className="groupcontainer">{entries}</div>)
}