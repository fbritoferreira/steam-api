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