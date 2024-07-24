chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'search') {
    chrome.tabs.create({
      url: `https://www.google.com/search?q=${encodeURIComponent(request.query)}`,
    })
  }
})
