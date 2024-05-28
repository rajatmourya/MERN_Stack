function getOrderInfo(name, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`${name}'s ordered ${order}`);
            resolve(`Get ${name}'s order of ${order}`);
        }, 2000);
    });
}

function checkIfAvailable(infoorder) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`${order} is available`);
            resolve(`${infoorder} are available`);
        }, 2000);
    });
}

function placeOrder(avaiorder) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`${order} placed`);
            resolve(` ${avaiorder} Succesfull`);
        }, 2000);
    });    
}

async function noodels(name, order) {
    try {
        const getinfo = await getOrderInfo(name, order);
        console.log('now we have information of  ' + getinfo);
        const cekifavi = await checkIfAvailable(getinfo)
        console.log(cekifavi);
        const placed = await placeOrder(cekifavi)
        // console.log(placed);
        return placed;
    } catch (error) {
        console.log(error);
    }
}

noodels("Rajat","noodels")
    .then((placed) => {
        console.log(placed);
    })
    .catch((error) => {
        console.log(error);
    });

