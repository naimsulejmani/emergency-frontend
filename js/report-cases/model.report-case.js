class ReportCase {
    constructor(
        id,
        description,
        caseType,
        address,
        reporter,
        date,
        createdAt = new Date()
    ) {
        this.id = id;
        this.description = description;
        this.caseType = caseType;
        this.address = address;
        this.reporter = reporter;
        this.date = date;
        this.createdAt = createdAt;
    }
}
