//import getPaintColors function from database...
import { getWheels } from "./database.js";

//invoke and store function in variable "colors"
const wheels = getWheels();

//this module will provide paint color options and allow user to toggle through drop-down box to make choices then
//the choices will be exported to html located in CarsRUs Module...
//instead of radio button drop-downs will be used (as mentioned above)

export const wheelStyle = () => {
    //define variable equal to empty string to hold/build html string
    let html = `<select id="color">
    <option value="0">Make a Wheel Selection...</option>`


    //use .map() for converting objects to <li> elements
    //declare new function within this function that will return <li> tag dropboxes
    const listItems = wheels.map(wheel => {

        return `
        <option value = "${wheel.id}"> ${wheel.type}</option>`
    })

    html += listItems.join("")
    html += `</select > `

    return html
}