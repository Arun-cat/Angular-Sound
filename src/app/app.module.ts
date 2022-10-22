import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; // run and launch browser application
import { FormsModule } from '@angular/forms'; // replaces <form> tag
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { AddComponent } from './crud/add/add.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrailComponent } from './trail/trail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon'
// import { abc } from './app-routing.module';              optional
@NgModule({
  declarations: [
    // abc, // optional
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    AddComponent,
    DeleteComponent,
    TrailComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
