import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <main>
    <section className="container">
      <h3>0 Aniversários hoje</h3>
      <List />
      <button onClick={()=> console.log('Voce clicou')}>Clear all</button> 
    </section>
  </main>;
}

export default App;
