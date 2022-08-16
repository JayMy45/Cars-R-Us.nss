//import htmlBuildingFunctions needed various modules
import { paintColors } from "./PaintColor.js"


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
            <section class="choices__sizes options">
                <h2>Sizes</h2>
        
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
     
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

