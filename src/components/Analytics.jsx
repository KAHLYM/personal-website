import { getAnalytics, logEvent } from "firebase/analytics";

export function LogEventExternalLink(itemId) {
    const analytics = getAnalytics();
    logEvent(analytics, 'select_content', {
        content_type: "external_link",
        item_id: itemId
    });
}

export function LogEventTheme(itemId) {
    const analytics = getAnalytics();
    logEvent(analytics, 'select_content', {
        content_type: "theme",
        item_id: itemId
    });
}
