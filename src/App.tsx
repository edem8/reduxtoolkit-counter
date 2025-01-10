import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/redux-hooks";
import { increment } from "./Reducers/counterReducer";

function App() {
  //useAppSelector & useAppDispatch are basically typed aliases of useSelector & useDispatch
  //useSlector - selecting a state from store
  //useDispatch - dispatch an action from the store

  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // dispatch(decrement()); - without payload
    // dispatch(increment(5)) - with payload
    dispatch(increment(5));
  };

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Redux + React Counter</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Click on the button to update state using Redux
      </p>
      <p className="read-the-docs">
        Currently dispatching an increment action with payload of +5
      </p>
    </>
  );
}

export default App;
