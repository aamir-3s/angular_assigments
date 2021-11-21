import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssigmentService } from 'src/app/service/assigment.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  
  myInfo$ = this._localStorageService.myData$;

  newTaskForm!: FormGroup;
  loading = false;
  submitted = false;
  public subscription!: Subscription;
  message!:string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private assigmentService:AssigmentService,
      private _localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit() {
      this.newTaskForm = new FormGroup({
        id: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      });
  }

  public ngOnDestroy(): void {
   
  }

  get f() { return this.newTaskForm.controls; }

  public hasError = (controlName: string, errorName: string) =>{
    return this.newTaskForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.newTaskForm.valid) {
          this.searchRecord();
        }
        this.loading = false; 
  }

  private searchRecord() {
    console.log(this.newTaskForm.value)
      this.assigmentService.getDataByID(this.newTaskForm.value.id)
          .subscribe((resp) => {
            console.log(resp);
            this.loading = false; 
            this._localStorageService.setInfo({
              name:JSON.stringify(resp)
            });
            this.router.navigate(['details']);
          });

  }

  
}
