import { Suspense, useState } from 'react';
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

  const [cart, setCart] = useState<ITechnologies[]>([]);

  // Remove one technology
  const handleRemove = (id: string | number) => {
    setCart(cart.filter((technology) => technology.id !== id));
  };

  // Remove all technologies
  const handleClearAll = () => {
    setCart([]);
  };

  return (
    <>
      <Nav />
      <Hero />
      <footer/>

      <Suspense fallback={<p>Loading technologies...</p>}>
        <Technologies
          usersPromise={usersPromise}
          cart={cart}
          setCart={setCart}
          onRemove={handleRemove}
          onClearAll={handleClearAll}
        />
      </Suspense>
    </>
  );
};

export default App;

