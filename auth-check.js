(function() {
    const allowedMRNOs = ['10060000005622', '10060000002293', '10060000000579','10060000001970','10060000002301','10060000004945','10060000005535','10060000006078','10060000000327','10060000002585'];

    function checkAuth() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const mrno = localStorage.getItem('mrno');

        // Redirect to login if not logged in or if MRNO is not allowed
        if (!isLoggedIn || !allowedMRNOs.includes(mrno)) {
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
