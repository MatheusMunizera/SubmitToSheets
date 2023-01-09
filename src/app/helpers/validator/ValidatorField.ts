import {
  AbstractControl,
  FormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { throwError } from 'rxjs';

export class ValidatorField {
  static MustMach(controlName: string, mathchingControlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as UntypedFormGroup;
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[mathchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMach']) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMach: true });
      } else {
        matchingControl.setErrors(null);
      }

      return null;
    };
  }

  static LessThanToday(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as UntypedFormGroup;
      const control = formGroup.controls[controlName];
      let today: Date = new Date();

      if (new Date(control.value).getTime() < today.getTime())
        control.setErrors({ lessThanToday: true });
      else control.setErrors(null);

      if (control.errors && !control.errors['lessThanToday']) return null;

      return null;
    };
  }

  static MuchYearsOld(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as UntypedFormGroup;
      const control = formGroup.controls[controlName];
      let birthdate = new Date(control.value);

      var today = new Date();
      var age = today.getFullYear() - birthdate.getFullYear();

      if (age > 100) control.setErrors({ muchYearsOld: true });

      if (control.errors && !control.errors['muchYearsOld']) return null;

      return null;
    };
  }
  static OverSixTeen(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as UntypedFormGroup;
      const control = formGroup.controls[controlName];
      let birthdate = new Date(control.value);

      var today = new Date();
      var age = today.getFullYear() - birthdate.getFullYear();
      var m = today.getMonth() - birthdate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() - 1 < birthdate.getDate())) {
        age--;
      }

      if (age < 16) control.setErrors({ overSixTeen: true });
      else control.setErrors(null);

      if (control.errors && !control.errors['overSixTeen']) return null;

      return null;
    };
  }
  static OverSixTeenAge(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as UntypedFormGroup;
      const control = formGroup.controls[controlName];

      if (control.value < 16) control.setErrors({ overSixTeen: true });
      else control.setErrors(null);

      if (control.errors && !control.errors['overSixTeen']) return null;

      return null;
    };
  }

  static MustBeStrong(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as UntypedFormGroup;
      const control = formGroup.controls[controlName];
      const strongRegex = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
      );

      if (!strongRegex.test(control.value)) control.setErrors({ strong: true });

      if (control.errors && !control.errors['strong']) return null;

      return null;
    };
  }

  static MuchYearsOldAge(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as UntypedFormGroup;
      const control = formGroup.controls[controlName];

      if (control.value > 100) control.setErrors({ muchYearsOld: true });

      if (control.errors && !control.errors['muchYearsOld']) return null;

      return null;
    };
  }

  static SignNotExists(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as UntypedFormGroup;
      const control = formGroup.controls[controlName];
      let sign = control.value;
      try {
        let rgx = sign.normalize('NFD').replace(/[^a-zA-Z\s]/g, '');

      const enSign = [
        'aries',
        'taurus',
        'gemini',
        'cancer',
        'leo',
        'virgo',
        'libra',
        'scorpio',
        'sagittarius',
        'capricorn',
        'aquarius',
        'pisces',
      ];
      const ptSign = [
        'aries',
        'touro',
        'gemeos',
        'cancer',
        'leao',
        'virgem',
        'libra',
        'escorpiao',
        'sagitario',
        'capricornio',
        'aquario',
        'peixes',
      ];
      const valueEn = enSign.includes(rgx.toLowerCase());
      const valuePt = ptSign.includes(rgx.toLowerCase());
      if (!valueEn && !valuePt) control.setErrors({ signNotExists: true });

      if (control.errors && !control.errors['signNotExists']) return null;

      return null;
      } catch (error) {
        return null;
      }
      
    };
  }

  static ValidCPF(controlName: string) {
    return (group: AbstractControl) => {
      const formGroup = group as UntypedFormGroup;
      const control = formGroup.controls[controlName];
      let cpf = control.value;
      try {
        cpf = cpf.replace(/[\s.-]*/gim, '');
        if (
          cpf.length !== 11 ||
          !Array.from(cpf).filter((e) => e !== cpf[0]).length
        ) {
          return control.setErrors({ cpfNotValid: true });
        }
  
        var soma = 0;
        var resto;
        for (var i = 1; i <= 9; i++)
          soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(cpf.substring(9, 10)))
          return control.setErrors({ cpfNotValid: true });
        soma = 0;
        for (var i = 1; i <= 10; i++)
          soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(cpf.substring(10, 11)))
          return control.setErrors({ cpfNotValid: true });
        return null;
  
          
      } catch (error) {
        return null
      }
      
      
    };
  }
}
