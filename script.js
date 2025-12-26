const display = document.getElementById('display');
const historyList = document.getElementById('history-list');
const themeToggle = document.getElementById('theme-toggle');

// 1. Theme Logic
themeToggle.addEventListener('change', () => {
    const theme = themeToggle.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
});

// 2. Calculation Logic
function appendToDisplay(input) {
    if (display.value === "Error") clearDisplay();
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression);
        
        // Add to History
        addHistory(expression, result);
        
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// 3. History Logic
function addHistory(expression, result) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${expression}</span> = <strong>${result}</strong>`;
    
    // Remove "No calculations" message
    if (historyList.querySelector('.empty-msg')) {
        historyList.innerHTML = '';
    }
    
    historyList.prepend(li); // Add newest at the top
}