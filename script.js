// Function to switch between the Home Dashboard and Inner Pages
function navigateToPath(targetViewId) {
    // Hide all views first
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('attendance-view').style.display = 'none';
    
    // Show the requested view
    document.getElementById(targetViewId).style.display = 'block';
}

// Function to handle switching between Student and Staff metrics
function toggleUserType(type, event) {
    // Remove active styling from all buttons
    const buttons = document.querySelectorAll('.type-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active styling to the button that was clicked
    if(event) {
        event.currentTarget.classList.add('active');
    }

    const yearWrapper = document.getElementById('year-filter-wrapper');
    const totalTitle = document.getElementById('box-total-title');
    
    if (type === 'staff') {
        // Staff don't have academic years, so hide the year dropdown
        yearWrapper.style.display = 'none'; 
        totalTitle.innerText = "Total Staff";
        
        // Mock data injection for Staff
        document.getElementById('val-total').innerText = "48";
        document.getElementById('val-present').innerText = "44";
        document.getElementById('val-absent').innerText = "3";
        document.getElementById('val-od').innerText = "1";
    } else {
        // Show academic year dropdown for students
        yearWrapper.style.display = 'flex';
        totalTitle.innerText = "Total Students";
        
        // Mock data injection for Students
        document.getElementById('val-total').innerText = "420";
        document.getElementById('val-present').innerText = "378";
        document.getElementById('val-absent').innerText = "26";
        document.getElementById('val-od').innerText = "16";
    }
}

// Function to change the HTML5 input type based on Date/Week/Month selection
function renderDynamicDatePicker(type) {
    const container = document.getElementById('dynamic-date-wrapper');
    
    if (type === 'date') {
        container.innerHTML = `<label id="date-label" for="date-input">Select Date</label><input type="date" id="date-input">`;
        document.getElementById('date-input').valueAsDate = new Date();
    } else if (type === 'week') {
        container.innerHTML = `<label id="date-label" for="date-input">Select Week</label><input type="week" id="date-input">`;
    } else if (type === 'month') {
        container.innerHTML = `<label id="date-label" for="date-input">Select Month</label><input type="month" id="date-input">`;
    }
}

// Initialize the dashboard: Set default execution state parameters upon page creation
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date-input');
    if(dateInput) {
        dateInput.valueAsDate = new Date();
    }
});