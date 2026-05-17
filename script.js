document.querySelectorAll(".questionhru").forEach((question) => {
  question.addEventListener("click", function () {
    const faqBox = this.parentElement;
    faqBox.classList.toggle("active");
  });
});

const sections = document.querySelectorAll("section");
const navelement = document.querySelectorAll(".nav-element a");

let isscroll = false;

navelement.forEach((element) => {
  element.addEventListener("click", (e) => {
    isscroll = true;

    setTimeout(() => {
      isscroll = false;
    }, 200);
  });
});

window.addEventListener("scroll", (e) => {
  if (isscroll) return;

  let userLocation = "";

  sections.forEach((element) => {
    const boundry = element.getBoundingClientRect();
    // console.log(boundry.top);
    // console.log(boundry.bottom);

    if (boundry.top <= 120 && boundry.bottom >= 120) {
      userLocation = element.id;
    }
  });

  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 5
  ) {
    userLocation = "contact";
  }
  activenavcheck(userLocation);
});

function activenavcheck(userLocation) {
  navelement.forEach((element) => {
    element.classList.remove("active");
  });

  navelement.forEach((element) => {
    if (element.getAttribute("href") == `#${userLocation}`) {
      element.classList.add("active");
    }
  });
}
