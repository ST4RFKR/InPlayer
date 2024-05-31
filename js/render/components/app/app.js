import { Header } from "./header/header.js"
import { Main } from "./main/main.js"

export function App(someData) {
    const container = document.createElement("div")
    container.classList.add("App")

    container.append(
        Header(),
        Main(someData)
    )

    return container
}