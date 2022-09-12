import { IComparable } from "../interfaces/comparable.interface";

/**
 * ### Globally Unique Identifier - Guid
 * @class Guid
 */
export class Guid implements IComparable<Guid> {

    /**
     * Creates a new guid
     * @returns {Guid}
     */
    public static newGuid(): Guid {

        return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = (c == 'x') ? r : (r & 0x3 | 0x8);

            return v.toString(16);
        }));
    }

    /**
     * Get a empty Guid
     * @returns {string}
     */
    public static get empty(): string {
        return '00000000-0000-0000-0000-000000000000';
    }

    /**
     * Test if a Guid is valid
     * @param guid
     * @returns {boolean}
     */
    public static isValid(str: string): boolean {
        const validRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return validRegex.test(str);
    }

    private readonly value: string = this.empty;

    constructor(value?: string) {

        if (value) {
            if (Guid.isValid(value)) {
                this.value = value.toLowerCase();
            }
        }
    }

    /**
     * Get a empty Guid
     * @returns {string}
     */
    public get empty(): string {
        return Guid.empty;
    }

    /**
     * @returns {string} Guid value as `string`
     */
    public toString(): string {
        return this.value;
    }

    /**
     * @returns {string} Guid value as `JSON`
     */
    public toJSON(): string {
        return this.value;
    }

    public equals(guid: Guid): boolean {
        return this.toString() == guid?.toString();
    }

}
