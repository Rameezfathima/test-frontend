import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  id:number;
  test:Test= new Test();
 

  constructor(private testService: TestService, 
    private route:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.testService.getTestById(this.id).subscribe( data => {
    this.test=data;
    },error => console.log(error))
    };
  onSubmit(){      
    //connectong the angular with the add user 
    this.testService.updateTest(this.id).subscribe(data =>{
      this.gotoTestList();
      }, error => console.log(error));
      }
  gotoTestList(){
    this.router.navigate(['/test'])
      }
     
}
