import { TrackTopLine } from "./TrackTopLine/TrackTopLine.js";
export function trackDetails (someTrack){
    const {trackFileUrl, ...restTrackData} = someTrack;
    const container = document.createElement("div")
    container.classList.add("track-details")

    const audio = document.createElement("audio")
    audio.src = trackFileUrl
    audio.controls = true;

    container.append(
        TrackTopLine(restTrackData),
        audio
    )

    return container
}
