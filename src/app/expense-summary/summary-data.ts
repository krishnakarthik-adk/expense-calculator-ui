import { IItemSummaryData } from "./summary-item-data";

export interface IExpenseSummaryData {
    expenseSummaryDTOList: IItemSummaryData[];
    finalAmountPayable: string;
}