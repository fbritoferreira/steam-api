# steam-api
Typesafe wrapper for steam api


## Example

### Get application news
```ts
import { createSteamApiClient, getNewsForApp } from "@fbritoferreira/steam-api";

const client = createSteamApiClient({
  key: Deno.env.get("STEAM_API_KEY") || "",
  format: "json",
});

const news = await getNewsForApp("730", client);

console.log(JSON.stringify(news, null, 2));


```