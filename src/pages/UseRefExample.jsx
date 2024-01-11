// useState and useRef difference

// useRef sathe sathe update hoy ref kono rerender triger kore na

// useRef sudu reference dore rakhe

// useState sathe sathe update hoy na state ekta rerender triger kore

import { useRef, useState } from "react";

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  const increment = () => {
    myRef.current = myRef.current + 1;
    setCount(count + 1);
  };

  return (
    <div>
      <h1>This is useRef</h1>
      <button className="btn btn-primary" onClick={() => increment()}>
        {myRef.current}
      </button>
    </div>
  );
};

export default UseRefExample;
