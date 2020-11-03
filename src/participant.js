import React from 'react'

function Participant(props){
let {name, avatar, inSession, onStage} = props.store
console.log(name)
let image = (inSession ? "https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1024px-Location_dot_grey.svg.png")
// let image = `https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1`
let stageString = (onStage ? "on stage": "left stage")
console.log(image)
   return <div className="participant">
            <div className="left">
                <img src={avatar}/>
            </div>
            <div className="right">
                <h4>{name}</h4>
                <span className="row">
                    <img src={image}/>
                     <span>{stageString}</span>
                </span>
            </div>
        </div>
}

export default Participant