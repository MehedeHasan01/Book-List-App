// DOM and html conector

const Title = document.getElementById('Title')
const Author = document.getElementById('Author')
const Year = document.getElementById('Year')
const addBtn = document.getElementById('addBtn')
const bookList = document.getElementById('book-list')




addBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    // Basic Validation
    if(Title.value == '' && Author.value == '' && Year.value == ''){
        alert('Please input your information.');
    }else{
        let NewRow = document.createElement('tr');
        NewRow.classList.add('bg-green-100');

        // Creating new title
        let NewTitle = document.createElement('th');
        NewTitle.innerHTML = Title.value;
        NewRow.appendChild(NewTitle);

        // Creating new title
        let NewAuthor = document.createElement('th');
        NewAuthor.innerHTML = Author.value;
        NewRow.appendChild(NewAuthor);
        // Creating new title
        let NewYear = document.createElement('th');
        NewYear.innerHTML = Year.value;
        NewRow.appendChild(NewYear);

        // Displaying in UI
        bookList.appendChild(NewRow);
}
    Title.value = '';
    Author.value = '';
    Year.value = '';


})