var screen = "";
var outp = "";

function enter(a)
{
  if(a!=="+" && a!=="-" && a!=="*" && a!=="/")
    {
    screen += a;
    outp += a;
    if(outp <= 10)
      {
      document.getElementById("display").innerHTML = outp;
      }
    else
      {
      document.getElementById("display").innerHTML = outp.slice(0,10);
      }
    }
  else
    {
    screen += a;
    outp = a;
    document.getElementById("display").innerHTML = outp;
    outp = "";
    }
}

function calcdata()
{
  if(screen!=="")
  {
  screen = eval(screen);
  screen = screen.toString();
  if(screen.length <= 10)
    {
    document.getElementById("display").innerHTML = screen;
    screen = "";
    outp = "";
    }
  else
    {
    screen = screen.slice(0, 10);
    document.getElementById("display").innerHTML = screen;
    screen = "";
    outp = "";
    }
  }
}

function deldata()
{
  if(screen!=="")
  {
  screen = screen.slice(0, screen.length-1);
  if(screen!=="")
    {
    document.getElementById("display").innerHTML = screen;
    }
  else
    {
    document.getElementById("display").innerHTML = 0;
    }
      
  }
}

function clrdata()
{
screen = "";
document.getElementById("display").innerHTML = 0;
}