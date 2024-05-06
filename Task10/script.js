function calculation() {
  let P = document.getElementById("Principal").value;
  let r = document.getElementById("rate").value;
  let n = document.getElementById("times").value;
  let t = document.getElementById("Year").value;

  let result = (P * (1 + r / n)) ^ (n * t);
  document.getElementById("cal").innerHTML =
    "The compound interest after 3 years is:" + result;
  console.log(result);
}
