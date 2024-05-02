/**
 * This module contains related to the base steam api client factory.
 * @module
 *
 * ```ts
 * import { createSteamApiClient } from "@fbritoferreira/steam-api";
 *
 * const client = createSteamApiClient({key: process.env.STEAM_API_KEY, format: "json"});
 * ```
 */

/**
 * Base URL for Steam API requests.
 * https://developer.valvesoftware.com/wiki/Main_Page
 */
export const STEAM_API_BASE_URL = "http://api.steampowered.com/";

/**
 * Type for specifying the output format of Steam API responses.
 */
export type STEAM_API_OUTPUT_FORMAT = "json" | "xml" | "vdf";

/**
 * Configuration interface for Steam API.
 */
export interface SteamApiConfig {
  /**
   * API key for accessing Steam API.
   */
  key: string;
  /**
   * Desired output format for API responses.
   */
  format: STEAM_API_OUTPUT_FORMAT;
}

/**
 * Interface representing a Steam API client.
 */
export interface SteamApiClient {
  /**
   * API key for accessing Steam API.
   */
  key: string;
  /**
   * Desired output format for API responses.
   */
  format: STEAM_API_OUTPUT_FORMAT;
  /**
   * Method to set the output format for API responses.
   * @param format The desired output format ('json', 'xml', or 'vdf').
   */
  setFormat(format: STEAM_API_OUTPUT_FORMAT): void;
  /**
   * Method to set the API key for accessing Steam API.
   * @param key The API key.
   */
  setKey(key: string): void;
}

/**
 * Factory function to create a new instance of Steam API client.
 * @param config Configuration object for the API client.
 * @returns An instance of Steam API client.
 */
export function createSteamApiClient(config: SteamApiConfig): SteamApiClient {
  return {
    /**
     * API key for accessing Steam API.
     */
    key: config.key,
    /**
     * Desired output format for API responses.
     */
    format: config.format,
    /**
     * Method to set the output format for API responses.
     * @param format The desired output format ('json', 'xml', or 'vdf').
     */
    setFormat(format: STEAM_API_OUTPUT_FORMAT) {
      this.format = format;
    },
    /**
     * Method to set the API key for accessing Steam API.
     * @param key The API key.
     */
    setKey(key: string) {
      this.key = key;
    },
  };
}
