import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonNowComponent } from './component/button-now/button-now.component';
import { ButtonNowWhiteComponent } from './component/button-now-white/button-now-white.component';
import { HeaderComponent } from './component/header/header.component';
import { Load1Component } from './component/load1/load1.component';
import { FormAdComponent } from './component/form-ad/form-ad.component';
import { WINDOW_PROVIDERS } from './service/window.service';
import { FooterComponent } from './component/footer/footer.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { LoginLayoutComponent } from './page/login-layout/login-layout.component';
import { AdminLayoutComponent } from './page/admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeLayoutComponent } from './page/home-layout/home-layout.component';
import { MenuOptionComponent } from './component/menu-option/menu-option.component';
import { OptionsComponent } from './component/options/options.component';
import { ProductComponent } from './page/admin-layout/product/product.component';
import { UserComponent } from './page/admin-layout/user/user.component';
import { CategoryComponent } from './page/admin-layout/category/category.component';
import { DashboardComponent } from './page/admin-layout/dashboard/dashboard.component';
import { ContactComponent } from './page/admin-layout/contact/contact.component';
import { EditComponent } from './component/edit/edit.component';
import { NgxPopper } from 'angular-popper';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { FormInfoUserComponent } from './component/form-info-user/form-info-user.component';
import { FormAddVideoComponent } from './component/form-add-video/form-add-video.component';
import { ChooseAccountComponent } from './component/choose-account/choose-account.component';
import { InfoUserLayoutComponent } from './page/info-user-layout/info-user-layout.component';
import { WaitingComponent } from './component/waiting/waiting.component';
import { MenComponent } from './page/shop-layout/brands/men/men.component';
import { WomenComponent } from './page/shop-layout/brands/women/women.component';
import { KidsComponent } from './page/shop-layout/brands/kids/kids.component';
import { ShopLayoutComponent } from './page/shop-layout/shop-layout.component';
import { BrandsComponent } from './page/shop-layout/brands/brands.component';
import { ShopItemComponent } from './page/shop-layout/shop-item/shop-item.component';
import { ShopMenComponent } from './page/shop-layout/shop-item/shop-men/shop-men.component';
import { ShopShoesComponent } from './page/shop-layout/shop-item/shop-men/shop-shoes/shop-shoes.component';
import { ShopApparelComponent } from './page/shop-layout/shop-item/shop-men/shop-apparel/shop-apparel.component';
import { ShopAccessoriesComponent } from './page/shop-layout/shop-item/shop-men/shop-accessories/shop-accessories.component';
import { HeaderShopComponent } from './component/header-shop/header-shop.component';
import { FormUpdateComponent } from './component/form-update/form-update.component';
import { ShopAllComponent } from './page/shop-layout/shop-item/shop-men/shop-all/shop-all.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonNowComponent,
    ButtonNowWhiteComponent,
    HeaderComponent,
    Load1Component,
    FormAdComponent,
    FooterComponent,
    FormLoginComponent,
    LoginLayoutComponent,
    AdminLayoutComponent,
    HomeLayoutComponent,
    MenuOptionComponent,
    OptionsComponent,
    ProductComponent,
    UserComponent,
    CategoryComponent,
    DashboardComponent,
    ContactComponent,
    EditComponent,
    FormRegisterComponent,
    FormInfoUserComponent,
    FormAddVideoComponent,
    ChooseAccountComponent,
    InfoUserLayoutComponent,
    WaitingComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ShopLayoutComponent,
    BrandsComponent,
    ShopItemComponent,
    ShopMenComponent,
    ShopShoesComponent,
    ShopApparelComponent,
    ShopAccessoriesComponent,
    HeaderShopComponent,
    FormUpdateComponent,
    ShopAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPopper,
    ReactiveFormsModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
