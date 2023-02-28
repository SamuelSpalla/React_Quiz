import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Welcome.css'
import imgQuiz from '../img/quiz.png'



const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  

  return (
    <div id="welcome">
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão para começar:</p>
        <button onClick={()=> dispatch({type:'change_state'})}>Iniciar</button>
        <div>
            <img src={imgQuiz} alt="Iniciar" />
        </div>
        <footer>© 2023 Samuel Spalla da Silva</footer>
    </div>
  )
}

export default Welcome