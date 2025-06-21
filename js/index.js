
var sites = JSON.parse(localStorage.getItem("sites")) || [];
function addSite() {
  var name = document.getElementById("siteName").value.trim();
  var url = document.getElementById("siteURL").value.trim();

  if (name === "" || url === "") {
    alert("Da5l Eldata ya fnfan!!");
    return;
  }
  var site = { name, url };
  sites.push(site);
  localStorage.setItem("sites", JSON.stringify(sites));
  displaySites();
  clearForm();
}
function displaySites() {
  var cartoona = "";
  for (var i = 0; i < sites.length; i++) {
    cartoona+= `
    <tr>
        <td>${i}</td>
        <td>${sites[i].name}</td>
        <td>
        <a href="${sites[i].url}" target="_blank" class="btn btn-primary ms-2">Visit</a>
        </td>
        <td>
          <button onclick="deleteSite(${i})" class="btn btn-outline-danger">Delete</button>
        </td>
        </tr>

        `;
      }
      document.getElementById("bookmarksList").innerHTML = cartoona;
}

function deleteSite(index) {
  sites.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(sites));
  displaySites();
}

function clearForm() {
  document.getElementById("siteName").value = "";
  document.getElementById("siteURL").value = "";
}

displaySites();