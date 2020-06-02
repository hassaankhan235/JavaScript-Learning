l = document.querySelectorAll('li'); //Selects all li elements
l.forEach(function(li) {
    console.log("Class Name is" + li.className) // Prints className of all li elements 
    console.log(" Attribute class value is"+li.getAttribute('class')) //Prints attribute class value of all li elements
});