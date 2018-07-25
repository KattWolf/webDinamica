// En este documento index.js se comunica con las clases que estan en la carpeta models, porque aqui se hace uso de las clases con "new" [CLASSNAME] asignandole una variable para guardarla y luego poder utilizarla.
window.addEventListener('load', init, false);

function init() {
	//Declare variables
	// Datamanager se encarga de la informacion de todos los bees
	var dataManager = new DataManager();
	var navManager = new NavManager(dataManager);

	//Program Logic
	requestUsersData();
	requestPostsData();
	requestTodosData();
	// Informacion de los Bee que hay que parsear
	//'https://jsonplaceholder.typicode.com/todos'
	//'https://jsonplaceholder.typicode.com/photos'
	//'https://jsonplaceholder.typicode.com/albums'
	//'https://jsonplaceholder.typicode.com/comments'
	//'https://jsonplaceholder.typicode.com/posts'


	// Solicitud de datos
	function requestUsersData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
		request.onreadystatechange = requestUsersDataCompleted;
		request.send();
	}

	function requestPostsData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
		request.onreadystatechange = requestPostsDataCompleted;
		request.send();
	}

	function requestTodosData(){
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
		request.onreadystatechange = requestTodosDataComplete; //Llama una funcion
		request.send();
	}

	function requestAlbumData(){
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/albums');
		request.onreadystatechange = requestAlbumDataComplete;
		request.send();
	}
	function requestPhotosData(){
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/photos');
		request.onreadystatechange = requestPhotoDataComplete;
		request.send();
	}
	// function requestCommentData(){
	// 	var request = new XMLHttpRequest();
	// 	request.open('GET', 'https://jsonplaceholder.typicode.com/comments');
	// 	request.onreadystatechange = requestCommentDataComplete;
	// 	request.send();
	// }

	// Se parsean los datos
	function requestUsersDataCompleted(e) {
		var request = e.target;
		// console.log(JSON.parse(request.responseText));
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);
				for (var key in data) {
					// console.log(data[key]);
					// Parsea los JSON pero primero creo los models para poder mandarle los parametros para crear un objeto nuevo
					// Declaro las variables para reemplazar en el codigo "data[key]" y que sea mas entendible
					var beeData = data[key];
					var bee = new Bee(beeData.id, beeData.name, beeData.username, beeData.email, address, beeData.phone, beeData.website, company);
					// 1. A los datos que no le pongo beeData.attribute es porque los declaro abajo y puedo enviarlos con el nombre de esas variables
					//2. Despues de crear un Bee, debo mandarlo al dataManager para que se encargue de guardarlo con .push
					
					// Parseo los otros objetos dentro del objeto Bee
					var addressData = data[key].address;
					var address = new Address(addressData.street, addressData.suite, addressData.city, addressData.zipcode, geo);
					var geo = new Geo(addressData.geo.lat, addressData.geo.lng);

					var companyData = data[key].company;
					var company = new Company(companyData.name, companyData.catchPhrase, companyData.bs);
				dataManager.bees.push(bee);
			}
			console.log(data);
			navManager.showBees();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestPostsDataCompleted(e) {
		var request = e.target;
		// console.log(JSON.parse(request.responseText));
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);
				for (var key in data) {
					var postData = data[key];
					var post = new Post(postData.userId, postData.id, postData.title, postData.body);
					dataManager.posts.push(post);
					//console.log(post);
				}

				navManager.showBeePosts();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestTodosDataComplete(e){
		var request = e.target;
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200){
				var data = JSON.parse(request.responseText);
				for (var key in data){
					var todoData = data[key];
					var todo = new Todo(todoData.userId, todoData.id, todoData.title, todoData.completed);
					dataManager.todos.push(todo);
				}
				navManager.showBeeTodos();
				console.log(todo);
			}
		}
	}

	function requestAlbumDataComplete(e){
		var request = e.target;
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200){
				var data = JSON.parse(request.responseText);
				for(var key in data){
					var albumData = data[key];
					var album = new Album(albumData.userId, albumData.id, albumData.title);
					dataManager.albums.push(album);
				}
				navManager.showBeeAlbums();
				console.log('ALBUM' + album);
			}
		}
	}

	function requestPhotoDataComplete(e){
		var request = e.target;
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200){
				var data = JSON.parse(request.responseText);
				for(var key in data){
					var photoData = data[key];
					var photo = new Photo(photoData.albumId, photoData.id, photoData.title, photoData.url, photoData.thumbnailUrl);
					dataManager.photos.push(photo);
				}
				// navManager.showBeeAlbums();
				console.log('PHOTO' + photo);
			}
		}
	}
	function requestCommentDataComplete(e){
		var request = e.target;
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200){
				var data = JSON.parse(request.responseText);
				for(var key in data){
					var commentData = data[key];
					var comment = new Comment(commentData.postId, commentData.id, commentData.name, commentData.email, commentData.body);
					dataManager.comments.push(comment);
				}
				// navManager.showBeeAlbums();
				console.log('COMMENT' + comment);
			}
		}
	}
	
}