//----------------------------------------------------------
// Table widget
//----------------------------------------------------------

var alarms = ["ALM01 - Power line failure","ALM02 - Drive communication loss","ALM03 - Emergency gate OPEN","ALM04 - Misaligment sprayers","ALM05 - Axis control failure","ALM06 - RED tank empty","ALM07 - GREEN tank empty","ALM08 - BLUE tank empty","ALM09 - Air compressor fault","ALM10 - Replace NABA filters","ALM11 - General failure, system block","ALM12 - Motor 1 failure","ALM13 - Motor 2 failure","ALM14 - Motor 3 falure"];

// declaration of table model that is an array containing rows
var model = [];

// declaration of row that will be repeated
// for every column, report the property will be managed.
// In this case property "text" of label widget
var row_definition = {      
    _h : [
         [["text"]]
         ]  
}                          

// first for must be the row definition
model[0] = row_definition;

// remaining rows are filled with values taken from "alarms" array
for (var i = 1; i < alarms.length + 1; i++){
    var row_data = {
        _t : 0,
        _v : [alarms[i-1]]
    }
    model[i] = row_data;              
}

// applying the model to the table widget in page
var wgt = page.getWidget("Table_Javascript");    
wgt.model = model;    

