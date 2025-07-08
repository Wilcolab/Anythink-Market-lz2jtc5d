function toKebabCase(input) {
    if (typeof input !== 'string') return '';
    // Normalize: lowercase and trim
    const normalized = input.toLowerCase().trim();
    // Split by spaces, underscores, or hyphens (one or more)
    const words = normalized.split(/[\s_-]+/).filter(Boolean);
    // Join with hyphens
    return words.join('-');
}

// Example Usage:
// console.log(toKebabCase("Hello World")); // "hello-world"
// console.log(toKebabCase("convert_this-string")); // "convert-this-string"
// console.log(toKebabCase("  Mixed CASE and SPACE ")); // "mixed-case-and-space"