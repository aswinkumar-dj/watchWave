export const PROFILE_URL =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
export const HAMBURGER_ICON_URL = "http://www.w3.org/2000/svg";
export const YT_API_KEY = import.meta.env.VITE_YT_API_KEY;
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&key=" +
  YT_API_KEY;
export function formatNumber(num) {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num;
}
