import { Subject } from "rxjs";
// solo para compartir eventos
export class SubjectManager {
  subject$ = new Subject();

  getSubject() {
    //No se puede enviar informacion atravez de el mismo
    return this.subject$.asObservable();
  }

  setSubject(value: unknown) {
    //actualizamos la informacion
    this.subject$.next(value);
  }
}
