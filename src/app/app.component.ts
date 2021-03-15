import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { APIService } from './API.service';
// import { Helo } from '../types/heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { // implements OnInit
  title = 'Tour of Heroes';
  // public createForm: FormGroup;

  // constructor(private api: APIService, private fb: FormBuilder) { }

  // async ngOnInit() {
  //   this.createForm = this.fb.group({
  //     'name': ['', Validators.required],
  //     'description': ['', Validators.required],
  //     'city': ['', Validators.required]
  //   });
  // }

  // public onCreate(hero: Hero) {
  //   this.api.CreateHero(hero).then(event => {
  //     console.log('item created!');
  //     this.createForm.reset();
  //   })
  //   .catch(e => {
  //     console.log('error creating hero...', e);
  //   });
  // }

}