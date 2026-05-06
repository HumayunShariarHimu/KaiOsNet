const screen = document.getElementById("screen");
const status = document.getElementById("status");

function vib() {
  try { navigator.vibrate(80); } catch(e) {}
}

function openSettings() {
  status.innerText = "Opening Settings...";
  vib();

  try {
    window.location.href = "app://settings";
  } catch(e) {
    status.innerText = "Manual open required";
  }
}

function hotspotGuide() {
  vib();
  screen.innerHTML =
    "Hotspot Setup Guide<br><br>" +
    "1. Open Settings<br>" +
    "2. Network & Connectivity<br>" +
    "3. Hotspot<br>" +
    "4. Turn ON<br><br>" +
    "Tip: Keep hotspot ON for fast access";
}

function networkStatus() {
  vib();
  screen.innerHTML =
    "Network Status<br><br>" +
    "Signal: Good<br>" +
    "Data: Active<br>" +
    "Mode: Mobile Network<br>" +
    "Hotspot: Manual Control Required";
}

function helpPanel() {
  vib();
  screen.innerHTML =
    "Help<br><br>" +
    "Use buttons or keypad<br>" +
    "Enter: Settings<br>" +
    "1: Hotspot Guide<br>" +
    "2: Network<br>" +
    "3: Help Panel";
}

// keypad support
document.addEventListener("keydown", (e) => {

  if (e.key === "Enter") openSettings();

  if (e.key === "1") hotspotGuide();

  if (e.key === "2") networkStatus();

  if (e.key === "3") helpPanel();

});
