import {useContext} from 'react'
import { QuizContext } from '../context/quiz'


import './Option.css'

function Option({option, selectOption, answer}) {
  const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div className={`option ${quizState.respostaSelected && option === answer ? 'correto' : ''} 
    ${quizState.respostaSelected && option !== answer ? 'errado' : ''}`} onClick={()=> selectOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Option