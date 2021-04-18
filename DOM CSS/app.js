const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('descriptionButton');
const addInput = document.querySelector('input.add');
const addButton = document.querySelector('button.addButton');
const removeButton = document.querySelector('button.removeItem');

button.addEventListener ('click', () => {
  p.textContent = input.value + ':';            
   });

addButton.addEventListener('click', () => {
  let ul = document.getElementByTagName ('ul')[0];
  let li = document.createElement('li');
  li.textContent = addInput.value;
  ul.appendChild(li);
  li.textContent = ' ';
});
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementByTagName ('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
  
});
