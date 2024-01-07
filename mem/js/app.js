document.getElementById('myButton').onclick = function() {
    const result = confirm('Все данные верно указаны?')
    if (result === true) {
        alert('Данные успешно отправлены!')
    }
    else {
        alert('Введите данные заново!')
    }
};