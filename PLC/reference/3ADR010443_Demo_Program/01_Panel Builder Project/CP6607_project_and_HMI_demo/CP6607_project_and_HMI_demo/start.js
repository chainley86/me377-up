
function Start_onActivate(me, eventInfo)
{
    var state = new State();
    var value = project.getTag("Languages", state, 0);
    if (value == 0) 
    {
        var lang = project.getWidget("_MultiLangMgr");
        lang.setProperty ("curLangID", 1);
    }
}