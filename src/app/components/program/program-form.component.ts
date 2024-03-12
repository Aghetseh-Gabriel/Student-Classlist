import { Component, Inject } from "@angular/core";
import { StudentFormComponent, DialogData } from "../student/student-form-component";
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogAnimationExample } from "./dialog-animations-example";
import { DialogAnimationsExampleDialog } from "./dialog-animations-example-dialog";

@Component ({
    selector: 'app-program-form',
    standalone: true,
    imports: 
        [ MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatButtonModule,
            MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            MatDialogClose,
            DialogAnimationExample,
            DialogAnimationsExampleDialog
        ],
    template: `
     <div style="height: 550px;">
        <h4 style=" margin-left: 30px">Program Form</h4>
        <mat-dialog-content>
          <div>
            <div>
                <mat-form-field>
                  <mat-label>Name</mat-label>
                  <input matInput [(ngModel)]="data.firstName">
                </mat-form-field>
            </div>
           <!--  <div>
                <mat-form-field>
                  <mat-label>Last Name</mat-label>
                  <input matInput [(ngModel)]="data.lastName">
                </mat-form-field>
            </div>
            <div>
                <mat-form-field>
                  <mat-label>Gender</mat-label>
                  <input matInput [(ngModel)]="data.gender">
                </mat-form-field>
            </div>-->
            <div> 
               <mat-form-field style="height: 300px;">
                  <mat-label>Description</mat-label>
                  <input matInput [(ngModel)]="data.program">
                </mat-form-field>
            </div>

          </div>
          
        </mat-dialog-content>
        <mat-dialog-actions style="display: flex; justify-content: center; flex-direction: row;">
          <button mat-button (click)="onNoClick()" style="border: solid black 1px; color: black; margin-right: 30px !important">Cancel</button>
          <button mat-button [mat-dialog-close]="data" cdkFocusInitial style="background-color: #3F51B5; color: white; margin-left: 520px !important">Submit</button>
        </mat-dialog-actions>
        
    </div>
    `,
    styles: [`
    mat-form-field {
      width: 700px;
    }
    `],

})
export class ProgramFormComponent {
    title = 'client-angular';

    constructor(
      public dialogRef: MatDialogRef<StudentFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
}