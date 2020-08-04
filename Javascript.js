function openApp() {
  var txt;
  if (confirm("Open the application")) {
    txt = "Your application is opening!";
    Task();
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
function Task(){
	
}