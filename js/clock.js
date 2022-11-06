let getName = prompt("Adınızı giriniz: ");
let changeName = (document.querySelector("#myName").innerHTML = `${
  getName.charAt(0).toUpperCase() + getName.slice(1)
}`);

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = addZero(h);
  m = addZero(m);
  s = addZero(s);
  document.querySelector("#myClock").innerHTML = h + ":" + m + ":" + s;
  //call this function every second
  setTimeout(showTime, 1000);
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

showTime();
