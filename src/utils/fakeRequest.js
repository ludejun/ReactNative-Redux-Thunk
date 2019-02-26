const fetch = (data, t = 0) =>
  new Promise(resolve => {
    setTimeout(resolve, t, data);
  });

export default fetch;
