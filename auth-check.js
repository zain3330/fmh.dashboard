(function() {
    const allowedMRNOs = ['10060000005622', '10060000002293','10060000000579','10060000001970'];
    const adminMRNO = 'admin';

    function checkAuth() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const mrno = localStorage.getItem('mrno');
        const isAdmin = localStorage.getItem('isAdmin') === 'true';

        if (!isLoggedIn || isLoggedIn !== 'true' || (!allowedMRNOs.includes(mrno) && mrno !== adminMRNO)) {
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