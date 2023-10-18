import { useState , useEffect } from 'react';

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return(
    <>
      <h1 className='text-center'>Поточний час</h1>
      <h3 className='text-center mt-5'>{currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}</h3>
    </>
  );
}