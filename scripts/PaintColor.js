//import getPaintColors function from database...
import { getPaintColor, setPaintColor } from "./database.js";

//invoke and store function in variable "colors"
const colors = getPaintColor();

document.addEventListener("change",
    (event) => {
        if (event.target.id === "color") {
            setPaintColor(parseInt(event.target.value))
        }
    })

//this module will provide paint color options and allow user to toggle through drop-down box to make choices then
//the choices will be exported to html located in CarsRUs Module...
//instead of radio button drop-downs will be used (as mentioned above)

export const paintColors = () => {
    //define variable equal to empty string to hold/build html string
    let html = `<h2>Colors</h2>`
    html += `<select id="color">`
    html += `<option value="0">Make a Color Selection...</option>`


    //use .map() for converting objects to <li> elements
    //declare new function within this function that will return <li> tag dropboxes
    const listItems = colors.map(color => {

        return `
        <option value = "${color.id}"> ${color.type}</option>`
    })

    html += listItems.join("")
    html += `</select > `

    return html
}