export default class Task {
    constructor(title, description, dueDateTime, priority){
        this._title = title;
        this._description = description;
        this._dueDateTime = dueDateTime;
        this._priority = priority;
        this._isComplete = false;
    }
    get title(){
        return this._title;
    }
    get description(){
        return this.description;
    }
    get dueDateTime(){
        return this.dueDateTime;
    }
    get priority(){
        return this._priority;
    }
    get isComplete(){
        return this.isComplete;
    }
}