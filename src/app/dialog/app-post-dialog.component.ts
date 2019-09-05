import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IEnvModal } from '../modal/env-modal';
import { AppUtility } from '../util/app-utility';
import { AppValidators } from '../util/app.validators';
import { IAppModal } from '../modal/app-modal';

@Component({
  selector: 'posts-dialog',
  templateUrl: './app-post-dialog.component.html'
})
export class AppPostDialogComponent {
  primaryEnv = new FormControl('', AppValidators.validateAppDialog);
  secondaryEnv = new FormControl('', AppValidators.validateAppDialog);
  isDialogValid = true;
  envModal = {} as IAppModal;

  constructor(@Inject(MAT_DIALOG_DATA) public envpost: IEnvModal) {}

  validateBothSelect() {
    if (!AppUtility.isNullOrEmptyObject(this.primaryEnv.errors)
      && !AppUtility.isNullOrEmptyObject(this.secondaryEnv.errors)) {
      this.isDialogValid = true;
    } else {
      this.isDialogValid = false;
    }
  }

  postRequest(): IEnvModal {
    this.envpost.primaryEnv = this.primaryEnv.value;
    this.envpost.secondaryEnv = this.secondaryEnv.value;
    return this.envpost;
  }

  discardRequest() {
    return null;
  }
}
