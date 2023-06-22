import React, { useRef } from 'react';
import ChildComponent from './childComponent';

const ParentComponent = () => {
  const childFunctionRef = useRef();

  const storeChildFunction = (childFunction) => {
    childFunctionRef.current = childFunction;
  };

  const handleClick = () => {
    if (childFunctionRef.current) {
      childFunctionRef.current();
    }
  };

  return (
    <div>
      <ChildComponent setChildFunction={storeChildFunction} />
      <button onClick={handleClick}>Invoke Child Function</button>
    </div>
  );
};

export default ParentComponent;