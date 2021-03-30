import React from "react";

const ReactReduxContext = React.createContext();
export default ReactReduxContext;

const combineWord = (wordList) => {
  if (wordList.length === 0) return [];

  const res = [];
  const len = wordList.length;
  const dfs = (idx, cur) => {
    if (idx === len) {
      res.push(cur.slice().join(""));
      return;
    }

    const words = wordList[idx];

    for (let i = 0; i < words.length; i++) {
      cur.push(words[i]);
      dfs(idx + 1, cur);
      cur.pop();
    }
  };
  dfs(0, []);
  return res;
};

console.log(combineWord([['a','b','c'], ['d','e','f'], ['g','h','i']]))
