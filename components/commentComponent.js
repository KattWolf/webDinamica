class CommentComponent extends Component{
    constructor(model, parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'commentsComponent';

        // Create elements
        this.id = document.createElement('h1');
        this.name = document.createElement('p');
        this.email = document.createElement('p');
        this.body = document.createElement('p');
        this.postId = document.createElement('p');
        
        // Add elements
        this.container.appendChild(this.id);
        this.container.appendChild(this.name);
        this.container.appendChild(this.email);
        this.container.appendChild(this.body);
        this.container.appendChild(this.postId);

        // Fill element
        this.id.innerHTML = this.model.id;
        this.name.innerHTML = this.model.name;
        this.email.innerHTML = this.model.email;
        this.body.innerHTML = this.model.body;
        this.postId.innerHTML = this.model.postId;

        this.container.comment = this.model;
    }
}