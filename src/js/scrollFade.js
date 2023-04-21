window.addEventListener("load", () => {
    const fadeItems = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                entry.target.setAttribute("data-visible", "true");
            }
        }
    });
    for (let item of fadeItems) observer.observe(item);
});