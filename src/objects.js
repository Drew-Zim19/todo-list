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
        return this._description;
    }
    get dueDateTime(){
        return this._dueDateTime;
    }
    get priority(){
        return this._priority;
    }
    get isComplete(){
        return this._isComplete;
    }
}