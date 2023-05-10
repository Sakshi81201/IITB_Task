let invoices = [
  {
    id: 1,
    chemicalName: "Acetic acid",
    vendor: "ABC Chemicals",
    density: 1.049,
    viscosity: 1.22,
    packaging: "Bottle",
    packSize: 1,
    unit: "L",
    quantity: 10,
  },
  {
    id: 2,
    chemicalName: "Sodium hydroxide",
    vendor: "XYZ Chemicals",
    density: 2.13,
    viscosity: 1.08,
    packaging: "Drum",
    packSize: 50,
    unit: "kg",
    quantity: 5,
  },
  {
    id: 3,
    chemicalName: "Hydrochloric acid",
    vendor: "LMN Chemicals",
    density: 1.19,
    viscosity: 1.3,
    packaging: "Bottle",
    packSize: 2.5,
    unit: "L",
    quantity: 20,
  },
  {
    id: 4,
    chemicalName: "Ethanol",
    vendor: "PQR Chemicals",
    density: 0.789,
    viscosity: 1.2,
    packaging: "Can",
    packSize: 5,
    unit: "L",
    quantity: 12,
  },
  {
    id: 5,
    chemicalName: "Ammonia",
    vendor: "JKL Chemicals",
    density: 0.91,
    viscosity: 0.3,
    packaging: "Drum",
    packSize: 200,
    unit: "kg",
    quantity: 2,
  },
  {
    id: 6,
    chemicalName: "Sulfuric acid",
    vendor: "ABC Chemicals",
    density: 1.84,
    viscosity: 1.6,
    packaging: "Bottle",
    packSize: 1,
    unit: "L",
    quantity: 15,
  },
  {
    id: 7,
    chemicalName: "Methanol",
    vendor: "XYZ Chemicals",
    density: 0.792,
    viscosity: 0.5,
    packaging: "Can",
    packSize: 20,
    unit: "L",
    quantity: 8,
  },
  {
    id: 8,
    chemicalName: "Calcium chloride",
    vendor: "LMN Chemicals",
    density: 2.15,
    viscosity: 1.1,
    packaging: "Drum",
    packSize: 100,
    unit: "kg",
    quantity: 3,
  },
  {
    id: 9,
    chemicalName: "Nitric acid",
    vendor: "PQR Chemicals",
    density: 1.51,
    viscosity: 1.4,
    packaging: "Bottle",
    packSize: 2,
    unit: "L",
    quantity: 18,
  },
  {
    id: 10,
    chemicalName: "Acetone",
    vendor: "XYZ Chemicals",
    density: "0.79",
    viscosity: "0.35",
    packaging: "Bottle",
    packSize: "500 ml",
    unit: "kg",
    quantity: "2",
  },
  {
    id: 11,
    chemicalName: "Hydrogen Peroxide",
    vendor: "XYZ Chemicals",
    density: "1.11",
    viscosity: "1.08",
    packaging: "Bottle",
    packSize: "2 L",
    unit: "kg",
    quantity: "3",
  },
  {
    id: 12,
    chemicalName: "Nitrogen",
    vendor: "PQR Chemicals",
    density: "1.25",
    viscosity: "0.01",
    packaging: "Cylinder",
    packSize: "40 L",
    unit: "L",
    quantity: "6",
  },
  {
    id: 13,
    chemicalName: "Carbon Dioxide",
    vendor: "LMN Chemicals",
    density: "1.98",
    viscosity: "0.01",
    packaging: "Cylinder",
    packSize: "50 L",
    unit: "L",
    quantity: "4",
  },
  {
    id: 14,
    chemicalName: "Chlorine",
    vendor: "ABC Chemicals",
    density: "3.21",
    viscosity: "0.01",
    packaging: "Cylinder",
    packSize: "50 L",
    unit: "L",
    quantity: "1",
  },
  {
    id: 15,
    chemicalName: "Oxygen",
    vendor: "XYZ Chemicals",
    density: "1.31",
    viscosity: "0.01",
    packaging: "Cylinder",
    packSize: "40 L",
    unit: "L",
    quantity: "5",
  },
];
// Function to handle the "Add Row" button click event
let selectedRow = null;
function selectRow(row) {
  if (selectedRow !== null) {
    selectedRow.classList.remove("selected-row");
  }
  selectedRow = row;
  selectedRow.classList.add("selected-row");
}

function deleteRow() {
  if (selectedRow !== null) {
    selectedRow.remove();
    selectedRow = null;
  }
}
function addRow() {
  let table = document.getElementById("invoiceTable");
  let newRow = table.insertRow(); // Insert a new row at the end of the table
  if (invoices.length === 0) {
    console.log("No more invoices to add.");
    return;
  }

  newRow = table.insertRow();

  let invoice = invoices.shift();
  // Create cells for the new row
  let cell1 = newRow.insertCell();
  let cell2 = newRow.insertCell();
  let cell3 = newRow.insertCell();
  let cell4 = newRow.insertCell();
  let cell5 = newRow.insertCell();
  let cell6 = newRow.insertCell();
  let cell7 = newRow.insertCell();
  let cell8 = newRow.insertCell();
  let cell9 = newRow.insertCell();

  let id = invoice.id;
  let chemicalName = invoice.chemicalName;
  let vendor = invoice.vendor;
  let density = invoice.density;
  let viscosity = invoice.viscosity;
  let packaging = invoice.packaging;
  let packSize = invoice.packSize;
  let unit = invoice.unit;
  let quantity = invoice.quantity;

  // // Set the content of each cell
  cell1.textContent = id;
  cell2.textContent = chemicalName;
  cell3.textContent = vendor;
  cell4.textContent = density;
  cell5.textContent = viscosity;
  cell6.textContent = packaging;
  cell7.textContent = packSize;
  cell8.textContent = unit;
  cell9.textContent = quantity;

  console.log("New invoice added:");
  console.log(invoice);
}

