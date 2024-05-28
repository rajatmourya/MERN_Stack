// if no error occur
try {
    console(s);
} 
// this is exicuted when error occur
catch (error) {
    console.log(error);
    console.log('the error occured');
}
// this is always exicuted 
finally {
    console.log('This will always be exicuted');
}