import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { DropdownDirective } from './shared/dropdown.directive';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.model';
// import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthComponent } from './auth/auth.component';
// import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import { AuthInterceptorService } from './auth/auth.interceptor.service';
// import { AlertComponent } from './shared/alert/alert.component';
// import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
// import { RecipesModule } from './recipes/recipes.model';
import { ShoppingListModule } from './shopping-list/shopping-list.model';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.model';
import { AuthModule } from './auth/auth.model';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // DropdownDirective,
    // AuthComponent,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // RecipesModule,
    // AuthModule,
    // ShoppingListModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [AlertComponent],
})
export class AppModule {}
