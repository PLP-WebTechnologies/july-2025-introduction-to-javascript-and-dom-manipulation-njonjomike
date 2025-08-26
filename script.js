// ===========================
// PART 1: VARIABLES & CONDITIONALS
// ===========================

// Function to check age eligibility using variables and if/else
function checkAge() {
    let age = document.getElementById("ageInput").value;
    let result = document.getElementById("ageResult");

    if (age === "") {
        result.textContent = "Please enter your age!";
    } else if (age >= 18) {
        result.textContent = "✅ You are eligible to vote!";
    } else {
        result.textContent = "❌ Sorry, you must be 18 or older.";
    }
}

// ===========================
// PART 2: FUNCTIONS
// ===========================

// Function to calculate total price (reusable)
function calculateTotal() {
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);
    let result = document.getElementById("totalResult");

    if (isNaN(price) || isNaN(quantity)) {
        result.textContent = "⚠️ Please enter valid numbers!";
        return;
    }

    let total = price * quantity;
    result.textContent = `Total Cost: Ksh ${total}`;
}

// ===========================
// PART 3: LOOPS
// ===========================

// Function to generate a multiplication table using a for loop
function generateTable() {
    let num = document.getElementById("tableInput").value;
    let list = document.getElementById("tableResult");
    list.innerHTML = "";

    if (num === "") {
        list.innerHTML = "<li>Please enter a number!</li>";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        let item = document.createElement("li");
        item.textContent = `${num} × ${i} = ${num * i}`;
        list.appendChild(item);
    }
}

// ===========================
// PART 4: DOM MANIPULATION
// ===========================

// 1. Change background color when button is clicked
document.getElementById("changeColorBtn").addEventListener("click", () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue" ? "#f4f4f4" : "lightblue";
});

// 2. Toggle a message's visibility
document.getElementById("toggleTextBtn").addEventListener("click", () => {
    let message = document.getElementById("message");
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});

// 3. Log a greeting message in the console when page loads
window.onload = () => {
    console.log("Welcome, Michael! JavaScript is running successfully ✅");
};
