import React from 'react'
//import chapters12 from './chapters11'
//import './stylelink.css'
import './css/chapter.css'
export default function Chapter11 (props)
{    
        console.log("hel")
        return(
            <div className="outer">
                <div><h1>UNIT- {props.match.params.id}</h1></div>
                
            <div><h1>{props.match.params.name}</h1></div>
            <div className="grid-box">
                
                {props.location.state.linkclass12.map(l=>{
                    return(
                        <div>
                        <h3>{l.topic}</h3>
                    <iframe title={l.link1} width="500" height="300" src={l.link1} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                   </div>
                    )
                })} 
            </div>
            </div>
        )
}