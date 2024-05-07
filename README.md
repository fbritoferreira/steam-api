# @fbritoferreira/steam-api

__Typesafe wrapper for steam api__


## Example

### Get application news
```ts
import { createSteamApiClient, getNewsForApp } from "@fbritoferreira/steam-api";

const client = createSteamApiClient({
  key: Deno.env.get("STEAM_API_KEY") || "",
  format: "json",
});

const news = await getNewsForApp(client, "730");

console.log(JSON.stringify(news, null, 2));
```

### Get Player Summaries
```ts
import { createSteamApiClient, getPlayerSummaries } from "@fbritoferreira/steam-api";

const client = createSteamApiClient({
  key: Deno.env.get("STEAM_API_KEY") || "",
  format: "json",
});

const singleUser = await getPlayerSummaries(client, "76561197960435530");
const multipleUsers = await getPlayerSummaries(client, ["76561197960435530", "76561197960435530"]);

console.log(JSON.stringify(singleUser, null, 2));
console.log(JSON.stringify(multipleUsers, null, 2));
```