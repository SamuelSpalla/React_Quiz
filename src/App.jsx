import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'


import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'


import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)
  console.log(quizState)

  useEffect(() =>{
    dispatch({type: 'reordenar'})
  },[])

  return (
    <div className='container'>
      <div className='header'>
        <div className='logos'>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1>Quiz</h1>
      </div>

      <div className="App">
        {quizState.gameStage === 'Start'  && <Welcome/>}
        {quizState.gameStage === 'Playing'  && <Question/>}
        {quizState.gameStage === 'End' && <GameOver/>}
      </div>

      
      
    </div>

  )
}

export default App
