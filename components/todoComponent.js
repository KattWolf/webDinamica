class TodoComponent extends Component{
    constructor(model, parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'todosComponent';

        // Create elements
        this.userId = document.createElement('h1');
        this.id = document.createElement('p');
        this.title = document.createElement('p');
        this.completed = document.createElement('p');

        // Add elements
        this.container.appendChild(this.userId);
        this.container.appendChild(this.id);
        this.container.appendChild(this.title);
        this.container.appendChild(this.completed);

        // Fill element
        this.userId.innerHTML = this.model.userId;
        this.id.innerHTML = this.model.id;
        this.title.innerHTML = this.model.title;
        this.completed.innerHTML = this.model.completed;

        this.container.todo = this.model;

    }
}