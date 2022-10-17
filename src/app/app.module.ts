import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SocialMediaComponent } from './shared/social-media/social-media.component';
import { SubmitToSheetsModule } from './modules/submit-to-sheets/submit-to-sheets.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SubmitToSheetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
