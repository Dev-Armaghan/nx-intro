import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDataModule } from '@my-project/flight-data';

@NgModule({
  imports: [CommonModule,FlightDataModule],
})
export class FeatureUpgradeModule {}
