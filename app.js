const myBtn = document.querySelector("#myBtn");

let count = 0;

const getData = () => {
  console.log("Fetching Data...", count++);
};

const throttle = (fn, delay) => {
  let prev = 0;

  return function (...args) {
    const now = new Date().getTime();
    if (prev - delay < 0) {
      return;
    }
    prev = now;
    return fn(...args);
  };
};

myBtn.addEventListener("click", throttle(getData, 4000));
