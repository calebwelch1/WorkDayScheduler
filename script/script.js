// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// 1. allow input row for every hour from 8 - 5
// 1A. allow input to be saved
// 1B. color code time on past/present/future

// 2. Current day displayed at top

// 3. allow local storage saves to be retrieved

currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
timeDiv = $("<div>").text(currentTime);
$("#currentTime").append(timeDiv);
newTableRow = $("<tr>");
newTableD = $("<td>");
mainTable = $("#mainTable");
inputBox = $("<input>")
timeString = moment().format('LT').toString()
// current hour
hourNow = timeString[0]
retrieveBtn = $("#retrieveBtn")
newBtn = $("<button>").attr({ type: "submit" })

timeBlock = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

function sortTime() {
    timeBlock.forEach((hour) => {
        // i can append new <p> with each hour but table doesn't work??
        // mainTable.append($("<p>").text(hour))'
        function timeTable() {
            newHour = $("<div>").text(hour).attr({ id: `hour${hour}`, value: `${hour}`, class: "" })
            submit = $("<input>").attr({ type: "button", value: "save", id: `submit${hour}`, class: "button is-primary ", })
            inputBoxSort = $("<input>").attr({ type: "text", id: `input${hour}`, value: "", class: "input is-primary textarea" })
            hourDiv = $("<div>").attr({ id: `${hour}div` })
            mainTable.append(newHour.append(submit, inputBoxSort, hourDiv))
        }
        timeTable()
        // put everything in a form!!!

        // make it color coded based on current time
        // below works. now just need to make a dynamic one
        // $("#hour8").addClass("futureColor")
        // if (($(`#hour${hour}`).val()) > hourNow) {
        //     $(`#hour${hour}`).addClass("futureColor")
        // };

        // console.log($('#hour8').val())
        // if ($(`#hour${hour}`).value > +hourNow) {
        //     $(`#hour${hour}`).addClass("futureColor");
        // };

        // not sure why it works now and didn't earlier. just use selectors instead of naming them as variables
        /* <input type="submit" value="Submit"> */
        //                  Add more than one attr
        // $(selector).attr({attribute:value, attribute:value,...})

    });
}
// must run sort time to select sort time elements
sortTime()
// make on click save input
// it works with .val() not .val!!!! now to figure out how to save it for later
// getting input for every button! if it works outside of the function i should try this with setting the classes too...
//submit button logic
timeBlock.forEach((hour) => {
    $(`#submit${hour}`).on("click", (e) => {
        e.preventDefault()
        // alert($(`#input${hour}`).val())
        // need to create seperate variables. right now each one overrides the last
        function makeInputVar() {
        }
        //don't have to make a seperate variable for each i can use template literal to change the key for each input!!!
        filler = `At ${hour} o' clock: `
        JSONinput = JSON.stringify(filler + $(`#input${hour}`).val())
        localStorage.setItem(`JSONinput${hour}`, JSONinput)
        // how to clear????
        // $(`#input${hour}`).reset();


    })

}
);
// have to move the retrieve button outside or it runs it for every item in the timeBlock! gives me localstorage 10 times lol
retrieveBtn.on("click", (e) => {
    // let filler = `At ${ hour } o'clock`
    e.preventDefault()
    // localStorage.getItem(`JSONinput${hour}`
    // function forEachKey() {
    //     for (var i = 0; i < localStorage.length; i++) {
    //         button = newBtn.attr({ value: localStorage.key(i) })
    //         newBtn.text(localStorage.key(i))
    //         $("#retrieved").append(newBtn)
    //         // $("#retrieved").append(newBtn.val(localStorage.key(i)))
    //     }
    // }
    // forEachKey()
    // empty so we don't get a bunch of schedules
    $("#retrieved").empty()
    for (var i = 0; i < localStorage.length; i++) {
        // let minus = i - 1
        // console.log(localStorage.getItem(localStorage.key(i)));
        // $(`#${i}div`
        // get item... of key(i) gets me all the values in local storage
        $("#retrieved").append(localStorage.getItem(localStorage.key(i)))
        // each part of schedule on a new line
        $("#retrieved").append($("<br>"))
    }
    // $("#retrieved").remove()
    // append them all to our schedule div

    $("#retrieved").append()
})
$("#clearSchedule").on("click", () => {
    $("#retrieved").empty()
    localStorage.clear()
})
// $("#submit8").on("click", () => {
//     // alert("working!"))
//     alert($("#input8").val());
// });


// TO DO
// clear input on save
// color code
// css
// add to local storage key instead of overwriting 