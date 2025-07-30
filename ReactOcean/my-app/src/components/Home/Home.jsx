import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import SystemAssessment from '../SystemAssessment/SystemAssessment'

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <SystemAssessment />
    </React.Fragment>
  )
}

export default Home