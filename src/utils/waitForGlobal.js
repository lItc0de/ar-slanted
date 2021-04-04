const waitForGlobal = (name, timeout = 300) => {
  return new Promise((resolve, reject) => {
    let waited = 0;

    const wait = (interval) => {
      setTimeout(() => {
        waited += interval;
        // some logic to check if script is loaded
        // usually it something global in window object
        if (window[name] !== undefined) {
          console.log('global loaded:', name);
          return resolve();
        }
        if (waited >= timeout * 1000) {
          return reject({ message: 'Timeout' });
        }
        wait(interval * 2);
      }, interval);
    };

    wait(30);
  });
};

export default waitForGlobal;
