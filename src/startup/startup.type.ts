import { Router } from "express";

export type StartupType<T> = {

    basePath: string;
    // controller: T;
    routes: Router;

}