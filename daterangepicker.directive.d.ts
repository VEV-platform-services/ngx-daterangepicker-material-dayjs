import { ViewContainerRef, ComponentFactoryResolver, ElementRef, ChangeDetectorRef, OnInit, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers, EventEmitter, Renderer2 } from '@angular/core';
import { DaterangepickerComponent } from './daterangepicker.component';
import dayjs from 'dayjs';
import { LocaleConfig } from './daterangepicker.config';
import { LocaleService } from './locale.service';
import * as i0 from "@angular/core";
export declare class DaterangepickerDirective implements OnInit, OnChanges, DoCheck {
    viewContainerRef: ViewContainerRef;
    _changeDetectorRef: ChangeDetectorRef;
    private _componentFactoryResolver;
    private _el;
    private _renderer;
    private differs;
    private _localeService;
    private elementRef;
    picker: DaterangepickerComponent;
    private _onChange;
    private _onTouched;
    private _validatorChange;
    private _disabled;
    private _value;
    private localeDiffer;
    minDate: dayjs.Dayjs;
    maxDate: dayjs.Dayjs;
    autoApply: boolean;
    alwaysShowCalendars: boolean;
    showCustomRangeLabel: boolean;
    linkedCalendars: boolean;
    dateLimit: number;
    singleDatePicker: boolean;
    showWeekNumbers: boolean;
    showISOWeekNumbers: boolean;
    showDropdowns: boolean;
    isInvalidDate: Function;
    isCustomDate: Function;
    isTooltipDate: Function;
    showClearButton: boolean;
    customRangeDirection: boolean;
    ranges: any;
    opens: string;
    drops: string;
    firstMonthDayClass: string;
    lastMonthDayClass: string;
    emptyWeekRowClass: string;
    emptyWeekColumnClass: string;
    firstDayOfNextMonthClass: string;
    lastDayOfPreviousMonthClass: string;
    keepCalendarOpeningWithRange: boolean;
    showRangeLabelOnInput: boolean;
    showCancel: boolean;
    lockStartDate: boolean;
    timePicker: Boolean;
    timePicker24Hour: Boolean;
    timePickerIncrement: number;
    timePickerSeconds: Boolean;
    closeOnAutoApply: boolean;
    _locale: LocaleConfig;
    set locale(value: any);
    get locale(): any;
    private _endKey;
    private _startKey;
    set startKey(value: any);
    set endKey(value: any);
    notForChangesProperty: Array<string>;
    get value(): any;
    set value(val: any);
    onChange: EventEmitter<Object>;
    rangeClicked: EventEmitter<Object>;
    datesUpdated: EventEmitter<Object>;
    startDateChanged: EventEmitter<Object>;
    endDateChanged: EventEmitter<Object>;
    get disabled(): boolean;
    constructor(viewContainerRef: ViewContainerRef, _changeDetectorRef: ChangeDetectorRef, _componentFactoryResolver: ComponentFactoryResolver, _el: ElementRef, _renderer: Renderer2, differs: KeyValueDiffers, _localeService: LocaleService, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    onBlur(): void;
    open(event?: any): void;
    hide(e?: any): void;
    toggle(e?: any): void;
    clear(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(state: boolean): void;
    private setValue;
    /**
     * Set position of the calendar
     */
    setPosition(): void;
    inputChanged(e: any): void;
    /**
     * For click outside of the calendar's container
     * @param event event object
     */
    outsideClick(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DaterangepickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DaterangepickerDirective, "input[ngxDaterangepickerMd]", never, { "minDate": { "alias": "minDate"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; "autoApply": { "alias": "autoApply"; "required": false; }; "alwaysShowCalendars": { "alias": "alwaysShowCalendars"; "required": false; }; "showCustomRangeLabel": { "alias": "showCustomRangeLabel"; "required": false; }; "linkedCalendars": { "alias": "linkedCalendars"; "required": false; }; "dateLimit": { "alias": "dateLimit"; "required": false; }; "singleDatePicker": { "alias": "singleDatePicker"; "required": false; }; "showWeekNumbers": { "alias": "showWeekNumbers"; "required": false; }; "showISOWeekNumbers": { "alias": "showISOWeekNumbers"; "required": false; }; "showDropdowns": { "alias": "showDropdowns"; "required": false; }; "isInvalidDate": { "alias": "isInvalidDate"; "required": false; }; "isCustomDate": { "alias": "isCustomDate"; "required": false; }; "isTooltipDate": { "alias": "isTooltipDate"; "required": false; }; "showClearButton": { "alias": "showClearButton"; "required": false; }; "customRangeDirection": { "alias": "customRangeDirection"; "required": false; }; "ranges": { "alias": "ranges"; "required": false; }; "opens": { "alias": "opens"; "required": false; }; "drops": { "alias": "drops"; "required": false; }; "lastMonthDayClass": { "alias": "lastMonthDayClass"; "required": false; }; "emptyWeekRowClass": { "alias": "emptyWeekRowClass"; "required": false; }; "emptyWeekColumnClass": { "alias": "emptyWeekColumnClass"; "required": false; }; "firstDayOfNextMonthClass": { "alias": "firstDayOfNextMonthClass"; "required": false; }; "lastDayOfPreviousMonthClass": { "alias": "lastDayOfPreviousMonthClass"; "required": false; }; "keepCalendarOpeningWithRange": { "alias": "keepCalendarOpeningWithRange"; "required": false; }; "showRangeLabelOnInput": { "alias": "showRangeLabelOnInput"; "required": false; }; "showCancel": { "alias": "showCancel"; "required": false; }; "lockStartDate": { "alias": "lockStartDate"; "required": false; }; "timePicker": { "alias": "timePicker"; "required": false; }; "timePicker24Hour": { "alias": "timePicker24Hour"; "required": false; }; "timePickerIncrement": { "alias": "timePickerIncrement"; "required": false; }; "timePickerSeconds": { "alias": "timePickerSeconds"; "required": false; }; "closeOnAutoApply": { "alias": "closeOnAutoApply"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "_endKey": { "alias": "_endKey"; "required": false; }; "startKey": { "alias": "startKey"; "required": false; }; "endKey": { "alias": "endKey"; "required": false; }; }, { "onChange": "change"; "rangeClicked": "rangeClicked"; "datesUpdated": "datesUpdated"; "startDateChanged": "startDateChanged"; "endDateChanged": "endDateChanged"; }, never, never, false, never>;
}
