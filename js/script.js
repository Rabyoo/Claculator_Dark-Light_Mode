const darkBtn = document.querySelector(".dark");
const lightBtn = document.querySelector(".light");
const h3 = document.querySelector("h3");
darkBtn.style = "opacity: 0.1";

darkBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
  h3.style.color = "#fff";
  h3.style.borderBottom = "2px solid #fff";

  // Set mode value to dark and save it, if user refresh the page, the browser can access this value
  window.localStorage.setItem("mode", "dark");

  darkBtn.style = "opacity: 0.1";
  lightBtn.style = "opacity: 1";
});

lightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
  h3.style.color = "#181818";
  h3.style.borderBottom = "2px solid #181818";

  window.localStorage.setItem("mode", "light");

  darkBtn.style = "opacity: 1";
  lightBtn.style = "opacity: 0.1";
});

const mode = window.localStorage.getItem("mode"); //! get mode Value
if (mode == "dark") {
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
  darkBtn.style = "opacity: 0.1";
  lightBtn.style = "opacity: 1";
  h3.style.color = "#fff";
  h3.style.borderBottom = "2px solid #fff";
} else {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
  darkBtn.style = "opacity: 1";
  lightBtn.style = "opacity: 0.1";
  h3.style.color = "#181818";
  h3.style.borderBottom = "2px solid #181818";
}
