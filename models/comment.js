// Clase para añadir comentarios a Posts
class Comment{
    constructor(postId, id, name, email, body){
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
        // Objetos con los que trabaja comment pero no le pertenecen
        this.postId = postId;
    }
}