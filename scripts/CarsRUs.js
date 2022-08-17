//import htmlBuildingFunctions needed various modules
import { paintColors } from "./PaintColor.js"
import { interiorOptions } from "./Interior.js"
import { dashBoardTechnology } from "./Technology.js"
import { wheelStyle } from "./Wheels.js"
import { Order } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("orderButton")) //add click event to target button at the id specified
            addCustomOrder() //call function to print permanent changes to page.
    }
)

export const CarsRUs = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__colors options">
                ${paintColors()}
            </section>
            <section class="interiors options">
                ${interiorOptions()}
            </section>
            <article class="choices">
            <section class="technology options">
                ${dashBoardTechnology()}
            </section>
            <section class="Wheels options">
                ${wheelStyle()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            ${Order()}
        </article>
    `
}

