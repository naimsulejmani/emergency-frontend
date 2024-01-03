function SaveComponent() {

    const self = this;

    const isEdit = window.location.pathname.includes('edit.html');

    self.report_case = new ReportCase(undefined, '', '', '', '', '', false, '');

    const apiReport = new ApiReportCase();

    self.save = async function () {
        console.log(self.report_case);
        if (!isEdit) {
            await apiReport.register(self.report_case);
        } else {
            await apiReport.modify(self.report_case.id, self.report_case);
        }

        window.location.href = './list.html';
    }

    if (isEdit) {
        self.report_case.id = window.location.search.split("=")[1].trim();

        self.onLoad = async function () {
            try {
                const response = await apiReport.findById(self.report_case.id);
                if (response !== null) {
                    self.report_case.reporter = response.reporter;
                    self.report_case.date = response.date;
                    self.report_case.caseType = response.caseType;
                    self.report_case.address = response.address;
                    self.report_case.description = response.description;
                    self.report_case.active = response.active;
                    self.report_case.createdAt = response.createdAt;
                } else {
                    alert('Error nuk ka te dhena per id ' + self.report_case.id);
                    window.location.href = './list.html';
                }
            } catch (err) {
                console.error(err);
                alert('Error nuk ka te dhena per id ' + self.report_case.id);
                window.location.href = './list.html';
            }

        }

        self.onLoad();

    }


    return `<div id="reportCase">
            <div class="row g-3 align-items-center my-1">
                <div class="col">
                    <label for="inputReporter" class="col-form-label">Reporter: </label>
                </div>
                <div class="col">
                    <input type="text" id="inputReporter" class="form-control" :bind="self.report_case.reporter"/>
                </div>
            </div>
            <div class="row g-3 align-items-center my-1">
                <div class="col">
                    <label for="inputDate" class="col-form-label">Date: </label>
                </div>
                <div class="col">
                    <input type="datetime-local" id="inputDate" class="form-control" :bind="self.report_case.date"/>
                </div>
            </div>
            <div class="row g-3 align-items-center my-1">
                <div class="col">
                    <label for="inputAddress" class="col-form-label">Address: </label>
                </div>
                <div class="col">
                    <input type="text" id="inputAddress" class="form-control" :bind="self.report_case.address"/>
                </div>
            </div>
            <div class="row g-3 align-items-center my-1">
                <div class="col">
                    <label for="chbActive" class="col-form-label">Is Active: </label>
                </div>
                <div class="col">
                    <input type="checkbox" id="chbActive" style="width: 25px; height: 25px" :bind="self.report_case.active"/>
                </div>
            </div>
            <div class="row g-3 align-items-center my-1">
                <div class="col">
                    <label for="selectCaseType" class="col-form-label">Case Type: </label>
                </div>
                <div class="col">
                    <select id="selectCaseType" class="form-control" :bind="self.report_case.caseType">
                        <option value="Aksident" selected>Aksident</option>
                        <option value="Zjarr">Zjarr</option>
                        <option value="Vjedhje">Vjedhje</option>
                        <option value="Tjeter">Tjeter</option>
                    </select>
                </div>
            </div>

            <div class="row g-3 align-items-center my-1">
                <div class="col">
                    <label for="textAreaDescription" class="col-form-label">Description: </label>
                </div>
                <div class="col">
                    <textarea class="form-control" id="textAreaDescription" rows="5" :bind="self.report_case.description">

                    </textarea>
                </div>
            </div>
            <div class="row g-3 align-items-center my-1"">
               <hr>
                <div id="actions">
                    <button type="button" class="btn btn-bd-primary" id="btnSave" onclick="self.save()">SAVE</button>
                    <button type="button" class="btn btn-warning" id="btnReset">Reset</button>
                    <button type="button" class="btn btn-danger" id="btnCancel">Cancel</button>
                </div>
            </div>
        </div>`;
}