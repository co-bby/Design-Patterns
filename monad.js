/*Monads is a design pattern in which pipeline implementation are abstracted
 by wrapping a value in  a type. It makes pipelines easier to write and maintain*/

class Maybe {
  constructor(value) {
    this.value = value;
  }

  /*   The bind method helps to add extra computation and logic and will affect
 every step of the pipeline. This means any changes can be made in one place*/

  bind = function (func) {
    value = func(this.value);
    return Maybe(value);
  };
}

// This is a pipeline which queries a user and get the gender of the best friend.

let firstFriendGender = Maybe('Cobby')
  .bind(database.fetch)
  .bind((friends) => friends.first())
  .bind((friend) => friend.gender);
