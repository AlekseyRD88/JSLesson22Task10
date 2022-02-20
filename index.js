const pageElem = document.querySelectorAll('.pagination__page');
pageElem.addEventListener('click', handleClick);
function handleClick(event) {
  console.log(event.target.getAttribute('data-page-number'));
}
