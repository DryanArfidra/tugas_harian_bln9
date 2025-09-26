let input = '0';
let result = '';
let shouldResetInput = false;

const inputDisplay = document.getElementById('input-display');
const resultDisplay = document.getElementById('result-display');

function updateDisplay() {
    inputDisplay.textContent = input;
    resultDisplay.textContent = result;
}

function appendToInput(value) {
    if (shouldResetInput) {
        input = '';
        shouldResetInput = false;
    }
    
    if (input === '0' && value !== '.') {
        input = value;
    } else if (value === '.' && input.includes('.')) {
        return; // Cegah input desimal ganda
    } else {
        input += value;
    }
    
    updateDisplay();
}

function clearAll() {
    input = '0';
    result = '';
    shouldResetInput = false;
    updateDisplay();
}

function deleteLast() {
    if (input.length > 1) {
        input = input.slice(0, -1);
    } else {
        input = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        // Ganti tanda × dengan * untuk evaluasi JavaScript
        const expression = input.replace(/×/g, '*');
        
        // Evaluasi ekspresi matematika
        const evalResult = eval(expression);
        
        // Format hasil
        if (isNaN(evalResult) || !isFinite(evalResult)) {
            result = 'Error';
        } else {
            // Batasi panjang desimal
            result = Number(evalResult.toFixed(8)).toString();
        }
        
        // Reset input untuk perhitungan selanjutnya
        input = result;
        shouldResetInput = true;
    } catch (error) {
        result = 'Error';
        shouldResetInput = true;
    }
    
    updateDisplay();
}

// Tambahkan dukungan keyboard
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.') {
        appendToInput(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToInput(key === '*' ? '×' : key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearAll();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

// Inisialisasi tampilan
updateDisplay();