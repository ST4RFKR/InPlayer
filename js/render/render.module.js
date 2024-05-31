import {App} from "./components/app/app.js"

export function render (someData) {

    const root = document.getElementById("root")
    root.append(
        App(someData)
    )
}
