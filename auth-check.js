(function() {
    function checkAuth() {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = 'index.html';
      }
    }
  
    // Run the check immediately
    checkAuth();
  
    // Also run the check when the page is shown (in case of browser back button use)
    document.addEventListener('visibilitychange', function() {
      if (!document.hidden) {
        checkAuth();
      }
    });
  })();