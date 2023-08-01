export const removeDuplicateParts = (text, duplicatesToKeep = 1) => {
    const parts = text.split(/\s+/);
    const partCounts = {};

    const reducedParts = parts.filter(part => {
        partCounts[part] = (partCounts[part] || 0) + 1;
        return partCounts[part] <= duplicatesToKeep;
    });

    return reducedParts.join(" ");
};
