export class DatePrizeAlreadyAwardedError extends Error{
    constructor(){
        super('DatePrize already awarded.')
    }
}