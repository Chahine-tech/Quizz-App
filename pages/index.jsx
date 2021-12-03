import Head from 'next/head'
import Header from "../components/header"
import Card from "../components/card"
export default function Home() {
  return (
    <div>
      <div className="">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div class="form-control">
          <label class="label">
          </label>
          <div class="flex space-x-2 items-center m-8">
            <input type="text" placeholder="Entrez un code participation" class="w-80 input input-primary input-bordered bg-gray-200 text-gray-600" />
            <button class="btn btn-primary">S'inscrire</button>
          </div>
        </div>
        <Card />
      </div>
      <footer class="p-4 footer bg-base-300 text-base-content footer-center mt-40">
        <div>
          <p>Copyright © 2021 - All right reserved by Chahine Industries Ltd</p>
        </div>
      </footer>
    </div>
  )
}