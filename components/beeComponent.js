// Clase para crear un div de cada usuario Bee
class BeeComponent extends Component{
    constructor(model, parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'beeComponent';
        // Create elements
        this.name = document.createElement('h1');
        this.username = document.createElement('p');
        this.email = document.createElement('p');
        this.phone = document.createElement('p');
        this.city = document.createElement('p');
        this.posts = document.createElement('p');
        this.photos = document.createElement('p');
        this.todos = document.createElement('p');
        this.postsBtn = document.createElement('button');
        this.albumBtn = document.createElement('button');
        this.todosBtn = document.createElement('button');

        // Add elements
        this.container.appendChild(this.name);
        this.container.appendChild(this.username);
        this.container.appendChild(this.email);
        this.container.appendChild(this.phone);
        this.container.appendChild(this.city);
        this.container.appendChild(this.posts);
        this.container.appendChild(this.photos);
        this.container.appendChild(this.todos);
        this.container.appendChild(this.postsBtn);
        this.container.appendChild(this.albumBtn);
        this.container.appendChild(this.todosBtn);


        // Fill element
        this.name.innerHTML = this.model.name;
        this.username.innerHTML = this.model.username;
        this.email.innerHTML = this.model.email;
        this.phone.innerHTML = this.model.phone;
        this.city.innerHTML = this.model.city;
        this.posts.innerHTML = 'Posts: 0'; //+ this.model.posts.leght;
        this.photos.innerHTML = 'Photos: 0 '; //+ this.model.album.photos.length
        this.todos.innerHTML = 'To Dos: 0'; //this.model.todos.lenght;
        this.postsBtn.innerHTML = 'POSTS';
        this.albumBtn.innerHTML = 'ALBUM';

        this.postsBtn.onclick = this.postsBtnClick.bind(this);

        this.container.bee = this.model;


    }
    // Metodos
    postsBtnClick(e){
        this.dataManager.setCurrentBee(this.model);
    }
}