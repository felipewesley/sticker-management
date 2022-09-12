/**
 * @type
 *
 * Dictionary representation - Simple object with one or more custom keys
 * - Object key should be a string or a number
 * - Value of key is a generic type
 */
export type Dictionary<TKey extends (string | number), TValue> = {
    [key in TKey]: TValue;
};
