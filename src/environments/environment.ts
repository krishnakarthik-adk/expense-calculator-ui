export const environment = {
    production: true,

    HOST_URL: 'http://ec2-35-180-66-174.eu-west-3.compute.amazonaws.com:8080',
    
    EXPENSE_RECORD_SELECT_OPTIONS_API: '/api/expensecalculator/v1/getExpenseRecordSelectOptions',
    SAVE_EXPENSE_RECORDS_API: '/api/expensecalculator/v1/saveExpenseRecords',

    SEARCH_MONTHLY_EXPENSE_DATE_RANGE_API: '/api/expensecalculator/v1/getMonthlyExpenseRecords',

    SUMMARY_DATA_API: '/api/expensecalculator/v1/expenseSummary',
    MONTHLY_EXPENSE_SUMMARY_API: '/api/expensecalculator/v1/monthlyExpenseSummary',

    SAVE_WATER_DAIRY_EXPENSE_API: '/api/v1/saveWaterAndDairyExpense',
    GET_WATER_DAIRY_EXPENSES_DATE_RANGE_API: '/api/v1/getWaterAndExpenseDataFor',

    GET_WATER_DAIRY_EXPENSES_DATE_RANGE_POP_UP_API: '/api/v1/getWaterAndExpenseDataForItem',



};
