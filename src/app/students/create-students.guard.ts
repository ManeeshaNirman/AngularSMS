import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterModule,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateStudentsGuard implements CanActivate {

  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let tID:number=Number(route.paramMap.get("id"));

      if(tID%2==0){
         alert("You are not premices to access!");
        this.router.navigate(["/home"]);
      }

    return true;
  }
  
}
