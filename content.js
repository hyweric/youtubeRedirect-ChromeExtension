window.onload = function() {
    let currentUrl = window.location.href;
    let newUrl = currentUrl.replace('youtube', 'yout-ube');
    if (currentUrl !== newUrl) {
      window.location.href = newUrl;
    }
  };
  