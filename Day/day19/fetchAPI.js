const userImage = document.getElementById('user-img');
const userName = document.getElementById('user-name');
const usereEmail = document.getElementById('user-email');
const userCard = document.getElementById('profile-card');
// const userCardTemplate = document.getElementById('profile-card-template');        //when use template
const container = document.getElementById('container');

async function fetchData() {
    const respone = await fetch('http://dummyjson.com/users');
    const data = await respone.json();
    const users = data.users;
    console.log(data);
    bindData(users);
}



function bindData(users) {
    users.forEach((user) => {
        const userCardClone = userCard.cloneNode(true);      
        // const userCardClone = userCardTemplate.content.cloneNode(true);        //when use template
        const userImage = userCardClone.querySelector('#user-img');
        const userName = userCardClone.querySelector('#user-name');
        const userEmail = userCardClone.querySelector('#user-email');
        


        console.log(userCardClone);

        userImage.src = user.image;
        userName.innerHTML = `${user.firstName} ${user.lastName}`;
        userEmail.innerHTML = user.email;
        bindData.innerHTML = user.birthDate;

        
        container.appendChild(userCardClone);

    });
    userCard.style.display = "none";
}

fetchData();