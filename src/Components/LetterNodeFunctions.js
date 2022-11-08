export const getAdj = ({i, j}) => {

  if (i === 0 && j === 0) {
    return [
      {i: 3, j: 0},
      {i: 3, j: 1},
      {i: 1, j: 0},
      {i: 1, j: 1},
      {i: 0, j: 1}
    ]
  } else if (i === 0 && j === 1) {
    return [
      {i: 0, j: 0},
      {i: 1, j: 0},
      {i: 1, j: 1},
      {i: 1, j: 2},
      {i: 0, j: 2},
    ]
  } else if (i === 0 && j === 2) {
    return [
      {i: 0, j: 1},
      {i: 1, j: 1},
      {i: 1, j: 2},
      {i: 3, j: 7},
      {i: 3, j: 8},
    ]
  } else if (i === 1 && j === 0) {
    return [
      {i: 3, j: 0},
      {i: 3, j: 1},
      {i: 3, j: 2},
      {i: 0, j: 0},
      {i: 2, j: 0},
      {i: 0, j: 1},
      {i: 1, j: 1},
      {i: 2, j: 1},
    ]
  } else if (i === 1 && j === 1) {
    return [
      {i: 0, j: 0},
      {i: 1, j: 0},
      {i: 2, j: 0},
      {i: 0, j: 1},
      {i: 2, j: 1},
      {i: 0, j: 2},
      {i: 1, j: 2},
      {i: 2, j: 2},
    ]
  } else if (i === 1 && j === 2) {
    return [
      {i: 0, j: 1},
      {i: 1, j: 1},
      {i: 2, j: 1},
      {i: 0, j: 2},
      {i: 2, j: 2},
      {i: 3, j: 8},
      {i: 3, j: 7},
      {i: 3, j: 6},
    ]
  } else if (i === 2 && j === 0) {
    return [
      {i: 3, j: 1},
      {i: 3, j: 2},
      {i: 3, j: 3},
      {i: 3, j: 4},
      {i: 2, j: 1},
      {i: 1, j: 1},
      {i: 1, j: 0},
    ]
  } else if (i === 2 && j === 1) {
    return [
      {i: 1, j: 0},
      {i: 2, j: 0},
      {i: 3, j: 3},
      {i: 1, j: 1},
      {i: 3, j: 4},
      {i: 1, j: 2},
      {i: 2, j: 2},
      {i: 3, j: 5}
    ]
  } else if (i === 2 && j === 2) {
    return [
      {i: 1, j: 1},
      {i: 2, j: 1},
      {i: 3, j: 4},
      {i: 1, j: 2},
      {i: 3, j: 5},
      {i: 3, j: 7},
      {i: 3, j: 6},
    ]
  } else if (i === 3 && j === 0) {
    return [
      {i: 0, j: 0},
      {i: 1, j: 0},
      {i: 3, j: 1},
      {i: 4, j: 1},
      {i: 4, j: 0},
    ]
  } else if (i === 3 && j === 1) {
    return [
      {i: 0, j: 0},
      {i: 3, j: 0},
      {i: 4, j: 0},
      {i: 1, j: 0},
      {i: 4, j: 1},
      {i: 2, j: 0},
      {i: 3, j: 2},
      {i: 4, j: 2},
    ]
  } else if (i === 3 && j === 2) {
    return [
      {i: 1, j: 0},
      {i: 3, j: 1},
      {i: 4, j: 1},
      {i: 2, j: 0},
      {i: 4, j: 2},
      {i: 3, j: 3},
      {i: 4, j: 3}
    ]
  } else if (i === 3 && j === 3) {
    return [
      {i: 2, j: 0},
      {i: 3, j: 2},
      {i: 4, j: 2},
      {i: 4, j: 3},
      {i: 2, j: 1},
      {i: 3, j: 4},
      {i: 4, j: 4},
    ]
  } else if (i === 3 && j === 4) {
    return [
      {i: 2, j: 0},
      {i: 3, j: 3},
      {i: 4, j: 3},
      {i: 2, j: 1},
      {i: 4, j: 4},
      {i: 2, j: 2},
      {i: 3, j: 5},
      {i: 4, j: 5}
    ]
  } else if (i === 3 && j === 5) {
    return [
      {i: 2, j: 1},
      {i: 3, j: 4},
      {i: 4, j: 4},
      {i: 2, j: 2},
      {i: 4, j: 5},
      {i: 3, j: 6},
      {i: 4, j: 6},
    ]
  } else if (i === 3 && j === 6) {
    return [
      {i: 1, j: 2},
      {i: 2, j: 2},
      {i: 3, j: 5},
      {i: 4, j: 5},
      {i: 4, j: 6},
      {i: 4, j: 7},
      {i: 3, j: 7},
    ]
  } else if (i === 3 && j === 7) {
    return [
      {i: 0, j: 2},
      {i: 1, j: 2},
      {i: 2, j: 2},
      {i: 3, j: 6},
      {i: 4, j: 6},
      {i: 4, j: 7},
      {i: 4, j: 8},
      {i: 3, j: 8},
    ]
  } else if (i === 3 && j === 8) {
    return [
      {i: 0, j: 2},
      {i: 1, j: 2},
      {i: 3, j: 7},
      {i: 4, j: 7},
      {i: 4, j: 8}
    ]
  } else if (i === 4 && j === 0) {
    return [
      {i: 3, j: 0},
      {i: 3, j: 1},
      {i: 4, j: 1},
      {i: 5, j: 1},
      {i: 5, j: 0},
    ]
  } else if (i === 4 && j === 1) {
    return [
      {i: 3, j: 0},
      {i: 4, j: 0},
      {i: 5, j: 0},
      {i: 3, j: 1},
      {i: 5, j: 1},
      {i: 3, j: 2},
      {i: 4, j: 2},
      {i: 5, j: 2},
    ]
  } else if (i === 4 && j === 2) {
    return [
      {i: 3, j: 1},
      {i: 4, j: 1},
      {i: 5, j: 1},
      {i: 3, j: 2},
      {i: 5, j: 2},
      {i: 3, j: 3},
      {i: 4, j: 3},
      {i: 5, j: 3},
    ]
  } else if (i === 4 && j === 3) {
    return [
      {i: 3, j: 2},
      {i: 4, j: 2},
      {i: 5, j: 2},
      {i: 3, j: 3},
      {i: 5, j: 3},
      {i: 3, j: 4},
      {i: 4, j: 4},
      {i: 5, j: 4},
    ]
  } else if (i === 4 && j === 4) {
    return [
      {i: 3, j: 3},
      {i: 4, j: 3},
      {i: 5, j: 3},
      {i: 3, j: 4},
      {i: 5, j: 4},
      {i: 3, j: 5},
      {i: 4, j: 5},
      {i: 5, j: 5}
    ]
  } else if (i === 4 && j === 5) {
    return [
      {i: 3, j: 4},
      {i: 4, j: 4},
      {i: 5, j: 4},
      {i: 3, j: 5},
      {i: 5, j: 5},
      {i: 3, j: 6},
      {i: 4, j: 6},
      {i: 5, j: 6}
    ]
  } else if (i === 4 && j === 6) {
    return [
      {i: 3, j: 5},
      {i: 4, j: 5},
      {i: 5, j: 5},
      {i: 3, j: 6},
      {i: 5, j: 6},
      {i: 3, j: 7},
      {i: 4, j: 7},
      {i: 5, j: 7},
    ]
  } else if (i === 4 && j === 7) {
    return [
      {i: 3, j: 6},
      {i: 4, j: 6},
      {i: 5, j: 6},
      {i: 3, j: 7},
      {i: 5, j: 7},
      {i: 3, j: 8},
      {i: 4, j: 8},
      {i: 5, j: 8},
    ]
  } else if (i === 4 && j === 8) {
    return [
      {i: 3, j: 7},
      {i: 4, j: 7},
      {i: 5, j: 7},
      {i: 3, j: 8},
      {i: 5, j: 8}
    ]
  } else if (i === 5 && j === 0) {
    return [
      {i: 4, j: 0},
      {i: 4, j: 1},
      {i: 5, j: 1},
      {i: 7, j: 0},
      {i: 8, j: 0}
    ]
  } else if (i === 5 && j === 1) {
    return [
      {i: 4, j: 0},
      {i: 5, j: 0},
      {i: 8, j: 0},
      {i: 7, j: 0},
      {i: 6, j: 0},
      {i: 4, j: 1},
      {i: 4, j: 2},
      {i: 5, j: 2},
    ]
  } else if (i === 5 && j === 2) {
    return [
      {i: 5, j: 1},
      {i: 4, j: 1},
      {i: 4, j: 2},
      {i: 4, j: 3},
      {i: 5, j: 3},
      {i: 6, j: 0},
      {i: 7, j: 0},
    ]
  } else if (i === 5 && j === 3) {
    return [
      {i: 5, j: 2},
      {i: 4, j: 2},
      {i: 4, j: 3},
      {i: 4, j: 4},
      {i: 5, j: 4},
      {i: 6, j: 1},
      {i: 6, j: 0}
    ]
  } else if (i === 5 && j == 4) {
    return [
      {i: 4, j: 3},
      {i: 5, j: 3},
      {i: 6, j: 0},
      {i: 4, j: 4},
      {i: 6, j: 1},
      {i: 4, j: 5},
      {i: 5, j: 5},
      {i: 6, j: 2},
    ]
  } else if (i === 5 && j === 5) {
    return [
      {i: 4, j: 4},
      {i: 5, j: 4},
      {i: 6, j: 1},
      {i: 4, j: 5},
      {i: 6, j: 2},
      {i: 4, j: 6},
      {i: 5, j: 6}
    ]
  } else if (i === 5 && j === 6) {
    return [
      {i: 5, j: 7},
      {i: 4, j: 7},
      {i: 4, j: 6},
      {i: 4, j: 5},
      {i: 5, j: 5},
      {i: 6, j: 2},
      {i: 7, j: 2},
    ]
  } else if (i === 5 && j === 7) {
    return [
      {i: 5, j: 8},
      {i: 4, j: 8},
      {i: 4, j: 7},
      {i: 4, j: 6},
      {i: 5, j: 6},
      {i: 6, j: 2},
      {i: 7, j: 2},
      {i: 8, j: 2},
    ]
  } else if (i === 5 && j === 8) {
    return [
      {i: 4, j: 8},
      {i: 4, j: 7},
      {i: 5, j: 7},
      {i: 7, j: 2},
      {i: 8, j: 2},
    ]
  } else if (i === 6 && j === 0) {
    return [
      {i: 5, j: 1},
      {i: 5, j: 2},
      {i: 5, j: 3},
      {i: 5, j: 4},
      {i: 6, j: 1},
      {i: 7, j: 1},
      {i: 7, j: 0}
    ]
  } else if (i === 6 && j === 1) {
    return [
      {i: 5, j: 3},
      {i: 6, j: 0},
      {i: 7, j: 0},
      {i: 5, j: 4},
      {i: 7, j: 1},
      {i: 5, j: 5},
      {i: 6, j: 2},
      {i: 7, j: 2},
    ]
  } else if (i === 6 && j === 2) {
    return [
      {i: 7, j: 2},
      {i: 7, j: 1},
      {i: 6, j: 1},
      {i: 5, j: 4},
      {i: 5, j: 5},
      {i: 5, j: 6},
      {i: 5, j: 7}
    ]
  } else if (i === 7 && j === 0) {
    return [
      {i: 8, j: 0},
      {i: 8, j: 1},
      {i: 7, j: 1},
      {i: 6, j: 1},
      {i: 6, j: 0},
      {i: 5, j: 2},
      {i: 5, j: 1},
      {i: 5, j: 0}
    ]
  } else if (i === 7 && j === 1) {
    return [
      {i: 6, j: 0},
      {i: 7, j: 0},
      {i: 8, j: 0},
      {i: 6, j: 1},
      {i: 8, j: 1},
      {i: 6, j: 2},
      {i: 7, j: 2},
      {i: 8, j: 2},
    ]
  } else if (i === 7 && j === 2) {
    return [
      {i: 8, j: 2},
      {i: 8, j: 1},
      {i: 7, j: 1},
      {i: 6, j: 1},
      {i: 6, j: 2},
      {i: 5, j: 6},
      {i: 5, j: 7},
      {i: 5, j: 8}
    ]
  } else if (i === 8 && j === 0) {
    return [
      {i: 8, j: 1},
      {i: 7, j: 1},
      {i: 7, j: 0},
      {i: 5, j: 1},
      {i: 5, j: 0},
    ]
  } else if (i === 8 && j === 1) {
    return [
      {i: 8, j: 0},
      {i: 7, j: 0},
      {i: 7, j: 1},
      {i: 7, j: 2},
      {i: 8, j: 2},
    ]
  } else if (i === 8 && j === 2) {
    return [
      {i: 8, j: 1},
      {i: 7, j: 1},
      {i: 7, j: 2},
      {i: 5, j: 7},
      {i: 5, j: 8}
    ]
  }
}

