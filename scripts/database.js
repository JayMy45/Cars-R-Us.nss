
//define Object Array that will hold database details (PaintColor, Interior, Technology, Wheels, CustomerOrder)
const database = {  //if database is named something else it will have to be included in getFunction database.function.map(=>({}))
    //may need to add an order builder key...
    paintColor: [
        { id: 1, type: "Silver", price: 700 },
        { id: 2, type: "Midnight Blue", price: 1500 },
        { id: 3, type: "Firebrick Red", price: 1000 },
        { id: 4, type: "Spring Green", price: 1200 }
    ],

    interior: [
        { id: 1, type: "Beige Fabric", price: 450 },
        { id: 2, type: "Charcoal Fabric", price: 710 },
        { id: 3, type: "White Leather", price: 900 },
        { id: 4, type: "Black Leather", price: 1200 }
    ],

    technology: [
        { id: 1, type: "Basic Package", details: " basic sound system", price: 500 },
        { id: 2, type: "Navigation Package", details: "includes integrated navigation controls", price: 845 },
        { id: 3, type: "Visibility Package", details: "includes side and rear cameras", price: 1200 },
        { id: 4, type: "Ultra Package", details: "includes navigation and visibility packages", price: 1575 }
    ],

    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 575 },
        { id: 2, type: "17-inch Pair Radial Black", price: 715 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 935 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 1200 }
    ],

    customOrder: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            techId: 1,
            wheelId: 1,
            timestamp: 1660748097
        }
    ],

    orderBuilder: {}

}

export const getPaintColor = () => {
    return database.paintColor.map(paintColor => ({ ...paintColor }))
}

export const getInterior = () => {
    return database.interior.map(interior => ({ ...interior }))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({ ...wheels }))
}

export const getOrders = () => {
    return database.customOrder.map(customOrder => ({ ...customOrder }))
}

//export functions whose responsibility is to set state...
export const setPaintColor = (id) => {  //parameter to import "id" from to function...
    database.orderBuilder.colorId = id
}  /* the setMetal function adds a new key "metalId" equal to id using dot.method to 
    add to the orderBuilder key/object in the database ObjectArray */

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

// export const setOrders = (id) => {
//     database.orderBuilder.interiorId = id
// }

/*this function should be invoked, in this case, whenever the button to create a new order is clicked (put in clickEventListener on HTML page)
it takes the user inputs from creating a car/order and adds a new id and timestamp then makes a copy of the users inputs then 
pushes it into customOrders object.  Then the orderBuilder is cleared... */

//customOrder = [{id: 1},{id: 2}]
//                 [o]      [1]
//to get the right index subtract 1 from the total length of index (2 in this example) then use the calculated index to target the right object to update .id.


export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }
    const lastIndex = database.customOrder.length - 1 //see above explanation
    newOrder.id = database.customOrder[lastIndex].id + 1 //index provide is offset by 1 because index count starts at 0
    newOrder.timestamp = Date.now()
    database.customOrder.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))

    /* There are a number of parts to this function that span to difference modules (main.js & carsRUs.js [already described above]).
        in the main.js module an eventListener is added to listen for the customEvent "stateChanged". The customEvent "stateChange"
        is dispatched whenever the button to create a new order is clicked...which means after the button is clicked then the above function is 
        called...at the end the main.js function below is dispatched rendering a new page
        
        document.addEventListener("stateChanged", event => {
            console.log("State of data has changed. Regenerating html...")
            renderAllHTML()
        })
    */
}