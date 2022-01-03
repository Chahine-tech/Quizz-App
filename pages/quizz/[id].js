import * as Quizz from "../../models/Quizz"
import React, { useState } from 'react';
import Header from '../../components/header'
export function getStaticPaths(){
  const quizzes = Quizz.find()
  return {
    paths: quizzes.map(
      quizz => ({params : {id: String(quizz.id)}} 
    )),
    fallback: false,
    }
}
export async function getStaticProps({params}) {
    
  return {
      props: {
          quizz: Quizz.findOne(Number(params.id))        },
  }
}
export default function QuizzesPage(props) {
  const [step, setStep] = useState(0)
  const [response, setReponse] = useState({})
  console.log(props)

  function validateReponse(response) {
      const { responses } = props.quizz.questions[step]
      if (responses.filter(({ value, isValid }) => response === value && isValid).length <= 0) return

      setStep(step + 1)
  }

  return (
      <div>
          <Header />
          <div>
              <h1 className="text-center mb-6 text-xl font-bold">Quizz culture Général </h1>

              <h2 className="text-xl font-bold p-8"> {props.quizz.questions[step].title}</h2>
              <div className="space-x-2 p-8 mb-20">
                  <select className="select select-bordered w-full max-w-xs" onChange={(e) => setReponse(e.target.value)}>
                      <option disabled="disabled" selected="selected">Choisis ta réponse</option>
                      {props.quizz.questions[step].responses.map(response => (<option value={response.value}>{response.value}</option>))}
                  </select>

                  <button onClick={() => validateReponse(response)} className="btn btn-primary">Valider</button>
              </div>

          </div>
          <ul className="w-full steps">
              <li data-content="?" className="step step-neutral">Step 1</li>
              <li data-content="!" className="step step-neutral">Step 2</li>
              <li data-content="✓" className="step step-neutral">Step 3</li>
              <li data-content="✕" className="step step-neutral">Step 4</li>
              <li data-content="●" className="step step-neutral">Step 5</li>
              <li data-content="●" className="step step-neutral">Step 6</li>
              <li data-content="●" className="step step-neutral">Step 7</li>
          </ul>
      </div>
  )
}