function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}




function Factory(power) {
   Machine.apply(this, arguments);
   let amountCloneMachine = 0;

   this.addCloneMachine = function() {
      if (this._enable === false) {
        console.log('Clone Machine is turned off');
      } else if (cloneMachine + 1   > power / 100) {
      console.log ('To create not enough energy')
    } else if (this._enable === true) {
      	cloneMachine + 1
     }
   }

   this.getCloneMachines = function() {
    let dup_CloneMachine = cloneMachine.slice();
    return dup_CloneMachine;
   }
 }

function CloneMachines(power) {
  Machine.apply(this, arguments);
  Factory.apply(this, arguments);
  let humans = [];

  this.addHuman = function(word) {
    if (this.amountCloneMachine < 1) {
      console.log("You don't have no one clone machine")
    } else if (humans.length + 1 > power / 100) {
      console.log("Too much humans!")
    } else if (this.amountCloneMachine >= 1) {
      humans.push(word)
    }
}
    this.getCloneMachines = function() {
     let dup_Humans = humans.slice();
     return dup_Humans;
    }
    this.sortCloneMachines = function() {
     let sort_Humans = humans.sort();
     return sort_Humans;
    }
  }



var fridge = new Factory(500);
