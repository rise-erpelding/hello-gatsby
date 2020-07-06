import React from 'react';

const scrollFunctions = {
  testFunction: () => {},
  projectsScroll: () => {},
  aboutScroll: () => {},
  contactScroll: () => {},
};

export const PortfolioContext = React.createContext(scrollFunctions.testFunction);