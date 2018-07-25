class AlbumComponent extends Component{
    constructor(model, parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'albumComponent';

        // Create elements
        this.title = document.createElement('h1');
        this.userId = document.createEelement('p');
        this.id = document.createElement('p');
        
        // Add elements
        this.container.appendChild(this.title);
        this.container.appendChild(this.userId);
        this.container.appendChild(this.id);

        // Fill element
        this.title.innerHTML = this.model.title;
        this.userId.innerHTML = this.model.userId;
        this.id.innerHTML = this.model.id;

        this.container.album = this.model;
    }
}