import { CronBot } from "./types/cronbot";

export const bot: CronBot = {
    identifier: "[HANDLE]",
    password: "use app password!",
    cronJob: {
        scheduleExpression: "* * * * *",
        callback: null,
        startAutomatically: true,
        timeZone: "Europe/Vienna"
    },
    getMessage: async () => {
        const text = "implement logic to return a string";
        return text;
    }
}