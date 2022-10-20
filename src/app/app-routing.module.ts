import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { UpdateTestComponent } from './update-test/update-test.component';


const routes: Routes = [
{path:'tests',component: TestListComponent},
{path:'create-test',component: TestListComponent},
{path:'',redirectTo:'tests',pathMatch:'full'},
{path:'update-test/:id',component:UpdateTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
