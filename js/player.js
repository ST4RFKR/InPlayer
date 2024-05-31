//  const data = {
//     playlists: [
//         {
//             playlistInfo: {
//                 id: "1-0",
//                 title: "Hip-Hop Hits",
//                 coverImgUrl: "img/cardImage/image1.jpeg",
//                 tracksCount: 4
//             },
//             tracks: [
//                 {
//                     trackId: "1",
//                     artistName: "Eminem",
//                     trackTitle: "Rap God",
//                     isHot: true,
//                     trackFileUrl: "audio/Eminem - Rap God.mp3",
//                     trackCoverImgUrl: "img/cardImage/trackList/track1.jpeg",
//                 },
//                 {
//                     trackId: "2",
//                     artistName: "50 cent",
//                     trackTitle: "In da Club",
//                     isHot: false,
//                     trackFileUrl: "audio/50cent%20-%20In%20da%20club.mp3",
//                     trackCoverImgUrl: "img/cardImage/trackList/track2.jpeg",
//                 },{
//                     trackId: "1",
//                     artistName: "DMX",
//                     trackTitle: "X Gon' Give It To Ya",
//                     isHot: true,
//                     trackFileUrl: "audio/DMX%20-%20X%20Gon'%20Give%20It%20To%20Ya.mp3",
//                     trackCoverImgUrl: "img/cardImage/trackList/track3.jpeg",
//                 },
//                 {
//                     trackId: "2",
//                     artistName: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
//                     trackTitle: "You Don't Know",
//                     isHot: true,
//                     trackFileUrl: "audio/Eminem%20-%20You%20Don't%20Know%20(feat.%2050%20cent,%20Lloyd%20Banks%20and%20Cashis).mp3",
//                     trackCoverImgUrl: "img/cardImage/trackList/track4.jpeg",
//                 }
//             ]
//         },
//         {
//             playlistInfo: {
//                 id: "1-1",
//                 title: "Rap Hits 1990s",
//                 coverImgUrl: "img/cardImage/image2.jpeg",
//                 tracksCount: 4
//             },
//             tracks: [
//                 {
//                     trackId: "5",
//                     artistName: "Public Enemy",
//                     trackTitle: "Fight The Power",
//                     isHot: true,
//                     trackFileUrl: "audio/Public Enemy - Fight The Power.mp3",
//                     trackCoverImgUrl: "img/cardImage/trackList/track5.jpeg"
//                 },
//                 {
//                     trackId: "6",
//                     artistName: "Vanila Ice",
//                     trackTitle: "Ice Ice Baby",
//                     isHot: false,
//                     trackFileUrl: "audio/Mc%20Hammer%20-%20You%20Can't%20Touch%20This.mp3",
//                     trackCoverImgUrl: "img/cardImage/trackList/track7.jpeg"
//                 },
//                 {
//                     trackId: "1",
//                     artistName: "MC Hammer",
//                     trackTitle: "You Can’t Touch This",
//                     isHot: true,
//                     trackFileUrl: "audio/Brand%20Nubian%20-%20Brand%20Nubian.mp3",
//                     trackCoverImgUrl: "img/cardImage/trackList/track8.jpeg",
//                 },
//                 {
//                     trackId: "2",
//                     artistName: "Brand Nubian",
//                     trackTitle: "Brand Nubian",
//                     isHot: false,
//                     trackFileUrl: "audio/50cent%20-%20In%20da%20club.mp3",
//                     trackCoverImgUrl: "img/cardImage/trackList/track2.jpeg",
//                 }
//             ]
//         }
//     ],
// }


// function App(someData) {
//     const container = document.createElement("div")
//     container.classList.add("App")

//     container.append(
//         Header(),
//         Main(someData)
//     )

//     return container
// }
// //============================================================

// {/* <header>
//     <div class="header-container">
//         <img src="img/logo/logo.svg" alt="logo">
//             <div class="logo-name">InPlayer</div>
//     </div>
// </header> */}

