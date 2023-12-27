function CheckboxActive() {

    const self = this;

    self.changeStatus = async function() {
        const apiReport = new ApiReportCase();
        await apiReport.changeStatus(self.report_id, !self.active);
        const parent = lemonade.get('ListReportCases');
        parent.refresh();
    }

    return  self.active ? `<div><input type="checkbox" checked onclick="self.changeStatus()" style="width: 25px; height: 25px"/> </div>`
        : `<div><input type="checkbox" onclick="self.changeStatus()" style="width: 25px; height: 25px"/> </div>`;
}

lemonade.setComponents({CheckboxActive});