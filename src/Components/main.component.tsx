import React from "react"
import { Link, MemoryRouter, Route, Routes } from "react-router-dom"

const HeaderComponent: React.FC = () => {
  return (
    <>
      <h1>Ciao sono io</h1>
      <Link to={'/section'}>section</Link>
      <Link to={'/footer'}>footer</Link>
    </>
  )
}

const SectionComponent: React.FC = () => {
  const [ciro, setCiro] = React.useState('Ciro')

  return (
    <main>
      <Link to={'/'}>MainWindow</Link>
      Ciao sono <b style={{ color: ciro === "SeTtE" ? 'red' : 'black' }}>{ciro}</b> hook
      <br /> <br /> <br />

      <button onClick={() => setCiro(ciro === 'SeTtE' ? 'Ciro' : 'SeTtE')}>TASTONE</button>
      <br /> <br /> <br />
    </main>
  )
}

const FooterComponent: React.FC = () => {
  return (
    <>
      <Link to={'/'}>MainWindow</Link>
      <footer>Footer, e vorrei sapere come si usano gli stili ma non ci sto guardando</footer>
    </>
  )
}

const MainComponent: React.FC = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<HeaderComponent />} />
        <Route path="/section" element={<SectionComponent />} />
        <Route path="/footer" element={<FooterComponent />} />
      </Routes>
    </MemoryRouter>
  )
}

export default MainComponent

{/* <HeaderComponent />
<SectionComponent />
<FooterComponent /> */}