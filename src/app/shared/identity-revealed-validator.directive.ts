import { Directive } from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');
  // console.log(`name=${name ? name.value : 'null'},alterEgo=${alterEgo ? alterEgo.value : 'null'}`);
  return name && alterEgo && name.value === alterEgo.value ? {identityRevealed: true} : null;
};

@Directive({
  selector: '[appIdentityRevealedValidatorDirective]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true }]
})
export class IdentityRevealedValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return identityRevealedValidator(control);
  }
}