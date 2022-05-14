const $document = document.querySelector("#main");
const $dropdown = $document.querySelector("#dropdownSelect");

$dropdown.addEventListener("click", (e) => {
  e.preventDefault;
  removeClasses();
  document.getElementById("classSwitcher").classList.add(`cus-${e.target.id}`);
});

function removeClasses() {
  //could definitely be optimized by using if statements to check existence || getting and sorting the actual active classes from #classSwitcher.
  document.getElementById("classSwitcher").classList.remove("cus-primary");
  document.getElementById("classSwitcher").classList.remove("cus-secondary");
  document.getElementById("classSwitcher").classList.remove("cus-success");
  document.getElementById("classSwitcher").classList.remove("cus-danger");
  document.getElementById("classSwitcher").classList.remove("cus-warning");
  document.getElementById("classSwitcher").classList.remove("cus-info");
  document.getElementById("classSwitcher").classList.remove("cus-light");
  document.getElementById("classSwitcher").classList.remove("cus-dark");
}
