import { Directive, HostListener, forwardRef, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { DaterangepickerComponent } from './daterangepicker.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _dayjs from 'dayjs';
import * as i0 from "@angular/core";
import * as i1 from "./locale.service";
const moment = _dayjs;
export class DaterangepickerDirective {
    viewContainerRef;
    _changeDetectorRef;
    _componentFactoryResolver;
    _el;
    _renderer;
    differs;
    _localeService;
    elementRef;
    picker;
    _onChange = Function.prototype;
    _onTouched = Function.prototype;
    _validatorChange = Function.prototype;
    _disabled;
    _value;
    localeDiffer;
    minDate;
    maxDate;
    autoApply;
    alwaysShowCalendars;
    showCustomRangeLabel;
    linkedCalendars;
    dateLimit = null;
    singleDatePicker;
    showWeekNumbers;
    showISOWeekNumbers;
    showDropdowns;
    isInvalidDate;
    isCustomDate;
    isTooltipDate;
    showClearButton;
    customRangeDirection;
    ranges;
    opens;
    drops;
    firstMonthDayClass;
    lastMonthDayClass;
    emptyWeekRowClass;
    emptyWeekColumnClass;
    firstDayOfNextMonthClass;
    lastDayOfPreviousMonthClass;
    keepCalendarOpeningWithRange;
    showRangeLabelOnInput;
    showCancel = false;
    lockStartDate = false;
    // timepicker variables
    timePicker = false;
    timePicker24Hour = false;
    timePickerIncrement = 1;
    timePickerSeconds = false;
    closeOnAutoApply = true;
    _locale = {};
    set locale(value) {
        this._locale = { ...this._localeService.config, ...value };
    }
    get locale() {
        return this._locale;
    }
    _endKey = 'endDate';
    _startKey = 'startDate';
    set startKey(value) {
        if (value !== null) {
            this._startKey = value;
        }
        else {
            this._startKey = 'startDate';
        }
    }
    set endKey(value) {
        if (value !== null) {
            this._endKey = value;
        }
        else {
            this._endKey = 'endDate';
        }
    }
    notForChangesProperty = [
        'locale',
        'endKey',
        'startKey'
    ];
    get value() {
        return this._value || null;
    }
    set value(val) {
        this._value = val;
        this._onChange(val);
        this._changeDetectorRef.markForCheck();
    }
    onChange = new EventEmitter();
    rangeClicked = new EventEmitter();
    datesUpdated = new EventEmitter();
    startDateChanged = new EventEmitter();
    endDateChanged = new EventEmitter();
    get disabled() { return this._disabled; }
    constructor(viewContainerRef, _changeDetectorRef, _componentFactoryResolver, _el, _renderer, differs, _localeService, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._el = _el;
        this._renderer = _renderer;
        this.differs = differs;
        this._localeService = _localeService;
        this.elementRef = elementRef;
        this.drops = 'down';
        this.opens = 'auto';
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(DaterangepickerComponent);
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        this.picker = componentRef.instance;
        this.picker.inline = false; // set inline to false for all directive usage
    }
    ngOnInit() {
        this.picker.startDateChanged.asObservable().subscribe((itemChanged) => {
            this.startDateChanged.emit(itemChanged);
        });
        this.picker.endDateChanged.asObservable().subscribe((itemChanged) => {
            this.endDateChanged.emit(itemChanged);
        });
        this.picker.rangeClicked.asObservable().subscribe((range) => {
            this.rangeClicked.emit(range);
        });
        this.picker.datesUpdated.asObservable().subscribe((range) => {
            this.datesUpdated.emit(range);
        });
        this.picker.choosedDate.asObservable().subscribe((change) => {
            if (change) {
                const value = {};
                value[this._startKey] = change.startDate;
                value[this._endKey] = change.endDate;
                this.value = value;
                this.onChange.emit(value);
                if (typeof change.chosenLabel === 'string') {
                    this._el.nativeElement.value = change.chosenLabel;
                }
            }
        });
        this.picker.firstMonthDayClass = this.firstMonthDayClass;
        this.picker.lastMonthDayClass = this.lastMonthDayClass;
        this.picker.emptyWeekRowClass = this.emptyWeekRowClass;
        this.picker.emptyWeekColumnClass = this.emptyWeekColumnClass;
        this.picker.firstDayOfNextMonthClass = this.firstDayOfNextMonthClass;
        this.picker.lastDayOfPreviousMonthClass = this.lastDayOfPreviousMonthClass;
        this.picker.drops = this.drops;
        this.picker.opens = this.opens;
        this.localeDiffer = this.differs.find(this.locale).create();
        this.picker.closeOnAutoApply = this.closeOnAutoApply;
    }
    ngOnChanges(changes) {
        for (const change in changes) {
            if (changes.hasOwnProperty(change)) {
                if (this.notForChangesProperty.indexOf(change) === -1) {
                    this.picker[change] = changes[change].currentValue;
                }
            }
        }
    }
    ngDoCheck() {
        if (this.localeDiffer) {
            const changes = this.localeDiffer.diff(this.locale);
            if (changes) {
                this.picker.updateLocale(this.locale);
            }
        }
    }
    onBlur() {
        this._onTouched();
    }
    open(event) {
        if (this.disabled) {
            return;
        }
        this.picker.show(event);
        setTimeout(() => {
            this.setPosition();
        });
    }
    hide(e) {
        this.picker.hide(e);
    }
    toggle(e) {
        if (this.picker.isShown) {
            this.hide(e);
        }
        else {
            this.open(e);
        }
    }
    clear() {
        this.picker.clear();
    }
    writeValue(value) {
        this.setValue(value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(state) {
        this._disabled = state;
    }
    setValue(val) {
        if (val) {
            this.value = val;
            if (val[this._startKey]) {
                this.picker.setStartDate(val[this._startKey]);
            }
            if (val[this._endKey]) {
                this.picker.setEndDate(val[this._endKey]);
            }
            this.picker.calculateChosenLabel();
            if (this.picker.chosenLabel) {
                this._el.nativeElement.value = this.picker.chosenLabel;
            }
        }
        else {
            this.picker.clear();
        }
    }
    /**
     * Set position of the calendar
     */
    setPosition() {
        let style;
        let containerTop;
        const container = this.picker.pickerContainer.nativeElement;
        const element = this._el.nativeElement;
        if (this.drops && this.drops === 'up') {
            containerTop = (element.offsetTop - container.clientHeight) + 'px';
        }
        else {
            containerTop = 'auto';
        }
        if (this.opens === 'left') {
            style = {
                top: containerTop,
                left: (element.offsetLeft - container.clientWidth + element.clientWidth) + 'px',
                right: 'auto'
            };
        }
        else if (this.opens === 'center') {
            style = {
                top: containerTop,
                left: (element.offsetLeft + element.clientWidth / 2
                    - container.clientWidth / 2) + 'px',
                right: 'auto'
            };
        }
        else if (this.opens === 'right') {
            style = {
                top: containerTop,
                left: element.offsetLeft + 'px',
                right: 'auto'
            };
        }
        else {
            const position = element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2;
            if (position < 0) {
                style = {
                    top: containerTop,
                    left: element.offsetLeft + 'px',
                    right: 'auto'
                };
            }
            else {
                style = {
                    top: containerTop,
                    left: position + 'px',
                    right: 'auto'
                };
            }
        }
        if (style) {
            this._renderer.setStyle(container, 'top', style.top);
            this._renderer.setStyle(container, 'left', style.left);
            this._renderer.setStyle(container, 'right', style.right);
        }
    }
    inputChanged(e) {
        if (e.target.tagName.toLowerCase() !== 'input') {
            return;
        }
        if (!e.target.value.length) {
            return;
        }
        const dateString = e.target.value.split(this.picker.locale.separator);
        let start = null, end = null;
        if (dateString.length === 2) {
            start = _dayjs(dateString[0], this.picker.locale.format);
            end = _dayjs(dateString[1], this.picker.locale.format);
        }
        if (this.singleDatePicker || start === null || end === null) {
            start = _dayjs(e.target.value, this.picker.locale.format);
            end = start;
        }
        if (!start.isValid() || !end.isValid()) {
            return;
        }
        this.picker.setStartDate(start);
        this.picker.setEndDate(end);
        this.picker.updateView();
    }
    /**
     * For click outside of the calendar's container
     * @param event event object
     */
    outsideClick(event) {
        if (!event.target) {
            return;
        }
        if (event.target.classList.contains('ngx-daterangepicker-action')) {
            return;
        }
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hide();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: DaterangepickerDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: i0.ComponentFactoryResolver }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.KeyValueDiffers }, { token: i1.LocaleService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.3", type: DaterangepickerDirective, selector: "input[ngxDaterangepickerMd]", inputs: { minDate: "minDate", maxDate: "maxDate", autoApply: "autoApply", alwaysShowCalendars: "alwaysShowCalendars", showCustomRangeLabel: "showCustomRangeLabel", linkedCalendars: "linkedCalendars", dateLimit: "dateLimit", singleDatePicker: "singleDatePicker", showWeekNumbers: "showWeekNumbers", showISOWeekNumbers: "showISOWeekNumbers", showDropdowns: "showDropdowns", isInvalidDate: "isInvalidDate", isCustomDate: "isCustomDate", isTooltipDate: "isTooltipDate", showClearButton: "showClearButton", customRangeDirection: "customRangeDirection", ranges: "ranges", opens: "opens", drops: "drops", lastMonthDayClass: "lastMonthDayClass", emptyWeekRowClass: "emptyWeekRowClass", emptyWeekColumnClass: "emptyWeekColumnClass", firstDayOfNextMonthClass: "firstDayOfNextMonthClass", lastDayOfPreviousMonthClass: "lastDayOfPreviousMonthClass", keepCalendarOpeningWithRange: "keepCalendarOpeningWithRange", showRangeLabelOnInput: "showRangeLabelOnInput", showCancel: "showCancel", lockStartDate: "lockStartDate", timePicker: "timePicker", timePicker24Hour: "timePicker24Hour", timePickerIncrement: "timePickerIncrement", timePickerSeconds: "timePickerSeconds", closeOnAutoApply: "closeOnAutoApply", locale: "locale", _endKey: "_endKey", startKey: "startKey", endKey: "endKey" }, outputs: { onChange: "change", rangeClicked: "rangeClicked", datesUpdated: "datesUpdated", startDateChanged: "startDateChanged", endDateChanged: "endDateChanged" }, host: { listeners: { "keyup.esc": "hide()", "blur": "onBlur()", "click": "open()", "keyup": "inputChanged($event)", "document:click": "outsideClick($event)" }, properties: { "disabled": "this.disabled" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DaterangepickerDirective), multi: true
            }
        ], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: DaterangepickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[ngxDaterangepickerMd]',
                    host: {
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()',
                        '(click)': 'open()',
                        '(keyup)': 'inputChanged($event)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DaterangepickerDirective), multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.KeyValueDiffers }, { type: i1.LocaleService }, { type: i0.ElementRef }]; }, propDecorators: { minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], autoApply: [{
                type: Input
            }], alwaysShowCalendars: [{
                type: Input
            }], showCustomRangeLabel: [{
                type: Input
            }], linkedCalendars: [{
                type: Input
            }], dateLimit: [{
                type: Input
            }], singleDatePicker: [{
                type: Input
            }], showWeekNumbers: [{
                type: Input
            }], showISOWeekNumbers: [{
                type: Input
            }], showDropdowns: [{
                type: Input
            }], isInvalidDate: [{
                type: Input
            }], isCustomDate: [{
                type: Input
            }], isTooltipDate: [{
                type: Input
            }], showClearButton: [{
                type: Input
            }], customRangeDirection: [{
                type: Input
            }], ranges: [{
                type: Input
            }], opens: [{
                type: Input
            }], drops: [{
                type: Input
            }], lastMonthDayClass: [{
                type: Input
            }], emptyWeekRowClass: [{
                type: Input
            }], emptyWeekColumnClass: [{
                type: Input
            }], firstDayOfNextMonthClass: [{
                type: Input
            }], lastDayOfPreviousMonthClass: [{
                type: Input
            }], keepCalendarOpeningWithRange: [{
                type: Input
            }], showRangeLabelOnInput: [{
                type: Input
            }], showCancel: [{
                type: Input
            }], lockStartDate: [{
                type: Input
            }], timePicker: [{
                type: Input
            }], timePicker24Hour: [{
                type: Input
            }], timePickerIncrement: [{
                type: Input
            }], timePickerSeconds: [{
                type: Input
            }], closeOnAutoApply: [{
                type: Input
            }], locale: [{
                type: Input
            }], _endKey: [{
                type: Input
            }], startKey: [{
                type: Input
            }], endKey: [{
                type: Input
            }], onChange: [{
                type: Output,
                args: ['change']
            }], rangeClicked: [{
                type: Output,
                args: ['rangeClicked']
            }], datesUpdated: [{
                type: Output,
                args: ['datesUpdated']
            }], startDateChanged: [{
                type: Output
            }], endDateChanged: [{
                type: Output
            }], disabled: [{
                type: HostBinding,
                args: ['disabled']
            }], outsideClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlcmFuZ2VwaWNrZXIvZGF0ZXJhbmdlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUlULFlBQVksRUFDWixVQUFVLEVBS1YsS0FBSyxFQUlMLE1BQU0sRUFDTixZQUFZLEVBRVosV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sS0FBSyxNQUFNLE1BQU0sT0FBTyxDQUFDOzs7QUFHaEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBaUJ0QixNQUFNLE9BQU8sd0JBQXdCO0lBd0gxQjtJQUNBO0lBQ0M7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBOUhILE1BQU0sQ0FBMkI7SUFDaEMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDL0IsVUFBVSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDaEMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxTQUFTLENBQVU7SUFDbkIsTUFBTSxDQUFNO0lBQ1osWUFBWSxDQUE4QjtJQUVsRCxPQUFPLENBQWM7SUFFckIsT0FBTyxDQUFjO0lBRXJCLFNBQVMsQ0FBVTtJQUVuQixtQkFBbUIsQ0FBVTtJQUU3QixvQkFBb0IsQ0FBVTtJQUU5QixlQUFlLENBQVU7SUFFekIsU0FBUyxHQUFXLElBQUksQ0FBQztJQUV6QixnQkFBZ0IsQ0FBVTtJQUUxQixlQUFlLENBQVU7SUFFekIsa0JBQWtCLENBQVU7SUFFNUIsYUFBYSxDQUFVO0lBRXZCLGFBQWEsQ0FBVztJQUV4QixZQUFZLENBQVc7SUFFdkIsYUFBYSxDQUFX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QUs7Z0JBR04sbUJBQW1CO3NCQURsQixLQUFLO2dCQUdOLGlCQUFpQjtzQkFEaEIsS0FBSztnQkFFRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBRU8sTUFBTTtzQkFBbEIsS0FBSztnQkFPRSxPQUFPO3NCQURkLEtBQUs7Z0JBR08sUUFBUTtzQkFBcEIsS0FBSztnQkFPTyxNQUFNO3NCQUFsQixLQUFLO2dCQXFCWSxRQUFRO3NCQUF6QixNQUFNO3VCQUFDLFFBQVE7Z0JBQ1EsWUFBWTtzQkFBbkMsTUFBTTt1QkFBQyxjQUFjO2dCQUNFLFlBQVk7c0JBQW5DLE1BQU07dUJBQUMsY0FBYztnQkFDWixnQkFBZ0I7c0JBQXpCLE1BQU07Z0JBQ0csY0FBYztzQkFBdkIsTUFBTTtnQkFDc0IsUUFBUTtzQkFBcEMsV0FBVzt1QkFBQyxVQUFVO2dCQTBOdkIsWUFBWTtzQkFEWCxZQUFZO3VCQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbnB1dCxcbiAgRG9DaGVjayxcbiAgS2V5VmFsdWVEaWZmZXIsXG4gIEtleVZhbHVlRGlmZmVycyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBfZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IHsgTG9jYWxlQ29uZmlnIH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsZS5zZXJ2aWNlJztcbmNvbnN0IG1vbWVudCA9IF9kYXlqcztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbmd4RGF0ZXJhbmdlcGlja2VyTWRdJyxcbiAgaG9zdDoge1xuICAgICcoa2V5dXAuZXNjKSc6ICdoaWRlKCknLFxuICAgICcoYmx1ciknOiAnb25CbHVyKCknLFxuICAgICcoY2xpY2spJzogJ29wZW4oKScsXG4gICAgJyhrZXl1cCknOiAnaW5wdXRDaGFuZ2VkKCRldmVudCknXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlKSwgbXVsdGk6IHRydWVcbiAgICB9XG5dXG59KVxuZXhwb3J0IGNsYXNzIERhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcbiAgcHVibGljIHBpY2tlcjogRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50O1xuICBwcml2YXRlIF9vbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF92YWxpZGF0b3JDaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF92YWx1ZTogYW55O1xuICBwcml2YXRlIGxvY2FsZURpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xuICBASW5wdXQoKVxuICBtaW5EYXRlOiBfZGF5anMuRGF5anNcbiAgQElucHV0KClcbiAgbWF4RGF0ZTogX2RheWpzLkRheWpzXG4gIEBJbnB1dCgpXG4gIGF1dG9BcHBseTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgYWx3YXlzU2hvd0NhbGVuZGFyczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd0N1c3RvbVJhbmdlTGFiZWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxpbmtlZENhbGVuZGFyczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZGF0ZUxpbWl0OiBudW1iZXIgPSBudWxsO1xuICBASW5wdXQoKVxuICBzaW5nbGVEYXRlUGlja2VyOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzaG93V2Vla051bWJlcnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNob3dJU09XZWVrTnVtYmVyczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd0Ryb3Bkb3duczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgaXNJbnZhbGlkRGF0ZTogRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGlzQ3VzdG9tRGF0ZTogRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGlzVG9vbHRpcERhdGU6IEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBzaG93Q2xlYXJCdXR0b246IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGN1c3RvbVJhbmdlRGlyZWN0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICByYW5nZXM6IGFueTtcbiAgQElucHV0KClcbiAgb3BlbnM6IHN0cmluZztcbiAgQElucHV0KClcbiAgZHJvcHM6IHN0cmluZztcbiAgZmlyc3RNb250aERheUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhc3RNb250aERheUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGVtcHR5V2Vla1Jvd0NsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGVtcHR5V2Vla0NvbHVtbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGZpcnN0RGF5T2ZOZXh0TW9udGhDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXN0RGF5T2ZQcmV2aW91c01vbnRoQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAga2VlcENhbGVuZGFyT3BlbmluZ1dpdGhSYW5nZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd1JhbmdlTGFiZWxPbklucHV0OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzaG93Q2FuY2VsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGxvY2tTdGFydERhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gdGltZXBpY2tlciB2YXJpYWJsZXNcbiAgQElucHV0KClcbiAgdGltZVBpY2tlcjogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICB0aW1lUGlja2VyMjRIb3VyOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHRpbWVQaWNrZXJJbmNyZW1lbnQ6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpXG4gIHRpbWVQaWNrZXJTZWNvbmRzOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsb3NlT25BdXRvQXBwbHkgPSB0cnVlO1xuICBfbG9jYWxlOiBMb2NhbGVDb25maWcgPSB7fTtcbiAgQElucHV0KCkgc2V0IGxvY2FsZSh2YWx1ZSkge1xuICAgIHRoaXMuX2xvY2FsZSA9IHsuLi50aGlzLl9sb2NhbGVTZXJ2aWNlLmNvbmZpZywgLi4udmFsdWV9O1xuICB9XG4gIGdldCBsb2NhbGUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHByaXZhdGUgX2VuZEtleTogc3RyaW5nID0gJ2VuZERhdGUnO1xuICBwcml2YXRlIF9zdGFydEtleTogc3RyaW5nID0gJ3N0YXJ0RGF0ZSc7XG4gIEBJbnB1dCgpIHNldCBzdGFydEtleSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fc3RhcnRLZXkgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhcnRLZXkgPSAnc3RhcnREYXRlJztcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgc2V0IGVuZEtleSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZW5kS2V5ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VuZEtleSA9ICdlbmREYXRlJztcbiAgICB9XG4gIH1cbiAgbm90Rm9yQ2hhbmdlc1Byb3BlcnR5OiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICdsb2NhbGUnLFxuICAgICdlbmRLZXknLFxuICAgICdzdGFydEtleSdcbiAgXTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlIHx8IG51bGw7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIHRoaXMuX29uQ2hhbmdlKHZhbCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgQE91dHB1dCgnY2hhbmdlJykgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdyYW5nZUNsaWNrZWQnKSByYW5nZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdkYXRlc1VwZGF0ZWQnKSBkYXRlc1VwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3RhcnREYXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlbmREYXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBIb3N0QmluZGluZygnZGlzYWJsZWQnKSBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IExvY2FsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuZHJvcHMgPSAnZG93bic7XG4gICAgdGhpcy5vcGVucyA9ICdhdXRvJztcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KERhdGVyYW5nZXBpY2tlckNvbXBvbmVudCk7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIHRoaXMucGlja2VyID0gKDxEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICB0aGlzLnBpY2tlci5pbmxpbmUgPSBmYWxzZTsgLy8gc2V0IGlubGluZSB0byBmYWxzZSBmb3IgYWxsIGRpcmVjdGl2ZSB1c2FnZVxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGlja2VyLnN0YXJ0RGF0ZUNoYW5nZWQuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKChpdGVtQ2hhbmdlZDogYW55KSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0RGF0ZUNoYW5nZWQuZW1pdChpdGVtQ2hhbmdlZCk7XG4gICAgfSk7XG4gICAgdGhpcy5waWNrZXIuZW5kRGF0ZUNoYW5nZWQuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKChpdGVtQ2hhbmdlZDogYW55KSA9PiB7XG4gICAgICB0aGlzLmVuZERhdGVDaGFuZ2VkLmVtaXQoaXRlbUNoYW5nZWQpO1xuICAgIH0pO1xuICAgIHRoaXMucGlja2VyLnJhbmdlQ2xpY2tlZC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKHJhbmdlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmFuZ2VDbGlja2VkLmVtaXQocmFuZ2UpO1xuICAgIH0pO1xuICAgIHRoaXMucGlja2VyLmRhdGVzVXBkYXRlZC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKHJhbmdlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZGF0ZXNVcGRhdGVkLmVtaXQocmFuZ2UpO1xuICAgIH0pO1xuICAgIHRoaXMucGlja2VyLmNob29zZWREYXRlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoY2hhbmdlOiBhbnkpID0+IHtcbiAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB7fTtcbiAgICAgICAgdmFsdWVbdGhpcy5fc3RhcnRLZXldID0gY2hhbmdlLnN0YXJ0RGF0ZTtcbiAgICAgICAgdmFsdWVbdGhpcy5fZW5kS2V5XSA9IGNoYW5nZS5lbmREYXRlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlb2YgY2hhbmdlLmNob3NlbkxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBjaGFuZ2UuY2hvc2VuTGFiZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnBpY2tlci5maXJzdE1vbnRoRGF5Q2xhc3MgPSB0aGlzLmZpcnN0TW9udGhEYXlDbGFzcztcbiAgICB0aGlzLnBpY2tlci5sYXN0TW9udGhEYXlDbGFzcyA9IHRoaXMubGFzdE1vbnRoRGF5Q2xhc3M7XG4gICAgdGhpcy5waWNrZXIuZW1wdHlXZWVrUm93Q2xhc3MgPSB0aGlzLmVtcHR5V2Vla1Jvd0NsYXNzO1xuICAgIHRoaXMucGlja2VyLmVtcHR5V2Vla0NvbHVtbkNsYXNzID0gdGhpcy5lbXB0eVdlZWtDb2x1bW5DbGFzcztcbiAgICB0aGlzLnBpY2tlci5maXJzdERheU9mTmV4dE1vbnRoQ2xhc3MgPSB0aGlzLmZpcnN0RGF5T2ZOZXh0TW9udGhDbGFzcztcbiAgICB0aGlzLnBpY2tlci5sYXN0RGF5T2ZQcmV2aW91c01vbnRoQ2xhc3MgPSB0aGlzLmxhc3REYXlPZlByZXZpb3VzTW9udGhDbGFzcztcbiAgICB0aGlzLnBpY2tlci5kcm9wcyA9IHRoaXMuZHJvcHM7XG4gICAgdGhpcy5waWNrZXIub3BlbnMgPSB0aGlzLm9wZW5zO1xuICAgIHRoaXMubG9jYWxlRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5sb2NhbGUpLmNyZWF0ZSgpO1xuICAgIHRoaXMucGlja2VyLmNsb3NlT25BdXRvQXBwbHkgPSB0aGlzLmNsb3NlT25BdXRvQXBwbHk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCAge1xuICAgIGZvciAoY29uc3QgY2hhbmdlIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGNoYW5nZSkpIHtcbiAgICAgICAgaWYgKHRoaXMubm90Rm9yQ2hhbmdlc1Byb3BlcnR5LmluZGV4T2YoY2hhbmdlKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnBpY2tlcltjaGFuZ2VdID0gY2hhbmdlc1tjaGFuZ2VdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5sb2NhbGVEaWZmZXIpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmxvY2FsZURpZmZlci5kaWZmKHRoaXMubG9jYWxlKTtcbiAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMucGlja2VyLnVwZGF0ZUxvY2FsZSh0aGlzLmxvY2FsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgb3BlbihldmVudD86IGFueSkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGlja2VyLnNob3coZXZlbnQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZShlPykge1xuICAgIHRoaXMucGlja2VyLmhpZGUoZSk7XG4gIH1cbiAgdG9nZ2xlKGU/KSB7XG4gICAgaWYgKHRoaXMucGlja2VyLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuaGlkZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKGUpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucGlja2VyLmNsZWFyKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBzdGF0ZTtcbn1cbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWw6IGFueSkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgICBpZiAodmFsW3RoaXMuX3N0YXJ0S2V5XSkge1xuICAgICAgICB0aGlzLnBpY2tlci5zZXRTdGFydERhdGUodmFsW3RoaXMuX3N0YXJ0S2V5XSk7XG4gICAgICB9XG4gICAgICBpZiAodmFsW3RoaXMuX2VuZEtleV0pIHtcbiAgICAgICAgdGhpcy5waWNrZXIuc2V0RW5kRGF0ZSh2YWxbdGhpcy5fZW5kS2V5XSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBpY2tlci5jYWxjdWxhdGVDaG9zZW5MYWJlbCgpO1xuICAgICAgaWYgKHRoaXMucGlja2VyLmNob3NlbkxhYmVsKSB7XG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLnBpY2tlci5jaG9zZW5MYWJlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waWNrZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCBwb3NpdGlvbiBvZiB0aGUgY2FsZW5kYXJcbiAgICovXG4gIHNldFBvc2l0aW9uKCkge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgY29udGFpbmVyVG9wO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGlja2VyLnBpY2tlckNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmRyb3BzICYmIHRoaXMuZHJvcHMgPT09ICd1cCcpIHtcbiAgICAgIGNvbnRhaW5lclRvcCA9IChlbGVtZW50Lm9mZnNldFRvcCAtIGNvbnRhaW5lci5jbGllbnRIZWlnaHQpICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyVG9wID0gJ2F1dG8nO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcGVucyA9PT0gJ2xlZnQnKSB7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0b3A6IGNvbnRhaW5lclRvcCxcbiAgICAgICAgICBsZWZ0OiAoZWxlbWVudC5vZmZzZXRMZWZ0IC0gY29udGFpbmVyLmNsaWVudFdpZHRoICsgZWxlbWVudC5jbGllbnRXaWR0aCkgKyAncHgnLFxuICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wZW5zID09PSAnY2VudGVyJykge1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0b3A6IGNvbnRhaW5lclRvcCxcbiAgICAgICAgICBsZWZ0OiAoZWxlbWVudC5vZmZzZXRMZWZ0ICArICBlbGVtZW50LmNsaWVudFdpZHRoIC8gMlxuICAgICAgICAgICAgICAgICAgLSBjb250YWluZXIuY2xpZW50V2lkdGggLyAyKSArICdweCcsXG4gICAgICAgICAgcmlnaHQ6ICdhdXRvJ1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcGVucyA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0b3A6IGNvbnRhaW5lclRvcCxcbiAgICAgICAgICBsZWZ0OiBlbGVtZW50Lm9mZnNldExlZnQgICsgJ3B4JyxcbiAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZWxlbWVudC5vZmZzZXRMZWZ0ICArICBlbGVtZW50LmNsaWVudFdpZHRoIC8gMiAtIGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDI7XG4gICAgICBpZiAocG9zaXRpb24gPCAwKSB7XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxuICAgICAgICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdCArICdweCcsXG4gICAgICAgICAgcmlnaHQ6ICdhdXRvJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgdG9wOiBjb250YWluZXJUb3AsXG4gICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbiArICdweCcsXG4gICAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAndG9wJywgc3R5bGUudG9wKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2xlZnQnLCBzdHlsZS5sZWZ0KTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3JpZ2h0Jywgc3R5bGUucmlnaHQpO1xuICAgIH1cbiAgfVxuICBpbnB1dENoYW5nZWQoZSkge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdpbnB1dCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KHRoaXMucGlja2VyLmxvY2FsZS5zZXBhcmF0b3IpO1xuICAgIGxldCBzdGFydCA9IG51bGwsIGVuZCA9IG51bGw7XG4gICAgaWYgKGRhdGVTdHJpbmcubGVuZ3RoID09PSAyKSB7XG4gICAgICBzdGFydCA9IF9kYXlqcyhkYXRlU3RyaW5nWzBdLCB0aGlzLnBpY2tlci5sb2NhbGUuZm9ybWF0KTtcbiAgICAgIGVuZCA9IF9kYXlqcyhkYXRlU3RyaW5nWzFdLCB0aGlzLnBpY2tlci5sb2NhbGUuZm9ybWF0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2luZ2xlRGF0ZVBpY2tlciB8fCBzdGFydCA9PT0gbnVsbCB8fCBlbmQgPT09IG51bGwpIHtcbiAgICAgIHN0YXJ0ID0gX2RheWpzKGUudGFyZ2V0LnZhbHVlLCB0aGlzLnBpY2tlci5sb2NhbGUuZm9ybWF0KTtcbiAgICAgIGVuZCA9IHN0YXJ0O1xuICAgIH1cbiAgICBpZiAoIXN0YXJ0LmlzVmFsaWQoKSB8fCAhZW5kLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBpY2tlci5zZXRTdGFydERhdGUoc3RhcnQpO1xuICAgIHRoaXMucGlja2VyLnNldEVuZERhdGUoZW5kKTtcbiAgICB0aGlzLnBpY2tlci51cGRhdGVWaWV3KCk7XG5cbiAgfVxuICAvKipcbiAgICogRm9yIGNsaWNrIG91dHNpZGUgb2YgdGhlIGNhbGVuZGFyJ3MgY29udGFpbmVyXG4gICAqIEBwYXJhbSBldmVudCBldmVudCBvYmplY3RcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgb3V0c2lkZUNsaWNrKGV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCFldmVudC50YXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmd4LWRhdGVyYW5nZXBpY2tlci1hY3Rpb24nKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=