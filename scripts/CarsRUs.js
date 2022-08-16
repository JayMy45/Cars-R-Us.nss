//import htmlBuildingFunctions needed various modules
import { paintColors } from "./PaintColor.js"
import { interiorOptions } from "./Interior.js"
import { dashBoardTechnology } from "./Technology.js"
import { wheelStyle } from "./Wheels.js"


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
                <h2>Colors</h2>
                ${paintColors()}
            </section>
            <section class="interiors options">
                <h2>Interiors</h2>
                ${interiorOptions()}
            </section>
            <section class="technology options">
                <h2>Dashboard</h2>
                ${dashBoardTechnology()}
            </section>
            <section class="Wheels options">
                <h2>Wheels</h2>
                ${wheelStyle()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `
}

