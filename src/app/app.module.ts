import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxGridModule } from 'igniteui-angular/main';
import { HomeComponent } from './home/home.component';
import { BlotterComponent } from "./blotter/blotter.component";
import { DataService } from './services/data.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		BlotterComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		IgxNavigationDrawerModule,
		IgxNavbarModule,
		IgxLayoutModule,
		IgxRippleModule,
		IgxGridModule.forRoot()
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
