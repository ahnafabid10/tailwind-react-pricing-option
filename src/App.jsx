import { Suspense } from 'react'
import './App.css'
import Navbar from './navbar'
import PricingOption from './pricingOption'

const pricingPromise = fetch('pricingData.json').then(res => res.json())


function App() {


  return (
    <>
      <Navbar></Navbar>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
    </>
  )
}

export default App
