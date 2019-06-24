console.log("%cArrow Functions", "color: yellow; font-style: italic; background-color: blue;padding: 4px; font-size: 20px;");

class TaskCollection {
    constructor(tasks=[]){
        this.tasks = tasks;
    }

    log() {
        //this is the same as this in arrow
        this.tasks.forEach((task) => {
            console.log(this);
        });
    }
}

class Task{}

new TaskCollection([
    new Task, new Task, new Task
]).log();

//WORK ON NOTES FOR THIS