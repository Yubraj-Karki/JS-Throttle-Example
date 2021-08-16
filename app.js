const myBtn = document.querySelector("#myBtn");

let count = 0;

const getData = () => {
  console.log("Fetching Data...", count++);
};

const throttle = (fn, delay) => {
  let prev = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - prev < delay) {
      return;
    }
    prev = now;
    fn();
  };
};

myBtn.addEventListener("click", throttle(getData, 4000));
