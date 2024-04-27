const btn = document.querySelector(".btn");

btn.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter your name");
  if (name !== null && name.trim() !== "") {
    btn.textContent = name;
  }
}
