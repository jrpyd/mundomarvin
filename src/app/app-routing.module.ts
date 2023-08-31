import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { EndPageComponent } from './components/end-page/end-page.component';
import { FirstComponent } from './components/first/first.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'pregunta',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: FirstComponent
      },
      {
        path: '2',
        component: SecondComponent
      },
      {
        path: '3',
        component: ThirdComponent
      }
    ]
  },
  {
    path: 'fin',
    component: EndPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
