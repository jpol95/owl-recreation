import React from 'react'
import ReactDOM from 'react-dom'
import Participant from './participant'
import store from './store'

function App(){
  store.sort(function(a,b){
    if (a.inSession - b.inSession != 0) return b.inSession - a.inSession
    return b.onStage - a.onStage
  })
  console.log(store)
  let partArray = store.map((current) => <Participant key={current.id} store={current} />)
  return <div className="participants">
    {partArray}
  </div>
}

export default App