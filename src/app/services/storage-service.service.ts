import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageServiceService {
  constructor() {}  
  public loading = true;
  public headcategory = "";
  Data:any;
  Amount:any;



  putDataInStorage(storageKey: any, storageData: any) {
    localStorage.setItem(storageKey, storageData);
  }

  getDataFromStorage(storageKey: string) {
    return localStorage.getItem(storageKey);
  }

  removeDataFromStorage(storageKey: any) {
    return localStorage.removeItem(storageKey);
  }

  clearDataFromStorage() {
    return localStorage.clear();
  }
 
}
