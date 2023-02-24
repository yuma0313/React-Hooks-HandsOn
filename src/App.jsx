import { useEffect, useState, useContext, useRef, useReducer, useMemo } from 'react'
import CodeInfoContext from './main';
import useLocalStorage from './useLocalStorage';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const codeInfo = useContext(CodeInfoContext);
  const ref = useRef();
  const [state, disPatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  }

  //useEffectは発火のタイミングを決めることができる
  //[count]が更新された時にコールバック関数を呼び出している
  useEffect(() => {
    console.log("hello hooks")
  },[count]);

  const handleRef = () => {
    console.log(ref.current.value);
  };

  //useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000) {
      i++;
    }
    return count02 * count02;
  },[count02]);

  //カスタムフック
  const [age, setAge] = useLocalStorage("age", 24);

  return (
    <div>
      <h1>useState</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{codeInfo.name}</p>
      <p>{codeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>Ref</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント:{state}</p>
      <button onClick={() => disPatch({ type: "increment" })}>+</button>
      <button onClick={() => disPatch({ type: "decrement" })}>-</button>

      <hr />
      <h1>useMemo</h1>
      <div>カウント1:{count01}</div>
      <div>カウント2:{count02}</div>
      <div>結果:{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>

      <hr />
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢をセット</button>
    </div>
  )
}

export default App
