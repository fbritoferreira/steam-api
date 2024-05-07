/**
 * Represents the response object from a request to get player summaries.
 */
export interface GetPlayerSummariesResponse {
  /** The response containing player information. */
  response: GetPlayerSummariesPlayerResponse;
}

/**
 * Represents the response object containing player information.
 */
export interface GetPlayerSummariesPlayerResponse {
  /** An array of player objects. */
  players: Player[];
}

/**
 * Represents a player's profile information.
 */
export interface Player {
  /** The unique identifier for the player's Steam account. */
  steamid: string;
  /** An integer indicating the community visibility state of the player's profile. */
  communityvisibilitystate: number;
  /** An integer indicating the profile state of the player's Steam profile. */
  profilestate: number;
  /** The persona (display) name of the player. */
  personaname: string;
  /** The URL to the player's Steam profile. */
  profileurl: string;
  /** The URL of the player's small-sized avatar. */
  avatar: string;
  /** The URL of the player's medium-sized avatar. */
  avatarmedium: string;
  /** The URL of the player's full-sized avatar. */
  avatarfull: string;
  /** A hash value associated with the player's avatar. */
  avatarhash: string;
  /** An integer indicating the persona state of the player's Steam account. */
  personastate: number;
  /** The real name associated with the player's Steam account. */
  realname: string;
  /** The unique identifier of the player's primary group (clan). */
  primaryclanid: string;
  /** The Unix timestamp when the Steam account was created. */
  timecreated: number;
  /** Flags indicating additional information about the player's persona state. */
  personastateflags: number;
  /** The country code associated with the player's location. */
  loccountrycode: string;
  /** The state code associated with the player's location. */
  locstatecode: string;
  /** The ID of the city associated with the player's location. */
  loccityid: number;
}
