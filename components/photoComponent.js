class PhotoComponent extends Component{
    constructor(model, parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'photosComponent';

        // Create elements
        this.title = document.createElement('h1');
        this.id = document.createElement('p');
        this.url = document.createElement('p');
        this.thumbnailUrl = document.createElement('p');
        this.albumId = document.createElement('p');
        
        // Add elements
        this.container.appendChild(this.title);
        this.container.appendChild(this.id);
        this.container.appendChild(this.thumbnailUrl);
        this.container.appendChild(this.albumId);

        // Fill element
        this.title.innerHTML = this.model.title;
        this.id.innerHTML = this.model.id;
        this.thumbnailUrl.innerHTML = this.model.thumbnailUrl;
        this.albumId.innerHTML = this.model.albumId;

        this.container.photo = this.model;
    }
}