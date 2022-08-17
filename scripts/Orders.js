import { getOrders } from "./database.js";



//first this module needs to create an html string the will access customOrders from database and render to html

//declare export function to export Orders detail to HTML
export const Order = () => {
    const orders = getOrders();

    //declare a variable equal to empty string
    let html = '<h2>Custom Jewelry Orders</h2>'


    //iterate customOrders Object to access information using new way
    //this function returns an array...
    const listItemArray = orders.map(order => {
        return `<h3>Order #1 placed on ${order.timestamp}</h3>`
    })

    html += listItemArray.join("")  //function creates a string from the array created by listItemArray.
    return html
}