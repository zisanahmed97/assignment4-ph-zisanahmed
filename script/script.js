var interviewList = [];
var rejectedList = [];
var currentFilter = "all";

var jobContainer = document.getElementById("job-container");

var totalCount = document.getElementById("total-count");
var interviewCount = document.getElementById("dashboard-interview-count");
var rejectCount = document.getElementById("dashboard-reject-count");
var jobsNumber = document.getElementById("jobs-number");

function updateCount() {
    var cards = document.getElementsByClassName("job-card");
    var total = cards.length;

    totalCount.innerText = total;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
    jobsNumber.innerText = total + " jobs";
}

updateCount();