// function Header() {
//     const header = document.createElement("header")

//     const headerContainer = document.createElement("div")
//     headerContainer.classList.add("header-container")

//     const img = document.createElement("img")
//     img.src = "img/logo/logo.svg"

//     const logo = document.createElement("div")
//     logo.innerText = "InPlayer"
//     logo.classList.add("logo-name")

//     headerContainer.append(
//         img,
//         logo
//     )

//     header.append(headerContainer)


//     return header
// }

// //============================================================

// {/* <main></main> */ }

// function Main(someData) {
//     const container = document.createElement("main")

//     container.append(
//         AddPlaylistPanel(),
//         Playlists(someData)
//     )

//     return container
// }

// //============================================================

// {/* <div class="add-playlist-panel">
//     <h1 class="title">My playlists</h1>
//     <button class="button">Add Playlist</button>
// </div> */}

// function AddPlaylistPanel() {
//     const container = document.createElement("div")
//     container.classList.add("add-playlist-panel")

//     const appHeader = document.createElement("h1")
//     appHeader.innerText = "My playlists"
//     appHeader.classList.add("title")

//     const addButton = document.createElement("button")
//     addButton.innerText = "Add Playlist"
//     addButton.classList.add("button")

//     container.append(
//         appHeader,
//         addButton
//     )

//     return container
// }

// //============================================================

// {/* <div class="playlists"></div> */ }
// function Playlists(someData) {
//     const container = document.createElement("div")
//     container.classList.add("playlists")

//     for (let i = 0; i < someData.playlists.length; i++) {
//         container.append(Playlist(someData.playlists[i]))
//     }

//     return container
// }

// //============================================================

// {/* <article class="playlist"></article> */ }

// function Playlist(somePlaylist) {
//     // const playlistInfo = somePlaylist.playlistInfo;
//     // const tracks = somePlaylist.tracks;
//     const {playlistInfo,tracks} = somePlaylist


//     const container = document.createElement("article")
//     container.classList.add("playlist")
//     container.append(
//         PlaylistInfo(playlistInfo),
//         Tracklist(tracks)
//     )

//     return container
// }

// //============================================================


// {/* <div class="playlist-info">
//     <img class="playlist-cover-image" src="img/cardImage/image1.jpeg" alt="cover">
//         <div>
//             <h2 class="title">Hip-Hop Hits</h2>
//             <div class="tracks-count">4 tracks</div>
//         </div>
//         <div class="buttons-container">
//             <button><img class="button-icon" src="img/icons/edit.svg" alt="edit"></button>
//             <button><img class="button-icon" src="img/icons/basket.svg" alt="delete"></button>
//         </div>
// </div> */}

// function PlaylistInfo(playlistInfo) {

//     const {coverImgUrl, title, tracksCount} = playlistInfo
//     const container = document.createElement("div")
//     container.classList.add("playlist-info")

//     const img = document.createElement("img")
//     img.classList.add("playlist-cover-image")
//     img.src = coverImgUrl;

//     const wrapper = document.createElement("div")

//     const titleElem = document.createElement("h2")
//     titleElem.classList.add("title")
//     titleElem.innerText = title

//     const tracksCountElem = document.createElement("div")
//     tracksCountElem.classList.add("tracks-count")
//     tracksCountElem.innerText = tracksCount + " tracks"

//     wrapper.append(titleElem, tracksCountElem)
//     // ButtonsEditDelete
//     const buttonsContainer = document.createElement("div")
//     buttonsContainer.classList.add("buttons-container")

//     const editBtn = document.createElement("button")
//     const editBtnImg = document.createElement("img")
//     editBtnImg.src = "img/icons/edit.svg"
//     editBtn.append(editBtnImg)

//     const delBtn = document.createElement("button")
//     const delBtnImg = document.createElement("img")
//     delBtnImg.src = "img/icons/basket.svg"
//     delBtn.append(delBtnImg)

//     buttonsContainer.append(
//         editBtn,
//         delBtn,
//         ButtonsEditDelete()

