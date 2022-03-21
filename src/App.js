import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element="This is home page!" />
      <Route exact path="/starred" element="This is starred!" />
      <Route path="*" element="This is 404 page" />
    </Routes>
  );
}

export default App;
