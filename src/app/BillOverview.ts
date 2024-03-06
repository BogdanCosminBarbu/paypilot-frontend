import { Dayjs } from "dayjs";

export class BillOverview {
     billCategory: string | undefined;
     billStatus: string | undefined;
     dateFrom: Date | undefined | Dayjs | string;
     dateTo: Date | undefined | Dayjs | string;
}