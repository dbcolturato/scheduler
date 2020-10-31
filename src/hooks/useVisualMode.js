import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      setHistory(prev => {
        const newHistory = prev.slice();
        newHistory[newHistory.length - 1] = newMode;
        return newHistory;
      });
    } else {
      setHistory(prev => prev.concat([newMode]));
    }
  }

  function back() {
    if (history.length > 1) {
      setHistory(prev => prev.slice(0, prev.length - 1));
      setMode(history[history.length - 2]);
    }
  }

  return { mode, transition, back };
};
