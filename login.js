// Visual-only login. No real auth.
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var f = e.target;
  var user = f.user.value.trim();
  var pass = f.pass.value.trim();
  var err = document.getElementById("err");
  if (!user || !pass) {
    err.hidden = false;
    return;
  }
  err.hidden = true;
  try { localStorage.setItem("nh_player", user); } catch (_) {}
  window.location.href = "play.html";
});
