import { useEffect, useState } from 'react';

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

const MousePointer = () => {
  const { x, y } = useMousePointer();

  return (
    <button>
      Your mouse position is {x}, {y}
    </button>
  );
};

export default MousePointer;
