// const devURL = "https://be-simple-api.herokuapp.com/";
const devURL = "http://localhost:8000/";
const ServerRoutes = {

	// Auth
	register: devURL + "users/add", //post
	logoutAll: devURL + "users/logoutAll", //post	
	login: devURL + "users/login", //post
	checkAuth: devURL + "users/checkAuth/me", //get

	// Clients
	// editGuestByID
	// editGuestByID: devURL+"guests/",	//crud
	getUsers: devURL + "usersByStadium/",	//get
	crudUser: devURL + "users/",	//crud
	elections: devURL + "elections",



	setGuestTable: devURL + "guests/setGuestTable",	//crud
	getGuests: devURL + "guests",	//crud
	getTablesGuests: devURL + "guests/tables",	//crud
	editMyUser: devURL + "clients/me/update", //patch

	getTables: devURL + "tables",
	loadTables: devURL + "tables",	//post

}

export default ServerRoutes;