import Head from 'next/head'
import Header from "../components/header"
import React, { useState } from 'react';

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/quizz`)
    const { data } = await res.json()
    return {
        props: {
            quizz: data.quizz
        },
    }
}
export default function Quizz(props) {
    const [step, setStep] = useState(0)
    const [response, setReponse] = useState({})

    function validateReponse(response) {
        const { responses } = props.quizz[0].questions[step]
        if (responses.filter(({ value, isValid }) => response === value && isValid).length <= 0) return

        setStep(step + 1)
    }

    return (
        <div>
            <Header />
            <div>
                <h1 className="text-center mb-6 text-xl font-bold">Quizz culture Général </h1>

                <h2 className="text-xl font-bold p-8"> {props.quizz[0].questions[step].title}</h2>
                <div className="space-x-2 p-8 mb-20">
                    <select class="select select-bordered w-full max-w-xs" onChange={(e) => setReponse(e.target.value)}>
                        <option disabled="disabled" selected="selected">Choisis ta réponse</option>
                        {props.quizz[0].questions[step].responses.map(response => (<option value={response.value}>{response.value}</option>))}
                    </select>

                    <button onClick={() => validateReponse(response)} class="btn btn-primary">Valider</button>
                </div>

            </div>
            <ul class="w-full steps">
                <li data-content="?" class="step step-neutral">Step 1</li>
                <li data-content="!" class="step step-neutral">Step 2</li>
                <li data-content="✓" class="step step-neutral">Step 3</li>
                <li data-content="✕" class="step step-neutral">Step 4</li>
                <li data-content="●" class="step step-neutral">Step 5</li>
                <li data-content="●" class="step step-neutral">Step 6</li>
                <li data-content="●" class="step step-neutral">Step 7</li>
            </ul>
        </div>
    )
}