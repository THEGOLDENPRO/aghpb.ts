interface APIErrorInterface {
    error: string;
    message: string;
}

export class APIError extends Error {
    name: string;
    message: string;

    constructor(apiError: APIErrorInterface) {
        super();

        this.name = apiError.error;
        this.message = apiError.message;
    }
}