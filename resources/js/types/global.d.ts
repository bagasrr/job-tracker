import { AxiosInstance } from 'axios';
import ziggyRoute, { Config as ZiggyConfig } from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    // Ini mantra ajaibnya biar route() gak merah
    var route: typeof ziggyRoute;
    var Ziggy: ZiggyConfig;
}
