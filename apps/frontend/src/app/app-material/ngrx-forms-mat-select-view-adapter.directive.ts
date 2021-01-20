import { Directive, forwardRef, AfterViewInit, OnDestroy } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER, FormViewAdapter } from 'ngrx-forms';
import { Subscription } from 'rxjs';
import { MatSelect } from '@angular/material/select';


// tslint:disable:directive-selector
// tslint:disable:directive-class-suffix
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'mat-select[ngrxFormControlState]',
  providers: [{
    provide: NGRX_FORM_VIEW_ADAPTER,
    useExisting: forwardRef(() => NgrxFormsMatSelectViewAdapterDirective),
    multi: true,
  }],
})
export class NgrxFormsMatSelectViewAdapterDirective implements FormViewAdapter, AfterViewInit, OnDestroy {


  private value: any;
  private subscriptions: Subscription[] = [];

  constructor(private matSelect: MatSelect) {}

  ngAfterViewInit() {
    this.subscriptions.push(
      this.matSelect.options.changes.subscribe(() => {
        Promise.resolve().then(() => this.matSelect.writeValue(this.value));
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  setViewValue(value: any) {
    this.value = value;

    // we have to verify that the same value is not set again since that would
    // cause focus to get lost on the select since it tries to focus the active option
    const selectedOption = this.matSelect.selected;

    if (selectedOption) {
      if (Array.isArray(selectedOption) && Array.isArray(value)) {
        if (value.length === selectedOption.length && value.every((v, i) => v === selectedOption[i])) {
          return;
        }
      } else if (!Array.isArray(selectedOption)) {
        if (value === selectedOption.value) {
          return;
        }
      }
    }

    // because the options are potentially updated AFTER the value (because of their order in the DOM),
    // setting the value has to be deferred, otherwise we might select an option which is not available yet.
    Promise.resolve().then(() => this.matSelect.writeValue(value));
  }

  setOnChangeCallback(fn: any) {
    this.matSelect.registerOnChange(value => {
      this.value = value;
      fn(value);
    });
  }

  setOnTouchedCallback(fn: any) {
    this.matSelect.registerOnTouched(fn);
  }

  setIsDisabled(isDisabled: boolean) {
    this.matSelect.setDisabledState(isDisabled);
  }

}

