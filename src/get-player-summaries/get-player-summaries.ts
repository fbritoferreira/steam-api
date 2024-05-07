import { SteamApiClient } from "../client";
import { GetPlayerSummariesResponse } from "./response";

/**
 * Retrieves user information for a list of Steam accounts.
 * @param {SteamApiClient} client - The SteamApiClient instance used to make the API request.
 * @param {string | string[]} steamIds - The ID of the Steam account to search.
 * @returns {Promise<GetPlayerSummariesResponse>} A Promise resolving to the response containing the user information.
 */
export async function getPlayerSummaries(
  client: SteamApiClient,
  steamIds: string | string[],
): Promise<GetPlayerSummariesResponse> {
  try {
    const ids = Array.isArray(steamIds) ? steamIds.join(",") : steamIds;
    const url = client.buildUrl(
      `ISteamUser/GetPlayerSummaries/v0002/?steamids=${ids}`,
    );

    const result = await fetch(url);
    const data = await result.json();
    return data as GetPlayerSummariesResponse;
  } catch (error) {
    console.error("Error fetching news for app", error);
    throw error;
  }
}
