import React from 'react';

import GlobalStyle from './styles/global';

import Carousel from './components/Carousel';

const App: React.FC = () => {
  return (
    <>
      <Carousel />

      <GlobalStyle />
    </>
  );
}

export default App;
