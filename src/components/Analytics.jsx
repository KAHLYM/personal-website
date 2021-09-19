import { getAnalytics, logEvent } from "firebase/analytics";

export function LogEventExternalLink(item_id) {
    const analytics = getAnalytics();
    logEvent(analytics, 'select_content', {
        content_type: "external_link",
        item_id: item_id
    });
}