function orderPizza() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const isAvailable = false;
            if (isAvailable) {
                const pizza = '🍕';
                resolve(pizza);
            } else {
                reject('-------- We do not have Pizza-----------');                
            }
        }, 2000);
    });
}

const pizzaPromise = orderPizza();

pizzaPromise
    .then((pizza) => {
        console.log('pizza', pizza);
    }).catch(error => {
        console.log("Error ocured " + error);
    })


    // select seats
    // enter name
    // payment

    bookRailwayTicket();


    function bookRailwayTicket() {
        const seat = 'A3';
        const name = 'Rajat';
        const payment = 870;

        selectSeats(seat)
            .then((seat) => {
                enterDetails(name, seat);
            })
            .then((details) => {
                submitPayment(name, seat, payment)
            });
    }

    function selectSeats(seat) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                console.log('seats confirmed', seat);
                resolve(`confirm ${seat}`);
            }, 2000);
        });
    }

    function enterDetails(name, seat) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                console.log('name binded', name, 'with', seat);
                resolve(`confirm ${seat} ${seat}`);
            }, 2000);
        });
    }

    function submitPayment(name, seat, payment) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                console.log('payment confirmed', name, 'with', payment);
                resolve(`confirm ${seat} ${seat} ${payment}`);
            }, 2000);
        });
    }