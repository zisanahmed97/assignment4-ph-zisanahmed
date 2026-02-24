var interviewList = [];
var rejectedList = [];
var currentFilter = "all";

var jobContainer = document.getElementById("job-container");

var totalCount = document.getElementById("total-count");
var interviewCount = document.getElementById("dashboard-interview-count");
var rejectCount = document.getElementById("dashboard-reject-count");
var jobsNumber = document.getElementById("jobs-number");
var filterButtons = document.getElementsByClassName("feature-btn");

function updateCount() {
    var cards = document.getElementsByClassName("job-card");
    var total = cards.length;

    totalCount.innerText = total;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
    jobsNumber.innerText = total + " jobs";
}

updateCount();



for (var i = 0; i < filterButtons.length; i++) {

    filterButtons[i].onclick = function () {

        var text = this.innerText.toLowerCase();
        currentFilter = text;

        applyFilter();
    }
}

function applyFilter() {

    var cards = document.getElementsByClassName("job-card");

    for (var i = 0; i < cards.length; i++) {

        var statusBtn = cards[i].querySelector(".status-btn");
        var statusText = statusBtn.innerText.toLowerCase();

        if (currentFilter == "all") {
            cards[i].style.display = "block";
        }
        else if (currentFilter == "interview") {

            if (statusText == "interview") {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        }
        else if (currentFilter == "rejected") {

            if (statusText == "rejected") {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}

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


    if (event.target.classList.contains("btn-error")) {

    statusBtn.innerText = "Rejected";

    if (rejectedList.indexOf(companyName) == -1) {
        rejectedList.push(companyName);
    }

    var index2 = interviewList.indexOf(companyName);
    if (index2 != -1) {
        interviewList.splice(index2, 1);
    }
}

if (event.target.closest(".btn-delete")) {

    card.remove();

    var i1 = interviewList.indexOf(companyName);
    if (i1 != -1) {
        interviewList.splice(i1, 1);
    }

    var i2 = rejectedList.indexOf(companyName);
    if (i2 != -1) {
        rejectedList.splice(i2, 1);
    }
}
updateCount();
applyFilter();
}

