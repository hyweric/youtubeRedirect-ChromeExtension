document.getElementById('toggleButton').addEventListener('click', function() {
    let button = document.getElementById('toggleButton');
    
    chrome.storage.sync.get('enabled', function(data) {
      let enabled = !data.enabled; // toggle
      chrome.storage.sync.set({enabled: enabled});
  
      if (enabled) {
        button.textContent = 'Disable';
        button.style.backgroundColor = 'red';
      } else {
        button.textContent = 'Enable';
        button.style.backgroundColor = 'green';
      }
    });
  });
  
  window.onload = function() {
    let button = document.getElementById('toggleButton');
    
    chrome.storage.sync.get('enabled', function(data) {
      if (data.enabled) {
        button.textContent = 'Disable';
        button.style.backgroundColor = 'red';
      } else {
        button.textContent = 'Enable';
        button.style.backgroundColor = 'green';
      }
    });
  };
  