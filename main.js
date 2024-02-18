const allSeats = document.getElementById("seat-parent").children;
const totalSeatCount = document.getElementById("total-seat-count");
let seatNumber = parseInt(totalSeatCount.innerText);

for (let i = 0; i < allSeats.length; i++) {
  addClickEvent(allSeats[i]);
}

function updateTable(elm) {
  const tableBOdy = document.getElementById("table-body");
  const tableRow = document.createElement("tr");

  const fistTd = document.createElement("td");
  fistTd.innerText = elm.innerText;

  const secondTd = document.createElement("td");
  secondTd.innerText = "Economoy";

  const thirdTd = document.createElement("td");
  thirdTd.innerText = "550tk";

  tableRow.append(fistTd, secondTd, thirdTd);
  tableBOdy.appendChild(tableRow);
}

function addClickEvent(element) {
  element.addEventListener("click", function () {
    element.classList.remove("bg-gray-200");
    seatNumber -= 1;
    totalSeatCount.innerText = seatNumber;

    const haveId = element.getAttribute("id");
    if (haveId) {
      element.classList.add("bg-primary", "text-white");
    }

    updateTable(element);
  });
}
