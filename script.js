// Sample student dataset with image URLs
const students = [
    { id: "605", name: "Naveen S", age: 21, course: "AI&DS", email: "7bob@example.com", image: "images/bob.jpg" },
    { id: "S1002", name: "Bob Smith", age: 21, course: "Mechanical Engineering", email: "bob@example.com", image: "images/bob.jpg" },
    { id: "S1003", name: "Charlie Brown", age: 22, course: "Electrical Engineering", email: "charlie@example.com", image: "images/charlie.jpg" },
    { id: "S1004", name: "David Wilson", age: 23, course: "Mathematics", email: "david@example.com", image: "images/david.jpg" },
    { id: "S1005", name: "Eva Martinez", age: 19, course: "Physics", email: "eva@example.com", image: "images/eva.jpg" },
    { id: "S1006", name: "Frank Taylor", age: 21, course: "Civil Engineering", email: "frank@example.com", image: "images/frank.jpg" },
    { id: "S1007", name: "Grace Hall", age: 22, course: "Biology", email: "grace@example.com", image: "images/grace.jpg" },
    { id: "S1008", name: "Harry White", age: 20, course: "History", email: "harry@example.com", image: "images/harry.jpg" },
    { id: "S1009", name: "Ivy Adams", age: 21, course: "Psychology", email: "ivy@example.com", image: "images/ivy.jpg" },
    { id: "S1010", name: "Jack Green", age: 23, course: "Chemistry", email: "jack@example.com", image: "images/jack.jpg" },
];

// Function to load student data into the table
function loadStudentData() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Clear table before adding data

    students.forEach(student => {
        let row = `<tr>
            <td><img src="${student.image}" alt="${student.name}" class="student-img"></td>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.email}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Function to search for students
function searchStudent() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("studentTable");
    let rows = table.getElementsByTagName("tr");
    let found = false;
    let noResultMessage = document.getElementById("noResult");

    for (let i = 1; i < rows.length; i++) {
        let rowData = rows[i].innerText.toLowerCase();
        if (rowData.includes(input)) {
            rows[i].style.display = "";
            found = true;
        } else {
            rows[i].style.display = "none";
        }
    }

    // Show "No Results" message with animation if no match is found
    if (!found) {
        noResultMessage.style.display = "block";
        noResultMessage.classList.add("shake");
    } else {
        noResultMessage.style.display = "none";
        noResultMessage.classList.remove("shake");
    }
}

// Load student data when the page loads
window.onload = loadStudentData;
