//import getPaintColors function from database...
import { getTechnology, setTechnology } from "./database.js";

//invoke and store function in variable "colors"
const dashBoards = getTechnology();

document.addEventListener("change",
    (event) => {  //the event is equal to whatever is being clicked/pointed/listened for...
        if (event.target.id === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    })

//this module will provide paint color options and allow user to toggle through drop-down box to make choices then
//the choices will be exported to html located in CarsRUs Module...
//instead of radio button drop-downs will be used (as mentioned above)

export const dashBoardTechnology = () => {
    //define variable equal to empty string to hold/build html string
    let html = `<h2>Dashboard</h2>`

    html += `<select id="technology">`
    html += `<option value="0">Make a Dashboard Selection...</option>`


    //use .map() for converting objects to <li> elements
    //declare new function within this function that will return <li> tag dropboxes
    const listItems = dashBoards.map(dashBoard => {

        return `
        <option value = "${dashBoard.id}"> ${dashBoard.type}</option>`
    })

    html += listItems.join("")
    html += `</select > `

    return html
}