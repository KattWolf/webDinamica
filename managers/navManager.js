// class NavManager depende de class DataManager. Aqui se le pasan los parametros a las demas clases para saber donde deben colocar la informacion.
class NavManager{
    constructor(dataManager){
        this.dataManager = dataManager;
        this.beesComponent = document.getElementById('beesComponent');
        this.postsComponent = document.getElementById('postsComponent');
        this.todosComponent = document.getElementById('todosComponent');
        this.albumsComponent = document.getElementById('albumComponent');
        this.photosComponent = document.getElementById('photosComponent');
        this.commentsComponent = document.getElementById('commentsComponent');
        //Get container for bee posts, album and todos
    }

    showBees(){
        this.dataManager.bees.forEach(bee => {
            var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
        });
    }

    showBeePosts(){
        this.dataManager.posts.forEach(post => {
            var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
        });

    }
    showBeeTodos(){
        this.dataManager.todos.forEach(todo =>{
            var todoComponent = new TodoComponent(todo, this.todosComponent, this.dataManager);
        });
    }
    showBeeAlbums(){
        this.dataManager.albums.forEach(album =>{
        var albumComponent = new AlbumComponent(album, this.albumsComponent, this.dataManager);
        });
    }
    showBeePhotos(){
        this.dataManager.photos.forEach(photo => {
            var photoComponent = new PhotoComponent(photo, this.photosComponent, this.dataManager);
        });
    }

    showBeeComments(){
        this,this.dataManager.comments.forEach(comment =>{
            var commentsComponent = new commentsComponent(commnet, this.commentsComponent, this.dataManager);
        });
    }
}