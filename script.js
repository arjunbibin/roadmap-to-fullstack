// Save checklist state to localStorage
const checklistItems = document.querySelectorAll('#checklist input');

checklistItems.forEach((item, index) => {
  // Load saved state
  item.checked = localStorage.getItem(`checklist-${index}`) === 'true';

  // Save state when changed
  item.addEventListener('change', () => {
    localStorage.setItem(`checklist-${index}`, item.checked);
  });
});
