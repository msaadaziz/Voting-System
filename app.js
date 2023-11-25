let myArray = ["Ubaidullah", "Saim"];
let addFriendInput = document.getElementById("addFriend");
let addNewButton = document.getElementById("addNew");
let outputTable = document.getElementById("output");
addNewButton.addEventListener("click", function() {
  if (addFriendInput.value.trim() === "") {
      alert("Please enter a name before adding.");
      return;
  }
  addFriendToList();
});
  function addFriendToList() {
    let newFriend = addFriendInput.value;
    myArray.push(newFriend);
    buildPageContent();
    addFriendInput.value = "";
  }
  function buildPageContent() {
    outputTable.innerHTML = "";
    
    myArray.forEach(function(name, index) {
        createTableRow(index + 1, name, 0);
      });
    }
   function createTableRow(index, name, votes) {
    const row = document.createElement("tr");
    const indexCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const votesCell = document.createElement("td");
    row.addEventListener("click", function() {
      increaseVoteCounter(votesCell);
    });
    function increaseVoteCounter(cell) {
      let currentCounter = parseInt(cell.textContent, 10);
      currentCounter++;
      cell.textContent = currentCounter;
    }
    indexCell.textContent = index;
    nameCell.textContent = name;
    votesCell.textContent = votes;
    row.appendChild(indexCell);
    row.appendChild(nameCell);
    row.appendChild(votesCell);
    outputTable.appendChild(row);
  }
  function buildPageContent() {
    outputTable.innerHTML = "";

    // Create header row
    const headerRow = document.createElement("tr");
    headerRow.classList.add("header-row")
    createTableHeader(headerRow, "Sr.No");
    createTableHeader(headerRow, "Names");
    createTableHeader(headerRow, "Votes");
    outputTable.appendChild(headerRow);

    // Add data rows
    myArray.forEach(function (name, index) {
        createTableRow(index + 1, name, 0);
    });
}

function createTableHeader(row, text) {
    const headerCell = document.createElement("th");
    headerCell.textContent = text;
    row.appendChild(headerCell);
}

  buildPageContent();