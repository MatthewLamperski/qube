import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../Context";
import {scan} from "./LetterNodeFunctions";

const Output = () => {
  const {words, nodes, bestWord, setBestWord, setCurrentlyLoadingNode} = useContext(Context)
  const [bestWords, setBestWords] = useState()
  const [scanning, setScanning] = useState(false)
  useEffect(() => {
    console.log(scanning)
  }, [scanning])
  return (
    <div style={{height: '40vh', backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column"}}>
      <div style={{overflow: 'scroll'}}>
        {
          bestWords && bestWords
            .map(word => (
              <div style={{padding: 1, cursor: "pointer"}} onClick={() => setBestWord(word)}>
                <h5 style={{color: 'white'}}>{`${word ? word.str + ` for a score of ${word.word_score} with a multiplier of ${word.multiplier}` : 'Fill and scan'}`}</h5>
              </div>
            ))
        }
      </div>
      <h5 style={{color: 'white'}}>{scanning ? 'SCANNING' : ''}</h5>
      <button onClick={() => {
        setScanning(true)
        setCurrentlyLoadingNode(undefined)
        let scans = scan(nodes, words)
        setBestWord(scans[scans.map(wordObj => wordObj.word_score).indexOf(Math.max(...scans.map(wordObj2 => wordObj2.word_score)))])

        setBestWords(scans.sort((scn1, scn2) => {
          return scn2.word_score - scn1.word_score
        }))

        setScanning(false)
      }}>Scan</button>
    </div>
  );
};

export default Output;
