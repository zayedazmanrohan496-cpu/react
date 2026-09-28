import { Suspense } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import type { ITechnologies } from './types';

const usersFetch = async (): Promise<ITechnologies[]> => {
  const response = await fetch("/technologies.json");
  const data = await response.json();
  return data;
};

const usersPromise = usersFetch();

const App = () => {
  return (
    <>
      <Nav />
      <Hero />

      <Suspense fallback={<p>Loading technologies...</p>}>
        <Technologies usersPromise={usersPromise} />
      </Suspense>
    </>
  );
};

export default App;

