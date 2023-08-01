export const removeDuplicateParts = (text, duplicatesToKeep = 1) => {
    const parts = text.split(/\s+/);
    let previousPart = null;
    let currentCount = 0;

    const reducedParts = parts.filter(part => {
        if (part !== previousPart) {
            currentCount = 1;
            previousPart = part;
        } else {
            currentCount++;
        }
        return currentCount <= duplicatesToKeep;
    });

    return reducedParts.join(" ");
};
