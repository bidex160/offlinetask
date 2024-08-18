import { NgModule } from '@angular/core';
import { DashboardCaseRoutingModule } from './dashboard-case-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardCaseComponent } from 'src/app/dashboard-case/dashboard-case.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import {MatTableModule} from '@angular/material/table';
import { arrayToStringPipe } from 'src/pipe/arrayToString.pipe';

@NgModule({
  declarations: [
    DashboardCaseComponent,
    DashboardComponent,
    ContactsComponent
  ],
  imports: [
    DashboardCaseRoutingModule,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatTableModule,
    arrayToStringPipe
  ],
  providers: [],
})
export class DashboardCaseModule {}
