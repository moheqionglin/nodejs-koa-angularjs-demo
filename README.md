# nodejs-koa-angularjs-demo
A shop website that uses KOA as controller level, uses angular js as view level.

##install 
### download reposity , and use npm install init node packege.
```

git clone https://github.com/moheqionglin/nodejs-koa-angularjs-demo.git
cd nodejs-koa-angularjs-demo
npm install
 
```
### create database、 table and load data into database
```
cat KoaApp/view/sql/sql.sql
```
### modify mysql connection config(new Sequelize('shop', 'root', null) , shop is database name)
```
vim KoaApp/dao/entityManager.js
```
### run website
```
cd KoaApp
node start.js
```
### frontend url 
    http://localhost:3000/
### backend url 
  http://localhost:3000/p/admin.html
