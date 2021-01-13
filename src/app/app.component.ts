import { Component } from '@angular/core';
import { MyWorker, MyWorkerDatabase, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkerDatabase;
  MyWorkerType = MyWorkerType;
  phoneNum = new RegExp('[+][0-9][-][0-9]{3}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}')

  getByType(type: number){
    return this.workers.filter(worker => worker.type === type)
  }

  onDeleteWorker(id: number){
    let index = this.workers.findIndex(worker => worker.id === id)
    if (index !== -1){
      this.workers.splice(index,1);
    }
  }
  
  onAddWorker(worker: MyWorker){
    let id = this.workers.length > 0
    ? this.workers[this.workers.length - 1].id + 1
    : 0;
    worker.id = id;
    this.workers.push(worker);
  }

  onEditAccept(staffer: MyWorker){ //Редактирование записи
      let id_new = this.workers.length > 0
      ? this.workers[this.workers.length - 1].id + 1
      : 0;
      let id_old = this.workers.findIndex(worker => worker.id === staffer.old_id);
      if (staffer.id == null){ //Меняем введенное пользователем id, если оно уже занято или если пользователь его не ввел
        if(staffer.name != null && staffer.surname != null && staffer.name.length > 0 && staffer.surname.length > 0 && staffer.phone_number.length > 0 && this.phoneNum.test(staffer.phone_number) === true){
          staffer.id = id_new;
          this.workers.push(staffer);
          this.workers.splice(id_old, 1);
        }
      }
      else{
        if(staffer.name != null && staffer.surname != null && staffer.name.length > 0 && staffer.surname.length > 0 && staffer.phone_number.length > 0 && this.phoneNum.test(staffer.phone_number) === true){
          this.workers.push(staffer);
          this.workers.splice(id_old, 1);
        }
      }
  }
}
