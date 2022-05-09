class Card extends Payment {
    constructor(id, date, number, ccv) {
        super(id)
        this.date = date;
        this.number = number;
        this.ccv = ccv;
    }
}