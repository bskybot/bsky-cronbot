import { AtpAgent } from '@atproto/api';
import { CronJob } from 'cron';
import { bot } from './botConfig';

const service = "https://bsky.social";


const agent = new AtpAgent({service});
console.info(new Date, `Initialize cronbot ${bot.identifier}`);

async function main(): Promise<void> {
    try {
        if(!agent.session) {
            await agent.login({identifier: bot.identifier, password: bot.password});
            console.info(new Date, `Login cronbot ${bot.identifier}`)
        }
        await bot.cronAction(agent);
    } catch (e) {
        console.warn(new Date, `An error occured with cronbot ${bot.identifier}: ${e}`);
    }
}

const job = new CronJob(bot.cronJob.scheduleExpression, main, bot.cronJob.callback, bot.cronJob.startAutomatically, bot.cronJob.timeZone); 

job.start();