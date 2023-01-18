if (typeof Gyroscope === "function") {
  const options = { frequency: 60, referenceFrame: "device" };
  const gyroscope = new Gyroscope(options);
  gyroscope.addEventListener("reading", (e) => {
    console.log(`X-axis ${gyroscope.x}`);
    console.log(`Y-axis ${gyroscope.y}`);
    console.log(`Z-axis ${gyroscope.z}`);
  });
  gyroscope.start();
}
