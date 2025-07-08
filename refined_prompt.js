/**
 * Converts a given string to camelCase.
 *
 * - Trims leading and trailing whitespace.
 * - Removes all non-alphanumeric characters except for spaces, hyphens, and underscores.
 * - Splits the string into words using spaces, hyphens, or underscores as separators.
 * - Lowercases the first word and capitalizes the first letter of each subsequent word.
 * - Joins the words together without any separator.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string. Returns an empty string for invalid input.
 *
 * @example
 * toCamelCase("hello-world"); // "helloWorld"
 * toCamelCase("Convert_to camel-case"); // "convertToCamelCase"
 * toCamelCase("  multiple   spaces "); // "multipleSpaces"
 * toCamelCase(""); // ""
 * toCamelCase(123); // ""
 */

/**
 * Converts a given string to dot.case.
 *
 * - Trims leading and trailing whitespace.
 * - Removes all non-alphanumeric characters except for spaces, hyphens, and underscores.
 * - Splits the string into words using spaces, hyphens, or underscores as separators.
 * - Lowercases all words.
 * - Joins the words together using a dot (.) as the separator.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string. Returns an empty string for invalid input.
 *
 * @example
 * toDotCase("hello-world"); // "hello.world"
 * toDotCase("Convert_to dot-case"); // "convert.to.dot.case"
 * toDotCase("  multiple   spaces "); // "multiple.spaces"
 * toDotCase(""); // ""
 * toDotCase(123); // ""
 */
function toCamelCase(input) {
    if (typeof input !== 'string') return '';
    // Trim whitespace
    let str = input.trim();
    if (!str) return '';

    // Remove non-alphanumeric except separators (space, -, _)
    str = str.replace(/[^a-zA-Z0-9\s\-_]/g, '');

    // Split by one or more separators (space, -, _)
    const words = str.split(/[\s\-_]+/).filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase first word, capitalize the rest
    return words
        .map((word, idx) =>
            idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

// Example usage:
// console.log(toCamelCase("hello-world")); // "helloWorld"
// console.log(toCamelCase("Convert_to camel-case")); // "convertToCamelCase"
// console.log(toCamelCase("  multiple   spaces ")); // "multipleSpaces"
// console.log(toCamelCase("")); // ""
// console.log(toCamelCase(123)); // ""
function toDotCase(input) {
    if (typeof input !== 'string') return '';
    // Trim whitespace
    let str = input.trim();
    if (!str) return '';

    // Remove non-alphanumeric except separators (space, -, _)
    str = str.replace(/[^a-zA-Z0-9\s\-_]/g, '');

    // Split by one or more separators (space, -, _)
    const words = str.split(/[\s\-_]+/).filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase all words and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase("hello-world")); // "hello.world"
// console.log(toDotCase("Convert_to dot-case")); // "convert.to.dot.case"
// console.log(toDotCase("  multiple   spaces ")); // "multiple.spaces"
// console.log(toDotCase("")); // ""
// console.log(toDotCase(123)); // ""
