var sourcePath = "";
var destinationPath = "";

function fieldSource_onDataUpdate(me, eventInfo)
{
    //Set the typed value into the global JS variable "sourcePath"
    sourcePath = eventInfo.newValue;
    //Load the files names into the comboBox
    loadCombo(sourcePath, "ComboSource");
    return false; 
}

function fieldDest_onDataUpdate(me, eventInfo)
{
    //Set the typed value into the global JS variable "destinationPath"
    destinationPath = eventInfo.newValue;
    //Load the files names into the comboBox
    loadCombo(destinationPath, "ComboDest");
    return false; 
}

function BtnSourceReload_btn_onMouseClick(me, eventInfo)
{
    //Button "reload files from source path"
    loadCombo(sourcePath, "ComboSource");
}

function BtnDestReload_btn_onMouseClick(me, eventInfo)
{
    //Button "reload files from destination path"
    loadCombo(destinationPath, "ComboDest");
}

function BtnSourceDelete_btn_onMouseClick(me, eventInfo)
{
    //Delete from source path the file selected into ComboSource
    var cmb = page.getWidget("ComboSource");
    var index = cmb.getProperty("index");
    var fileName = cmb.getProperty("list").split(",")[index];
    fs.unlink(sourcePath + "\\" + fileName);
    loadCombo(sourcePath, "ComboSource");
}

function loadCombo(path, comboName)
{
    //Load files names into ComboBox
    if (path === "") return;
    var files = fs.readdir(path);
    
    var list = "";
    for (var i in files) {
        if (list == "") {
            list = files[i];
        } else {
            list = list + "," + files[i];
        }
    }
    
    var cmb = page.getWidget(comboName);
    cmb.setProperty("list", list);
}

function BtnSourceCopy_btn_onMouseClick(me, eventInfo)
{
    //Copy to destination folder the file selected into ComboSource
    var cmb = page.getWidget("ComboSource");
    var index = cmb.getProperty("index");
    var fileName = cmb.getProperty("list").split(",")[index];
        
    var source = sourcePath + "\\" + fileName;
    var destination = destinationPath + "\\" + fileName;
        
    var fileContent = fs.readFile(source, "b");
    fs.writeFile(destination, fileContent, "rb");
    loadCombo(destinationPath, "ComboDest");
}

