import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { DialogAnimationsExampleDialog } from "./dialog-animations-example-dialog";
@Component({
    selector: 'dialog-animations-example',
    standalone: true,
    styles: [``],
    template: `
    <button mat-raised-button (click)="openDialogs('0ms', '0ms')"  style="background-color: #F54848; margin-left: 5px;">Delete</button>
    
    `,
    imports: [MatButtonModule],
})
export class DialogAnimationExample {
    constructor(public dialog: MatDialog) {}

    openDialogs(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(DialogAnimationsExampleDialog, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }

}