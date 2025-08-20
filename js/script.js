

const shapes = document.querySelectorAll("svg path, svg circle");
const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("closeOverlay");
const sheetTitle = document.getElementById("sheetTitle");
const tableBody = document.querySelector("#dataTable tbody");

shapes.forEach(shape => {
  shape.addEventListener("click", () => {
    const title = shape.getAttribute("data-title");
    sheetTitle.textContent = title;

    const data = wilayahData[title] || [];
    tableBody.innerHTML = "";

    data.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.store}</td>
        <td>${row.location}</td>
      `;
      tableBody.appendChild(tr);
    });

    overlay.style.display = "flex";
  });
});

closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

