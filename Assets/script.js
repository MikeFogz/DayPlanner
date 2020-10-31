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
        let userInput = document.querySelector(".userInput")
        timeDate.textContent = moment().format("dddd, MMMM Do YYYY");

        //for loop to determine if area is present, future, or past in relation to current time
        for(let i = 0; i < currentHour.length; i++) {
            if(parseInt(currentHour[i].id.slice(4)) === timeNow) {
                $(currentHour[i]).addClass("present")
            } else if(parseInt(currentHour[i].id.slice(4)) > timeNow) {
                $(currentHour[i]).addClass("future")
            } else (parseInt(currentHour[i].id.slice(4)) < timeNow) {
                $(currentHour[i]).addClass("past")
            }
        }
        //adding event listener
        var btnClick = document.querySelectorAll("button");
        for (let i = 0; len = btnClick.length; i< len ; index++) {
            // console.log(i)
            btnClick[i].addEventListener("click", savetoLocalStorage);
        }
            
        }
    }
