import {useContext} from 'react'
import { QuizContext } from '../context/quiz'

import './GameOver.css'



function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div id='gameover'>
        <h2>Fim do Jogo!</h2>
        <p>Pontuação: {quizState.score * 20}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
        <button onClick={()=> dispatch({type: 'novo_jogo'})}>Reiniciar <i className='gg-undo'></i></button>
    </div>
  )
}

export default GameOver