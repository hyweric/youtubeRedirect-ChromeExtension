document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var toggleText = document.getElementById('toggleText');
    
    // Set initial state
    toggleButton.checked = true;
    toggleText.textContent = 'Enabled';
  
    toggleButton.addEventListener('change', function() {
      if (this.checked) {
        toggleText.textContent = 'Enabled';
      } else {
        toggleText.textContent = 'Disabled';
      }
    });
  });
  