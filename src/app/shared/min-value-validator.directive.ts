import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';

@Directive({
  selector: '[appMinValueValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValueValidatorDirective, multi: true }]
})
export class MinValueValidatorDirective implements Validator {
  @Input() minValue: number;
  validate(control: AbstractControl): ValidationErrors | null {
    // const x: number = control.value;
    // console.log(`min=${this.minValue},x=${x}`);
    return Validators.min(this.minValue)(control);
  }


}
