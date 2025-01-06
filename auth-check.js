(function() {
    const allowedMRNOs = ['10060000005622', '10060000002293','10060000000579','10060000001970','10060000002301'];
    const adminMRNO = 'admin';

    function checkAuth() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const mrno = localStorage.getItem('mrno');
        const isAdmin = localStorage.getItem('isAdmin') === 'true';

        if (!isLoggedIn || isLoggedIn !== 'true' || (!allowedMRNOs.includes(mrno) && !isAdmin)) {
            window.location.href = 'index.html';
        }
    }
    checkAuth();

    document.addEventListener('visibilitychange', function() {
      if (!document.hidden) {
        checkAuth();
      }
    });
  })();