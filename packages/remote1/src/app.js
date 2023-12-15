// remote1/src/app.js
import React from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "./slices";

const App = () => {
  const [, setCount1] = useSlice("count1");
  const [, reduxDispatch, { increment }] = useSlice("count2");
  const [localCount1, setLocalCount1] = useLocalSlice("count1");
  const [localCount2, localReduxDispatch, { increment: localIncrement }] =
    useLocalSlice("count2");

  return (
    <>
      <div>
        <button onClick={() => setCount1((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => reduxDispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => setLocalCount1((c) => c + 1)}>+</button>
        {localCount1}
      </div>
      <div>
        <button onClick={() => localReduxDispatch(localIncrement())}>+</button>
        {localCount2}
      </div>
    </>
  );
};

export default App;
