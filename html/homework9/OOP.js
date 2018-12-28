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
  // унаследовать
  Machine.apply(this, arguments);

  this.machine = []; // приватное свойство machine

  this.addMachine = function() {
    if (!this._enabled) {
      throw new Error("Холодильник выключен");
    }
    if (this.machine.length + arguments.length >= this._power / 100) {
      throw new Error("Нельзя добавить, не хватает мощности");
    }
    for (var i = 0; i < arguments.length; i++) {
      this.machine.push(arguments[i]); // добавить всё из arguments
    }

  };

  this.getMachine = function() {
    // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
    return this.machine.slice();
  };

  this.filterMachine = function(filter) {
    return this.machine.filter(filter);
  };

  this.removeMachine = function(item) {
    var idx = this.machine.indexOf(item);
    if (idx != -1) this.machine.splice(idx, 1);
  };
}




function CloneMachine(power, machine) {
  Factory.apply(this, arguments);
  let humans = [];

  this.addHuman = function(word) {
    if (this._enable === false) {
      console.log('Clone Machine is turned off');
    } else if (humans.length + 1 > power / 100) {
      console.log("Too much humans!")
    } else if (this.machine.length >= 1) {
      humans.push(word)
    }
}
    this.getHumans = function() {
     let dup_Humans = humans.slice();
     return dup_Humans;
    }
    this.sortCloneMachines = function() {
     let sort_Humans = humans.sort();
     return sort_Humans;
    }
  }



  var fridge = new CloneMachine(500);
  fridge.enable();
  fridge.addMachine({
    title: "merby"
  });
  fridge.addMachine({
    title: "morin"
  });
  fridge.addMachine({
    title: "rin"
  });
  fridge.addMachine({
    title: "alin"
  });


  fridge.removeMachine("нет таких машин"); // без эффекта
  alert( fridge.getMachine().length ); // 4
  fridge.addHuman("Jake");
  fridge.getHumans()