const letterScores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 19
}

export const getTileBonus = ({i, j}) => {

  if (
    (i === 3 && j === 5) ||
    (i === 2 && j === 2) ||
    (i === 3 && j === 6) ||
    (i === 0 && j === 0) ||
    (i === 3 && j === 0) ||
    (i === 5 && j === 8) ||
    (i === 8 && j === 2) ||
    (i === 5 && j === 0) ||
    (i === 8 && j === 0)
  ) {
    return 'tl'
  } else if (
    (i === 5 && j === 3) ||
    (i === 5 && j === 2) ||
    (i === 6 && j === 0) ||
    (i === 0 && j === 2) ||
    (i === 3 && j === 8)
  ) return 'dw'
  else if (
    (i === 2 && j === 0) ||
    (i === 3 && j === 3) ||
    (i === 3 && j === 2) ||
    (i === 5 && j === 6) ||
    (i === 5 && j === 5) ||
    (i === 6 && j === 2)
  ) return 'dl'

}

export const scan = (nodes, wordlist) => {

  let eachTilesBestWord = []
  for (let row = 0; row < nodes.length; row++) {
    for (let col = 0; col < nodes[row].length; col++) {

      if ("letter" in nodes[row][col]) {
        const scoresObj = findBestWordStartingWithCurrentLetter(nodes, wordlist, {i: row, j: col})
        if (scoresObj.max_point_word) {
          eachTilesBestWord.push(scoresObj.max_point_word)
        }
      }

    }
  }

  return eachTilesBestWord
}

