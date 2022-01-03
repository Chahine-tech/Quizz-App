import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut, useUser } from "next-auth/react"
import SignUp from "../pages/api/auth/signup"
export default function Header() {
    const { data: session } = useSession()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
async function signUp(email, password, passwordConfirmation){
    console.log(email, password, passwordConfirmation, "h")
const response = await fetch(`/api/auth/signup`, {
    method : 'POST',
    body : JSON.stringify({email, password, passwordConfirmation}),
    headers: {'Content-type':'application/json'},
})
console.log(response)
if (response.ok) {
    alert('Success')
}
else {
    const error = await response.json()
    throw new Error(error.message)
}

}
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">
                    Quizz
                </span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    <Link href="/">
                        <a className="btn btn-ghost btn-sm rounded-btn">
                            Home
                        </a>
                    </Link>
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Activity
                    </a>
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Class
                    </a>
                </div>
            </div>
            <div className="navbar-end">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                </button>
                {!session && <label for="my-modal-2" className="btn btn-neutral modal-button" onClick={() => signIn("github")}>Sign in with GitHub</label>}
                {!session && <label for="my-modal-2" className="btn btn-neutral modal-button">Sign in</label>}
                {session && <label className="btn btn-neutral modal-button" onClick={() => signOut()}>Sign out</label>}
                <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h1 className="font-bold text-xl text-center mb-2">Please Login</h1>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Username" className="input input-bordered" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="********" className="input input-bordered" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="modal-action">
                            <label for="my-modal-2" className="btn btn-primary" onClick={() => signIn("credentials", { username, password })}>Log in</label>
                            <label for="my-modal-2" className="btn">Close</label>
                        </div>
                    </div>
                </div>
                <label for="my-modal-3" className="btn btn-neutral modal-button">Sign Up</label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h1 className="font-bold text-xl text-center mb-2">Please Sign Up</h1>
                        <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Username" className="input input-bordered" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="********" className="input input-bordered" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password Confirmation</span>
                            </label>
                            <input type="password" placeholder="********" className="input input-bordered" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                        </div>
                        <div className="modal-action">
                            <label for="my-modal-3" className="btn btn-primary" onClick={() => signUp(email, password, passwordConfirmation)}>Go !</label>
                            <label for="my-modal-3" className="btn">Cancel</label>
                        </div>
                    </div>
                </div>
                <div className="flex-1 lg:flex-none">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-ghost" />
                    </div>
                </div>
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>

            </div>
        </div>
    )
}