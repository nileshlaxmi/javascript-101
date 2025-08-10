// WAP to merge two arrays and remove duplicate items

const mergeAndRemoveDuplicates = (ar1, ar2) => {
    if (Array.isArray(ar1) && Array.isArray(ar2)) {
        const mergeAr = [...ar1, ...ar2]
        const uniqueAr = [...new Set(mergeAr)]
        return uniqueAr
        // return Object.assign(obj1, obj2)
    } else
        return "Not an array type"
};

console.log(mergeAndRemoveDuplicates([1, 2, 3, 4], [4, 5, 6, 7]));
console.log(mergeAndRemoveDuplicates([]));
console.log(mergeAndRemoveDuplicates([]));
console.log(mergeAndRemoveDuplicates("xyz"));