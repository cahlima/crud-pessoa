import { Directive, OnInit} from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';


@Directive({
  selector: '[appMinimoValidator]',
  providers: [{

provide: NG_VALIDATORS,
useExisting:MinimoValidatorDirective,
multi: true

  }]


})
export class MinimoValidatorDirective implements Validator, OnInit{

  constructor() { }

}
