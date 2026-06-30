const correctAnswer = "parsa1392";
const input = document.getElementById("password");
const paragraph = document.getElementById("result");
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const iv = input.value.trim();
  if (iv === "") {
    paragraph.textContent = "please enter the password!";
    paragraph.style.color = "red";
  } else if (iv === correctAnswer) {
    paragraph.textContent = "Access is allowed!";
    paragraph.style.color = "green";
  } else {
    paragraph.textContent = "Access is not allowed!";
    paragraph.style.color = "red";
    input.focus();
    input.value = "";
  }
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    btn.click();
  }
});