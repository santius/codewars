let friendList = ["Ryan", "Kieran", "Mark"] ;

function friend(friends){
  let ret = [];
  friends.forEach(function (friend) { (friend.split ('').length == 4) ? ret.push (friend) : '' })
  return ret;
}

console.log(friend (friendList));
