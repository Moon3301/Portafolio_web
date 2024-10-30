import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

type Tecnologia = {

  name: string;
  path: string;
  description: string;

}

type Proyecto = {

  name: string;
  image: string;
  description: string;
  chips: string[];
}

const tecnologias: Tecnologia[] = [

  {
    name: 'Angular',
    path: '/img/angular1.png',
    description: 'Angular es un framework de desarrollo para JavaScript creado por Google. Se utiliza para crear y mantener aplicaciones web de una sola página.'
  },
  {
    name: 'NodeJS',
    path: '/img/nodeJS.png',
    description: 'Vue es un framework de JavaScript para construir interfaces de usuario. Se utiliza para crear y mantener aplicaciones web de una sola página.'
  },
  {
    name: 'Sql Server',
    path: '/img/sql-server-4.png',
    description: 'React es una biblioteca de JavaScript para construir interfaces de usuario. Se utiliza para crear y mantener aplicaciones web de una sola página.'
  },
  {
    name: 'Python',
    path: '/img/python.png',
    description: 'React es una biblioteca de JavaScript para construir interfaces de usuario. Se utiliza para crear y mantener aplicaciones web de una sola página.'
  },
  {
    name: 'TypeScript',
    path: '/img/typescript.png',
    description: 'React es una biblioteca de JavaScript para construir interfaces de usuario. Se utiliza para crear y mantener aplicaciones web de una sola página.'
  },
  {
    name: 'API REST',
    path: '/img/react.png',
    description: 'React es una biblioteca de JavaScript para construir interfaces de usuario. Se utiliza para crear y mantener aplicaciones web de una sola página.'
  },
  {
    name: 'Flask',
    path: '/img/react.png',
    description: 'React es una biblioteca de JavaScript para construir interfaces de usuario. Se utiliza para crear y mantener aplicaciones web de una sola página.'
  }


];

const proyectos: Proyecto[] = [

  {
    name: 'Proyecto 1',
    image: '/img/proyecto1.png',
    description: 'Proyecto 1 es un proyecto de prueba',
    chips: ['Angular', 'NodeJS', 'Sql Server']
  },
  {
    name: 'Proyecto 2',
    image: '/img/proyecto2.png',
    description: 'Proyecto 2 es un proyecto de prueba',
    chips: ['Angular', 'NodeJS', 'Sql Server']
  },
  {
    name: 'Proyecto 3',
    image: '/img/proyecto3.png',
    description: 'Proyecto 3 es un proyecto de prueba',
    chips: ['Angular', 'NodeJS', 'Sql Server']
  },
  {
    name: 'Proyecto 4',
    image: '/img/proyecto4.png',
    description: 'Proyecto  4 es un proyecto de prueba',
    chips: ['Angular', 'NodeJS', 'Sql Server']
  }

]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tecnologias = tecnologias;
  proyectos = proyectos;

}
