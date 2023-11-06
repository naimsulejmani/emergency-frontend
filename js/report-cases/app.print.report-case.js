document.addEventListener("DOMContentLoaded", function () {

    const reportCase = document.getElementById('reportCase');

    async function loadData() {
        console.log(window.location.search);
        const rptCaseId = window.location.search.split("=")[1].trim();
        const apiReport = new ApiReportCase();

        const data = await apiReport.findById(rptCaseId);

        console.log(data);

        if (!data.status || data.status === 200)
            reportCase.innerHTML = `
                <p style = "${data.reporter === "Erblini" ? "color:red" : "color:blue"}"><b>Raportuesi: </b> <i>${data.reporter}</i></p>
                <p style="color:red"><b>Case Type: </b> <i>${data.caseType}</i></p>
                <p><b>Data: </b> <i>${data.date}</i></p>
                <p><b>Description: </b> <i>${data.description}</i></p>
                <p><b>Address: </b> <i>${data.address}</i></p>
            `;
        else
            alert(data.message)


    }

    loadData();
});