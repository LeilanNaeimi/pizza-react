// const videoContainer = document.getElementById("videoContainer");

// let yotubeVideoIds = [];

// const loadVideos = () => {
//   yotubeVideoIds = ["_ZvnD73m40o"];
// };

// const displayVideos = () => {
//   const videosStr = yotubeVideoIds
//     .map(
//       (id) => `
//       <li onclick="clickVideo(event, '${id}')">
//         <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/hqdefault.jpg"
//         alt="Cover image for YouTube video with id ${id}">
//         <button class="delete-btn" >&times;</button>
//       </li>
//     `
//     )
//     .join("");
//   videoContainer.innerHTML = videosStr;
// };

// loadVideos();
// displayVideos();
const videosContainer = document.getElementById("videosContainer");
let youTubeVideoIds = [];

const loadVideos = () => {
  yotubeVideoIds = JSON.parse(localStorage.getItem("youTubeVideoIds")) || [];
  //["_ZvnD73m40o"];
};

const displayVideos = () => {
  const videosStr = youTubeVideoIds
    .map(
      (id) => `
      <li onclick="clickVideo(event, '${id}')">
        <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" 
alt="Cover image for YouTube video with id ${id}">
        <button class="delete-btn" >&times;</button>
      </li>
    `
    )
    .join("");
  videosContainer.innerHTML = videosStr;
  // videosContainer.innerHTML = videosStr;
};

loadVideos();
displayVideos();
