import React, { useEffect, useRef, useState } from 'react';
import MyWorker from '../workers/ar.worker';

import '../styles.scss';

import Header from '../components/header';
import Footer from '../components/footer';

const AframePage = () => {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const result = MyWorker.doExpensiveTask(5);
    setNumber(result);
  }, []);
  return (
    <>
      <Header />
      <h1>Number: {number}</h1>
      <Footer />
    </>
  );
};

export default AframePage;
