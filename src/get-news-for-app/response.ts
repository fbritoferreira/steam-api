/**
 * Represents the response format for retrieving news items for an app.
 */
export interface AppNewsResponse {
  /**
   * Contains information about the news items for an app.
   */
  appnews: Appnews;
}

/**
 * Represents the structure of news items for an app.
 */
export interface Appnews {
  /**
   * The unique identifier of the application.
   */
  appid: number;
  /**
   * An array of news items.
   */
  newsitems: Newsitem[];
  /**
   * The total count of news items available for the app.
   */
  count: number;
}

/**
 * Represents a single news item.
 */
export interface Newsitem {
  /**
   * The unique identifier of the news item.
   */
  gid: string;
  /**
   * The title of the news item.
   */
  title: string;
  /**
   * The URL of the news item.
   */
  url: string;
  /**
   * Indicates whether the URL is external.
   */
  is_external_url: boolean;
  /**
   * The author of the news item.
   */
  author: string;
  /**
   * The content of the news item.
   */
  contents: string;
  /**
   * The label of the feed.
   */
  feedlabel: string;
  /**
   * The date of the news item.
   */
  date: number;
  /**
   * The name of the feed.
   */
  feedname: string;
  /**
   * The type of the feed.
   */
  feed_type: number;
  /**
   * The application ID associated with the news item.
   */
  appid: number;
}
