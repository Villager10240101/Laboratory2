document.addEventListener("DOMContentLoaded", () => {
    // 1. Fade the page in when loaded
    document.body.classList.add("page-loaded");

    // 2. Find all links/buttons that should trigger the transition
    const transitionLinks = document.querySelectorAll(".transition-link");

    transitionLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Stop the immediate jump to the next page
            const targetUrl = link.getAttribute("data-target") || link.getAttribute("href");

            // Trigger the fade out
            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-exiting");

            // Wait for the CSS animation to finish (500ms) before changing the page
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});