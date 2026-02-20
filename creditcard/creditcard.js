document.getElementById("form-grid").addEventListener("submit", function (e) {
    e.preventDefault();

    const feedback = document.getElementById("feedback");
    const cardNum = document.getElementById("cardNumber").value.trim();
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (cardNum !== "1234123412341234") {
        feedback.textContent = "❌ Invalid card number.";
        feedback.style.color = "darkred";
        return;
    }

    const now = new Date();
    const mm = now.getMonth() + 1;
    const yy = now.getFullYear() % 100;

    if (year < yy || (year === yy && month < mm)) {
        feedback.textContent = "❌ Card is expired.";
        feedback.style.color = "darkred";
        return;
    }

    feedback.textContent = "✅ Payment successful!";
    feedback.style.color = "green";
});