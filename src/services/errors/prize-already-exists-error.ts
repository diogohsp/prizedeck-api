export class PrizeAlreadyExistsError extends Error {
    constructor(){
        super('Prize already exists.')
    }
}