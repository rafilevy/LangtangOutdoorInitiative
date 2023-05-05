window.addEventListener("load", () => {
    const nav = document.querySelector("#main-nav");
    let scrollTop = document.body.scrollTop;
    document.body.addEventListener("scroll", (ev) => {
        const offset = document.body.scrollTop - scrollTop;
        const active = nav.getAttribute("data-active") === "true";
        if (offset > 0 && active) {
            nav.setAttribute("data-active", "false");
        } else if (offset <= 0 && !active) {
            nav.setAttribute("data-active", "true");
        }
        scrollTop = document.body.scrollTop;
    });
});


function hideNav() {
    const nav = document.querySelector("#main-nav");
    nav.setAttribute("data-open-mobile", "false");
    nav.setAttribute("data-active", "false");
}
function toggleMobileNav() {
    const nav = document.querySelector("#main-nav");
    const state = nav.getAttribute("data-open-mobile") === "true";
    nav.setAttribute("data-open-mobile", state ? "false" : "true");
}