//     )
//     //
//     container.append(img, wrapper,ButtonsEditDelete())

//     return container
// }


// //============================================================


// {/* <div class="tracklist"></div> */}
// function Tracklist(SomeTracks) {
//     const container = document.createElement("div")
//     container.classList.add("tracklist")

//     container.append(
//         AddTrackPanel(),
//         List(SomeTracks)
//     )

//     return container
// }
// //============================================================

// {/* <div class="add-track-panel">
//       <h3 class="tracklist-title">Tracks</h3>
//       <button class="button-add-track">
//            <img src="img/icons/add.svg" alt="add">Add Track
//       </button>
// </div> */}


// function AddTrackPanel() {
//     const container = document.createElement("div")
//     container.classList.add("add-track-panel")

//     const title = document.createElement("h3")
//     title.innerText = "Tracks"
//     title.classList.add("tracklist-title")

//     const addTrackButton = document.createElement("button")
//     addTrackButton.classList.add("button-add-track")

//     const addTrackButtonImg = document.createElement("img")
//     addTrackButtonImg.src = "img/icons/add.svg"

//     addTrackButton.append(addTrackButtonImg, "Add Track")

//     container.append(title, addTrackButton)
    
//     return container
    
// }

// //============================================================

// function List(someTracks) {
//     const container = document.createElement("ul")
//     container.classList.add("list")

//     for (let i = 0; i < someTracks.length; i++) {
//         container.append(Track(someTracks[i]))

//     }
   
//     return container
// }

// //============================================================

// function Track (someTrack){
//     const {trackCoverImgUrl, ...restTrackData} = someTrack
//     const container = document.createElement("li")
//     container.classList.add("track-element")

//     const trackCoverImg = document.createElement("img")
//     trackCoverImg.classList.add("track-cover-image")
//     trackCoverImg.src = trackCoverImgUrl

//     container.append(
//         trackCoverImg,
//         trackDetails(restTrackData)
//     )

//     return container
// }

// //============================================================

// function trackDetails (someTrack){
//     const {trackFileUrl, ...restTrackData} = someTrack;
//     const container = document.createElement("div")
//     container.classList.add("track-details")

//     const audio = document.createElement("audio")
//     audio.src = trackFileUrl
//     audio.controls = true;

//     container.append(
//         TrackTopLine(restTrackData),
//         audio
//     )

//     return container
// }

// //============================================================

// function TrackTopLine(someRestTrackData) {
// const {isHot, artistName, trackTitle} = someRestTrackData

//     const container = document.createElement("div")
//     container.classList.add("track-top-line")
//     if (isHot) {
//         const trackHotImg = document.createElement("img")
//         trackHotImg.classList.add("track-status")
//         trackHotImg.src = "img/icons/hot.svg"
//         container.append(trackHotImg)

//     }

//     const trackInfo = document.createElement("div")
//     trackInfo.classList.add("track-info")

//     const trackName = document.createElement("div")
//     trackName.classList.add("track-name")
//     trackName.innerText = artistName + "-" + trackTitle
//     trackInfo.append(
//         trackName, 
//         ButtonsEditDelete()
//     )
//     container.append(trackInfo)

//     return container
// }

// //============================================================


// function ButtonsEditDelete() {
//     const buttonsContainer = document.createElement("div")
//     buttonsContainer.classList.add("buttons-container")

//     const editBtn = document.createElement("button")
//     const editBtnImg = document.createElement("img")
//     editBtnImg.src = "img/icons/edit.svg"
//     editBtn.append(editBtnImg)

//     const delBtn = document.createElement("button")
//     const delBtnImg = document.createElement("img")
//     delBtnImg.src = "img/icons/basket.svg"
//     delBtn.append(delBtnImg)

//     buttonsContainer.append(editBtn, delBtn)

//     return buttonsContainer

// }
// function render (someData) {

//     const root = document.getElementById("root")
//     root.append(
//         App(someData)
//     )
// }
// render(data);