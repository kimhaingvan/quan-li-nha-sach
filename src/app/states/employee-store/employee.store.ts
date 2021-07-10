import { GetItemsByPageRsp } from '../../models/resp';
import { StoreConfig, EntityStore } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { filter_page } from 'src/app/models/app-models';
import { PaginationOpt } from 'src/app/shared/page-pagination/page-pagination.component';

export interface EmployeeState {
    employee_list_view: GetItemsByPageRsp;
    detail_employee: any;
    current_page: number,
    filter_page: filter_page,
    current_pagination_opt : PaginationOpt;
}

const initState = {
    employee_list_view : null,
    current_page : 1,
    filter_page: {
        page: 1,
        per_page: 20,
    },
    current_pagination_opt: {
        nextDisabled: false,
        previousDisabled: true,
        hidePerpage: true,
    },
    detail_employee: {},
}

@Injectable({providedIn: 'root'})
@StoreConfig({name:'employee'})
export class EmployeeStore extends EntityStore<EmployeeState>{
    constructor() {
        super(initState);
    }
}