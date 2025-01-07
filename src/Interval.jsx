import { useEffect, useState } from 'react';

const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
};


function Interval() {

  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return (
    <>
      <button>
      Timer is at {count}
      </button>
    </>
  );
}

export default Interval;