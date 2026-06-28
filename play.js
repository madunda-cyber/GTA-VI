// Fake loading screen.
(function () {
  var who = document.getElementById("who");
  try {
    var name = localStorage.getItem("nh_player");
    if (name) who.textContent = name.toUpperCase();
  } catch (_) {}

  var bar = document.getElementById("bar");
  var pct = document.getElementById("pct");
  var v = 0;
  var tick = setInterval(function () {
    v += Math.random() * 6 + 1;
    if (v >= 100) { v = 100; clearInterval(tick); }
    bar.style.width = v + "%";
    pct.textContent = Math.floor(v);
  }, 220);
})();
