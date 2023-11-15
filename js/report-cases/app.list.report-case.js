document.addEventListener("DOMContentLoaded", function () {

    const tableReportBody = document.getElementById('tableReportBody');

    async function loadData() {
        console.log("load data!!!");
        tableReportBody.innerHTML = "";
        const apiReport = new ApiReportCase();
        const data = await apiReport.findAll();
        console.table(data);

        data.forEach(rptCase => {
            const tableRow = `<tr>
                <td>${rptCase.id}</td>
                <td>${rptCase.reporter}</td>
                <td>${rptCase.caseType}</td>
                <td>${rptCase.date}</td>
                <td>${rptCase.description}</td>
                <td>${rptCase.address}</td>
                <td>
                    <input type="checkbox" class="statusChange" ${rptCase.active ? 'checked' : ''}
                    style="width: 25px; height: 25px;" data-rptid = "${rptCase.id}"/>
                </td>
                <td>
                    <a href="./print.html?reportCaseId=${rptCase.id}" class="btn btn-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </a>
                    <a href="./delete.html?reportCaseId=${rptCase.id}" class="btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                    </a>
                </td>
            </tr>`;
            tableReportBody.innerHTML += tableRow;
        })
    }

    loadData()
});




