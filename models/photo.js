// Clase para crear objetos Photo dentro del objeto Album
class Photo{
    constructor(albumId, id, title, url, thumbnailUrl){
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;

        // Objetos con los que trabaja Photo pero no le pertenecen
        this.albumId = albumId;
    }
}