import { Request, Response, NextFunction } from "express";
import { HttpStatusCode } from "../../common/types/enums/http-status-code.enum";
import { NotFoundError } from "../errors/not-found.error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {

    const error = new Error();

    error.message = err.message;
    error.stack = err.stack;

    // Resource not found error
    if (err instanceof NotFoundError)
    {
        res.status(HttpStatusCode.BadRequest).send(error).json();
        return next(error);
    }

    res.status(HttpStatusCode.InternalServerError).send(error).json();
    return next(err);
};