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

jobContainer.onclick = function (event) {

    var card = event.target.closest(".job-card");
    if (!card) return;

    var companyName = card.querySelector(".company-name").innerText;
    var statusBtn = card.querySelector(".status-btn");

    if (event.target.classList.contains("btn-success")) {

        statusBtn.innerText = "Interview";

        if (interviewList.indexOf(companyName) == -1) {
            interviewList.push(companyName);
        }

        var index = rejectedList.indexOf(companyName);
        if (index != -1) {
            rejectedList.splice(index, 1);
        }

     
    }
}

