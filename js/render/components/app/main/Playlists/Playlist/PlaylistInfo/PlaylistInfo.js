import { ButtonsEditDelete } from "../../../../../common/ButtonsEditDelete/ButtonsEditDelete.js"
export function PlaylistInfo(playlistInfo) {

    const {coverImgUrl, title, tracksCount} = playlistInfo
    const container = document.createElement("div")
    container.classList.add("playlist-info")

    const img = document.createElement("img")
    img.classList.add("playlist-cover-image")
    img.src = coverImgUrl;

    const wrapper = document.createElement("div")

    const titleElem = document.createElement("h2")
    titleElem.classList.add("title")
    titleElem.innerText = title

    const tracksCountElem = document.createElement("div")
    tracksCountElem.classList.add("tracks-count")
    tracksCountElem.innerText = tracksCount + " tracks"

    
    // ButtonsEditDelete
    const buttonsContainer = ButtonsEditDelete()
    // document.createElement("div")
    // buttonsContainer.classList.add("buttons-container")

    // const editBtn = document.createElement("button")
    // const editBtnImg = document.createElement("img")
    // editBtnImg.src = "img/icons/edit.svg"
    // editBtn.append(editBtnImg)

    // const delBtn = document.createElement("button")
    // const delBtnImg = document.createElement("img")
    // delBtnImg.src = "img/icons/basket.svg"
    // delBtn.append(delBtnImg)
    wrapper.append(titleElem, tracksCountElem)
    buttonsContainer.append(
        // editBtn,
        // delBtn,
        ButtonsEditDelete()

    )
    //
    container.append(img, wrapper,ButtonsEditDelete())

    return container
}