function loadCatagories() {
    //fetch data
    fetch('https://api.jsonbin.io/v3/b/6af6a951ac6210605a8436e0')
        //convert promise to json
        .then(res => res.json())
        //send to another function
        .then(data => displayCatagories(data.record.catagories))
}

function displayCatagories(data) {
    console.log(data)
    //get the container
    const btncontainer = document.getElementById('catagory-btn-container')
    //run loop
    for (let cat of data) {
        //create element
        const catagorydiv = document.createElement('div');
        catagorydiv.innerHTML = `
        <button onclick="loadCatagoriesVideos(${cat.catagory_id})" id="btn-${cat.catagory_id}" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.catagry}</button>
        `;
        //append the element
        btncontainer.appendChild(catagorydiv);
    }
}
loadCatagories()

document.getElementById('all_btn').addEventListener('click',
    () => {
        removeactive() //remove previous active class
        //add active class to static button
        document.getElementById('all_btn').classList.add('active');
    }
)


//Load videos

//video components:
// authors
// : 
// Array(1)
// 0
// : 
// profile_name
// : 
// "Olivia Mitchell"
// profile_picture
// : 
// "https://i.pravatar.cc/150?img=1"
// verified
// : 
// "true"
// [[Prototype]]
// : 
// Object
// length
// : 
// 1
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

const loadVideos = () => {
    fetch('https://api.jsonbin.io/v3/b/6af6cfd9ffd5d16053be2a96')
        .then(response => response.json())
        .then(data => displayVideos(data.record.videos))
}
const displayVideos = (videos) => {
    //get video container
    const videoContainer = document.getElementById('video_container')
    videoContainer.innerHTML = ""; //empty previous video container
    //foreach loop
    videos.forEach((video) => {
        console.log(video);
        //create card
        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
   <div class="card bg-base-100 ">
  <figure class="relative">
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
      <span class="absolute bottom-2 right-2 bg-black text-white rounded-lg px-2 text-sm">3hrs 56 min ago</span>
  </figure>
  <div class="mt-5 flex gap-3 px-0">
   <div class="profile">
    <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
    <img alt="Tailwind-CSS-Avatar-component" src="${video.authors[0].profile_picture}" />
  </div>
</div>
   </div>
   <div class="intro">
    <h2 class="font-semibold text-lg mb-2">${video.title}</h2>
    <p class="text-sm text-gray-400 flex gap-1 items-center mb-2">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""> </p>
    <p class="text-sm text-gray-400">${video.others.views}</p>
   </div>
  </div>
  <button class="btn btn-block" onclick="showdetails('${video.video_id}')">Show details</button>
</div>

    `;
        //append child

        videoContainer.appendChild(videoCard);
    })
}


//remove active class from btn
function removeactive() {
    const btns = document.getElementsByClassName('active');

    for (let i of btns) {
        i.classList.remove('active');
    }
}


//catagory wise video
const loadCatagoriesVideos = (id) => {
    console.log(id)
    fetch('https://api.jsonbin.io/v3/b/6af6cfd9ffd5d16053be2a96')
        .then(res => res.json())
        .then(data => catVideo(data.record.videos, id));
    const clickbtn = document.getElementById(`btn-${id}`)  //catch the clicked button
    removeactive() //remove previous active class
    clickbtn.classList.add('active') //add active class 
}


const catVideo = (data, id) => {

    //  data.forEach((videoo)=>{
    // //    console.log(video.category_id)
    //  if(videoo.category_id==id){
    //     displayVideos(videoo)
    //  })

    const filtered = data.filter(v => v.category_id == id);
    displayVideos(filtered);
}


//video details function
const showdetails = (vid) => {
    console.log(vid)
    fetch('https://api.jsonbin.io/v3/b/6af6cfd9ffd5d16053be2a96')
        .then(res => res.json())
        .then(data => {
            const specificvideo = data.record.videos.find(element => element.video_id == vid);
            console.log(specificvideo.description)

            //receive modal
            document.getElementById('videoDetails').showModal()
            const detailsContainer = document.getElementById('video_details');
            detailsContainer.innerHTML = `
         <div class="card bg-base-100 image-full  shadow-sm">
    <figure>
    <img
      src="${specificvideo.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${specificvideo.title}</h2>
    <p>${specificvideo.description}</p>
    <div class="card-actions justify-center">
    </div>
  </div>
  </div>
        `;
        })

}