let spot = $('div')[1];

async function search(searchTerm){
    let response = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: searchTerm, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
    appendGif(response.data);
}

$('#search').on('click', function(e){
    e.preventDefault();
    let searchTerm = document.getElementById('term');
    let terms = searchTerm.value;
    searchTerm.value = '';
    search(terms);
});

$('remove').on('click', function(){
    spot.innerHTML = '';
})
    
function appendGif(response){
    let newGif = document.createElement('img');
    let randNum = Math.floor(Math.random() * response.data.length);
    newGif.src = response.data[randNum].images.original.url;
    spot.append(newGif);
}




