chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "new",
      videoId: urlParameters.get("v"),
    });
  }
});
