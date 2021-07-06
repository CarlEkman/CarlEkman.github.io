function updateTime() {
  mytime=setTimeout('displayTime()', 1000)
}

function displayTime() {
  var today = new Date();
  var hours = ("0" + today.getHours()).slice(-2);
  var minutes = ("0" + today.getMinutes()).slice(-2);
  var time = hours + ":" + minutes
  document.getElementById("clock").innerHTML = time.toLocaleString();
  updateTime()
}

function displayYear() {
  var today = new Date()
  var year = today.getFullYear()
  document.getElementById("copyright-year").innerHTML = year;
}
