document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            navLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");

            sections.forEach(section => section.classList.remove("active"));
            sections[index].classList.add("active");
        });
    });

    const benefitCards = document.querySelectorAll(".benefit-card");

    benefitCards.forEach(card => {
        card.addEventListener("click", () => {
            benefitCards.forEach(card => card.classList.remove("active"));
            card.classList.add("active");
        });
    });
});
