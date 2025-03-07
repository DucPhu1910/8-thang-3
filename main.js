
    document.addEventListener("DOMContentLoaded", function () {
        const letter = document.getElementById("letter");
        const button = document.getElementById("letter-toggle-button");

        button.addEventListener("click", function () {
            letter.classList.toggle("open"); // Toggle class để mở hoặc đóng thư
            if (letter.classList.contains("open")) {
                button.textContent = "Đóng lại";
            } else {
                button.textContent = "Mở ra";
            }
        });
    });

