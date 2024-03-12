import { Component, EventEmitter, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";

@Component({
    selector: 'dialog-animations-example-dialog',
    template: `
      <h2 mat-dialog-title>Delete Row</h2>
<mat-dialog-content>
  Would you like to delete this Student?<br><br> This action is irreversible
</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close style="border: solid black 1px; margin-right: 95px">No</button>
  <button mat-button mat-dialog-close (click)="onButtonClick()" cdkFocusInitial style="background-color: #F54848; color: white;">Yes</button>
</mat-dialog-actions>
`,
    standalone: true,
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  })
  export class DialogAnimationsExampleDialog {
    constructor(
        public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}
  
      onDelete = new EventEmitter();
  
      onButtonClick() {
        this.onDelete.emit(this.data);
      }
  
    }