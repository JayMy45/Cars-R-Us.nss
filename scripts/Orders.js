import { getOrders, getPaintColor, getInterior, getTechnology, getWheels } from "./database.js";

//define variable to store invoked functions imported above.
const paintColors = getPaintColor()
const interiors = getInterior()
const technologies = getTechnology()
const wheels = getWheels()

//secondly, need to create a function to calculate price of custom orders using the .find() method.
/*  1. import all functions needed from database.js module where all prices can be accessed
    2. declare a function to build order list items (buildOrderListItem) need parameter to provide information from click event(?)
    3. declare variable to test if id's from order (orderId) match database id.*/


const buildOrderListItem = (order) => {

    const foundPaintColor = paintColors.find(
        (color) => {
            return color.id === order.colorId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.techId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )


    const totalCost = foundPaintColor.price + foundInterior.price + foundTechnology.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li id="orderString">Order #${order.id} will cost ${costString}.</li>`

}

//first this module needs to create an html string the will access customOrders from database and render to html
//declare export function to export Orders detail to HTML
export const Order = () => {
    const orders = getOrders();

    //declare a variable equal to empty string
    let html = '<h2 class="customJewelry">Custom Jewelry Orders</h2>'


    //iterate customOrders Object to access information using new way
    //this function returns an array...
    const listItemArray = orders.map(buildOrderListItem)
    // orders.map(order => { return `<h3>Order #${order.id} placed on ${order.timestamp}</h3>`})

    html += listItemArray.join("")  //function creates a string from the array created by listItemArray.
    html += `</ul>`
    return html
}