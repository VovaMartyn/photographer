function setImgPos(img){
    var boxWidth = 920;
    var boxHeight = 920;
     
    if(img.width < boxWidth)
        img.style.marginLeft = ((boxWidth - img.width) / 2) + 'px';
    if(img.height < boxHeight)
        img.style.marginTop = ((boxHeight - img.height) / 2) + 'px';
}