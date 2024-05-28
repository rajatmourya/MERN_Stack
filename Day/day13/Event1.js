const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener('click', () => {
    console.log('child clicked');
});

parent.addEventListener('click', () => {
    console.log('parent clicked');
});

grandparent.addEventListener('click', () => {
    console.log('grandparent clicked');
});
child.a
