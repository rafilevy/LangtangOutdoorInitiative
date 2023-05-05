let lastRun = Date.now();

function carouselTransition(id, next = true) {
    const carouselItems = document.querySelector(`#${id}`);

    const items = carouselItems.children;
    const itemCount = items.length;

    let activeIndex = 0;
    for (let i = 0; i < itemCount; i++) {
        const item = items.item(i);
        const isActive = item.getAttribute("data-active");
        if (isActive === "true") {
            activeIndex = i;
        }
        item.setAttribute("data-active", "false");
    }

    let nextIndex = activeIndex + (next ? 1 : -1);
    if (nextIndex < 0) nextIndex = itemCount - 1;
    else nextIndex = nextIndex % itemCount;

    items.item(nextIndex).setAttribute("data-active", "true")
    lastRun = Date.now();
}

window.addEventListener("load", (ev) => {
    setInterval(() => {
        if (Date.now() - lastRun > 9_000)
            carouselTransition("act_carousel", true)
    }, 10_000);
})