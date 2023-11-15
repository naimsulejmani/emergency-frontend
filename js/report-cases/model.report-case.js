class ReportCase {
    constructor(
        id,
        description,
        caseType,
        address,
        reporter,
        date,
        active = true,
        createdAt = new Date()
    ) {
        this.id = id;
        this.description = description;
        this.caseType = caseType;
        this.address = address;
        this.reporter = reporter;
        this.date = date;
        this.active = active;
        this.createdAt = createdAt;
    }
}
