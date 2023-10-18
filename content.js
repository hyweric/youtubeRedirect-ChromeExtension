chrome.storage.sync.get('enabled', function(data) {
  if (data.enabled) {
    let currentUrl = window.location.href;
    let newUrl = currentUrl.replace('youtube', 'yout-ube');
    if (currentUrl !== newUrl) {
      window.location.href = newUrl;
    }
  }
});