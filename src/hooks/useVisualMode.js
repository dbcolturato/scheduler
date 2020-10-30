import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      const newHistory = history.slice();
      newHistory[newHistory.length - 1] = newMode;
      setHistory(newHistory);
    } else {
      setHistory(history.concat([newMode]));
    }
  }

  function back() {
    if (history.length > 1) {
      const newHistory = history.slice(0, history.length - 1);
      setHistory(newHistory);
      setMode(newHistory[newHistory.length - 1]);
    }
  }

  return { mode, transition, back };
};
