let myJSON = '{"Operation":"I", "ShipperID":"4", "ShipperName":"DPD", "Phone":"+7 (910) 440 44 34"}';

let mySentence = "";

try {
  var jsonData = JSON.parse(myJSON);

  switch (jsonData.Operation) {
    case "I":
      mySentence = INSERT INTO Shippers (ShipperID, ShipperName, Phone) VALUES ('${jsonData.ShipperID}', '${jsonData.ShipperName}', '${jsonData.Phone}');
      break;
    case "U":
      mySentence = UPDATE Shippers SET ShipperName = '${jsonData.ShipperName}', Phone = '${jsonData.Phone}' WHERE ShipperID = '${jsonData.ShipperID}';
      break;
    case "D":
      mySentence = DELETE FROM Shippers WHERE ShipperID = '${jsonData.ShipperID}';
      break;
    default:
      mySentence = "Неизвестная операция";
  }
} catch (error) {
  mySentence = "Ошибка при разборе JSON: " + error.message;
}

console.log(mySentence);