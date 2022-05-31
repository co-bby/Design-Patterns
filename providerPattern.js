const DataContext = React.createContext();

function App(){
	const data={...};


	return (
		<div>
//We no longer have to pass down data manually to each components
	<DataContext.provider value={data}>
			<SideBar />
			<Content />
	</DataContext.provider>
			
		</div>
	)
}

