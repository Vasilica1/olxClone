import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLogIn:boolean = true;
  textChange: string = "Intra in cont";

  switchToCreateAccount() {
    this.isLogIn = false;
    this.textChange = "Creeaza un cont";
  }

  swithTologIn() {
    this.isLogIn = true;
    this.textChange = "Intra in cont";
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}