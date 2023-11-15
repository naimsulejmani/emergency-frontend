document.addEventListener("DOMContentLoaded", function () {

    const inputReporter = document.getElementById('inputReporter');
    const inputDate = document.querySelector('#inputDate');
    const inputAddress = document.querySelectorAll("#inputAddress")[0];
    const selectCaseType = document.getElementById('selectCaseType');
    const textAreaDescription = document.querySelector("textarea#textAreaDescription");
    const chbActive = document.getElementById('chbActive');

    const btnSave = document.getElementById('btnSave');
    const btnCancel = document.getElementById('btnCancel');

    async function onSave() {
        const reporter = inputReporter.value;
        const date = inputDate.value;
        const address = inputAddress.value;
        const caseType = selectCaseType.value;
        const description = textAreaDescription.value;
        const active = chbActive.checked;

        if (!reporter) {
            inputReporter.style.borderColor = "red";
            inputReporter.focus();
            return;
        }

        const model = new ReportCase(0, description, caseType, address, reporter, date, active);
        // JSON Object { name: "Naim", age: 10}
        console.log(model);
        const apiReport = new ApiReportCase();
        await apiReport.register(model);
        window.location.href = "./list.html";
    }


    btnSave.addEventListener("click", function (event) {
        event.preventDefault();
        onSave();
    });

});







