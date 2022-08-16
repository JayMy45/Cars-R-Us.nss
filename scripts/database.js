
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
        { id: 1, type: "Basic Package (basic sound system)", price: 500 },
        { id: 2, type: "Navigation Package (includes integrated navigation controls)", price: 845 },
        { id: 3, type: "Visibility Package (includes side and rear cameras)", price: 1200 },
        { id: 4, type: "Ultra Package (includes navigation and visibility packages)", price: 1575 }
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
            interiorId: 4,
            techId: 3,
            wheelId: 3
        }
    ]

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

