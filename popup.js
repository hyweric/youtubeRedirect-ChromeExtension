document.getElementById('toggleButton').addEventListener('change', function() {
    let toggleSwitch = document.getElementById('toggleButton');
    let statusLabel = document.getElementById('statusLabel');
  
    chrome.storage.sync.get('enabled', function(data) {
      let enabled = !data.enabled; // toggle
      chrome.storage.sync.set({enabled: enabled});
  
      toggleSwitch.checked = enabled; // pos update
      statusLabel.textContent = enabled ? 'Enabled' : 'Disabled'; // update label
    });
  });
  
  window.onload = function() {
    let toggleSwitch = document.getElementById('toggleButton');
    let statusLabel = document.getElementById('statusLabel');
  
    chrome.storage.sync.get('enabled', function(data) {
      toggleSwitch.checked = data.enabled; //pos of switch
      statusLabel.textContent = data.enabled ? 'Enabled' : 'Disabled'; //label
    });
  };
  