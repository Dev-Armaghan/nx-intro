// apps/flight-app/src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// You might need to add this line by hand:
import { FeatureSearchModule } from '@my-project/feature-search';
import { FeatureUpgradeModule } from '@my-project/feature-upgrade';

@NgModule({
  imports: [BrowserModule, 
    // Import FeatureSearchModule
    FeatureSearchModule,
    FeatureUpgradeModule 
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
