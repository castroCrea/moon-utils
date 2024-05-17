"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchObject = void 0;
// Function to search into the object using a string path
const searchObject = ({ obj, path }) => {
    const keys = path.split('.'); // Split the path string into an array of keys
    let current = obj;
    for (const key of keys) {
        try {
            const findKey = Object.keys(current).find(k => k.toLowerCase() === key.toLowerCase());
            if (current && findKey) {
                current = current[findKey];
            }
            else {
                return undefined;
            } // Key doesn't exist in the object
        }
        catch (e) {
            console.log({ e });
            return undefined;
        }
    }
    return current; // Return the value found at the end of the path
};
exports.searchObject = searchObject;
//# sourceMappingURL=searchObject.js.map