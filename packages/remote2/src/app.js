// remote2/src/app.js
import React from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "./slices";

const App = () => {
  const [count1] = useSlice("count1");
  const [count2] = useSlice("count2");
  const [localCount1, setLocalCount1] = useLocalSlice("count1");
  const [localCount2, reduxDispatch, { increment }] = useLocalSlice("count2");

  return (
    <>
      <h1>Remote 2</h1>
      <div>{count1}</div>
      <div>{count2}</div>
      <div>
        <button onClick={() => setLocalCount1((c) => c + 1)}>+</button>
        {localCount1}
      </div>
      <div>
        <button onClick={() => reduxDispatch(increment())}>+</button>
        {localCount2}
      </div>
    </>
  );
};

export default App;
