const input = document.querySelector('input');
const p = document.querySelector('p.descript');
const button = document.querySelector('button');
const add = document.querySelector('input.add');
const addButton = document.querySelector('button.addButton');

button.addEventListener ('click', () => {
  p.textContent = input.value + ':';            
   });

addButton.addEventListener('click'. () => {
                           let li = document.createElement('li');
li.textContent = add.value;
                           });