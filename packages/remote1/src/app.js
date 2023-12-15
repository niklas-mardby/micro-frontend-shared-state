// remote1/src/app.js
import React from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "./slices";

const App = () => {
  const [, setCount1] = useSlice("count1");
  const [, reduxDispatch, { increment }] = useSlice("count2");
  const [localCount1, setLocalCount1] = useLocalSlice("count1");
  const [
    localCount2,
    localReduxDispatch,
    { increment: localIncrement, decrement: localDecrement },
  ] = useLocalSlice("count2");

  return (
    <>
      <h1>Remote 1</h1>
      <div>
        <button onClick={() => setCount1((c) => c + 1)}>count1 +</button>
      </div>
      <div>
        <button onClick={() => reduxDispatch(increment())}>count2 +</button>
      </div>
      <div>
        <button onClick={() => setLocalCount1((c) => c + 1)}>
          localCount1 +
        </button>
        localCount1 {localCount1}
      </div>
      <div>
        <button onClick={() => localReduxDispatch(localIncrement())}>
          localCount2 +
        </button>
        <button onClick={() => localReduxDispatch(localDecrement())}>
          localCount2 -
        </button>
        localCount2 {localCount2}
      </div>
    </>
  );
};

export default App;
