import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
    gameStage: STAGES[0],
    questions,
    atualQuestion: 0,
    score: 0,
    respostaSelected: false
}

const quizReducer = (state, action) =>{

    switch(action.type){
        case 'change_state':
            return{
                ...state,
                gameStage: STAGES[1]
            }
        
        case 'reordenar':
            const reordenarQuestions = questions.sort(()=>{
                return Math.random() - 0.5
            })
            console.log('reordenou')
            return {
                ...state,
                questions: reordenarQuestions
            }
            
        case 'change_question':
            const nextQuestion = state.atualQuestion + 1
            let endGame = false

            if(!questions[nextQuestion]){
                endGame = true
            }

            return{
                ...state,
                atualQuestion: nextQuestion,
                gameStage: endGame? STAGES[2] : state.gameStage,
                respostaSelected: false

            }
        
        case 'novo_jogo':
            return initialState
        
        case 'check_resposta':
            if(state.respostaSelected) return state

            console.log('a')
            const answer = action.payload.answer
            const option = action.payload.option
            let respostasCorreta = 0

            if(answer === option) respostasCorreta = 1

            return{
                ...state,
                score: state.score + respostasCorreta,
                respostaSelected: option
            }
        
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) =>{
    const value = useReducer(quizReducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}