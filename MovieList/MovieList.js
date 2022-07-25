
const movieName = document.querySelector('#movieName');
const director = document.querySelector('#director');
const type = document.querySelector('#type');
const rating = document.querySelector('#rating');
const btn = document.querySelector('.btn');
const movieList = document.querySelector('#movieList');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (movieName.value == ''
        || director.value == ''
        || type.value == '' || rating.value == '') {
        alert('Lagbe');
    } else {
        const newRow = document.createElement('tr');

        const newmovieName = document.createElement('th');
        newmovieName.innerHTML = movieName.value;
        newRow.appendChild(newmovieName);

        const newdirector = document.createElement('th');
        newdirector.innerHTML = director.value;
        newRow.appendChild(newdirector);

        const newtype = document.createElement('th');
        newtype.innerHTML = type.value;
        newRow.appendChild(newtype);

        const newrating = document.createElement('th');
        newrating.innerHTML = rating.value;
        newRow.appendChild(newrating);

        movieList.appendChild(newRow);
    }
    
})
