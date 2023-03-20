// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
// var base = new Airtable({ apiKey: "keyUKsTPPNZc3s7p2" }).base(
//   "appUZOpUWfI75S3i6"
var base = new Airtable({apiKey: 'pat1abmzDxVYS6Ixg.d4503a0262052447816a987da0a31f80dd68945dff0c49d9870ec8ed3e758997'}).base('appdpCPoAToMikJID');

// );

//get the "songs" table from the base, select ALL the records, and specify the functions that will receive the data
base("songs").select({
    
}).eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our book data
const songs = [];

// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  // add the records from this page to our songs array
    songs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSongs(err) {
  console.log("gotAllSongs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the songs
  consoleLogSongs();
  showSongs();
}

// just loop through the song and console.log them
function consoleLogSongs() {
    console.log("consoleLogSongs()");
    songs.forEach((song) => {
      console.log("Song:", song);
    });
  }
  
//   // loop through the songs, create an h2 for each one, and add it to the page
//   function showSongs() {
//     console.log("showSongs()");
//     songs.forEach((song) => {

//         var songContainer = document.createElement("div");
//         songContainer.classList.add("song-container");
//         document.querySelector(".container").append(songContainer);

//         // var imageContainer = document.createElement("div");
//         // imageContainer.classList.add("image-container");
//         // document.querySelector(".pop-up").append(imageContainer);
      

//         // add image to song container
//         var songImage = document.createElement("img");
//         songImage.classList.add("song-image");
//         songImage.src = song.fields.song_image[0].url;
//         songContainer.append(songImage);

//         // var audioFile = document.createElement("audio");
//         // audioFile.classList.add("audio-file");
//         // audioFile.src = song.fields.audio_file[0].url;
//         // songContainer.append(audioFile);

//         var songDescription = document.createElement("p");
//         songDescription.classList.add("song-description");
//         songDescription.innerText = song.fields.description;
//         songContainer.append(songDescription);

//         var songName = document.createElement("h1");
//         songName.classList.add("song-name");
//         songName.innerText = song.fields.song_name;
//         songContainer.append(songName);

        
//         // add event listener
//         // when user clicks on song container
//         // image and description appear or disappear
//         songImage.addEventListener("click", function(){
//             // var newPage = document.createElement("a");
//             // document.querySelector(".container").append(newPage);
//             // window.location.href = "a";

//             songDescription.classList.toggle("active");
//             songName.classList.toggle("active");
//             // audioFile.classList.toggle("active");

//         })


//     });
//   }


// function showSongs() {
//     console.log("showSongs()");
//     songs.forEach((song) => {

//         var songContainer = document.createElement("div");
//         songContainer.classList.add("song-container");
//         document.querySelector(".container").append(songContainer);

//         // add image to song container
//         var songImage = document.createElement("img");
//         songImage.classList.add("song-image");
//         songImage.src = song.fields.song_image[0].url;
//         songContainer.append(songImage);

//         var songDescription = song.fields.description;
//         var songName = song.fields.song_name;

//         // add event listener
//         songImage.addEventListener("click", function(){
//             var newPage = document.createElement("div");
//             console.log("Song container clicked!");
//             window.location.href = `song.html?id=${song.id}`;
//             newPage.classList.add("song-details");

//             var detailsImage = document.createElement("img");
//             detailsImage.classList.add("details-image");
//             detailsImage.src = songImage.src;
//             newPage.append(detailsImage);

//             var detailsName = document.createElement("h1");
//             detailsName.classList.add("details-name");
//             detailsName.innerText = songName;
//             newPage.append(detailsName);

//             var detailsDescription = document.createElement("p");
//             detailsDescription.classList.add("details-description");
//             detailsDescription.innerText = songDescription;
//             newPage.append(detailsDescription);

//             document.body.append(newPage);
//         })

//     });
// }

function showSongs() {
    console.log("showSongs()");
    songs.forEach((song) => {
      var songContainer = document.createElement("div");
      songContainer.classList.add("song-container");
      document.querySelector(".container").append(songContainer);
  
      var songImage = document.createElement("img");
      songImage.classList.add("song-image");
      songImage.src = song.fields.song_image[0].url;
      songContainer.append(songImage);
  
      var songDescription = document.createElement("p");
      songDescription.classList.add("song-description");
      songDescription.innerText = song.fields.description;
      songContainer.append(songDescription);

      // var songCategory = document.createElement("p");
      // songCategory.classList.add("song-category");
      // songCategory.innerText = song.fields.category;
      // songContainer.append(songCategory);

     
      
  
      var songName = document.createElement("h1");
      songName.classList.add("song-name");
      songName.innerText = song.fields.song_name;
      songContainer.append(songName);

      var songCategory = song.fields.category;
        songCategory.forEach(function(category) {
        songContainer.classList.add(category);

      });


      // add event listener to filter
      // to add an active class to our song
      var filterMusic = document.querySelector('.music');
      filterMusic.addEventListener("click", function(){

      if (songContainer.classList.contains("music")){    
          songContainer.style.display = "block";
      } else {
          songContainer.style.display = ("none");
      }
      })

      var filterRecordedAudio = document.querySelector('.recorded-audio');
      filterRecordedAudio.addEventListener("click", function(){

      if (songContainer.classList.contains("recorded-audio")){    
        songContainer.style.display = "block";
      } else {
          songContainer.style.display = ("none");
      }
      })

      var filterSignificantMoments = document.querySelector('.significant-moments');
      filterSignificantMoments.addEventListener("click", function(){

      if (songContainer.classList.contains("significant-moments")){    
          songContainer.style.display = "block";
      } else {
          songContainer.style.display = ("none");
      }
      })

      var filterDailyAudio = document.querySelector('.daily-audio');
      filterDailyAudio.addEventListener("click", function(){

      if (songContainer.classList.contains("daily-audio")){    
        songContainer.style.display = "block";
      } else {
          songContainer.style.display = ("none");
      }
      })

      var filterSubmissions = document.querySelector('.submissions');
      filterSubmissions.addEventListener("click", function(){

      if (songContainer.classList.contains("submissions")){    
        songContainer.style.display = "block";
      } else {
          songContainer.style.display = ("none");
      }
      })

      var filterReset = document.querySelector('.js-reset');
        filterReset.addEventListener("click", function(){
          songContainer.style.display = ("block");
            
        })
      

    


        

    // audio
        // var audioFile = document.createElement("audio");
        // audioFile.classList = ("audio-file");
        // audioFile.src = song.fields.audio_file[0].url;
        // songContainer.append(audioFile);

        // var audioFile = document.createElement("audio");
        // audioFile.classList = ("audio-file");
        // audioFile.src = song.fields.spotify_link[0].url;
        // songContainer.append(audioFile);

        // function playAudio(){
        //     var audioFile = document.getElementById("playAudio").duration;
        //     document.getElementById("player").innerHTML = audioFile;
        // }

        
        // //PLAY BUTTON ON PAGE1 
        // var audioButton = document.createElement("button");
        // audioButton.classList.add("audio-button");
        // audioButton.innerText = "Play Audio";
        // songContainer.append(audioButton);

        // var audioFile = document.createElement("audio");
        // audioFile.classList.add("audio-file");
        // audioFile.src = song.fields.audio_file[0].url;
        // audioFile.autoplay = true;
        // songContainer.append(audioFile);

        // songName.addEventListener("click", function(){
        //     var audioFile = document.createElement("audio");
        //     audioFile.classList.add("audio-file");
        //     audioFile.src = song.fields.audio_file[0].url;
        //     audioFile.autoplay = true; 
        //     songContainer.append(audioFile);
        // })


  
      songImage.addEventListener("click", function(){
        // new page with the song details
        var newPage = window.open("", "_blank");
        window.location.href = "", "_blank";
        
        // HTML of new page
        var htmlContent = `
          <html>
            <head>
              <title>${song.fields.song_name}</title>
              
              <link rel="stylesheet" type="text/css" href="style.css">
            </head>
            <body>
            
            <style>
            @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Exo&family=IBM+Plex+Mono&display=swap');
            @import url("https://use.typekit.net/oto1ukw.css");
                body{
                    padding: 2rem;
                    background-color: black;
                    color: white;
                }

                .audio-file{
                    display: block;
                    left: 50px;
                    border: 1px solid white;
                    color: white;
                }


                .navbar{
                    /* margin-left: -5px; */
                    font-family: 'IBM Plex Mono', monospace;
                    padding-left: 2rem;
                    padding-top:1rem;
                    font-weight: 400;
                    color: white;
                    font-size: 14px;
                    list-style-type: none;
                    border-bottom: solid white 1px;
                    padding-bottom: 1rem;

                }

                .nav2{
                  display: inline;
                  float: top;
                }
               
                
                .title{
                    margin-left: -1rem;
                }
                
                li{
                    display: inline;
                    margin-right: 1rem;
                    float: top;
                    font-family: 'IBM Plex Mono', monospace;
                    float: center;
                }
                
                a{
                    color: white;
                    text-decoration: none;
                }
                
                .directory:hover{
                    text-decoration: underline;
                }

                .submit{
                  margin-right: 6rem;
                }

                .submit:hover{
                  text-decoration: underline;
                }
                
                .info:hover{
                    text-decoration: underline;
                }

                .images:hover{
                  text-decoration: underline;
              }
                
                .directory{
                    margin-right: 6rem;
                    font-family: 'IBM Plex Mono', monospace;
                }

                .images{
                    margin-right: 6rem;
                    font-family: 'IBM Plex Mono', monospace;
                }

                .info{
                    font-family: 'IBM Plex Mono', monospace;
                }



                .content {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: top;
                    padding-top: 1rem;
                  }
                  
                  .song-details {
                    flex-grow: 1;
                    padding-left: 2rem;
                    width: 10rem;
                    padding-top: -2rem;
                  }
                  
                  .song-name {
                    font-size: 3vw;
                    font-family: "ibm-plex-sans", sans-serif;
                    font-weight: 400;
                    font-style: normal;
    
                  }
                  

                  .song-category{
                    font-size: 14px;
                    font-family: "ibm-plex-sans-condensed", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    width: 175px;
                    text-align: center;
                    height: auto;
                    background-color: white;
                    color: black;
                }


                  .song-description {
                    font-size: 2vw;
                    line-height: 1.5;
                    padding-right: 2rem;
                    padding-bottom: 1rem;
                    padding-top:1rem;
                    font-family: "ibm-plex-sans-condensed", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                  }
                  
                  .image-container {
                    width: 50%;
                  }
                  
                  .song-image {
                    max-width: 100%;
                  }

                  .backButton {
                    position: absolute;
                    cursor: pointer;
                    top: 100px;
                    right: 2rem;
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 14px;
                    background-color: transparent;
                    color: white;
                    border: none;
                  }
                  .backButton:hover{
                    text-decoration: underline;
                  }

                 
                  
                  .playButton {
                    display: block;
                    position: relative;
                    left: 0;
                    top: 14px;
                    border: 1px solid white;
                    width: 160px;
                    cursor: pointer;
                    background-color: black;
                    color: white;
                    text-align: center;
                  }
                  
                  .playButton.playing {
                    background-color: white;
                    color: black;
                  }
                  
                 
                  @media only screen and (max-width: 925px) {
                   

                    .navbar{
                      height: 80px;
                  }

                    .nav2{
                      width: 50px;
                      float: right;
                    }
  
                    
  
                  .submit{
                    margin-right: 0px;
                    overflow: auto;
                  }
                  
                  .directory{
                    margin-right: 0px;
                    overflow: auto;
                  }
  
                  .images{
                    margin-right: 0px;
                    overflow: auto;
                  }
  
                  .info{
                    margin-right: 0px;
                    overflow: auto;
                  }
                  .backButton {         
                    top: 170px;
           
                  }


                }
                 
                  @media only screen and (max-width: 744px) {
                   
                    .navbar{
                      height: 100px;
                  }

                  .nav2{
                    width: 50px;
                    float: right;
                  }

                  

                .submit{
                  margin-right: 0px;
                  overflow: auto;
                }
                
                .directory{
                  margin-right: 0px;
                  overflow: auto;
                }

                .images{
                  margin-right: 0px;
                  overflow: auto;
                }

                .info{
                  margin-right: 0px;
                  overflow: auto;
                }

                .backButton {         
                  top: 170px;
         
                }

                  

                    .content {
                      flex-direction: column;
                    }

                    .song-details {
                      flex-grow: 1;
                      padding-left: 0rem;
                      width: 25rem;
                      padding-top: -2rem;
                    }
                    
                    .song-name {
                      font-size: 6vw;
                    }
                    
                    .song-description {
                      font-size: 4vw;
                    }
                    
                    .image-container {
                      width: 500px;
                    }
                    
                    .song-image {
                      max-width: 430px;
                    }

                  }
                  
                 
                  
                
            </style>
            <ul style="font-family: 'IBM Plex Mono', monospace;" class="navbar">
            <li class="title"> <a href="page1.html">SIGHTS AND SOUNDS OF MEMORY LANE</a></li> 
       <ul class="nav2">
            <li class="info" style="float:right"> <a href="info.html">INFO</a></li>
            <li class="submit" style="float:right"> <a href="submission-jotform.html">SUBMISSION</a></li>
            <li class="directory" style="float:right"><a href="directory.html">INDEX</a></li>
            <li class="images" style="float:right"><a href="page1.html">ARCHIVE</a></li>
        </ul>
    </ul>
        <div class="content">
            
                <div class="image-container">
                    <img class="song-image" src="${song.fields.song_image[0].url}">
                </div>
                <div class="song-details">
                    <h1 class="song-name">${song.fields.song_name}
                    
                    <audio id="audio1">
  <source src="${song.fields.audio_file[0].url}" type="audio/mpeg">
</audio>

<button id="playButton" class="playButton" onclick="playPause()" type="button">LISTEN</button>

                    
                        </h1>

                   
                   
                    <p class="song-description">${song.fields.description}</p>
                    
                    

              </div>
            </div>

            <script>

            var audio = document.getElementById("audio1");
var button = document.getElementById("playButton");

function playPause(){
  if (audio.paused){
    audio.play();
    button.classList.add("playing");
    button.innerHTML = "PAUSE";
  } else{
    audio.pause();
    button.classList.remove("playing");
    button.innerHTML = "LISTEN";
  }
}

            

                
</script>

            </body>
          </html>
        `;
       
        newPage.document.write(htmlContent);
        
        // close the new page 
        newPage.document.body.innerHTML += '<button class="backButton" onclick="window.close()">BACK</button>';

        
      });

      
      
    });
    // const playButton = document.getElementById("listen-now");
    //     const audio = document.getElementById("audio1");
        
    //     playButton.addEventListener("click", function() {
    //       audio.play();
    //     });
    
  }
  


  