export const findBestWordStartingWithCurrentLetter = (nodes, wordlist, currentLoc) => {

  let words = []

  // Get all 2 letter paths
  const {i, j} = currentLoc;
  const node = nodes[i][j]

  let newStrings = addCharToStrFromAdj(nodes, currentLoc, {
    str: node.letter,
    path: [{
      ...currentLoc,
      letter_score: getTileBonus(currentLoc) === 'tl' ? letterScores[node.letter] * 3 : getTileBonus(currentLoc) === 'dl' ? letterScores[node.letter] * 2 : letterScores[node.letter],
    }],
    word_score: letterScores[node.letter],
    multiplier: getTileBonus(currentLoc) === 'dw' ? 2 : 1
  }, wordlist)
  words.push(...newStrings)

  for (let obj of newStrings) {
    let new2Str = addCharToStrFromAdj(nodes, obj.path[obj.path.length - 1], obj, wordlist)
    words.push(...new2Str)

    for (let obj1 of new2Str) {
      let new3Str = addCharToStrFromAdj(nodes, obj1.path[obj1.path.length - 1], obj1, wordlist)
      words.push(...new3Str)

      for (let obj2 of new3Str) {
        let new4Str = addCharToStrFromAdj(nodes, obj2.path[obj2.path.length - 1], obj2, wordlist)
        words.push(...new4Str)

        for (let obj3 of new4Str) {
          let new5str = addCharToStrFromAdj(nodes, obj3.path[obj3.path.length - 1], obj3, wordlist)
          words.push(...new5str)

          for (let obj4 of new5str) {
            let new6str = addCharToStrFromAdj(nodes, obj4.path[obj4.path.length - 1], obj4, wordlist)
            words.push(...new6str)

            for (let obj5 of new6str) {
              let new7str = addCharToStrFromAdj(nodes, obj5.path[obj5.path.length - 1], obj5, wordlist)
              words.push(...new7str)

              // for (let obj6 of new7str) {
              //   let new8str = addCharToStrFromAdj(nodes, obj6.path[obj6.path.length - 1], obj6, wordlist)
              //   words.push(...new8str)
              //
              //   for (let obj7 of new8str) {
              //     let new9str = addCharToStrFromAdj(nodes, obj7.path[obj7.path.length - 1], obj7, wordlist)
              //     words.push(...new9str)
              //
              //     for (let obj8 of new9str) {
              //       let new10str = addCharToStrFromAdj(nodes, obj8.path[obj8.path.length - 1], obj8, wordlist)
              //       words.push(...new10str)
              //
              //       for (let obj9 of new10str) {
              //         let new11str = addCharToStrFromAdj(nodes, obj9.path[obj9.path.length - 1], obj9, wordlist)
              //         words.push(...new11str)
              //
              //         for (let obj10 of new11str) {
              //           let new12str = addCharToStrFromAdj(nodes, obj10.path[obj10.path.length - 1], obj10, wordlist)
              //           words.push(...new12str)
              //
              //           for (let obj11 of new12str) {
              //             let new13str = addCharToStrFromAdj(nodes, obj11.path[obj11.path.length - 1], obj11, wordlist)
              //             words.push(...new13str)
              //
              //             for (let obj12 of new13str) {
              //               let new14str = addCharToStrFromAdj(nodes, obj12.path[obj12.path.length - 1], obj12, wordlist)
              //               words.push(...new14str)
              //
              //               for (let obj13 of new14str) {
              //                 let new15str = addCharToStrFromAdj(nodes, obj13.path[obj13.path.length - 1], obj13, wordlist)
              //                 words.push(...new15str)
              //
              //
              //               }
              //
              //             }
              //
              //           }
              //
              //         }
              //
              //       }
              //     }
              //   }
              // }
            }
          }
        }
      }

    }
  }

  words = words.filter(thisword => wordlist.includes(thisword.str)).map(wordObj => ({
    ...wordObj,
    length_bonus: lengthBonus(wordObj.str),
    word_score: wordObj.path.map(pathObj => pathObj.letter_score).reduce((e, r) => e + r) * wordObj.multiplier + lengthBonus(wordObj.str)
  }))
  let all_words = Array.from(new Set(words)).sort((word1, word2) => {
    if (word1.str.length > word2.str.length) {
      return 1
    } else if (word1.str.length < word2.str.length) {
      return -1
    } else {
      return 0
    }
  })

  return {
    all_words,
    max_point_word: all_words[all_words.map(word => word.word_score).indexOf(Math.max(...all_words.map(word => word.word_score)))]
  }

}

