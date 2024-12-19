import { BskyAgent } from '@atproto/api';
import { CronJob } from 'cron';
import { bot } from './botConfig';

const service = "https://bsky.social";


const agent = new BskyAgent({service});

async function main(): Promise<void> {
    if(!agent.session) {
        await agent.login({identifier: bot.identifier, password: bot.password});
    }
    const text = await bot.getMessage();
    agent.post({text});
}

// Run this on a cron job
const scheduleExpression = '12 13 * * *';

const job = new CronJob(bot.cronJob.scheduleExpression, main, bot.cronJob.callback, bot.cronJob.startAutomatically, bot.cronJob.timeZone); 

job.start();