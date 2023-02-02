import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public lists = [
    '1. Rozbiórka (demontaz)',
    '2. Montaz scian dziatowych (bloczków, pustaków, GK)',
    '3. Sufity podwieszane z ptyty gipsu-kartonowej',
    '4. Roboty elektryczne',
    '5. Roboty hydrauliczne',
    '6. Gtadzie, malowanie',
    '7. Utozenie ptytek gresowych, mozaiki',
    '8. Montaz paneli podtogowych, listwy podtogowej',
    '9. Montaz drzwi',
    '10. Kompleksowy remont tazienki',
    '11. Montaz listwy sufitowej',
    '12. LED, lampki, karnisze',
    '13. Dekor',
    '14. Montaz mebli IKEA',
    '15. Sprzatanie po remoncie',
  ];

  public images = [
    'assets/images/swiper-1.jpeg',
    'assets/images/swiper-2.jpeg',
    'assets/images/swiper-3.jpeg',
    'assets/images/swiper-4.jpeg',
    'assets/images/swiper-5.jpeg',
  ];

}
