import React, {useState, useEffect, useContext} from 'react';
import LetterNode from "./LetterNode";
import {Context} from "../Context";
import {getAdj} from "./LetterNodeFunctions";

const QubeInput = () => {
  const {nodes, setNodes, currentlyLoadingNode, setCurrentlyLoadingNode} = useContext(Context)
  const num = 3;
  const [lastPressed, setLastPressed] = useState()
  const handleKeyPress = ({key}) => {
    if (key.toUpperCase() === 'TAB') {

      let adj = getAdj({i: currentlyLoadingNode.i, j: currentlyLoadingNode.j + 1})
      if (adj && adj.length !== 0) {
        setCurrentlyLoadingNode({i: currentlyLoadingNode.i, j: currentlyLoadingNode.j + 1})
      } else {
        let adjR = getAdj({i: currentlyLoadingNode.i + 1, j: 0})
        if (adjR && adjR.length !== 0) {
          setCurrentlyLoadingNode({i: currentlyLoadingNode.i + 1, j: 0})
        }
      }

    }
    setLastPressed(key.toUpperCase())
  }
  useEffect(() => {
    document.onkeydown = handleKeyPress
    document.onkeyup = () => setLastPressed()

  }, [currentlyLoadingNode])
  return (
    <div style={{height: '60vh', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {
        nodes
          .map((row, i) => {
            return (
              <div key={i} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {
                  row.map((node, j) => {
                    return <LetterNode lastPressed={lastPressed} key={j} setNodes={setNodes} idx={{i, j}} nodes={nodes} num={num} node={node} />
                  })
                }
              </div>
            )
          })
      }
    </div>
  );
};

export default QubeInput;
