import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books: Book[] = [];

  @Output() selectBook = new EventEmitter<Book>();

  doSelectBook(book: Book) {
    this.selectBook.emit(book);
  }

  constructor() {
    this.books = [
      {
        isbn: '9783864906466',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
        published: new Date('2016-12-06'),
        subtitle:
          'Grundlagen, fortgeschrittene Themen und Best Practices mit TypeScript',
        thumbnailUrl: 'https://ng-buch.de/buch1.jpg',
        description:
          'Das umfassende Handbuch zu Angular 2 - jetzt auch mit NativeScript und Redux!',
      },
      {
        isbn: '9783864905254',
        title: 'Spring Boot 2: Moderne Softwareentwicklung mit Spring 5',
        authors: ['Oliver Gierke', 'Thomas Risberg', 'Michael Simons'],
        published: new Date('2018-03-06'),
        subtitle:
          'Grundlagen, fortgeschrittene Themen und Best Practices mit Spring Boot 2',
        thumbnailUrl:
          'https://dpunkt.de/wp-content/uploads/2020/07/13060-scaled.jpg',
        description:
          'Spring Boot hat seit 2014 das Spring-Ökosystem revolutioniert und verdrängt in zunehmendem Maße „klassische“ Spring-Anwendungen.',
      },
      {
        isbn: '9783864907791',
        title: 'React',
        authors: ['Oliver Zeigermann', 'Nils Hartmann'],
        published: new Date('2017-10-16'),
        subtitle: 'Die praktische Einführung in React und Redux',
        thumbnailUrl: 'https://ng-buch.de/buch2.jpg',
        description:
          'React ist eine der erfolgreichsten JavaScript-Bibliotheken. In diesem Buch lernen Sie, wie Sie React effektiv einsetzen und mit Redux den State Ihrer Anwendung zentral verwalten.',
      },
      //Java 19 Book
      {
        isbn: '978-3-86490-253-6',
        title: 'Kanban',
        authors: ['Mike Burrows'],
        published: new Date('2015-08-24'),
        subtitle: 'Agile Softwareentwicklung mit Kanban',
        thumbnailUrl: 'https://dpunkt.de/wp-content/uploads/2020/07/12169.jpg',
        description: 'Kanban ist eine agile Methode zur Softwareentwicklung.',
      },
      //Keyword-Driven Testing
      {
        isbn: '978-3-86490-570-4',
        title: 'Keyword-Driven Testing',
        authors: ['Matthias Daigl', 'René Rohner'],
        published: new Date('2022-02-04'),
        subtitle:
          'Grundlage für effiziente Testspezifikation und Automatisierung',
        thumbnailUrl:
          'https://dpunkt.de/wp-content/uploads/2020/07/13212-scaled.jpg',
        description:
          'Keyword-Driven Testing ist eine Methode zur Spezifikation und Automatisierung von Tests.',
      },
      //Rust
      {
        isbn: '978-3-86490-878-1',
        title: 'Rust',
        authors: ['Marco Amann', 'Joachim Baumann', 'Marcel Koch'],
        published: new Date('2022-02-04'),
        subtitle: 'Konzepte und Praxis für die sichere Anwendungsentwicklung',
        thumbnailUrl: 'https://dpunkt.de/wp-content/uploads/2022/05/13762.jpg',
        description:
          'Dieses Buch vermittelt Softwareentwickler*innen und Softwarearchitekt*innen Theorie und Praxis der Sprache Rust und zeigt, wo sie gewinnbringend in neuen Projekten verwendet und wie sie sich in bestehende Projekte gut integrieren lässt.',
      },
    ];
  }
}
