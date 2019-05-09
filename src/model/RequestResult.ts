export class RequestResult<T> {
    result: T
    state: boolean

    constructor(state: boolean, result: T) {
        this.state = state
        this.result = result
    }
}
