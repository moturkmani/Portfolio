function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Show the selected tab
    document.getElementById(tabId).classList.remove('hidden');
}
