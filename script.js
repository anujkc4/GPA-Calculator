document.querySelectorAll(".questionhru").forEach((question) => {
  question.addEventListener("click", function () {
    const faqBox = this.parentElement;
    faqBox.classList.toggle("active");
  });
});
