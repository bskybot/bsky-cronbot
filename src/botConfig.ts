import { AtpAgent } from "@atproto/api";
import { CronBot } from "./cronbot";

export const bot: CronBot = {
    identifier: "[HANDLE]",
    password: "use app password!",
    cronJob: {
        scheduleExpression: "* * * * *",
        callback: null,
        startAutomatically: true,
        timeZone: "Europe/Vienna"
    },
    cronAction: async (agent: AtpAgent) => {
        const text = "implement logic to return a string";
        console.info(new Date, `Post cronbot ${bot.identifier}: ${text}`)
        agent.post({text});
    }
}