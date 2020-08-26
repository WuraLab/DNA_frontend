import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule),
  },
  {
    path: "forgot-password",
    loadChildren: () => import("./forgot-password/forgot-password.module").then( m => m.ForgotPasswordPageModule)
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then(m => m.SignupPageModule),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardPageModule),
    canActivate: [AuthGuardService],
  },   {
    path: "confirm-code",
    loadChildren: () => import("./confirm-code/confirm-code.module").then( m => m.ConfirmCodePageModule)
  },
  {
    path: "new-password",
    loadChildren: () => import("./new-password/new-password.module").then( m => m.NewPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
