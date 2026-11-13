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

//video components:
// authors
// : 
// [{…}]
// category_id
// : 
// "1001"
// description
// : 
// "Enjoy \"Shape of You\", a standout pop track by Olivia Mitchell. With 100K views since release, it delivers a memorable sound and a fresh style that fans of the genre will love."
// others
// : 
// {views: '100K', posted_date: '16278'}
// thumbnail
// : 
// "https://picsum.photos/seed/shape/640/360"
// title
// : 
// "Shape of You"
// video_id
// : 
// "aaaa"

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
    //create card
    const videoCard=document.createElement('div');
    videoCard.innerHTML=`
   <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    `;
    //append child
    videoContainer.appendChild(videoCard);
   })
}


loadVideos()