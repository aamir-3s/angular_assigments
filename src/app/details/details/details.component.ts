import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssigmentService } from 'src/app/service/assigment.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit{
  myInfo$ = this._localStorageService.myData$;
  public myInfoTitle:any=this.myInfo$;
  public dd:any=JSON.parse(this.myInfoTitle.source.value.name)
  public title:string=this.dd.data.title;

  public messageForSibling!: string;
  public subscription!: Subscription;

  constructor(
    private router: Router,
    private assigmentService:AssigmentService,
    private _localStorageService: LocalStorageService,
) {}



  public ngOnDestroy(): void {
    
  }

  ngOnInit() {

  }

}
