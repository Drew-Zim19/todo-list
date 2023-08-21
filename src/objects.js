export default class Task {
    constructor(taskTitle, description, dueDateTime, priority){
        
        this._taskTitle = taskTitle;
        this._description = description;
        this._dueDateTime = dueDateTime;
        this._priority = priority;
        this._isComplete = false;
        
    }
    get tastTitle(){
        return this._taskTitle;
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