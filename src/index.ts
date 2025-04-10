import { useCronBotAgent } from "bskybot";
import {bot} from "./botConfig"

const run = async (): Promise<void> => {
    useCronBotAgent(bot);
}

run();