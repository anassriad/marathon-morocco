document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    
    // Load saved state of checkboxes from localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === 'checked') {
            checkbox.checked = true;
        }
    });

    // Save checkbox state when changed
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                localStorage.setItem(checkbox.id, 'checked');
            } else {
                localStorage.removeItem(checkbox.id);
            }
        });
    });
});
