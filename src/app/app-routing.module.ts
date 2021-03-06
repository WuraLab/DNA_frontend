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
    // canActivate: [AuthGuardService],
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
  {
    path: "records",
    loadChildren: () => import("./records/records.module").then( m => m.RecordsComponentModule)
  },
  {
    path: "record-detail",
    loadChildren: () => import("./record-detail/record-detail.module").then( m => m.RecordDetailComponentModule)
  },
  {
    path: "search",
    loadChildren: () => import("./search/search.module").then( m => m.SearchComponentModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
