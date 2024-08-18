import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCaseComponent } from './dashboard-case.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: DashboardCaseComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      {
        path: 'add-contact',
        component: ContactsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCaseRoutingModule {}
