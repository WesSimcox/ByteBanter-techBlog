// Helper for formatting dates and times
module.exports = {
    formatTime: (date) => {
        return date.toLocaleTimeString();
    },
    formatDate: (date) => {
        const newDate = new Date(date);
        const month = newDate.getMonth() + 1;
        const day = newDate.getDate();
        const year = newDate.getFullYear() + 5;
        return `${month}/${day}/${year}`;
    }
};