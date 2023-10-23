import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DaterangepickerComponent } from './daterangepicker.component';
import { DaterangepickerDirective } from './daterangepicker.directive';
import { LOCALE_CONFIG } from './daterangepicker.config';
import { LocaleService } from './locale.service';
import * as i0 from "@angular/core";
export class NgxDaterangepickerMd {
    constructor() {
    }
    static forRoot(config = {}) {
        return {
            ngModule: NgxDaterangepickerMd,
            providers: [
                { provide: LOCALE_CONFIG, useValue: config },
                { provide: LocaleService, useClass: LocaleService, deps: [LOCALE_CONFIG] }
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: NgxDaterangepickerMd, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.3", ngImport: i0, type: NgxDaterangepickerMd, declarations: [DaterangepickerComponent,
            DaterangepickerDirective], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule], exports: [DaterangepickerComponent,
            DaterangepickerDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: NgxDaterangepickerMd, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: NgxDaterangepickerMd, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DaterangepickerComponent,
                        DaterangepickerDirective
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    providers: [],
                    exports: [
                        DaterangepickerComponent,
                        DaterangepickerDirective
                    ]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlcmFuZ2VwaWNrZXIvZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF3QixRQUFRLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFrQmpELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0I7SUFDQSxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUF1QixFQUFFO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztnQkFDM0MsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUM7YUFDMUU7U0FDRixDQUFDO0lBQ0osQ0FBQzt1R0FYVSxvQkFBb0I7d0dBQXBCLG9CQUFvQixpQkFkekIsd0JBQXdCO1lBQ3hCLHdCQUF3QixhQUd4QixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQixhQUluQix3QkFBd0I7WUFDeEIsd0JBQXdCO3dHQUduQixvQkFBb0IsWUFWekIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7OzJGQVFkLG9CQUFvQjtrQkFoQmhDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDdEI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFO3dCQUNMLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3FCQUMzQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyAgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGF0ZXJhbmdlcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2NhbGVDb25maWcsIExPQ0FMRV9DT05GSUcgfSBmcm9tICcuL2RhdGVyYW5nZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4vbG9jYWxlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQsXG4gICAgICAgIERhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50LFxuICAgICAgICBEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neERhdGVyYW5nZXBpY2tlck1kIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBMb2NhbGVDb25maWcgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4RGF0ZXJhbmdlcGlja2VyTWQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neERhdGVyYW5nZXBpY2tlck1kLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTE9DQUxFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIHsgcHJvdmlkZTogTG9jYWxlU2VydmljZSwgdXNlQ2xhc3M6IExvY2FsZVNlcnZpY2UsIGRlcHM6IFtMT0NBTEVfQ09ORklHXX1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=