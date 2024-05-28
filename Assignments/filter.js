const a = ['hello','gud','121','aba','12521',"hi",'bbye', 'Godzilla','KingKong','himashi','she','he','Baar Baar Dekho','Ye dil Ashikana','R'];

const lessthenThree = a.filter((Element) =>{
    if(Element.length < 3){
        return Element;
    }
});

const containHi = a.filter((Element) =>{
    if(Element.search('hi')>-1){
        return Element;
    }
});

const palindrome = a.filter((element) => {
    let f = 0, r = element.length-1;
    let flag = 0;
    while (f != r ) {
        if(element[f] != element[r]){
            flag += 1;
            break;
        }
        f += 1;
        r -= 1;        
    }
    if (flag == 0) {
        return element;
    }
});

console.log(lessthenThree);
console.log(containHi);
console.log(palindrome);

let users = [
    {firstName: "Susan", lastName: "Steward"},
    {firstName: "Daniel", lastName: "Longbottom"},
    {firstName: "Jacob", lastName: "Black"},
    {firstName: "Susan", lastName: "Thoums"},
    {firstName: "Steev", lastName: "Rogers"},
];

const fn = users.filter((element) =>{
    if(element.firstName == 'Susan'){
        return element;
    }
});

console.log(fn);

const lnswl = users.filter((element) =>{
    if(element.lastName[0] == 'L'){
        return element;
    }
});

console.log(lnswl);

const fullName = users.map((element) =>{  
    return element.firstName + " " +element.lastName;
});

console.log("Full name");

console.log(fullName);