//----------------------------------------------------------
// swipe left/right
//----------------------------------------------------------

var image = page.getWidget("MultistateImage1");
var number_of_frames = 10;


function prevImage(frame)
{
    if (frame > 0){
        frame = frame - 1;
        image.setProperty("frame",frame);
    }  
    else{
        image.setProperty("frame",number_of_frames);
    }  
}

function nextImage(frame)
{
    if (frame < number_of_frames){
        frame = frame + 1;
        image.setProperty("frame",frame);
    }  
    else{
        image.setProperty("frame",0);
    }
}

function changeImg(me, eventInfo)
{
    var move = eventInfo.dx;
    var frame = image.getProperty("frame");
    
    if (eventInfo.running) return;
    if (move < 0){
        nextImage(frame);
    }
    else {
        prevImage(frame);
    }
}

function prevImageReset(me, eventInfo)
{
    var frame = image.getProperty("frame");
    if (frame > 0){
    }  
    else{
        image.setProperty("frame",number_of_frames);
    }  
}

function nextImageReset(me, eventInfo)
{
    var frame = image.getProperty("frame");
    if (frame > number_of_frames){
        image.setProperty("frame",0);
    }
}
//----------------------------------------------------------
// Pintch zoomIn/zoomOut
//----------------------------------------------------------

// ----- variables begin -----
var scale_factor = 2;
var image2 = page.getWidget("techImg");
// ----- variables stop -----

var x = image2.getProperty("x");
var y = image2.getProperty("y");
var width = image2.getProperty("width");
var height = image2.getProperty("height");     
var xMiddle = x + width/2;
var yMiddle = y + height/2;
var width_big = width * scale_factor;
var height_big = height * scale_factor;
var x_big = x - (width_big - width)/2;
var y_big = y - (height_big - height)/2;        
var width_small = width / scale_factor;
var height_small = height / scale_factor;
var x_small = x + (width - width_small)/2;
var y_small = y + (height - height_small)/2;

function zoomImg(me, eventInfo)
{
    var dx = eventInfo.dx;
    var dy = eventInfo.dy;
    if (dx <= 0 && dy <= 0){
        if (image2.width >= width_small){
                image2.width = image2.width + (dx / 4);
                image2.height = image2.width / width * height;
                image2.x = xMiddle - image2.width / 2;
                image2.y = yMiddle - image2.height / 2;
        }  
    }
    else{
        if (image2.width <= width_big){
                image2.width = image2.width + (dx / 4);
                image2.height = image2.width / width * height;
                image2.x = xMiddle - image2.width / 2;
                image2.y = yMiddle - image2.height / 2;                
        }
    }
}

