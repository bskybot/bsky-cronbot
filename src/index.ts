import { BskyAgent } from '@atproto/api';
import { CronJob } from 'cron';
import { bot } from './botConfig';

const service = "https://bsky.social";


const agent = new BskyAgent({service});
console.info(new Date, `Initialize cronbot ${bot.identifier}`);

async function main(): Promise<void> {
    try {
        if(!agent.session) {
            await agent.login({identifier: bot.identifier, password: bot.password});
            console.info(new Date, `Login cronbot ${bot.identifier}`)
        }
        const text = await bot.getMessage();
        console.info(new Date, `Post cronbot ${bot.identifier}: ${text}`)
        agent.post({text});
    } catch (e) {
        console.warn(new Date, `An error occured with cronbot ${bot.identifier}: ${e}`);
    }
}

const job = new CronJob(bot.cronJob.scheduleExpression, main, bot.cronJob.callback, bot.cronJob.startAutomatically, bot.cronJob.timeZone); 

job.start();