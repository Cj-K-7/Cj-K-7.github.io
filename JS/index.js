const permission = document.getElementById("permission");

navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    permission.innerText = "granted";
  } else if (result.state === "prompt") {
    window.confirm("Allow this page : geolocation");
  }
});

const xDiv = document.getElementById("xDiv");
const yDiv = document.getElementById("yDiv");

// window.addEventListener("devicemotion", (deviceMotionEvent) => {
//   const { acceleration } = deviceMotionEvent;
//   console.log("accel", acceleration);
//   console.log("gravity", accelerationIncludingGravity);
// });

// window.addEventListener("deviceorientation", (deviceOrientationEvent) => {
//   const { absolute, alpha, beta, gamma } = deviceOrientationEvent;
//   console.log(absolute);
//   const z = alpha;
//   const x = beta;
//   const y = gamma;
//   console.log("coordination of device", z, x, y);
// });

// if (typeof Gyroscope === "function") {
//   const options = { frequency: 1, referenceFrame: "device" };
//   const gyroscope = new Gyroscope(options);
//   gyroscope.addEventListener("reading", (e) => {
//     x.innerText = gyroscope.x;
//     y.innerText = gyroscope.y;
//     z.innerText = gyroscope.z;
//     console.log(`X-axis ${gyroscope.x}`);
//     console.log(`Y-axis ${gyroscope.y}`);
//     console.log(`Z-axis ${gyroscope.z}`);
//   });
//   gyroscope.start();
// } else {
//   console.log("no Gyro");
// }
const cubeContainer = document.getElementById("cubeContainer");
let dropTimer;

if (typeof Accelerometer === "function") {
  const acl = new Accelerometer({ frequency: 5 });
  acl.addEventListener("reading", () => {
    const cubes = document.getElementsByClassName("cube");
    const { x, y } = acl;
    if (x > 20 || y > 15) {
      clearTimeout(dropTimer);
      const cube = document.createElement("div");
      cube.classList.add("cube");
      cube.style.top = (Math.random() * 99).toFixed(0) + "%";
      cube.style.left = (Math.random() * 99).toFixed(0) + "%";
      cubeContainer.appendChild(cube);
      const dropCube = () => {
        for (let target of cubes) {
          target.style.bottom = "5px";
          target.style.top = "auto";
        }
      };
      dropTimer = setTimeout(dropCube, 2000);
    }
  });

  acl.start();
}
