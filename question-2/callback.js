// Create a method that resolves after 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'delayed success!' });
      }, 500);
    });
  };
  
  
  // Create a method that rejects after 500ms
  const rejectedPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject({ error: 'delayed exception!' });
      }, 500);
    });
  };



  
  // Call both promises and handle the output
  resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  
  rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  