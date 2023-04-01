export const get_Date_Month = () => {
    const Months = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

    const currentDay = new Date()
    return `${currentDay.getDate()} ${Months[currentDay.getMonth()]} ${currentDay.getFullYear()}`
}