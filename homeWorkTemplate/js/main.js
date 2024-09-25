const btn = document.getElementById("play");

function transform() {
    // 1. Remove 6th element
    data.splice(5, 1);
    // 2. Remove id field
    const idlessArr = [];
    data.forEach(function(item, index=0){
        idlessArr.push(item);
        delete idlessArr[index].id;
    })
    // 3. Map
    const mappedArr = idlessArr.map(function(item){
        // 4. Create a new array with objects
        let newItem = {};
        // 5. Modify name
        newItem.name = item.name[0].toUpperCase() + item.name.slice(1).toLowerCase();
        // 6. Modify link
        newItem.url = "http://" + item.url;
        // 7. Modify description
        newItem.description = item.description.slice(0, 15) + "...";
        // 8. Create date
        const tmpDate = new Date(item.date);
        newItem.date = tmpDate.getFullYear() + "/" +
            tmpDate.getMonth() + "/" +
            tmpDate.getDate() + " " +
            tmpDate.getHours() + ":" +
            tmpDate.getMinutes();
        // 10. Modify params
        newItem.params = `${item.params.status}=>${item.params.progress}`;
        // 11. Create isVisible
        newItem.isVisible = item.params.status;
        return newItem;
    })
    // 12. Filter
    const filteredArr = mappedArr.filter(function(item){
        return item.isVisible === true;
    });

    // 13. Print
    printToConsole(filteredArr);
}

function printToConsole(array) {
    console.log("new", array);
}

btn.addEventListener("click", transform);
