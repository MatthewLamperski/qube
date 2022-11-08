import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../Context";
import {getTileBonus} from "./LetterNodeFunctions";

const tileColor = ({i, j}, loading, isInBestWord) => {

  const tileBonus = getTileBonus({i, j})

  if (isInBestWord) {
    return 'lightgreen'
  } else if (loading) {
    return 'orange'
  } else if (tileBonus === 'dl') {
    return 'lightblue'
  } else if (tileBonus === 'dw') {
    return 'yellow'
  } else if (tileBonus === 'tl') {
    return 'blue'
  } else {
    return 'white'
  }

}

const LetterNode = ({lastPressed, idx: {i, j}, setNodes, nodes, node}) => {
  const [letter, setLetter] = useState()
  const {currentlyLoadingNode, setCurrentlyLoadingNode, bestWord} = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [isInBestWord, setIsInBestWord] = useState(bestWord && bestWord.path.some(loc => (loc.i === i && loc.j === j)))
  const [isFirstLetterOfBestWord, setIsFirstLetter] = useState(false)
  useEffect(() => {

    if (currentlyLoadingNode && currentlyLoadingNode.i === i && currentlyLoadingNode.j === j) {
      setLoading(true)
    } else {
      setLoading(false)
    }

  }, [currentlyLoadingNode])

  useEffect(() => {
    if (bestWord && bestWord.path.some(loc => (loc.i === i && loc.j === j))) {
      setIsInBestWord(true)
    } else {
      setIsInBestWord(false)
    }

    if (bestWord && bestWord.path[0].i === i && bestWord.path[0].j === j) {
      setIsFirstLetter(true)
    } else {
      setIsFirstLetter(false)
    }

  }, [bestWord])



  const addPropertyToCurrentNode = (obj) => {

    let tmpNodes = [...nodes]

    tmpNodes = tmpNodes.map((arr, id) => {
      return arr.map((node, jd) => {
        if (id === i && jd === j) {
          const newNode = {
            ...node,
            ...obj,
          };
          return newNode
        } else {
          return node
        }
      })
    })

    setNodes(tmpNodes)
  }

  useEffect(() => {
    if (loading && lastPressed && /^[a-zA-Z]+$/.test(lastPressed) && lastPressed.length === 1) {
      // new letter is added
      const char = lastPressed
      setLetter(char)

      addPropertyToCurrentNode({
        letter: char.toUpperCase()
      })

      // const letter3Words = findBestWordStartingWithCurrentLetter(newNodes, words, {i, j}, emptyNodes, char)
      // console.log(letter3Words)

    }
  }, [lastPressed])

  return (
    <div onClick={() => {
      setCurrentlyLoadingNode({i, j})
    }} style={{height: 50, width: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: tileColor({i, j}, loading, isInBestWord), border: isFirstLetterOfBestWord ? '1px solid white' : '1px solid black', cursor: 'pointer', display: 'flex'}}>
      <h6 style={{fontSize: 20, color: 'black'}}>{letter}</h6>
    </div>
  );
};

export default LetterNode;
