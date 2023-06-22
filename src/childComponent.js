import React, { useEffect } from 'react';

const ChildComponent = ({ setChildFunction }) => {
  const childFunction = () => {
    console.log('Child function invoked!');
  };

  useEffect(() => {
    setChildFunction(childFunction);
  }, [setChildFunction]);

  return <div>Child Component</div>;
};

export default ChildComponent;
