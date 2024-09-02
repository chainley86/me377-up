
// IP-Widget (18/Apr/2016)
// ----------------------------------------------------------------------------


var gstate = new State();
var gAdapters;
var gCurrentIndex = -1;
var adapterList = [];
var gbUpdating = 0;
var gSkipLocalRefresh = 0;

this.refreshAdapters = function()
{
	if(gSkipLocalRefresh){
			gSkipLocalRefresh = 0;
			return;
	}
	
		

    var sysPrpMgrWgt = project.getWidget("_SysPropMgr");
    var jsonString = sysPrpMgrWgt.getProperty("Adapters Parameters");
    var obj = JSON.parse(jsonString);
    gAdapters = obj["adap"];
    var comboBoxObj = wgt.getWidget(wgt.id + ".nameCombo");
    var currentSelection = comboBoxObj.getProperty("data");
    gCurrentIndex = -1;
    adapterList = [];
    for(var i = 0; i < gAdapters.length; i++){
        var adapter = gAdapters[i];
        if(adapter["id"] === currentSelection){
            gCurrentIndex = i;
        }
        adapterList.push(adapter["id"]);
    }
    if(gAdapters.length && gCurrentIndex === -1){
        gCurrentIndex = 0;
    }
    if(gCurrentIndex != -1){
        comboBoxObj.setProperty("list",adapterList.join());
        comboBoxObj.setProperty("disabled", 0);
        comboBoxObj.setProperty("index",gCurrentIndex);
    }
    this.updateFields();
}

this.updateFields = function ()
{
    gbUpdating = 1;
    if(gCurrentIndex != -1){
        if (gAdapters[gCurrentIndex]) {
            var comboBoxObj = wgt.getWidget(wgt.id + ".nameCombo");
            wgt.getWidget(wgt.id + ".macidText").setProperty("disabled", 0);
            wgt.getWidget(wgt.id + ".macidText").setProperty("Value", gAdapters[gCurrentIndex]["mac"]);
            wgt.getWidget(wgt.id + ".dhcpCombo").setProperty("disabled", 0);

            this.changeDHCP(gAdapters[gCurrentIndex]["dhcp"]);
            wgt.getWidget(wgt.id + ".ipEdit").setProperty("Value", gAdapters[gCurrentIndex]["netip"]);
            wgt.getWidget(wgt.id + ".maskEdit").setProperty("Value", gAdapters[gCurrentIndex]["netmask"]);
            wgt.getWidget(wgt.id + ".gatewayEdit").setProperty("Value", gAdapters[gCurrentIndex]["gw"]);
            wgt.getWidget(wgt.id + ".applyButton").setProperty("disabled", 0); 
        }           
    }else{
        var comboBoxObj = wgt.getWidget(wgt.id + ".nameCombo");
        comboBoxObj.setProperty("list",adapterList.join());
        comboBoxObj.setProperty("disabled", 1);
        wgt.getWidget(wgt.id + ".macidText").setProperty("Value", "");
        wgt.getWidget(wgt.id + ".macidText").setProperty("disabled", 1);
        wgt.getWidget(wgt.id + ".dhcpCombo").setProperty("disabled", 1);
        wgt.getWidget(wgt.id + ".ipEdit").setProperty("Value", "");
        wgt.getWidget(wgt.id + ".ipEdit").setProperty("disabled", 1);
        wgt.getWidget(wgt.id + ".ipEdit").setProperty("frameFill", "#BEBEBE");
        wgt.getWidget(wgt.id + ".maskEdit").setProperty("Value", "");
        wgt.getWidget(wgt.id + ".maskEdit").setProperty("disabled", 1);
        wgt.getWidget(wgt.id + ".maskEdit").setProperty("frameFill", "#BEBEBE");
        wgt.getWidget(wgt.id + ".gatewayEdit").setProperty("Value", "");
        wgt.getWidget(wgt.id + ".gatewayEdit").setProperty("disabled", 1);              
        wgt.getWidget(wgt.id + ".gatewayEdit").setProperty("frameFill", "#BEBEBE"); 
        wgt.getWidget(wgt.id + ".applyButton").setProperty("disabled", 1); 
    }
    gbUpdating = 0;
}


