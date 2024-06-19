

const observeElements = (selector, animationClass) => {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
};

const handleScrollUp = () => {
  const element = document.getElementById("section--1");
  const navbar = document.querySelector("nav");
  console.log("element: ", element);

  if (!element) {
    console.error("Element with ID 'section--2' not found.");
    return;
  }

  if (!navbar) {
    console.error("Navbar element not found.");
    return;
  }

  const navbarHeight = navbar.offsetHeight; // Get the navbar height

  window.scrollTo({
    top: element.offsetTop - navbarHeight, // Subtract the navbar height from the scroll position
    behavior: "smooth",
  });
};

const handleScrollDown = () => {
  const element = document.getElementById("section--2");
  const navbar = document.querySelector("nav"); // Select the navbar

  if (!element) {
    console.error("Element with ID 'section--2' not found.");
    return;
  }

  if (!navbar) {
    console.error("Navbar element not found.");
    return;
  }

  const navbarHeight = navbar.offsetHeight; // Get the navbar height

  window.scrollTo({
    top: element.offsetTop - navbarHeight, // Subtract the navbar height from the scroll position
    behavior: "smooth",
  });
};

export { handleScrollDown, handleScrollUp, observeElements };
