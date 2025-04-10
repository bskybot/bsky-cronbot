import { CronBot, useCronBotAgent } from "bskybot";

const bot: CronBot = {
    username: "USERNAME",
    identifier: "[HANDLE]",
    password: "use app password!",
    service: "https://bsky.social",
    cronJob: {
        scheduleExpression: "* * * * *",
        callback: null,
        timeZone: "Europe/Vienna"
    },
    action: async (agent) => {
        const text = "implement logic to return a string";
        console.info(new Date, `Post cronbot ${bot.identifier}: ${text}`)
        agent.post({text});
    }
}

const run = async (): Promise<void> => {
    useCronBotAgent(bot);
}

run();