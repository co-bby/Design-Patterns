/* With the observer pattern we  can subscribe certain objects , the observers , to
 another object , calledd the observable  Whenever an events 
 occurs the observable notifies all its observes!*/

class Observable {
  constructor() {
    /* obaervers is an array that will get notify when a certain events occurs
     */
    this.observers = [];
  }

  /*a method inorder to add observers to the  observers list*/
  subscribe(func) {
    this.observers.push(func);
  }

  /* a method inorder to emove observes from the observers list*/
  unsubscribe() {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  /* a method to notify all onservers whenever a specific event occurs */
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
