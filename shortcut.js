browser.runtime.onMessage.addListener((message) => {
    if (message.action === "redirect") {
        window.location.href = "https://chatgpt.com/";
    }
    if (message.action === "redirect2") {
        window.location.href = "https://docs.google.com/document/u/0/";
    }
    if (message.action === "redirect3") {
        window.location.href = "https://docs.google.com/document/u/1/";
    }
});
