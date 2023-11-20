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

    async deleteById(reportCaseId) {
        const response = await fetch(this.url + "/" + reportCaseId, {
            method: 'DELETE'
        });
        return await response.text();
    }


    async register(reportCase) {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(reportCase),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();
    }

    async modify(reportCaseId, reportCase) {
        const response = await fetch(this.url + '/' + reportCaseId, {
            method: 'PUT',
            body: JSON.stringify(reportCase),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();
    }

    async changeStatus(reportCaseId, reportCase) {
        const response = await fetch(this.url + '/' + reportCaseId, {
            method: 'PATCH',
            body: JSON.stringify(reportCase),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();
    }
}














