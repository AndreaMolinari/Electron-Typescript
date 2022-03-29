import React from "react"

const HeaderComponent: React.FC = () => {
  return <header>Ciao io probabilmente sarò il navigator dell'app</header>
}

const SectionComponent: React.FC = () => {
  const [ciro, setCiro] = React.useState('Ciro')
  
  return (
    <main>
      Ciao sono <b style={{color: ciro === "SeTtE" ? 'red' : 'black'}}>{ciro}</b> hook
      <br /> <br /> <br />
      
      <button onClick={() => setCiro(ciro === 'SeTtE' ? 'Ciro' : 'SeTtE')}>TASTONE</button>
      <br /> <br /> <br />
    </main>
  )
}

const FooterComponent: React.FC = () => {
  return <footer>Footer, e vorrei sapere come si usano gli stili ma non ci sto guardando</footer>
}

const MainComponent: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <SectionComponent />
      <FooterComponent />
    </>
  )
}

export default MainComponent