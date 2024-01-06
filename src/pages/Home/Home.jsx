import React from 'react'
import Banner from '../../components/Banner/Banner'
import Works from '../../components/Works/Works'
import Work from '../../components/Work/Work'
import Kurs from '../../components/Kurs/Kurs'
import Diagnostics from '../../components/Diagnostics/Diagnostics'
import Events from '../../components/Events/Events'

function Home() {
  return (
    <>
    <Banner />
    <Works />
    <Work />
    <Kurs />
    <Diagnostics />
    <Events />
    </>
  )
}

export default Home