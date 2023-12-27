function openNav(){
    var x= document.getElementById('icon');
    var y= document.getElementById('navlink');
    var t= document.getElementById('icon2')
    y.style.display='block';
    x.style.display='none';
    t.style.display='block';
    
}

function CloseNav(){
    var z=document.getElementById('icon2');
    var t=document.getElementById('navlink',);
    var x=document.getElementById('icon');
    t.style.display='none';
    z.style.display='none';
    x.style.display='block';
}

function Navopen(){
    let u=document.getElementById('btn2');
    let v=document.getElementById('nav');
    let g=document.getElementById('btn1');
    v.style.display='block';
    u.style.display='none';
    g.style.display='block';



}
function Navclose(){
    let  g=document.getElementById('btn1');
    let f=document.getElementById('nav')
    let u =document.getElementById('btn2');
    f.style.display='none';
    u.style.display='block';
    g.style.display='none';
}