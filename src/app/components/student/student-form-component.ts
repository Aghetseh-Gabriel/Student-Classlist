import { Component, Inject } from '@angular/core';
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

export interface DialogData {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  program: string;
}

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  template: `
    <div>
        <h4 style=" margin-left: 50px">Student Form</h4>
        <mat-dialog-content>
          <div>
            <div>
                <mat-form-field>
                  <mat-label>First Name</mat-label>
                  <input matInput [(ngModel)]="data.firstName">
                </mat-form-field>
            </div>
            <div>
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
            </div>
            <div>
               <mat-form-field>
                  <mat-label>Program</mat-label>
                  <input matInput [(ngModel)]="data.program">
                </mat-form-field>
            </div>

          </div>
          
        </mat-dialog-content>
        <mat-dialog-actions>
          <button mat-button (click)="onNoClick()" style="border: solid black 1px; color: black; margin-right: 200px">Cancel</button>
          <button mat-button [mat-dialog-close]="data" cdkFocusInitial style="background-color: #3F51B5; color: white; margin-left: 200px">Submit</button>
        </mat-dialog-actions>
        
    </div>
  `,
  styles: [`
  
  mat-dialog-actions {
   justify-content: center;
   display: flex;
   flex-direction: row;
  }
  mat-form-field {
   width: 500px;
   margin-left: 35px;
  
   
  }
  `]
})
export class StudentFormComponent {
  title = 'client-angular';

  constructor(
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}