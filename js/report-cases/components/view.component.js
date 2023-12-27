function ViewReportCase() {

    const self = this;

    self.rptCaseId = window.location.search.split("=")[1].trim();

    const apiReport = new ApiReportCase();
    self.report = undefined;

    self.find = async function() {
        self.report = await apiReport.findById(self.rptCaseId);
    }

    self.find();

    return `<div>
    <table class="table">
        <tbody>
            <tr>
                <th>Reporter</th>
                <td>{{self.report.reporter}}</td>
            </tr>
             <tr>
                <th>CaseType</th>
                <td>{{self.report.caseType}}</td>
            </tr>
                 <tr>
                <th>Date</th>
                <td>{{self.report.date}}</td>
            </tr>
             <tr>
                <th>Description</th>
                <td>{{self.report.description}}</td>
            </tr>
             <tr>
                <th>Address</th>
                <td>{{self.report.address}}</td>
            </tr>
        </tbody>
    </table>
</div>`
}
