const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

const addInput = document.querySelector('input.addIn');
const addButton = document.querySelector('button.addBut');

const removeButton = document.querySelector('button.removeItem');

toggleList.addEventListener('click', ()=> {
if (listDiv.style.display == 'none'){
  toggleList.textContent = 'Hide list';
  listDiv.style.display = 'block';
} else {
  toggleList.textContent = 'Show List'
  listDiv.style.display = 'none';
}
});

descriptionButton.addEventListener ('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';            
   });

addButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName ('ul')[0];
  let li = document.createElement('li');
  li.textContent = addInput.value;
  ul.appendChild(li);
  addInput.value = '';
});

removeButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName ('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
  
});
