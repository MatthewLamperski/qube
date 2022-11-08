import react from 'react';

export const Context = react.createContext({
  words: [],
  setWords: () => {},
  nodes: [],
  setNodes: () => {},
  bestWord: undefined,
  setBestWord: () => {},
  currentlyLoadingNode: undefined,
  setCurrentlyLoadingNode: () => {}
})
