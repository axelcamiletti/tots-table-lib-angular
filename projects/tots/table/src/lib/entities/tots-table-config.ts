import { TotsBaseHttpService, TotsQuery } from "@tots/core";
import { TotsColumn } from "./tots-column";

export class TotsTableConfig {
    id?: string = '';
    columns: Array<TotsColumn> = [];
    service?: TotsBaseHttpService<any>;
    query?: TotsQuery = new TotsQuery();
}