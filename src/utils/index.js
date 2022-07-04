export const getBless = () => {
    const currentHour = new Date().getHours()
    if (currentHour >= 0 && currentHour < 6) {
        return "Good Night";
    }
    if (currentHour >= 6 && currentHour < 12) {
        return "Good Morning";
    }
    if (currentHour >= 12 && currentHour < 18) {
        return "Good Afternoon";
    }
    if (currentHour >= 18 && currentHour > 0) {
        return "Good Evening";
    }
}