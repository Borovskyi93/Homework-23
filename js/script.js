class SuperMath {
    check (obj) {
        if (typeof obj === 'object' && obj) {
            let isConditionOk = confirm(`Чи задовільняє вас цей приклад: ${obj.x} ${obj.znak} ${obj.y}`);

            if (isConditionOk) {
                switch(obj.znak) {
                    case '+':
                        alert(`Результат дії: ${obj.x + obj.y}`);
                        break;
                    case '-':
                        alert(`Результат дії: ${obj.x - obj.y}`);
                        break;
                    case '/':
                        if (obj.y === 0) {
                            alert('На нуль ділити не можна!');
                            break;
                        }
                        alert(`Результат дії: ${obj.x / obj.y}`);
                        break;
                    case '*':
                        alert(`Результат дії: ${obj.x * obj.y}`);
                        break;
                    case '%':
                        alert(`Результат дії: ${obj.x % obj.y}`);
                        break;
                    default:
                        alert('Неправильні дані!!!');
                }
            } else {
                alert('Викорстайте метод input()!');
            }
        } else {
            alert('Неправильні дані!!!');
        }
    }
    
    input (obj) {
        let userChoiceZnak = prompt('Введіть знак, який хочете використати:');
        
        if (userChoiceZnak) {
            obj.znak = userChoiceZnak;
            this.check(obj);
        } else {
            alert('Неправильні дані!!!')
        }   
    }
}

let objExample = {
   x: 12,
   y: 4, 
   znak: '+',
}

const p = new SuperMath();

p.check(objExample);
p.input(objExample);