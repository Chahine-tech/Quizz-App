import React from "react"
import Link from 'next/link'

export default function Cards({quizz}) {
  return (
      <div className="w-1/2 overflow-hidden lg:my-2 lg:px-2">
        <div className="card lg:card-side bordered">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jeux</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions">
              <Link href={`/quizz/${quizz.id}`}>
                <button className="btn btn-primary">Get Started</button>
              </Link>
              <button className="btn btn-ghost">More info</button>
            </div>
          </div>
        </div>
      </div>
  )
}