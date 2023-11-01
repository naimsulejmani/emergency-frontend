class ApiReportCase {
    url = 'http://localhost:8080/api/report-cases';

    async findAll() {
        const response = await fetch(this.url); // GET
        return await response.json();
    }

    async findById(reportCaseId) {
        const response = await fetch(this.url + "/" + reportCaseId); // GET
        return await response.json();
    }
}