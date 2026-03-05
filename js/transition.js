document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");

    const transitionLinks = document.querySelectorAll(".transition-link");

    transitionLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); 
            const targetUrl = link.getAttribute("data-target") || link.getAttribute("href");

            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-exiting");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});