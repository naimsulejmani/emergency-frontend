class ApiReportCase {
    url = 'http://localhost:8080/api/report-cases';

    async findAll() {
        // const response = await fetch(this.url); // GET
        // return await response.json();

        // javascript ==

        const response = await axios.get(this.url);
        return response.status === 200 ? response.data : [];

    }

    async findById(reportCaseId) {
        // const response = await fetch(this.url + "/" + reportCaseId); // GET
        // return await response.json();

        const response = await axios.get(this.url + "/" + reportCaseId);
        return response.status === 200 ? response.data : {};
    }

    async deleteById(reportCaseId) {
        // const response = await fetch(this.url + "/" + reportCaseId, {
        //     method: 'DELETE'
        // });
        // return await response.text();

        const response = await axios.delete(this.url + "/" + reportCaseId);
        return response.status === 200 ? response.data : "NOT DELETED";
    }


    async register(reportCase) {
        // const response = await fetch(this.url, {
        //     method: 'POST',
        //     body: JSON.stringify(reportCase),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
        // return await response.text();

        const response = await axios.post(this.url, reportCase);

        return response.data;
    }

    async modify(reportCaseId, reportCase) {
        // const response = await fetch(this.url + '/' + reportCaseId, {
        //     method: 'PUT',
        //     body: JSON.stringify(reportCase),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
        // return await response.text();
        const response = await axios.put(this.url + '/' + reportCaseId, reportCase);

        return response.data;
    }

    async changeStatus(reportCaseId, reportCase) {
        // const response = await fetch(this.url + '/' + reportCaseId, {
        //     method: 'PATCH',
        //     body: JSON.stringify(reportCase),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
        // return await response.text();
        const response = await axios.patch(this.url + '/' + reportCaseId, reportCase);

        return response.data;
    }
}














