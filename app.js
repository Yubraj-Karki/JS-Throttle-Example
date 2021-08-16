// Grabbing the button
const myBtn = document.querySelector("#myBtn");

// Count for the visualization of the number of calls made
let count = 0;

// Function that imitates fetching of data
const getData = () => {
  console.log("Fetching Data...", count++);
};

// Throttle function
const throttle = (fn, delay) => {
  let prev = 0;
  return function () {
    const now = new Date().getTime();

    console.log(prev);

    // We don't want to return anything if it is within the delayed time,
    // which in this case is 4000 ms
    if (now - prev < delay) {
      return;
    }

    // and if that's not the case we want to execute the function
    prev = now;

    fn();
  };
};

myBtn.addEventListener("click", throttle(getData, 4000));
