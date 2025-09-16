import Month from '../../components/Month.tsx'
import Toolbox from '../../components/Toolbox.tsx'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<div className="flex flex-col md:flex-row w-full h-screen bg-red-50">
				<Month />
				<Toolbox />
			</div>
		</>
	)
}

export default App