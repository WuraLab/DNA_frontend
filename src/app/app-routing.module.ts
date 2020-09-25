import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./auth/login/login.module").then(m => m.LoginPageModule),
  },
  {
    path: "forgot-password",
    loadChildren: () => import("./auth/forgot-password/forgot-password.module").then( m => m.ForgotPasswordPageModule)
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./auth/signup/signup.module").then(m => m.SignupPageModule),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardPageModule),
    canActivate: [AuthGuardService],
  },   {
    path: "confirm-code",
    loadChildren: () => import("./auth/confirm-code/confirm-code.module").then( m => m.ConfirmCodePageModule)
  },
  {
    path: "reset",
    loadChildren: () => import("./auth/new-password/new-password.module").then( m => m.NewPasswordPageModule)
  },
  {
    path: "create",
    loadChildren: () => import("./create-record/create-record.module").then( m => m.CreateRecordComponentModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
