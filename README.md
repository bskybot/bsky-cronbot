# Bsky Cronbot #

Run a bot that posts based on a cron job with a customizable message function.

## Config ##
Edit the `botConfig.ts` file to your needs.
```typescript
export const bot: CronBot = {
    identifier: "[HANDLE]",
    password: "use app password!",
    cronJob: {
        scheduleExpression: "* * * * *", // a cron job expression
        callback: null, // implement optional logic after the cronjob
        startAutomatically: true,
        timeZone: "Europe/Vienna"
    },
    getMessage: async () => {
        const text = "implement logic to return a string";
        return text;
    }
}
```

## Install & Build & run##
```bash
pnpm i
```

### Run without build ###
```bash
pnpm start
```
### Build & Run ###
```bash
pnpm build
node dist/index.js
```