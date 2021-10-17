function tiem() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
setInterval(tiem, 1000)