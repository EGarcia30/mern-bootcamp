/**
 * Basic JSON Response for Controllers
 */
export type BasicResponse ={
    message: string
}

/**
 * Goodbye JSON response for controllers
 */
export type GoodbyeResponse = {
    message: string,
    date: Date
}

/**
 * Error JSON Response for Controllers
 */
export type ErrorResponse = {
    error: string,
    message: string
}
