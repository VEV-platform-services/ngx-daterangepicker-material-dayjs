import { Injectable, Inject } from '@angular/core';
import { LOCALE_CONFIG, DefaultLocaleConfig } from './daterangepicker.config';
import * as i0 from "@angular/core";
export class LocaleService {
    _config;
    constructor(_config) {
        this._config = _config;
    }
    get config() {
        if (!this._config) {
            return DefaultLocaleConfig;
        }
        return { ...DefaultLocaleConfig, ...this._config };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: LocaleService, deps: [{ token: LOCALE_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: LocaleService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: LocaleService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0ZXJhbmdlcGlja2VyL2xvY2FsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7O0FBRzVGLE1BQU0sT0FBTyxhQUFhO0lBQ21CO0lBQTNDLFlBQTJDLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFBRyxDQUFDO0lBRXBFLElBQUksTUFBTTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sbUJBQW1CLENBQUM7U0FDNUI7UUFFRCxPQUFPLEVBQUMsR0FBSSxtQkFBbUIsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQztJQUNwRCxDQUFDO3VHQVRVLGFBQWEsa0JBQ0osYUFBYTsyR0FEdEIsYUFBYTs7MkZBQWIsYUFBYTtrQkFEekIsVUFBVTs7MEJBRUksTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMT0NBTEVfQ09ORklHLCBEZWZhdWx0TG9jYWxlQ29uZmlnLCBMb2NhbGVDb25maWcgfSBmcm9tICcuL2RhdGVyYW5nZXBpY2tlci5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0NPTkZJRykgcHJpdmF0ZSBfY29uZmlnOiBMb2NhbGVDb25maWcpIHt9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIERlZmF1bHRMb2NhbGVDb25maWc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsuLi4gRGVmYXVsdExvY2FsZUNvbmZpZywgLi4udGhpcy5fY29uZmlnfTtcbiAgfVxufVxuIl19