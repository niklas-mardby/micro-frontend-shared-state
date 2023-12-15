// remote2/src/app.js
import React from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "./slices";

const App = () => {
  const [count1] = useSlice("count1");
  const [count2] = useSlice("count2");
  const [localCount1, setLocalCount1] = useLocalSlice("count1");
  const [localCount2, reduxDispatch, { increment, decrement }] =
    useLocalSlice("count2");

  return (
    <>
      <h1>Remote 2</h1>
      <div>count1 {count1}</div>
      <div>count2 {count2}</div>
      <div>
        <button onClick={() => setLocalCount1((c) => c + 1)}>
          localCount1 +
        </button>
        <button onClick={() => setLocalCount1((c) => c - 1)}>
          localCount1 -
        </button>
        localCount1 {localCount1}
      </div>
      <div>
        <button onClick={() => reduxDispatch(increment())}>
          localCount2 +
        </button>
        <button onClick={() => reduxDispatch(decrement())}>
          localCount2 -
        </button>
        localCount2: {localCount2}
      </div>
    </>
  );
};

export default App;
