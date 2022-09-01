

// import { ExpenseData } from "./Components/Expense";
import Expenses, {ExpenseData} from "./Components/Expenses/Data/Expenses";

function App()
{
    const expenses = [
        new ExpenseData("Car Insurance", 300, new Date(2022, 2, 14)),
        new ExpenseData("Credit Car", 1904, new Date(2022, 3, 20)),
        new ExpenseData("Snorkling Date", 94, new Date(2022, 6, 17)),
        new ExpenseData("Apartment Purchase", 2000, new Date(2022, 11, 27))
    ]

    const onAddExpense = function(expenseData)
    {
        console.log(expenseData);
    }

    return (
        <div>
            <Expenses _expenses={expenses} _onAddExpense = {onAddExpense}/>
        </div>
    );
}

export default App;