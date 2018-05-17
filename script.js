function compile() {

    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

     document.body.onkeyup = function(){
      code.open();
      code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
      code.close();
        };
      };

  compile();

  function setbg1(color)
  {
  document.getElementById("html").style.background=color
  }
function setbg2(color)
{
document.getElementById("css").style.background=color
}
function setbg3(color)
{
document.getElementById("js").style.background=color
}