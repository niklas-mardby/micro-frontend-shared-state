// host/src/app.js
import React, { lazy, Suspense } from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "./slices";

const Remote1App = lazy(() => import("Remote1/root"));
const Remote2App = lazy(() => import("Remote2/root"));

const App = () => {
  const [count1, setCount1] = useSlice("count1");
  const [count2, reduxDispatch, { increment }] = useSlice("count2");
  const [localCount1, setLocalCount1] = useLocalSlice("count1");
  const [localCount2, localReduxDispatch, { increment: localIncrement }] =
    useLocalSlice("count2");

  return (
    <>
      <h1>Host</h1>
      <div>
        <button onClick={() => setCount1((c) => c + 1)}>+</button>
        count1: {count1}
      </div>
      <div>
        <button onClick={() => reduxDispatch(increment())}>+</button>
        count2: {count2}
      </div>
      <div>
        <button onClick={() => setLocalCount1((c) => c + 1)}>+</button>
        localCount1: {localCount1}
      </div>
      <div>
        <button onClick={() => localReduxDispatch(localIncrement())}>+</button>
        localCount2: {localCount2}
      </div>
      <Suspense fallback="loading...">
        <Remote1App />
      </Suspense>
      <Suspense fallback="loading...">
        <Remote2App />
      </Suspense>
    </>
  );
};

export default App;
