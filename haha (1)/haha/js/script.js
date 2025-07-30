
// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }
});


// LOGIN FORM
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Login validation code here
    window.location.href = "successl.html";
  });
}


// SIGNUP FORM
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Signup validation code here
    window.location.href = "success.html";
  });
}

//product
document.addEventListener('DOMContentLoaded', () => {
  const qtyInput = document.getElementById('quantity');
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');

  incrementBtn.addEventListener('click', () => {
    let current = parseInt(qtyInput.value);
    if (current < 10) qtyInput.value = current + 1;
  });

  decrementBtn.addEventListener('click', () => {
    let current = parseInt(qtyInput.value);
    if (current > 1) qtyInput.value = current - 1;
  });
});

//CheckOut
function updateTotals() {
    const rows = document.querySelectorAll("tbody tr");
    let grandTotal = 0;

    rows.forEach(row => {
        const Price = parseFloat(row.querySelector(".Price").textContent);
        const Qty = parseInt(row.querySelector(".Qty").value);
        const subtotalCell = row.querySelector(".subtotal");
        const subtotal = Price * Qty;

        subtotalCell.textContent = subtotal.toFixed(2);
        grandTotal += subtotal;
        });

    document.getElementById("grand-total").textContent = "RM " + grandTotal.toFixed(2);
}

           
// real time update
document.querySelectorAll(".Qty").forEach(input => {
    input.addEventListener("input", updateTotals);
})

updateTotals();

// for the payment method slide
function ProcessCheckout() {
    const payment = document.getElementById("payment-method").value;
    if (payment === "") {
        alert ("Please Choose Your Payment Method");
        return;
    }

    //input fill in
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const nameOnCard = document.getElementById("nameOnCard").value.trim();
    const cvv =document.getElementById("cvv").value.trim();
    const expiryDate = document.getElementById("expiryDate").value.trim();

    if (cardNumber === ""  ||  nameOnCard === ""  ||  cvv === ""  ||  expiryDate ==="") {
        alert ("Please Complete all accunt details");
        return;
    }


    // Go to checkout 3
    window.location.href = "Checkout3.html";
}