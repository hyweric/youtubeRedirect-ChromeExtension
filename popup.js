document.getElementById('toggleButton').addEventListener('change', function() {
        let toggleSwitch = document.getElementById('toggleButton');
        let statusLabel = document.getElementById('statusLabel');
    
        chrome.storage.sync.get('enabled', function(data) {
            let enabled = !data.enabled; // toggle
            chrome.storage.sync.set({enabled: enabled});
    
            toggleSwitch.checked = enabled; //pos of switch
            statusLabel.textContent = enabled ? 'Enabled' : 'Disabled'; //status symbol text 
            statusLabel.style.color = enabled ? '#00CC66' : 'red'; //status symbol color 
        });
    });
  
  window.onload = function() {
    let toggleSwitch = document.getElementById('toggleButton');
    let statusLabel = document.getElementById('statusLabel');
  
    chrome.storage.sync.get('enabled', function(data) {
      toggleSwitch.checked = data.enabled; 
      statusLabel.textContent = data.enabled ? 'Enabled' : 'Disabled'; 
      statusLabel.style.color = data.enabled ? '#00CC66' : 'red'; 
    });
  };
  