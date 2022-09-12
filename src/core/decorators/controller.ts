type ControllerDecoratorConfig = { route: string; };

export function Controller(config: ControllerDecoratorConfig) {

    return (constructor: Function): void => { }
}