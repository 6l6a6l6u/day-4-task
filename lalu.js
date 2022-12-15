// const api_url  = 'https://restcountries.eu/rest/v2/all'
// async function getflags() {
//   const response = await fetch(api_url);
//   const data = response.json();
//   console.log(data);
// }
// getflags();
// document.addEventListener('DOMContentLoaded' , () =>{
//   const selectDrop = document.querySelector('#countries');
//   fetch('https://restcountries.eu/rest/v2/all').then(res => {
//     return res.json();
//   }).then(data);
//   console.log(data);  
// }).catch(err => {
//     console.log(err);
// })  
// How to compare two JSON have the same properties without order?
var object1={
    name:'person1',
    age:5
    }
    
    var object2={
    age:5,
    name:'person1'
    }
    
    JSON.stringify(object1)===JSON.stringify(object2)
    // false
    
    _.isEqual(object1, object2)
    //true
    

        
        