const helper = (newStr) => {

  if (newStr.length === 7) return newStr;
  else {



  }

}

const addCharToStrFromAdj = (nodes, currentNode, currentStr, wordlist) => {

  let newStrings = []
  let adjArr = getAdj({i: currentNode.i, j: currentNode.j})

  for (let adj of adjArr) {
    let adjNode = nodes[adj.i][adj.j];
    if ("letter" in adjNode && !currentStr.path.some(prevNode => prevNode.i === adj.i && prevNode.j === adj.j)) {
      let newStr = currentStr.str + adjNode.letter;
      if (isPossibleWord(newStr, wordlist)) {
        newStrings.push({
          str: currentStr.str + adjNode.letter,
          path: [...currentStr.path, {
            ...adj,
            letter_score: getTileBonus(adj) === 'tl' ? letterScores[adjNode.letter] * 3 : getTileBonus(adj) === 'dl' ? letterScores[adjNode.letter] * 2 : letterScores[adjNode.letter],
          }],
          word_score: currentStr.word_score + letterScores[adjNode.letter],
          multiplier: getTileBonus(adj) === 'dw' ? currentStr.multiplier * 2 : currentStr.multiplier
        })
      }
    }
  }
  return newStrings;
}

const lengthBonus = (word) => {
  let len = word.length;
  if (len >= 8) {
    return 100;
  } else if (len === 7) {
    return 50;
  } else if (len === 6) {
    return 25;
  } else if (len === 5) {
    return 10;
  } else if (len === 4) {
    return 5;
  } else return 0;

}



