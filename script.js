function download(URL,filename){
   let link=document.createElement('a');
   link.setAttribute('download',filename);
   link.href=URL;
   document.body.appendChild(link);
   link.click();
   link.remove();
}