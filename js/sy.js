//作者:沈雅
//时间:2015-12-20
//版权:GPLv2
//用于实验室数据传感器读取index.html

var auto_symbol=0;


function auto_f()
{
    auto_symbol=1;
    auto_time=setInterval("freshening()",5000); //使用定时器每５秒自动刷新！
}
//window.onload=warn;
function warn(){
	swal("欢迎来到迭〇个人网站！");
}
function rain(){
	window.location.href = "./rain.html";
}
function index()
{
    window.location.href = "./index.html";
}


function about()
{
    window.location.href = "./about.html";
}

function freshening()
{
    window.location.href ="./shenos.html";
}

/*function freshening()
{
    var tmp_all="";
    var URL = "./sy.cgi";
    var xmlhttp_object = createXHR();
    xmlhttp_object.open("POST",URL,false);//false:synchronous;true:asynchronous
    xmlhttp_object.setRequestHeader("If-Modified-Since", "0");
    xmlhttp_object.send(1);//懒得写代码简单的一个１代替
    if(4 == xmlhttp_object.readyState)
    {
        if (200 == xmlhttp_object.status)
        {
            tmp_all = xmlhttp_object.responseText; //将服务器获取到的信息写入tmp_all
            arr=tmp_all.split("#");
            document.getElementById("tmp1").innerHTML=arr[1];
            document.getElementById("tmp2").innerHTML=arr[2];
            document.getElementById("tmp3").innerHTML=arr[3];
            document.getElementById("tmp4").innerHTML=arr[4];
            document.getElementById("tmp5").innerHTML=arr[5];
            var system_time = new Date();
            var time=system_time.toLocaleTimeString();
            var tips="";
            if(auto_symbol == 1)
            {
                tips="自动刷新成功！在";
            }
            else
            {
                tips="刷新成功! 在";
            }

            tips+=time;
            document.getElementById("state_bar").innerHTML=tips;
            alert(tmp_all);

        }
        else
        {
            alert("请求未成功！");
        }
    }
    else
    {
        alert("连接未完成！");
    }

}



function createXHR()
{
    //alert('in createXHR');
    var xmlhttp = null;

    if(window.XMLHttpRequest)
        xmlhttp = new XMLHttpRequest();
    else if(window.ActiveXObject)
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    else
        xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');

    if(xmlhttp)
    {
        ;//alert('create xmlhttp success!');
    }
    else
        alert('create xmlhttp error!');
    return xmlhttp;
}
 */