const isPossibleWord = (word, wordlist) => {
  return wordlist.some(thisword => thisword.startsWith(word))
}

export const find3LetterWords = (nodes, currentLocation, currentLetter, wordList) => {

  const {i, j} = currentLocation
  let adjLocs = getAdj(currentLocation)
  let letter2Words = []
  for (const adjLoc of adjLocs) {
    let adjNode = nodes[adjLoc.i][adjLoc.j]

    if ("letter" in adjNode && isPossibleWord(currentLetter + adjNode.letter)) {
      letter2Words.push(currentLetter + adjNode.letter)
      const adjOnceRemovedLocs = getAdj(adjLoc).filter(adjOnceRemovedLoc => !(adjOnceRemovedLoc.i === i && adjOnceRemovedLoc.j === j))

      for (const adjOnceRemovedLoc of adjOnceRemovedLocs) {
        let adjOnceRemovedNode = nodes[adjOnceRemovedLoc.i][adjOnceRemovedLoc.j]
        if ("letter" in adjOnceRemovedNode) {
          letter2Words.push(currentLetter + adjNode.letter + adjOnceRemovedNode.letter)

          const adjTwiceRemovedLocs = getAdj(adjOnceRemovedLoc).filter(adjTwiceRemovedLoc => !(adjTwiceRemovedLoc.i === adjNode.i && adjTwiceRemovedLoc.j === adjNode.j))

          for (const adjTwiceRemovedLoc of adjTwiceRemovedLocs) {
            let adjTwiceRemovedNode = nodes[adjTwiceRemovedLoc.i][adjTwiceRemovedLoc.j]
            if ("letter" in adjTwiceRemovedNode) {
              letter2Words.push(currentLetter + adjNode.letter + adjOnceRemovedNode.letter + adjTwiceRemovedNode.letter)

              const adj3Locs = getAdj(adjTwiceRemovedLoc).filter(adj3removedLoc => !(adj3removedLoc.i === adjOnceRemovedLoc.i && adj3removedLoc.j === adjOnceRemovedLoc.j))
              for (const adj3RemovedLoc of adj3Locs) {
                let adj3RemovedNode = nodes[adj3RemovedLoc.i][adj3RemovedLoc.j]

                if ("letter" in adj3RemovedNode) {
                  letter2Words.push(currentLetter + adjNode.letter + adjOnceRemovedNode.letter + adjTwiceRemovedNode.letter + adj3RemovedNode.letter)

                  const adj4 = getAdj(adj3RemovedLoc).filter(adj4Loc => !(adj4Loc.i === adjTwiceRemovedLoc.i && adj4Loc.j === adjTwiceRemovedLoc.j))
                  for (const adj4Loc of adj4) {
                    let adj4Node = nodes[adj4Loc.i][adj4Loc.j]
                    if ("letter" in adj4Node) {
                      letter2Words.push(currentLetter + adjNode.letter + adjOnceRemovedNode.letter + adjTwiceRemovedNode.letter + adj3RemovedNode.letter + adj4Node.letter)


                    }
                  }
                }

              }
            }
          }


        }

      }

    }

  }

  letter2Words = letter2Words.filter((word) => {
    return wordList.includes(word)
  })

  return Array.from(new Set(letter2Words)).sort((word1, word2) => {
    if (word1.length > word2.length) {
      return 1
    } else if (word1.length < word2.length) {
      return -1
    } else {
      return 0
    }
  });

}

export const isInWords = (word, wordlist) => {
  const includes = wordlist.includes(word)
}
