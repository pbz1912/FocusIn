if(!document.getElementById('fcsn-c')){
  var fcsn = true;
  var fcsnT = document.createElement('div');
  fcsnT.setAttribute('id','fcsn-t');
  var fcsnB = document.createElement('div');
  fcsnB.setAttribute('id','fcsn-b');
  var fcsnC = document.createElement('div');
  fcsnC.setAttribute('id','fcsn-c');
  var body=document.body;
  body.insertBefore(fcsnT,body.childNodes[0]);
  body.insertBefore(fcsnB,body.childNodes[0]);
  body.insertBefore(fcsnC,body.childNodes[0]);
  
  if(document.all){
    document.getElementById('fcsn-c').innerText = "Disable FocusIn";
  } else {
    document.getElementById('fcsn-c').textContent = "Disable FocusIn";
  }
  
  var GapHeight = 100; // will be customisable;
  var fcsn = true; // if it is enabled
  
  document.getElementById('fcsn-t').style.background='rgba(0,0,0,0.7)';//background: rgba(0,0,0,0.7);
  document.getElementById('fcsn-t').style.position='fixed';//position: fixed;
  document.getElementById('fcsn-t').style.width='100%';//width:100%;
  document.getElementById('fcsn-t').style.left='0';//left: 0;
  document.getElementById('fcsn-t').style.top='-30px';//top: -30px;
  document.getElementById('fcsn-t').style.borderBottom='30px solid rgba(0,0,0,.7)';//border-bottom: 30px solid rgba(0,0,0,.7)
  
  document.getElementById('fcsn-b').style.background='rgba(0,0,0,0.7)';//background: rgba(0,0,0,0.7);
  document.getElementById('fcsn-b').style.position='fixed';//position: fixed;
  document.getElementById('fcsn-b').style.width='100%';//width:100%;
  document.getElementById('fcsn-b').style.left='0';//left: 0;  
  document.getElementById('fcsn-b').style.paddingTop='30px';//padding-top: 30px;
  document.getElementById('fcsn-b').style.borderTop='30px solid rgba(0,0,0,.7)';//border-top: 30px solid rgba(0,0,0,.7)
  document.getElementById('fcsn-b').style.height='100%';
  
  document.getElementById('fcsn-c').style.borderRadius='3px';//border-radius: 3px;
  document.getElementById('fcsn-c').style.border='1px solid #ccc';//border: 1px solid #ccc;
  document.getElementById('fcsn-c').style.background='#56b3e6';
  document.getElementById('fcsn-c').style.display='inline-block';
  document.getElementById('fcsn-c').style.right='10px';
  document.getElementById('fcsn-c').style.padding='5px 10px';
  document.getElementById('fcsn-c').style.cursor='pointer';
  document.getElementById('fcsn-c').style.zIndex='1000000';  
  document.getElementById('fcsn-c').style.position='fixed';//position: fixed;
  
  
}
function gapMover(event){
  var yPos = event.clientY;
  var FocusInTop = (yPos-(GapHeight/2))+'px';
  var FocusInBottomTop = yPos+(GapHeight/2)+'px';
  document.getElementById('fcsn-t').style.height=FocusInTop;    // #fcsn-t height=FocusInTop
  document.getElementById('fcsn-b').style.top=FocusInBottomTop;// #fcsn-b top=FocusInBottomTop
}
function toggle(){
  if (fcsn === true){
    fcsn = false;
    document.getElementById('fcsn-t').style.display='none';
    document.getElementById('fcsn-b').style.display='none';
    document.removeEventListener('mousemove',gapMover,false);
    if(document.all){
      document.getElementById('fcsn-c').innerText = "Enable FocusIn";
    } else {
      document.getElementById('fcsn-c').textContent = "Enable FocusIn";
    }
  } else {
    fcsn = true;
    document.getElementById('fcsn-t').style.display='block';
    document.getElementById('fcsn-b').style.display='block';
    document.addEventListener('mousemove',gapMover,false);
    if(document.all){
      document.getElementById('fcsn-c').innerText = "Disable FocusIn";
    } else {
      document.getElementById('fcsn-c').textContent = "Disable FocusIn";
    }
  };
}
document.addEventListener('mousemove',gapMover,false);
document.getElementById('fcsn-c').addEventListener('click',toggle,false);