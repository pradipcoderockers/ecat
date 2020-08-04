import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CartComponent } from './cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderComponent } from './order/order.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductComponent },
  { path: 'home', component: CategoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'createProfile', component: CreateUserComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'verify-email/:code', component: VerifyEmailComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: 'cart', component: CartComponent },
  { path: 'fave', component: FavouriteComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'order', component: OrderComponent },

];

export const routing = RouterModule.forRoot(routes);
