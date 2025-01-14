import { AtpAgent } from "@atproto/api";

type Cron = {
    scheduleExpression: string;
    callback: (() => void) | null;
    startAutomatically: boolean;
    timeZone: string;
}

export type CronBot = {
    identifier: string;
    password: string;
    cronJob: Cron;
    cronAction: (agent: AtpAgent) => Promise<void>;
}