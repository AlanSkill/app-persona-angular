import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UsuariosComponent } from './pages/usuarios/usuarios.component';
// import { UsuarioComponent } from './pages/usuario/usuario.component';
// import { EditUsuarioComponent } from './pages/edit-usuario/edit-usuario.component';
// import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  // {path: 'usuarios', component: UsuariosComponent},
  // {path: 'usuario/:id', component: UsuarioComponent},
  // {path: 'edit-usuario/:id', component: EditUsuarioComponent},
  // {path: 'buscar', component: BuscarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'usuarios' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
