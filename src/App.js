

// import { ExpenseData } from "./Components/Expense";
import Expenses, {ExpenseData} from "./Components/Expenses/Expenses";

function App()
{
    const expenses = [
        new ExpenseData("Car Insurance", 300, new Date(2022, 2, 14)),
        new ExpenseData("Credit Car", 1904, new Date(2022, 3, 20)),
        new ExpenseData("Snorkling Date", 94, new Date(2022, 6, 17)),
    ]
    return (
        <div>
            <h1>Let's Get Started!</h1>
            <Expenses _expenses={expenses}/>
        </div>
    );
}

export default App;