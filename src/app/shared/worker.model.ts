export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    phone_number: string;
    id?:  number;
    old_id?: number;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager
}

export let MyWorkerDatabase: MyWorker[] = [
    {id: 1, name: 'Иван', surname: 'Иванов', phone_number: '+7-932-321-45-34', type: 0},
    {id: 2, name: 'Петр', surname: 'Петров', phone_number: '+7-924-354-31-61', type: 1},
    {id: 3, name: 'Сидор', surname: 'Сидоров', phone_number: '+7-950-695-78-57', type: 2},
    {id: 4, name: 'Василий', surname: 'Васильев', phone_number: '+7-927-179-69-89', type: 3},
]