import { Directive } from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}
export const validateMinMax: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const min: string = control.get('name') ? control.get('name').value : null;
  const max: string = control.get('alterEgo') ? control.get('alterEgo').value : null;
  if (isEmptyInputValue(max) || isEmptyInputValue(min)) {
    return null;  // don't validate empty values to allow optional controls
  }
  const minValue = parseFloat(min);
  const maxValue = parseFloat(max);
  // Controls with NaN values after parsing should be treated as not having a
  // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
  return !isNaN(minValue) && !isNaN(maxValue) && max < min ? {range: {max: max, min: min}} : null;
  return null;
};

@Directive({
  selector: '[appMinValueValidatorGroup]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValueValidatorGroupDirective, multi: true }]

})
export class MinValueValidatorGroupDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return validateMinMax(control);
  }
}
