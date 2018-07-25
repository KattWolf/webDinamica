// Maneja la lista de usuarios Bee y registra a los Bee
class DataManager{

    constructor(){
        
        this.bees = [];
        this.posts = [];
        this.todos = [];
        this.albums = [];
        this.photos = [];
        this.comments = [];
        this.currentBee = null;

        this.user = new Bee (100,'Esteban Padilla', 'epadilla', 'ep@estebanpadilla.com', '506 87066660', new Address ('Cartago', new Geo (0.0,0.0), 'Calle Quizarraces', '1000', '1000/1000'));

        this.post = new Post (100, 100, 'Title Test', 'Body Test');

        this.todo = new Todo('Kaleen', 1, 'Octopath Traveler', false);

        this.album = new Album('Kaleen', 1, 'Punta Cahuita');
        
        this.bees.push(this.user);
        this.posts.push(this.post);
        this.todos.push(this.todo);
        this.albums.push(this.album);
        console.log(this.user);
        console.log(this.post);
        console.log(this.todo);
        console.log(this.album);
    }

    setCurrentBee(bee){
        this.currentBee = bee;
        console.log('Test'+ this.currentBee);
    }
}