/*Valores que por default son falsos y verdaderos*/
Boolean(); //False
Boolean(0); //False
Boolean(null); //False
Boolean(NaN); //False
Boolean(undefined); //False
Boolean(false); //False
Boolean(""); //False
/***********************/
Boolean(" "); //True
Boolean("a"); //True
Boolean(1); //True
Boolean([]); //True
Boolean({}); //True
Boolean(function (){}); //True
Boolean(true); //True