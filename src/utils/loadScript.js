const loadScript = (file) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', function (e) {
      if (req.readyState == 2 && req.status == 200) {
        // Download will start
      } else if (req.readyState == 3) {
        // Download is happenning
      } else if (req.readyState == 4) {
        // Downloading has finished

        const script = document.createElement('script');
        script.innerHTML = req.response;

        document.head.appendChild(script);

        console.log('script loaded 1');

        return resolve();
      }
    });

    req.addEventListener('progress', function (e) {
      if (e.lengthComputable === true) {
        var download_percent = (e.loaded / e.total) * 100;
        console.log(download_percent);
      }
    });

    req.responseType = 'text';

    req.open('GET', file);

    req.send();
  });
};

export default loadScript;
