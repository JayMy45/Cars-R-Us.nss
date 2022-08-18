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
        if (event.target.id.startsWith("orderButton")) {//add click event to target button at the id specified
            addCustomOrder() //call function to print permanent changes to page.
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1 class="carsRUs">Car's R Us</h1>

        <article class="choices">
        <div class="choices-item choices__1">
            <section class="choices__colors options">
                ${paintColors()}
            </section>
            <section class="interiors options">
                ${interiorOptions()}
            </section>
        </div>

        <div class="choices-item choices__2">
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

