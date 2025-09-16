import Day_M from './Day_M'

function Month() {
	// Get a list of the days of the month.
	const today: Date = new Date();
	const [month, year] = [
		today.getMonth(),
		today.getFullYear()
	];

	// Date math to get an array of the days of the month
	const daysInLastMonth: number = new Date(year, month, 0).getDate();
	const daysInMonth: number = new Date(year, month + 1, 0).getDate();
	const firstDayOfMonth: number = new Date(year, month, 1).getDay();
	const firstDayOfNextMonth: number = new Date(year, month + 1, 1).getDay();

	const daysInLastMonthArray = Array.from({ length: firstDayOfMonth }, (_, k) => k + (daysInLastMonth - firstDayOfMonth) + 1);
	const daysInMonthArray = Array.from({ length: daysInMonth }, (_, k) => k + 1);
	const daysInNextMonthArray = Array.from({ length: (7 - firstDayOfNextMonth) }, (_, k) => k + 1);

	const monthArray = daysInLastMonthArray.concat(daysInMonthArray).concat(daysInNextMonthArray);

	return (
		<div className="grid grid-cols-7 gap-1 w-full grow md:w-3/4">
			{
				monthArray.map(date => (
					<Day_M date={date} />
				))
			}
		</div>
	)
}

export default Month
