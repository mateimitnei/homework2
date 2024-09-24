// Homework
// Goal: practice working with arrays and objects.
// READ CAREFULLY, LOTS OF DETAILS! THERE IS AN EXAMPLE AT THE BOTTOM OF WHAT YOU SHOULD END UP WITH!
// You need to create a new array of objects from the data array located in the data.js (homeWorkTemplate) file by performing a series of transformations.
// The new array of objects should be printed to the console.
// Write your functionality in main.js.
// The data.js file is already connected, so just write your program code, the array should be accessible.
// Attention: if any transformation doesn't work out. Skip it and move on.

// 1. Use the splice function to remove the 6th element of the array. As a result, your array should be one element shorter.

// 2. Use the forEach function.
// Inside the loop, create a new array of objects.
// In the process of creating a new array of objects, remove the id key.
// That is, in your new array, each object should not contain the id field.
// Hint:
const newArr = [];
data.forEach(function(item, index){
      newArr.push({
        name: item.name
        ////.....
      })
})

// 3. Using the new array of objects obtained with the forEach method, iterate over it using the map() method.

// 4. On each iteration of the loop, we get one object from the array of objects. Take this object and transform its fields according to the following rules.
// You will need documentation on dates and strings.

// 5. For the Name field: use string manipulation functions to make the first letter uppercase and the rest lowercase (e.g., JEEP -> Jeep).

// 6. For the url field: prepend it with "http://"

// 7. For the Description field: use string manipulation functions to trim it to 15 characters. After that, add an ellipsis (…) and discard the rest.

// 8. For the date field: create a date object from the given milliseconds and then display it in the format "2015/07/02 14:15".
// For this, you need to check the documentation on dates.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Example of how to transform the date. You can use another approach. The main thing is that it should not be more cumbersome and complex.
const date = 1422153200637;
const newDate = function(date){
    const tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
};

// 9*. (optional task)
// Use the moment.js library.
// Try to understand how it works and use it instead of the example above. If it's too hard — use the approach above.

// 10. For the params field: form a string from the key values in the format "true=>80". You can access the params object fields directly to complete the task.
// That is, params.status and params.progress

// 11. Create a new field called isVisible. Assign the value of the params.status field to this new field.

// 12. After all the transformations, the map function will return you a new array. Now, using the filter function, select only those elements where isVisible == true. There is an example of the filter function in the presentation.

// 13. Print the result to the console.
// For printing, use a separate function as in previous tasks. That is, move console.log to a separate function.

// 14. Example result (the number of elements in the result should not be two, but as many as you specify in the variable):
const data = [{
    url: "http://desktopwallpapers.org.ua/mini/201507/40069.jpg",
    name: "Chevrolet",
    params : "true=>80",
    isVisible : true,
    description : "be conveyed to ...",
    date : "2015/01/25 14:15"
},{
    url: "http://desktopwallpapers.org.ua/mini/201507/40068.jpg",
    name: "Dewoo",
    params : "true=>88",
    isVisible : true,
    description : "sing color to a...",
    date : "2015/12/18 15:35"
}]
