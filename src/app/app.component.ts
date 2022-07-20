import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'advanced';
  displayFormData = false;
  formData = {
    email: '',
    subscription: '',
    password: ''
  }

  @ViewChild('form') form: NgForm;
  onSubmit(){
    this.formData = this.form.value
    console.log(this.formData);
    this.displayFormData = true;
    this.form.reset()


  }
}
