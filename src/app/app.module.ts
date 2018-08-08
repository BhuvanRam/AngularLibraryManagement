import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { RegisterComponent } from './register/register.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { LearningComponent } from './learning/learning.component';
import { HighlighterDirective } from './directives/highlighter.directive';
import { ContentmanagerComponent } from './contentmanager/contentmanager.component';
import { AdRotatorComponent } from './contentmanager/ad-rotator/ad-rotator.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    RegisterComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    LearningComponent,
    HighlighterDirective,
    ContentmanagerComponent,
    AdRotatorComponent     
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
