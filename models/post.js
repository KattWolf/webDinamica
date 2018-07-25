// Clase para crear posts
class Post{
    constructor(userId, id, title, body){
        this.id = id;
        this.title = title;
        this.body = body;

        // Objetos con los que trabaja Post pero no le pertenecen
        this.userId = userId;
    }
}