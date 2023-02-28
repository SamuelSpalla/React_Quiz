import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Option from './Option'

import './Question.css'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const atualQuestion = quizState.questions[quizState.atualQuestion]

    const onSelectOption = (option) =>{
        dispatch({
            type: 'check_resposta',
            payload: {answer: atualQuestion.answer, option}
        })
    }

    return (
        <div id='question'>
            <p>Pergunta {quizState.atualQuestion + 1} de {quizState.questions.length}</p>
            <h2>{atualQuestion.question}</h2>
            <div id='options-container'>
                {atualQuestion.options.map((option)=>(
                    <Option option={option} 
                    key={option} 
                    answer={atualQuestion.answer}
                    selectOption={()=> onSelectOption(option)}
                    />
                ))}
            </div>
            {quizState.respostaSelected && (
                <button onClick={()=> dispatch({type: 'change_question'})}> <i class="gg-arrow-long-right"></i></button>
            )}
        </div>
    )
}

export default Question