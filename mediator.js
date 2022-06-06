/* The mediator pattern allows components to communicate with
each other through a central point*/

/*In this example users within the chatrrom wont talk to each other 
directly instead , the chatrrom will serve as mediator*/

class chatRoom {
  logMessage(user, message) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${time}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new chatRoom();

const user1 = new User('John Doe', chatroom);
const user2 = new User('Jane Doe', chatroom);

user1.send('Hi there!');
user2.send('Hey!');
