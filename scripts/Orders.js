import { getOrders, getPaintColor, getInterior, getTechnology, getWheels } from "./database.js";

//define variable to store invoked functions imported above.

//These functions can be invoked in or out of the buildOrderListItem function...
const paintColors = getPaintColor()
const interiors = getInterior()
const technologies = getTechnology()
const wheels = getWheels()

//secondly, need to create a function to calculate price of custom orders using the .find() method.
/*  1. import all functions needed from database.js module where all prices can be accessed
    2. declare a function to build order list items (buildOrderListItem) need parameter to provide information from click event(?)
    3. declare variable to test if id's from order (orderId) match database id.*/


const buildOrderListItem = (order) => {


    const foundPaintColor = paintColors.find( //foundPaintColor is the object now...
        (color) => {  //(color) is the the iterator
            return color.id === order.colorId //this is a condition the function specifically returns but the function is much more.
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


    return `<div class="orderBorder">Custom Order #${order.id}:  <em><u>${foundPaintColor.type}</u></em> colored car with <em><u>${foundWheels.type}</u></em> wheels, <em><u>${foundInterior.type}</u></em> interior and the <em><u>${foundTechnology.type}</u></em> for a cost of <strong>${costString}</strong>.</div>`

}

//first this module needs to create an html string the will access customOrders from database and render to html
//declare export function to export Orders detail to HTML
export const Order = () => {
    const orders = getOrders();

    //declare a variable equal to empty string
    let html = '<h2 class="customJewelry">Custom Car Orders</h2>'

    //iterate customOrders Object to access information using new way
    //this function returns an array...
    const listItemArray = orders.map(buildOrderListItem)
    // orders.map(order => { return `<h3>Order #${order.id} placed on ${order.timestamp}</h3>`})
    html += listItemArray.join("")  //function creates a string from the array created by listItemArray.
    html += `</ul>`
    return html
}