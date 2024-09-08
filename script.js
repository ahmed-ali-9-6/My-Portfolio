const targetElements = document.querySelectorAll(".target");
const observeProjectElements = document.querySelectorAll(".observe-project");
const observeElements = (targetElements) => {
  const options = {threshold: 0.3};

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  
  targetElements.forEach((element) => observer.observe(element));
};

observeElements(targetElements);
observeElements(observeProjectElements);

const footerYear = document.querySelector(".footer-year");
const currentYear = new Date().getFullYear();

footerYear.textContent = currentYear;



