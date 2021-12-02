import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut, useUser } from "next-auth/react"
export default function Header() {
    const { data: session } = useSession()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div class="px-2 mx-2 navbar-start">
                <span class="text-lg font-bold">
                    Quizz
                </span>
            </div>
            <div class="hidden px-2 mx-2 navbar-center lg:flex">
                <div class="flex items-stretch">
                    <Link href="/">
                        <a class="btn btn-ghost btn-sm rounded-btn">
                            Home
                        </a>
                    </Link>
                    <a class="btn btn-ghost btn-sm rounded-btn">
                        Activity
                    </a>
                    <a class="btn btn-ghost btn-sm rounded-btn">
                        Class
                    </a>
                </div>
            </div>
            <div class="navbar-end">
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                </button>
                {!session && <label for="my-modal-2" class="btn btn-neutral modal-button" onClick={() => signIn("github")}>Sign in with GitHub</label>}
                {!session && <label for="my-modal-2" class="btn btn-neutral modal-button">Sign in</label>}
                {!session && <label for="my-modal-2" class="btn btn-neutral modal-button">Sign up</label>}
                {session && <label class="btn btn-neutral modal-button" onClick={() => signOut()}>Sign out</label>}
                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <h1 class="font-bold text-xl text-center mb-2">Please Login</h1>
                        <div class="form-control mb-2">
                            <label class="label">
                                <span class="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Username" class="input input-bordered" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="********" class="input input-bordered" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="modal-action">
                            <label for="my-modal-2" class="btn btn-primary" onClick={() => signIn("credentials", { username, password })}>Log in</label>
                            <label for="my-modal-2" class="btn">Close</label>
                        </div>
                    </div>
                </div>
                <div class="flex-1 lg:flex-none">
                    <div class="form-control">
                        <input type="text" placeholder="Search" class="input input-ghost" />
                    </div>
                </div>
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}