//declaring variables and priming document
$(document).ready(function() {
    let timeDate = document.querySelector("#currentDay")
    let currentHour = document.querySelectorAll("textarea")
    // let saveBtn = document.querySelector(".btnClass")
    let timeNow = parseInt(moment().format("H"))

    //Primary Function. Begin with retreving local storage. 
    function primaryFunction(){
        getFromLocalStorage()
        //add class "userInput" to text area div
        $(currentHour).addClass("userInput")
        timeDate.textContent = moment().format("dddd, MMMM Do YYYY");

        //for loop to determine if area is present, future, or past in relation to current time
        for(let i = 0; i < currentHour.length; i++) {
            if(parseInt(currentHour[i].id.slice(4)) === timeNow) {
                $(currentHour[i]).addClass("present")
            } else if(parseInt(currentHour[i].id.slice(4)) > timeNow) {
                $(currentHour[i]).addClass("future")
            } else (parseInt(currentHour[i].id.slice(4)) < timeNow)
                $(currentHour[i]).addClass("past")
        }
        //adding event listener
        var btnClick = document.querySelectorAll("button");
        for (let i = 0; i < btnClick.length; i++) {
            console.log(btnClick)
            btnClick[i].addEventListener("click", saveToLocalStorage);
        }
    }
    // Saving to local Storage by looking at text area base on id.
    function saveToLocalStorage() {
        // console.log(this)
        var hNum = this.id
        var x = "#hour" + hNum
        var w = document.querySelector(x).value
        localStorage.setItem(x, w)
    //     console.log(nodeValue)
    }
    // Creating local storage retreval
    function getFromLocalStorage(){
        for (let i = 9; i<=19; i++) {
            var x = "#hour" + i
            if(localStorage.getItem(x)){
                var w = (localStorage.getItem(x))
                let p = document.querySelector(x)
                p.value = w
                // console.log(w)
            }
        }
    }
    primaryFunction()
});