this.changeDHCP = function ( enable)
{
    if(enable){
        var cur_enable = wgt.getWidget(wgt.id + ".dhcpCombo").getProperty("index");
        if(!cur_enable){
            wgt.getWidget(wgt.id + ".dhcpCombo").setProperty("index", 1);
            wgt.getWidget(wgt.id + ".dhcpSel").setProperty("value", "Yes");   
        }
    }else{
        var cur_enable = wgt.getWidget(wgt.id + ".dhcpCombo").getProperty("index");        
        if(cur_enable){
            wgt.getWidget(wgt.id + ".dhcpCombo").setProperty("index", 0);
            wgt.getWidget(wgt.id + ".dhcpSel").setProperty("value", "No");   
        }       
    }
    this.setReadOnly(enable || (gAdapters[gCurrentIndex]["ro"] == true));
}

this.setReadOnly = function(ro)
{
    if (ro) {
        wgt.getWidget(wgt.id + ".ipEdit").setProperty("disabled", 1);
        wgt.getWidget(wgt.id + ".ipEdit").setProperty("frameFill", "#BEBEBE");
        wgt.getWidget(wgt.id + ".maskEdit").setProperty("disabled", 1);
        wgt.getWidget(wgt.id + ".maskEdit").setProperty("frameFill", "#BEBEBE");
        wgt.getWidget(wgt.id + ".gatewayEdit").setProperty("disabled", 1);              
        wgt.getWidget(wgt.id + ".gatewayEdit").setProperty("frameFill", "#BEBEBE");
    } else {
        wgt.getWidget(wgt.id + ".ipEdit").setProperty("disabled", 0);
        wgt.getWidget(wgt.id + ".ipEdit").setProperty("frameFill", "#F0F0F0");
        wgt.getWidget(wgt.id + ".maskEdit").setProperty("disabled", 0);
        wgt.getWidget(wgt.id + ".maskEdit").setProperty("frameFill", "#F0F0F0");
        wgt.getWidget(wgt.id + ".gatewayEdit").setProperty("disabled", 0);
        wgt.getWidget(wgt.id + ".gatewayEdit").setProperty("frameFill", "#F0F0F0");        
    }
}


// Events

this.nameSel_onDataUpdate = function(me, eventInfo)
{
		if(!gbUpdating){
		    gCurrentIndex = wgt.getWidget(wgt.id + ".nameCombo").getProperty("index");
		    this.updateFields();
		}
    return false; 
}

this.dhcpSel_onDataUpdate = function(me, eventInfo)
{
		if(!gbUpdating){
    		var enable = wgt.getWidget(wgt.id + ".dhcpCombo").getProperty("index");
    		this.changeDHCP(enable);
    }
    return false;     
}

this.applyButtonPushButton_onMouseClick = function(me, eventInfo)
{    
    var adapter = {};
    adapter["id"] = wgt.getWidget(wgt.id + ".nameCombo").getProperty("text");
    adapter["dhcp"] = wgt.getWidget(wgt.id + ".dhcpCombo").getProperty("index");
    if(adapter["dhcp"] == 0){
        adapter["netip"] = wgt.getWidget(wgt.id + ".ipEdit").getProperty("Value");
        adapter["netmask"] = wgt.getWidget(wgt.id + ".maskEdit").getProperty("Value");
        adapter["gw"] = wgt.getWidget(wgt.id + ".gatewayEdit").getProperty("Value");
    }
    var adapterList = new Array;
    adapterList.push(adapter);
    var adapterParams = {};
    adapterParams["adap"] = adapterList;    

	var sysPrpMgrWgt = project.getWidget("_SysPropMgr");
	gSkipLocalRefresh = 1;
    sysPrpMgrWgt.setProperty("Adapters Parameters", JSON.stringify(adapterParams));			
}


// Clear default values
wgt.getWidget(wgt.id + ".nameCombo").setProperty("list","");
wgt.getWidget(wgt.id + ".macidText").setProperty("disabled", 1);
wgt.getWidget(wgt.id + ".macidText").setProperty("Value", "");
wgt.getWidget(wgt.id + ".dhcpCombo").setProperty("disabled", 1);
wgt.getWidget(wgt.id + ".ipEdit").setProperty("Value", "");
wgt.getWidget(wgt.id + ".maskEdit").setProperty("Value", "");
wgt.getWidget(wgt.id + ".gatewayEdit").setProperty("Value", "");

// Initialization
this.refreshAdapters();

