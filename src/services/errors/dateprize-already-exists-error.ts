export class DatePrizeAlreadyExistsError extends Error{
    constructor(){
        super('DatePrize already exists.')
    }
}