import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SpendingCardModule } from '../components/spending-card/spending-card.module';
import { SettingsModule } from '../components/settings/settings.module';
import { SettingsComponent } from '../components/settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SpendingCardModule,
    SettingsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  entryComponents: [SettingsComponent]
})
export class HomePageModule {}
