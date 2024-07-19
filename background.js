browser.commands.onCommand.addListener((command) => {
    if (command === "do-thing") {
        browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {action: "redirect"});
        });
    }
    if (command === "do-thing-2") {
        browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {action: "redirect2"});
        });
    }
    if (command === "do-thing-3") {
        browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {action: "redirect3"});
        });
    }
});
