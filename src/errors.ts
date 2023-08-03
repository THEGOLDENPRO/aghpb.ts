interface APIErrorDict {
    error: string;
    message: string;
}

class APIError extends Error {
    name: string;
    message: string;

    constructor(errorDict: APIErrorDict) {
        super();

        this.name = errorDict["error"];
        this.message = errorDict["message"];
    }
}

export { APIError }