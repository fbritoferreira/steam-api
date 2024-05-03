import { SteamApiClient } from "../client";
import { AppNewsResponse } from "./response";

/**
 * Retrieves news items for a specific Steam application.
 * @param {string} appId - The ID of the Steam application.
 * @param {SteamApiClient} client - The SteamApiClient instance used to make the API request.
 * @returns {Promise<AppNewsResponse>} A Promise resolving to the response containing news items for the app.
 */
export async function getNewsForApp(
  appId: string,
  client: SteamApiClient,
): Promise<AppNewsResponse> {
  try {
    const url = client.buildUrl(
      `ISteamNews/GetNewsForApp/v0002/?appid=${appId}`,
    );

    const result = await fetch(url);
    const data = await result.json();
    return data as AppNewsResponse;
  } catch (error) {
    console.error("Error fetching news for app", error);
    throw error;
  }
}
