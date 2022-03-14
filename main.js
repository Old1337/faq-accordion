const arrow = document.querySelectorAll(".arrow");

arrow.forEach((arrow) =>
  arrow.addEventListener("click", function (e) {
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      e.target.previousElementSibling.classList.add("active");
      e.target.parentElement.nextElementSibling.classList.add("active");
    } else {
      e.target.previousElementSibling.classList.remove("active");
      e.target.parentElement.nextElementSibling.classList.remove("active");
    }
  })
);
