//declaring variables and priming document
$(document).ready(function() {
    let timeDate = document.querySelector("#currentDay")
    let currentHour = document.querySelectorAll("textarea")
    // let saveBtn = document.querySelector(".btnClass")
    let timeNow = parseInt(moment().format("H"))

