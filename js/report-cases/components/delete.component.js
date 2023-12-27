
lemonade.setComponents({ViewReportCase})
function DeleteReportCase() {
    const self = this;

    self.rptCaseId = window.location.search.split("=")[1].trim();

    const apiReport = new ApiReportCase();

    self.delete = async function () {
        await apiReport.deleteById(self.rptCaseId);
        window.location.href = './list.html';
    }


    return `<div>
    <ViewReportCase></ViewReportCase>
    <hr>
    <button type="button" class="btn btn-danger" onclick="self.delete()">DELETE</button>
</div>`;
}