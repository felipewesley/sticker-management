export abstract class Utils {

    /**
     * Check if a text is `null`, `undefined` or empty (`''`)
     * @param str Text to check
     * @returns {boolean}
     */
    static isNullOrEmpty(str: string): boolean
    {
        return str === undefined || str === null || str === "";
    }
 
    /**
     * Check if a value is `null` or `undefined`
     * @param str Value to check
     * @returns {boolean}
     */
    static isNullOrUndefined(value: string|number|boolean|object): boolean
    {
        return value === undefined || value === null;
    }
 
    /**
     * Get only numbers from string expression
     * @param str Source text
     * @returns {string} A new `string` with only numbers retrieved from arg `str`
     */
    static getNumbers(str: string): string
    {
        if (!str || str === null || str == '')
            return str;

        const matchRes = str.match(/\d/g);

        if (matchRes == null)
            return '';

        return matchRes.join('');
    }
 
    /**
     * Check if properties of these objects are equals
     * @param object1 First object to compare
     * @param object2 Second object to compare
     * @returns Are properties equals
     */
    static propertiesAreEquals<T extends Object>(object1: T, object2: T): boolean
    {
        for (const key in object1) {

            if (object1[key] != object2[key])
                return false;
        }

        for (const key in object2) {

            if (object2[key] != object1[key])
                return false;
        }

        return true;
    }
 
    /**
     * Check if a value is a valid member of a enum struct
     * @param value Value to check
     * @returns {boolean}
     */
    static enumIsDefined<V extends (string | number)>(enumeration: { [key: string|number]: V }, value: V): boolean
    {
        return enumeration[value] != undefined;
    }

}