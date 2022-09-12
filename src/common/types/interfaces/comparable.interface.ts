/**
 * ### IComparable
 * @interface IComparable<T> Compare two objects
 */
export interface IComparable<T> {

    /**
     * Compares the class instance with the received value
     * @param value Value to be compared with the instance of the class that implements this method
     * @returns Boolean representing the equality state of objects
     */
    equals(value: T): boolean;

}
