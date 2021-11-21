import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalStorageRefService } from "./local-storage-ref.service";

interface MyData {
  name: string;
}

@Injectable({ providedIn: "root" })
export class LocalStorageService {
  private _localStorage: Storage;

  private _myData$ = new BehaviorSubject<MyData>({name:""});
  myData$ = this._myData$.asObservable();

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }

  setInfo(data: MyData): void {
    const jsonData = JSON.stringify(data);
    this._localStorage.setItem("myData", jsonData);
    this._myData$.next(data);
  }

  loadInfo(): void {
    const data = JSON.parse(this._localStorage.getItem("myData")!);
    this._myData$.next(data);
  }

  clearInfo() {
    this._localStorage.removeItem("myData");
    this._myData$.next({name:""});
  }

  clearAllLocalStorage(): void {
    this._localStorage.clear();
    this._myData$.next({name:""});
  }
}
