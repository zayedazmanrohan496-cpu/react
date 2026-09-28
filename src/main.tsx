import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import type { ITechnologies } from './types'


const usersFetch = async ():Promise<ITechnologies[]> => {
  const response = await fetch ("/technologies.json");
  const data = await response.json();
  return data;
}

const usersPromise = usersFetch();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
  <Nav/>
  <Hero/>
  <Technologies usersPromise={usersPromise}/>

  </StrictMode>,
)