function sortTable(columnName) {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchCount = 0;
  table = document.getElementById("invoiceTable");
  switching = true;
  // Set the sorting direction to ascending
  dir = "asc";

  // Loop through all table rows except the header
  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      // Get the two elements to compare, based on the column name
      x = rows[i]
        .getElementsByTagName("TD")
        [columnName].innerText.toLowerCase();
      y = rows[i + 1]
        .getElementsByTagName("TD")
        [columnName].innerText.toLowerCase();

      // Check if the two rows should switch places
      if (dir === "asc") {
        if (x > y) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (x < y) {
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      // Switch the rows and mark the switching flag as true
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Increment the switch count to track the number of switches
      switchCount++;
    } else {
      // If no switching occurred and the direction is ascending,
      // switch to descending order and run the loop again
      if (switchCount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function moveRowUp() {
  let table = document.getElementById("invoiceTable");
  let selectedRow = table.getElementsByClassName("selected")[0];
  if (selectedRow && selectedRow.previousElementSibling) {
    table.insertBefore(selectedRow, selectedRow.previousElementSibling);
  }
}
function selectRow(row) {
  row.classList.toggle("selected");
}

function moveRowDown() {
  let table = document.getElementById("invoiceTable");
  let selectedRow = table.getElementsByClassName("selected")[0];

  if (!selectedRow || !selectedRow.nextElementSibling) {
    console.log(
      "No row selected or the selected row is already at the bottom."
    );
    return;
  }

  let nextRow = selectedRow.nextElementSibling;
  table.insertBefore(nextRow, selectedRow);
}
function deleteRow() {
  let table = document.getElementById("invoiceTable");
  let rows = table.getElementsByTagName("tr");
  let selectedRow = table.getElementsByClassName("selected")[0];

  if (!selectedRow) {
    console.log("No row selected.");
    return;
  }

  table.removeChild(selectedRow);
}

function deleteRow(row) {
  table.deleteRow(row.rowIndex);
}

function deleteSelectedRows() {
  let table = document.getElementById("invoiceTable");
  let selectedRows = table.getElementsByClassName("selected");

  // Iterate over the selected rows in reverse order and delete them
  for (let i = selectedRows.length - 1; i >= 0; i--) {
    table.deleteRow(selectedRows[i].rowIndex);
  }

  console.log("Selected rows deleted successfully.");
}
function addDeleteButtonEvent() {
  let deleteBtn = document.getElementById("deleteBtn");
  deleteBtn.onclick = deleteSelectedRows;
}
document.addEventListener("DOMContentLoaded", addDeleteButtonEvent);

function saveData() {
  let table = document.getElementById("invoiceTable");
  let rows = table.getElementsByTagName("tr");
  let data = [];
  // Skip the first row (header)
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    let rowData = {};

    // Retrieve the data from each cell
    rowData.id = row.cells[0].textContent;
    rowData.chemicalName = row.cells[1].textContent;
    rowData.vendor = row.cells[2].textContent;
    rowData.density = parseFloat(row.cells[3].textContent);
    rowData.viscosity = parseInt(row.cells[4].textContent);
    rowData.packaging = row.cells[5].textContent;
    rowData.packSize = parseInt(row.cells[6].textContent);
    rowData.unit = row.cells[7].textContent;
    rowData.quantity = parseInt(row.cells[8].textContent);

    data.push(rowData);
  }
  // Perform the logic to save the data (e.g., send it to a server or update a database)
  console.log("Saving data:", data);
  let messageElement = document.getElementById("saveMessage");
  messageElement.textContent = "Data saved successfully!";
}
function addSaveButtonEvent() {
  let saveButton = document.getElementById("saveButton");
  saveButton.onclick = saveData;
}
document.addEventListener("DOMContentLoaded", addSaveButtonEvent);

// Add event listener to the buttons
let addRowBtn = document.getElementById("addRowBtn");
addRowBtn.addEventListener("click", addRow);

let moveRowUpBtn = document.getElementById("moveRowUpBtn");
moveRowUpBtn.addEventListener("click", moveRowUp);

let moveRowDownBtn = document.getElementById("moveRowDownBtn");
moveRowDownBtn.addEventListener("click", moveRowDown);

let deleteSelectedRowsBtn = document.getElementById("deleteSelectedRowsBtn");
deleteSelectedRowsBtn.addEventListener("click", deleteSelectedRows);

let refreshDataBtn = document.getElementById("refreshDataBtn");
refreshDataBtn.addEventListener("click", refreshData);

let saveDataBtn = document.getElementById("saveDataBtn");
saveDataBtn.addEventListener("click", saveData);
