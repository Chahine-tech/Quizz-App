import Head from 'next/head'
import Header from "../components/header"
import Card from "../components/card"
import * as Quizz from "../models/Quizz"
export async function getStaticProps() {
    
  return {
      props: {
          quizzes: Quizz.find()        },
  }
}
export default function Home({quizzes}) {
  return (
    <div>
      <div className="">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="form-control">
          <label className="label">
          </label>
          <div className="flex space-x-2 items-center m-8">
            <input type="text" placeholder="Entrez un code participation" className="w-80 input input-primary input-bordered bg-gray-200 text-gray-600" />
            <button className="btn btn-primary">S'inscrire</button>
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden">
        {quizzes.map((quizz) =>(
          <Card quizz={quizz}/>
        ))}
        </div>
      </div>
      <footer className="p-4 footer bg-base-300 text-base-content footer-center mt-60">
        <div>
          <p>Copyright © 2021 - All right reserved by Chahine Industries Ltd</p>
        </div>
      </footer>
    </div>
  )
}