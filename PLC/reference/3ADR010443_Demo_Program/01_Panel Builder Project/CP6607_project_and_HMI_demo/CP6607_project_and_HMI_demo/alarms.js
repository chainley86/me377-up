function update_alarm_banner(me, eventInfo)
{
    var descriptions = "";
    for (var i=0; i < project.getWidget("_AlarmsMgr").getProperty("alarmCount"); i++) {
        if (project.getWidget("_AlarmsMgr").getProperty("alState",i) == "Triggered Not Acked"){
            descriptions += " *[" + project.getWidget("_AlarmsMgr").getProperty("alDescription",i) + "]* ";            
        }
    }
    page.getWidget("alarm_banner").setProperty("text", descriptions);    
}