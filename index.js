'use strict';

const ADODB = require('node-adodb');
// const adodb = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=node-adodb.mdb;');

const adodb = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=d://NewProyek/example-node-dbf;Mode=Share Deny None;Extended Properties=dBASE IV;User ID=Admin;Password=;');
// Provider=Microsoft.Jet.OLEDB.4.0;Data Source=c:\folder;Extended Properties=dBASE IV;User ID=Admin;Password=;

const select = function() {
  adodb.query('SELECT * FROM mytable1.DBF')
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  })
}


const insert = function() {
  adodb.execute('INSERT INTO mytable1(NAME,ADDRESS,DOB,LIKESCOFFE,AGE) VALUES("Silvana","Jl.Mangga 220 Jepara","2000-10-10",true,11)')
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  })
}


const update = function() {
  adodb.execute('UPDATE mytable1 SET NAME="John Parker" WHERE NAME="Jeremy Yonathan"')
  .then(data=> {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  })
}

const del = function() {
  adodb.execute('DELETE FROM mytable1 WHERE NAME="Martin Madrazo"')
  .then(data=> {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  })
}

const schema = function() {
  adodb.schema(20)
  .then(schema => {
    console.log(JSON.stringify(schema, null, 2));
  })
  .catch(error => {
    console.error(error);
  })
}


select();
// insert();
// update();
// del();
schema();
