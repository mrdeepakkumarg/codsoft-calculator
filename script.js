const display = document.querySelector('.display input[type="text"]');
const buttons = document.querySelectorAll('.buttons input[type="button"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'AC') {
            display.value = '';
        } 
        else if (value === 'DE') {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } 
        else if (value === '%') {
            const expression = display.value;
            if (expression.includes('%')) {
                display.value = 'Error';
            } 
            else {
                try {
                    display.value = eval(expression + '/100');
                } catch (error) {
                    display.value = 'Error';
                }
            }
        } 
        else {
            display.value += value;
        }
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
});

