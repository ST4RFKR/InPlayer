import {AddTrackPanel} from "./AddTrackPanel/AddTrackPanel.js"
import { List } from "./List/List.js"

export function Tracklist(SomeTracks) {
    const container = document.createElement("div")
    container.classList.add("tracklist")

    container.append(
        AddTrackPanel(),
        List(SomeTracks)
    )

    return container
}