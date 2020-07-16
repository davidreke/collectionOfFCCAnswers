unction repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }

  function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  function findElement(arr, func) {
    let num = 0;
  
    for (var i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }

  function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  // test here
  booWho(null);

  String.prototype.replaceAt = function(index, character) {
    return (
      this.substr(0, index) + character + this.substr(index + character.length)
    );
  };
  
  function titleCase(str) {
    var newTitle = str.split(" ");
    var updatedTitle = [];
    for (var st in newTitle) {
      updatedTitle[st] = newTitle[st]
        .toLowerCase()
        .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
  }