const btn = document.getElementById("play");
const newArr = [...data];

function transform() {
    // 1. Remove 6th element
    newArr.splice(5, 1);
    // 3. Map
    const filteredArr = newArr.map(function(item){
        const tmpDate = new Date(item.date);
        return {
            // 5. Modify name
            name : item.name[0].toUpperCase() + item.name.slice(1).toLowerCase(),
            // 6. Modify link
            url : "http://" + item.url,
            // 7. Modify description
            description : item.description.slice(0, 15) + "...",
            // 8. Create date
            date : tmpDate.getFullYear() + "/" +
                tmpDate.getMonth() + "/" +
                tmpDate.getDate() + " " +
                tmpDate.getHours() + ":" +
                tmpDate.getMinutes(),
            // 10. Modify params
            params : `${item.params.status}=>${item.params.progress}`,
            // 11. Create isVisible
            isVisible : item.params.status
        }
    }).filter(function(item){
        return item.isVisible === true;
    });

    // 13. Print
    printToConsole(filteredArr);
}

function printToConsole(array) {
    console.log("new", array);
}

btn.addEventListener("click", transform);
