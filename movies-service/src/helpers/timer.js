const timer = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  });
};

module.exports = timer;