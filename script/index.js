function loadCatagories(){
    fetch('https://api.jsonbin.io/v3/b/6af6a951ac6210605a8436e0')
    .then(res=>res.json())
    .then(data=>displayCatagories(data.record.catagories))
}

function displayCatagories(data){
    console.log(data)
}

loadCatagories()