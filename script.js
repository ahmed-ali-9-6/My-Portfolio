const sectionElements = document.querySelectorAll("section");
const projectElement = document.querySelector(".projects");
const observeElements = (sectionElements) => {
  const options = {threshold: 0.3};

  const callback = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        projectElement.classList.remove("in-view");
      } else {
        entry.target.classList.remove("in-view");
        projectElement.classList.add("in-view");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  
  sectionElements.forEach((element) => observer.observe(element));
};

observeElements(sectionElements);

const footerYear = document.querySelector(".footer-year");
const currentYear = new Date().getFullYear();

footerYear.textContent = currentYear;



