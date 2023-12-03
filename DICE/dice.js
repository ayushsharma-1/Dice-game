p=Math.floor(Math.random()*6+1)
q=Math.floor(Math.random()*6+1)
if(typeof document!=='undefined')
{
    if(p>q)
    {
        document.querySelector("h1").innerText="🚩Player 1 Wins";
    }
    else if(q>p)
    {
        document.querySelector("h1").innerText="🚩Player 2 Wins";
    }
    else{
        document.querySelector("h1").innerText="🚩It's a Tie🚩";
    }
    if(p==1)  //CIRCLE-2
    {
        document.querySelector(".circle-3").classList.add("visibility");
        document.querySelector(".circle-4").classList.add("visibility");
        document.querySelector(".circle-5").classList.add("visibility");
        document.querySelector(".circle-6").classList.add("visibility");
        document.querySelector(".circle-1").classList.add("visibility");
    }
    if(p==2)   
    {
        document.querySelector(".circle-3").classList.add("visibility");
        document.querySelector(".circle-4").classList.add("visibility");
        document.querySelector(".circle-5").classList.add("visibility");
        document.querySelector(".circle-2").classList.add("visibility");
    }
    if(p==3)     //circle-146
    {
        document.querySelector(".circle-3").classList.add("visibility");
        document.querySelector(".circle-4").classList.add("visibility");
        document.querySelector(".circle-6").classList.add("visibility");
    }
    if(p==4)  //circle-1346
    {
        document.querySelector(".circle-2").classList.add("visibility");
        document.querySelector(".circle-5").classList.add("visibility");
    }
    if(p==5) //circle-12346
    {
        document.querySelector(".circle-5").classList.add("visibility");
    }
    if(q==1)  //CIRCLE-2
    {
        document.querySelector(".circle1-3").classList.add("visibility");
        document.querySelector(".circle1-4").classList.add("visibility");
        document.querySelector(".circle1-5").classList.add("visibility");
        document.querySelector(".circle1-6").classList.add("visibility");
        document.querySelector(".circle1-1").classList.add("visibility");
    }
    if(q==2)   
    {
        document.querySelector(".circle1-3").classList.add("visibility");
        document.querySelector(".circle1-4").classList.add("visibility");
        document.querySelector(".circle1-5").classList.add("visibility");
        document.querySelector(".circle1-2").classList.add("visibility");
    }
    if(q==3)     //circle-146
    {
        document.querySelector(".circle1-1").classList.add("visibility");
        document.querySelector(".circle1-4").classList.add("visibility");
        document.querySelector(".circle1-6").classList.add("visibility");
    }
    if(q==4)  //circle-1346
    {
        document.querySelector(".circle1-2").classList.add("visibility");
        document.querySelector(".circle1-5").classList.add("visibility");
    }
    if(q==5) //circle-12346
    {
        document.querySelector(".circle1-5").classList.add("visibility");
    }
    console.log(p)
    console.log(q)
}