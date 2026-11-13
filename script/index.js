function loadCatagories(){
    //fetch data
    fetch('https://api.jsonbin.io/v3/b/6af6a951ac6210605a8436e0')
    //convert promise to json
    .then(res=>res.json())
    //send to another function
    .then(data=>displayCatagories(data.record.catagories))
}

function displayCatagories(data){
    console.log(data)
    //get the container
    const btncontainer=document.getElementById('catagory-btn-container')
    //run loop
    for(let cat of data){
        //create element
        const catagorydiv=document.createElement('div');
        catagorydiv.innerHTML=`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.catagry}</button>
        `;
        //append the element
        btncontainer.appendChild(catagorydiv);
    }
}
loadCatagories()

//Load videos

const loadVideos=()=>{
    fetch('https://api.jsonbin.io/v3/b/6af6cfd9ffd5d16053be2a96')
    .then(response=>response.json())
    .then(data=>displayVideos(data.record.videos))
}
const displayVideos=(videos)=>{
   //get video container
   const videoContainer=document.getElementById('video_container')
   //foreach loop
   videos.forEach((video)=>{
    console.log(video);
   })
}


loadVideos()