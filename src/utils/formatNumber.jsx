export const formatNumber = (num) => {
    if (num === null || num === undefined) return '۰';
    return Number(num).toLocaleString('fa-IR');
};
