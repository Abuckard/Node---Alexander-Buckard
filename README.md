Börja med att köra npm init -y, nedb-promises, joi, nodemon, express, uuid


Här följer enbart information som behövs för individuella, därefter ligger allmän information som behövdes i gruppuppgiften.

För att logga in som admin
http://localhost:8080/admin/login - använd Content-Type application/json i headers. Därefter POST och här är inloggningen som är hårdkodad just nu { "username": "admin", "password": "admin" }
När du är inloggad som admin så får man tillgång till att lägga till, ta bort och ändra i airbean.db. All denna kod står i order.js och nås genom http://localhost:8080/menu
Du får även tillgång till att lägga till och ta bort kampanjerbjudanden. Den koden ser du i campaign.js och nås genom http://localhost:8080/campaigns
För att bara se nuvarande kampanjer så kan man göra en GET-request på http://localhost:8080/campaigns och det behöver man inte vara inloggad admin för att se.

All kod som kräver admin behörighet kontrolleras i en middleware som heter authAdmin.js



När du väl är inloggad så kan du 





















Här är gruppuppgiftens information
Här är gruppuppgiftens information
Här är gruppuppgiftens information
Här är gruppuppgiftens information


Menyn:
För att kolla menyn : http://localhost:8080/menu
För att kolla efter specifikt id: http://localhost:8080/menu/  (här skriver du in det långa id som du hittar i airbean.db t.ex. Az3b6aeCng6rbrET)

Varukorgen:
För att kolla innehållet i varukorgen : http://localhost:8080/cart
För att lägga till i varukorgen så sätt ett POST anrop och skickar med all data från det kaffet du vill ha som ligger i airbean.db. Detta görs till http://localhost:8080/cart
För att ta bort i varukorgen så sätt ett POST anrop och skickar med all data från det kaffet du vill ha som ligger i airbean.db. Detta görs till http://localhost:8080/cart/ (här skriver du det långa id:et. T.ex. http://localhost:8080/cart/XFMyYITYP52LXcYq)

Om oss:
Endpoint för om oss: http://localhost:8080/about


För registrering:
http://localhost:8080/auth/register
Gör POST-anrop. Skicka med { "username" : "ditt användarnamn", "password" : "ditt lösenord"}

För login : 
http://localhost:8080/auth/login
Gör POST-anrop. Skicka med { "username" : "ditt användarnamn", "password" : "ditt lösenord"}

För att lägga en beställning som gäst:
Gå till http://localhost:8080/checkout och gör ett POST-anrop
Gå sedan till http://localhost:8080/status för att se när ditt kaffe levereras

För att lägga en beställning som användare
Gå till http://localhost:8080/checkout därefter skriver du i headers key : Content-Type, Value : application.json
Raden under i headers. Key : user-id, Value : (här skriver du in ditt unika id som du hittar i users.db)
Sen gör du ett POST-anrop.

För att se orderhistory:
http://localhost:8080/orderhistory/ (här skriver du in din användares unika id)





