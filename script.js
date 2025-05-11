const input = document.getElementById('itemInput');
const list = document.getElementById('itemList');
const progressBar = document.getElementById('progressBar');

let items = JSON.parse(localStorage.getItem('ewasteItems')) || [];

function updateList() {
  list.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  // Update progress bar (assume 10 items = 100%)
  const progress = Math.min((items.length / 10) * 100, 100);
  progressBar.style.width = progress + '%';
}

function addItem() {
  const value = input.value.trim();
  if (value) {
    items.push(value);
    localStorage.setItem('ewasteItems', JSON.stringify(items));
    input.value = '';
    updateList();
  }
}

// Initialize on page load
updateList();
