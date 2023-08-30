window.addEventListener("DOMContentLoaded", (event) => {
  const closeButton = document.getElementById("close");
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".modal-backdrop");

  closeButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    modal.classList.remove("show");
    backdrop.classList.remove("show");
  });
});
