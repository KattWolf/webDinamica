// Clase para crear un nuevo usuario Bee
class Bee{

	constructor(id, name, username, email, address, phone, website, company) {
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		// -- class Address dentro de class Bee
		this.address = address;
		// --
		this.phone = phone;
		this.website = website;
		//-- class Company dentro de Class Bee
		this.company = company;
		// --
		
		// Objetos con los que Bee va a trabajar pero no le pertenecen
		this.album = null;
		// Lista de posts
		this.posts = [];
		// Lista de to dos
		this.todos = [];
	}

	// Lo que puede hacer un Bee, puede postear, hacer todos

}