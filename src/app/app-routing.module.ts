import { ShopApparelComponent } from './page/shop-layout/shop-item/shop-men/shop-apparel/shop-apparel.component';
import { ShopAllComponent } from './page/shop-layout/shop-item/shop-men/shop-all/shop-all.component';
import { ShopMenComponent } from './page/shop-layout/shop-item/shop-men/shop-men.component';
import { ShopShoesComponent } from './page/shop-layout/shop-item/shop-men/shop-shoes/shop-shoes.component';
import { ShopItemComponent } from './page/shop-layout/shop-item/shop-item.component';

import { ShopLayoutComponent } from './page/shop-layout/shop-layout.component';
import { BrandsComponent } from './page/shop-layout/brands/brands.component';
import { MenComponent } from './page/shop-layout/brands/men/men.component';
import { InfoUserLayoutComponent } from './page/info-user-layout/info-user-layout.component';
import { AdminLayoutComponent } from './page/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './page/home-layout/home-layout.component';
import { LoginLayoutComponent } from './page/login-layout/login-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WomenComponent } from './page/shop-layout/brands/women/women.component';
import { KidsComponent } from './page/shop-layout/brands/kids/kids.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:HomeLayoutComponent,
  },
  {
    path:'login',
    component:LoginLayoutComponent
  },
  {
    path:'admin',
    component:AdminLayoutComponent,

  },
  {
    path:'info',
    component:InfoUserLayoutComponent
  },
  {
    path:'shop',
    component:ShopLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'brand',
        pathMatch:'full'
      },
      {
        path:'brand',
        component:BrandsComponent,
        children:[
          {
            path:'kids',
            component:KidsComponent,
          },
          {
            path:'men',
            component:MenComponent,
          },
          {
            path:'woman',
            component:WomenComponent,
          }
        ]
      },
      {
        path:'shopItem',
        component:ShopItemComponent,
        children:[
          {
            path:"shop-men",
            component:ShopMenComponent,
            children:[
              {
                path:'shop-shoes',
                component:ShopShoesComponent
              },
              {
                path:'shop-all',
                component:ShopAllComponent
              },
              {
                path:'shop-Apparel',
                component:ShopApparelComponent
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
