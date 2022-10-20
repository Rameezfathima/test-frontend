import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  test:Test=new Test();


  constructor(private testService:TestService,private router:Router) { }

  ngOnInit(): void {
  }

  //saveUser()
  saveTest(){
    this.testService.createTest(this.test).subscribe(data =>{
      console.log(data);
      this.goToTestList();
    },error => console.log(error));
  }

  goToTestList(){
    this.router.navigate(['/test'])
  }

  onSubmit(){
    console.log(this.test);
    //connecting the angular with the add user
    this.saveTest();
  }
  

}
