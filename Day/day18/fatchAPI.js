// const response = fetch('https://dummyjson.com/products/1')
//     .then((response) => {

//     })
//     .catch(err => {

//     });
// console.log(response);

async function fetchData() {
    try {

        const loadingElement = document.getElementById('loading');
        const phonebox = document.getElementById('box');

        phonebox.style.display = 'none' ;

        const response = await fetch('https://dummyjson.com/products/100');
        console.log(response);
        
        const jsonData = await response.json();  
        console.log(jsonData);

        phonebox.style.display = 'block' ;
        loadingElement.style.display = 'none' ;

        loadData(jsonData);

    } catch (error) {
        console.log(error);
    }
}



function loadData(jsonData) {
    try {
        const phoneTextElement = document.getElementById("phone-title");
        const phoneDescElement = document.getElementById("phone-desc");
        const phoneImg = document.getElementById("phone-img");

        // phoneTextElement.innerHTML = jsonData.title;
        // phoneDescElement.innerHTML = jsonData.description;
        // phoneImg.src = jsonData.thumbnail;
        // // phoneImg.src = jsonData.images[0];
        
        const {title, description, thumbnail} = jsonData;
        phoneTextElement.innerHTML = title;
        phoneDescElement.innerHTML = description;
        phoneImg.src = thumbnail;

    } catch (error) {
        console.log(error);
    }
}

fetchData();