// Clase para crear tareas o To dos
class Todo{
    constructor(userId, id, title, completed){
        this.id = id;
        this.title = title;
        this.completed = completed;

        // Objetos con los que Todos va a trabajar pero no le pertenecen
        this.userId = userId;
    }
}