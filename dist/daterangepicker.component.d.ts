import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import dayjs from 'dayjs';
import { LocaleConfig } from './daterangepicker.config';
import { LocaleService } from './locale.service';
import * as i0 from "@angular/core";
export declare enum SideEnum {
    left = "left",
    right = "right"
}
export declare class DaterangepickerComponent implements OnInit {
    private el;
    private _ref;
    private _localeService;
    private _old;
    chosenLabel: string;
    calendarVariables: {
        left: any;
        right: any;
    };
    tooltiptext: any[];
    timepickerVariables: {
        left: any;
        right: any;
    };
    daterangepicker: {
        start: UntypedFormControl;
        end: UntypedFormControl;
    };
    applyBtn: {
        disabled: boolean;
    };
    startDate: dayjs.Dayjs;
    endDate: dayjs.Dayjs;
    dateLimit: number;
    sideEnum: typeof SideEnum;
    minDate: dayjs.Dayjs;
    maxDate: dayjs.Dayjs;
    autoApply: Boolean;
    singleDatePicker: Boolean;
    showDropdowns: Boolean;
    showWeekNumbers: Boolean;
    showISOWeekNumbers: Boolean;
    linkedCalendars: Boolean;
    autoUpdateInput: Boolean;
    alwaysShowCalendars: Boolean;
    maxSpan: Boolean;
    lockStartDate: Boolean;
    timePicker: Boolean;
    timePicker24Hour: Boolean;
    timePickerIncrement: number;
    timePickerSeconds: Boolean;
    showClearButton: Boolean;
    firstMonthDayClass: string;
    lastMonthDayClass: string;
    emptyWeekRowClass: string;
    emptyWeekColumnClass: string;
    firstDayOfNextMonthClass: string;
    lastDayOfPreviousMonthClass: string;
    _locale: LocaleConfig;
    set locale(value: any);
    get locale(): any;
    _ranges: any;
    set ranges(value: any);
    get ranges(): any;
    showCustomRangeLabel: boolean;
    showCancel: boolean;
    keepCalendarOpeningWithRange: boolean;
    showRangeLabelOnInput: boolean;
    customRangeDirection: boolean;
    chosenRange: string;
    rangesArray: Array<any>;
    isShown: Boolean;
    inline: boolean;
    leftCalendar: any;
    rightCalendar: any;
    showCalInRanges: Boolean;
    nowHoveredDate: any;
    pickingDate: boolean;
    options: any;
    drops: string;
    opens: string;
    closeOnAutoApply: boolean;
    choosedDate: EventEmitter<Object>;
    rangeClicked: EventEmitter<Object>;
    datesUpdated: EventEmitter<Object>;
    startDateChanged: EventEmitter<Object>;
    endDateChanged: EventEmitter<Object>;
    pickerContainer: ElementRef;
    constructor(el: ElementRef, _ref: ChangeDetectorRef, _localeService: LocaleService);
    ngOnInit(): void;
    renderRanges(): void;
    renderTimePicker(side: SideEnum): void;
    renderCalendar(side: SideEnum): void;
    setStartDate(startDate: any): void;
    setEndDate(endDate: any): void;
    isInvalidDate(date: any): boolean;
    isCustomDate(date: any): boolean;
    isTooltipDate(date: any): string;
    updateView(): void;
    updateMonthsInView(): void;
    /**
     *  This is responsible for updating the calendars
     */
    updateCalendars(): void;
    updateElement(): void;
    remove(): void;
    /**
     * this should calculate the label
     */
    calculateChosenLabel(): void;
    clickApply(e?: any): void;
    clickCancel(e: any): void;
    /**
     * called when month is changed
     * @param monthEvent get value in event.target.value
     * @param side left or right
     */
    monthChanged(monthEvent: any, side: SideEnum): void;
    /**
     * called when year is changed
     * @param yearEvent get value in event.target.value
     * @param side left or right
     */
    yearChanged(yearEvent: any, side: SideEnum): void;
    /**
     * called when time is changed
     * @param timeEvent  an event
     * @param side left or right
     */
    timeChanged(timeEvent: any, side: SideEnum): void;
    /**
     *  call when month or year changed
     * @param month month number 0 -11
     * @param year year eg: 1995
     * @param side left or right
     */
    monthOrYearChanged(month: number, year: number, side: SideEnum): void;
    /**
     * Click on previous month
     * @param side left or right calendar
     */
    clickPrev(side: SideEnum): void;
    /**
     * Click on next month
     * @param side left or right calendar
     */
    clickNext(side: SideEnum): void;
    /**
     * When hovering a date
     * @param e event: get value by e.target.value
     * @param side left or right
     * @param row row position of the current date clicked
     * @param col col position of the current date clicked
     */
    hoverDate(e: any, side: SideEnum, row: number, col: number): void;
    /**
     * When selecting a date
     * @param e event: get value by e.target.value
     * @param side left or right
     * @param row row position of the current date clicked
     * @param col col position of the current date clicked
     */
    clickDate(e: any, side: SideEnum, row: number, col: number): void;
    /**
     *  Click on the custom range
     * @param e: Event
     * @param label
     */
    clickRange(e: any, label: any): void;
    show(e?: any): void;
    hide(e?: any): void;
    /**
     * handle click on all element in the component, useful for outside of click
     * @param e event
     */
    handleInternalClick(e: any): void;
    /**
     * update the locale options
     * @param locale
     */
    updateLocale(locale: any): void;
    /**
     *  clear the daterange picker
     */
    clear(): void;
    /**
     * Find out if the selected range should be disabled if it doesn't
     * fit into minDate and maxDate limitations.
     */
    disableRange(range: any): any;
    /**
     *
     * @param date the date to add time
     * @param side left or right
     */
    private _getDateWithTime;
    /**
     *  build the locale config
     */
    private _buildLocale;
    private _buildCells;
    static ɵfac: i0.ɵɵFactoryDeclaration<DaterangepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DaterangepickerComponent, "ngx-daterangepicker-material", never, { "startDate": { "alias": "startDate"; "required": false; }; "endDate": { "alias": "endDate"; "required": false; }; "dateLimit": { "alias": "dateLimit"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; "autoApply": { "alias": "autoApply"; "required": false; }; "singleDatePicker": { "alias": "singleDatePicker"; "required": false; }; "showDropdowns": { "alias": "showDropdowns"; "required": false; }; "showWeekNumbers": { "alias": "showWeekNumbers"; "required": false; }; "showISOWeekNumbers": { "alias": "showISOWeekNumbers"; "required": false; }; "linkedCalendars": { "alias": "linkedCalendars"; "required": false; }; "autoUpdateInput": { "alias": "autoUpdateInput"; "required": false; }; "alwaysShowCalendars": { "alias": "alwaysShowCalendars"; "required": false; }; "maxSpan": { "alias": "maxSpan"; "required": false; }; "lockStartDate": { "alias": "lockStartDate"; "required": false; }; "timePicker": { "alias": "timePicker"; "required": false; }; "timePicker24Hour": { "alias": "timePicker24Hour"; "required": false; }; "timePickerIncrement": { "alias": "timePickerIncrement"; "required": false; }; "timePickerSeconds": { "alias": "timePickerSeconds"; "required": false; }; "showClearButton": { "alias": "showClearButton"; "required": false; }; "firstMonthDayClass": { "alias": "firstMonthDayClass"; "required": false; }; "lastMonthDayClass": { "alias": "lastMonthDayClass"; "required": false; }; "emptyWeekRowClass": { "alias": "emptyWeekRowClass"; "required": false; }; "emptyWeekColumnClass": { "alias": "emptyWeekColumnClass"; "required": false; }; "firstDayOfNextMonthClass": { "alias": "firstDayOfNextMonthClass"; "required": false; }; "lastDayOfPreviousMonthClass": { "alias": "lastDayOfPreviousMonthClass"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "ranges": { "alias": "ranges"; "required": false; }; "showCustomRangeLabel": { "alias": "showCustomRangeLabel"; "required": false; }; "showCancel": { "alias": "showCancel"; "required": false; }; "keepCalendarOpeningWithRange": { "alias": "keepCalendarOpeningWithRange"; "required": false; }; "showRangeLabelOnInput": { "alias": "showRangeLabelOnInput"; "required": false; }; "customRangeDirection": { "alias": "customRangeDirection"; "required": false; }; "drops": { "alias": "drops"; "required": false; }; "opens": { "alias": "opens"; "required": false; }; "closeOnAutoApply": { "alias": "closeOnAutoApply"; "required": false; }; "isInvalidDate": { "alias": "isInvalidDate"; "required": false; }; "isCustomDate": { "alias": "isCustomDate"; "required": false; }; "isTooltipDate": { "alias": "isTooltipDate"; "required": false; }; }, { "choosedDate": "choosedDate"; "rangeClicked": "rangeClicked"; "datesUpdated": "datesUpdated"; "startDateChanged": "startDateChanged"; "endDateChanged": "endDateChanged"; }, never, never, false, never>;
}
