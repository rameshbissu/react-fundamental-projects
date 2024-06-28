import React from 'react'
import { useGlobalContext } from './context'

const Home = () => {
    const {openSidebar,openModal}= useGlobalContext()
    console.log(openSidebar);
    console.log(openModal);
  return (
    <div>
        <button type="button" className="btn">Home</button>
    </div>
  )
}

export default Home