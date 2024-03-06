let a = [
    "Initializing hack tools...",
    "Connecting to Instagram...",
    "Connecting to server 1...",
    "connection failed. Retrying...",
    "Connecting to server 2...",
    "Connected Succesafully...",
    "Username AjayWagh...",
    "Trying Brute Force...",
    "200k passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful!!!",
  ];
  
  const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, seconds * 1000);
    });
  };
  
  const showHack = async (message) => {
    await sleep(2);
    text.innerHTML = text.innerHTML + message + "<br>";
  };
  
  (async () => {
    for (let i = 0; i < a.length; i++) {
      await showHack(a[i]);
    }
  })();
  