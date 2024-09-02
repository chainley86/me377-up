window["_ProjectPage"] = function(){
var p0_page0=new hmiProject({"wgtId":"p0_page0"},"CP6607_project_and_HMI_demo",{"prefix":"p0","projectName":"CP6607_project_and_HMI_demo/CP6607_project_and_HMI_demo.jpr","timeout":600000,"pollRate":100,"maxBandwidth":0,"modernBrowser":true,"connectionMode":null,"hT":2000,"aRT":250,"webSysIconDelay":0,"bgColorOption":0});
var p0_wgt4=new hmiTagMgr({"wgtId":"p0_wgt4"},"_TagMgr",{},p0_page0,p0_page0);
$hmi.hmiSubscribeGroup("CP6607_project_and_HMI_demo@$GroupSubscrWgt@$0",p0_page0);
var p0_wgt0=new hmiMultiLangMgr({"wgtId":"p0_wgt0"},"_MultiLangMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"langs":{"L1":{"name":"English","langId":"L1","writtingSystem":"Any","defaultFont":"Arial"},"L2":{"name":"Italian","langId":"L2","writtingSystem":"Any","defaultFont":"Arial"},"L3":{"name":"German","langId":"L3","writtingSystem":"Any","defaultFont":"Arial"},"L4":{"name":"French","langId":"L4","writtingSystem":"Any","defaultFont":"Arial"},"L5":{"name":"Chinese","langId":"L5","writtingSystem":"Any","defaultFont":"SimHei"},"L6":{"name":"Greek","langId":"L6","writtingSystem":"Any","defaultFont":"Arial"},"L7":{"name":"Spanish","langId":"L7","writtingSystem":"Any","defaultFont":"Arial"},"L8":{"name":"Russian","langId":"L8","writtingSystem":"Any","defaultFont":"Arial"}},"defLang":"L1","curLangId":"L1"},p0_page0,p0_page0),
p0_wgt1=new hmiPageMgr({"wgtId":"p0_wgt1"},"_PageMgr",{"pages":[["m1_page1","111"],["m2_page2","111"],["m3_page3","111"],["m4_page4","111"]],"homePages":{"web":"m1_page1","mobile":"m1_page1","tablet":"m1_page1"},"map":{"web_main":"m1_page1","web_cp600eco":"m2_page2","web_cp600":"m3_page3","web_cp600pro":"m4_page4","webtemplate":"t1_template0"}},p0_page0,p0_page0),
p0_wgt2=new hmiPageMLTextMgr({"wgtId":"p0_wgt2"},"_ProjectMLTextMgr",{"texts":{},"curLangId":"L1"},p0_page0,p0_page0),
p0_wgt7=new hmiTrendMgr({"wgtId":"p0_wgt7"},"_TrendMgr",{"file":"trends.json"},p0_page0,p0_page0),
p0_wgt11=new hmiPageMLTextMgr({"wgtId":"p0_wgt11"},"_AlarmMLTextMgr",{},p0_page0,p0_page0),
p0_wgt12=new hmiAlarmsMgr({"wgtId":"p0_wgt12"},"_AlarmsMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"alarmNumber":4},p0_page0,p0_page0),
p0_wgt14=new hmiPageMLTextMgr({"wgtId":"p0_wgt14"},"_ScheduleMLTextMgr",{"texts":{},"curLangId":"L1"},p0_page0,p0_page0),
p0_wgt19=new hmiRecipeMgr({"wgtId":"p0_wgt19"},"_RecipeMgr",{},p0_page0,p0_page0),
p0_wgt22=new hmiIndexedTagSetMgr({"wgtId":"p0_wgt22"},"_IndexedTagSetMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0]},p0_page0,p0_page0),
p0_wgt25=new hmiUserGroupMgr({"wgtId":"p0_wgt25"},"_UserGroupMgr",{},p0_page0,p0_page0);var p0_wgt32=new hmiSystemVars({"wgtId":"p0_wgt32"},"_SysPropMgr",{},p0_page0,p0_page0);
var p0_wgt19_l0=$hmi.hmiAttach(p0_wgt19,"p0_wgt34",{"rw":"rw","attr":"recipeIOSrc","tag":"recipeIOSrc","srcType":"Recipe","dataSource":"_IdalRecipe","_tag":"","tagIndex":0,"wT":1});
p0_page0.addModule({"name":"com.hmi.calendarkeypadmodule-:1.2.0","webid":"cw_cwgt0","conf":null,"template": null, "js":function(webWgt){var wgt=new hmiIWidget(webWgt);var page=new hmiIPage($hmi.getFocusPage());var project=new hmiIProject($hmi.getActiveProject());page.__eval__=function(a){return eval(a);};
// START USERCODE

var calWgt = wgt.getWidget(wgt.id+".keypad_Value");
var dateTime = wgt.getWidget(wgt.id+".dateShownField");

this.cancelBtn = function()
{
    page.reject();
}

this.okBtn = function()
{
    page.accept();
}

this.leftMonthBtn = function()
{
	/*
    var sec = calWgt.getProperty("dateShown");
    var dateShownDate = new Date(sec*1000);
    dateShownDate.setMonth(dateShownDate.getMonth()-1);
    sec = dateShownDate.getTime()/1000;
    calWgt.setProperty("dateShown",sec);
	*/
	
    calWgt.prevMonth(); //instead of js dang code, use an internal safe Qt method
						//with additional check to date previous 01/01/1970
}

this.rightMonthBtn = function()
{
	/*
    var sec = calWgt.getProperty("dateShown");
    var dateShownDate = new Date(sec*1000);
    dateShownDate.setMonth(dateShownDate.getMonth()+1);
    sec = dateShownDate.getTime()/1000;
    calWgt.setProperty("dateShown",sec);
	*/
	
    calWgt.nextMonth(); //instead of js dang code, use an internal safe Qt method
}// END USERCODE

},"props":null,"tr":null});p0_page0.addModule({"name":"com.hmi.ipwidget-:1.0.1","webid":"cw_cwgt1","conf":null,"template": null, "js":function(webWgt){var wgt=new hmiIWidget(webWgt);var page=new hmiIPage($hmi.getFocusPage());var project=new hmiIProject($hmi.getActiveProject());page.__eval__=function(a){return eval(a);};
// START USERCODE

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

// END USERCODE

},"props":{"attr":{"ShapeWgt1.fill":["ShapeWgt1.fill"],"LabelWgt1.text":["LabelWgt1.text"],"LabelWgt1.fill":["LabelWgt1.fill"],"LabelWgt1.frameFill":["LabelWgt1.frameFill"],"LabelWgt1.visibility":["LabelWgt1.visibility"]},"par":[]},"tr":null});p0_page0.hideLoading();
p0_page0.execJS();
$hmi.enableRendering();
return p0_page0;}