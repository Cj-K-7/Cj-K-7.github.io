const x = document.getElementById("x");
const y = document.getElementById("y");
const z = document.getElementById("z");

if (typeof Gyroscope === "function") {
  const options = { frequency: 60, referenceFrame: "device" };
  const gyroscope = new Gyroscope(options);
  gyroscope.addEventListener("reading", (e) => {
    x.innerText = gyroscope.x;
    y.innerText = gyroscope.y;
    z.innerText = gyroscope.z;
    console.log(`X-axis ${gyroscope.x}`);
    console.log(`Y-axis ${gyroscope.y}`);
    console.log(`Z-axis ${gyroscope.z}`);
  });
  gyroscope.start();
} else {
  console.log("no Gyro");
}
