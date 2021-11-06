import React from "react"
import Link from 'next/link'
export default function Cards() {
  return (
    <div class="flex flex-wrap overflow-hidden">
      <div class="w-1/2 overflow-hidden lg:my-2 lg:px-2">
        <div class="card lg:card-side bordered">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Jeux</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <Link href="/quizz">
                <button class="btn btn-primary">Get Started</button>
              </Link>
              <button class="btn btn-ghost">More info</button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 overflow-hidden lg:my-2 lg:px-2">
        <div class="card lg:card-side bordered">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Jeux</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <button class="btn btn-primary">Get Started</button>
              <button class="btn btn-ghost">More info</button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 overflow-hidden lg:my-2 lg:px-2">
        <div class="card lg:card-side bordered">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Jeux</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <button class="btn btn-primary">Get Started</button>
              <button class="btn btn-ghost">More info</button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 overflow-hidden lg:my-2 lg:px-2">
        <div class="card lg:card-side bordered">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Jeux</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <button class="btn btn-primary">Get Started</button>
              <button class="btn btn-ghost">More info</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}