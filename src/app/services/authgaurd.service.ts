import { Injectable } from '@angular/core';
import { SessionmanagerService } from './sessionmanager.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {
  logged_in: boolean;
  constructor(private myRoute: Router, private ls:SessionmanagerService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {  
      if(this.ls.getloginStatus()){
        return true;
      }else{
        this.myRoute.navigate(["login"]);
        return false;
      }
  }
}