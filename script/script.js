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
timeTd = $("<td>").text(currentTime);
$("#currentTime").append(timeTd);
newTableRow = $("<tr>");
newTableD = $("<td>");
mainTable = $("#mainTable");



timeBlock = ['8', '9', '10', '11', '12', '1', '2', '3', '4', '5'];

function sortTime() {
    timeBlock.forEach((hour) => {
        // i can append new <p> with each hour but table doesn't work??
        // mainTable.append($("<p>").text(hour))'
        newHour = $("<tr>").text(hour)
        submit = $("<input>").attr({ type: "submit", value: "submit" })
        mainTable.append(newHour, submit)
        // not sure why it works now and didn't earlier. just use selectors instead of naming them as variables
        /* <input type="submit" value="Submit"> */
        //                  Add more than one attr
        // $(selector).attr({attribute:value, attribute:value,...})

    });
}

sortTime()