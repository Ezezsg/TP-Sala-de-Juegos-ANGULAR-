import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';
import { AnagramaMasListadoComponent } from '../componentes/anagrama-mas-listado/anagrama-mas-listado.component';
import { PiedraPapelTijeraComponent } from '../componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { PiedraPapelTijeraMasListadoComponent } from '../componentes/piedra-papel-tijera-mas-listado/piedra-papel-tijera-mas-listado.component';
import { TaTeTiComponent } from '../componentes/ta-te-ti/ta-te-ti.component';
import { TaTeTiMasListadoComponent } from '../componentes/ta-te-ti-mas-listado/ta-te-ti-mas-listado.component';
import { MemotestComponent } from '../componentes/memotest/memotest.component';
import { MemotestMasListadoComponent } from '../componentes/memotest-mas-listado/memotest-mas-listado.component';
import { SerpienteComponent } from '../componentes/serpiente/serpiente.component';
import { SerpienteMasListadoComponent } from '../componentes/serpiente-mas-listado/serpiente-mas-listado.component';
import { EncuestaComponent } from '../componentes/encuesta/encuesta.component';
import { ResultadoEncuestaComponent } from '../componentes/resultado-encuesta/resultado-encuesta.component';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Jugadores' , component: JugadoresListadoComponent},
// {path: '' , component: PrincipalComponent},
{path: '' , component: LoginComponent},
{path: 'Mapa' , component: MapaDeGoogleComponent},
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'Registro' , component: RegistroComponent},
{path: 'Principal' , component: PrincipalComponent},
{path: 'Listado' , component: ListadoComponent},
{path: 'Paises' , component: ListadoDePaisesComponent},
{path: 'cabecera' , component: CabeceraComponent},
{path: 'listado-de-resultados' , component: ListadoDeResultadosComponent},
{path: 'encuesta' , component: EncuestaComponent},
{path: 'Resultadoencuesta' , component: ResultadoEncuestaComponent},
{ path: 'Juegos' ,
component: JuegosComponent ,
children:
     [
       {path: '' , component: MenuCardComponent},
       {path: 'Adivina' , component: AdivinaElNumeroComponent},
       {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
       {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
       {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
       {path: 'Anagrama' , component: AnagramaComponent},
       {path: 'AnagramaMasListado' , component: AnagramaMasListadoComponent},
       {path: 'PiedraPapelTijera' , component: PiedraPapelTijeraComponent},
       {path: 'PiedraPapelTijeraMasListado' , component: PiedraPapelTijeraMasListadoComponent},
       {path: 'TaTeTi' , component: TaTeTiComponent},
       {path: 'TaTeTiMasListado' , component: TaTeTiMasListadoComponent},
       {path: 'Memotest' , component: MemotestComponent},
       {path: 'MemotestMasListado' , component: MemotestMasListadoComponent},
       {path: 'Serpiente' , component: SerpienteComponent},
       {path: 'SerpienteMasListado' , component: SerpienteMasListadoComponent}
     ]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
