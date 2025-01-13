//Спецификации объекта типа GameSaving:

//{
//    "id": <number>, // id сохранения
//    "created": <timestamp>, // timestamp создания
//    "userInfo": {
//      "id": <number>, // user id
//      "name": <string>, // user name
//      "level": <number>, // user level
//      "points": <number> // user points
//    }
//  }
export default class GameSaving {
    constructor(id, created, userInfo) {
      this.id = id;
      this.created = created;
      this.userInfo = userInfo;
    }
  }