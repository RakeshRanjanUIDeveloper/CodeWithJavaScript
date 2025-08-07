import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import SystemAssessment from '../SystemAssessment/SystemAssessment'
import MainFrameProvider from '../provider/MainFrameProvider'

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <MainFrameProvider >
          <SystemAssessment />
      </MainFrameProvider>
    </React.Fragment>
  )
}

export default Home