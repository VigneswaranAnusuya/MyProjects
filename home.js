var home  = new function()
{
    this.arrAll = [
        {"name":"Vigneswaran anusuya (LinkedIn)","link":"https://www.linkedin.com/in/vigneswaran-anusuyadevi","type":"Profile"},
        {"name":"10 Sec Math Game (My Project)","link":"https://vigneswarananusuya.github.io/MyProjects/Games/MathGame/","type":"Project"},
        {"name":"JavaScript Certificate (HackerRank)","link":"https://www.hackerrank.com/certificates/86be58e519b3","type":"Certificate"},
        {"name":"Java Certificate (HackerRank)","link":"https://www.hackerrank.com/certificates/fc61b3a47a6a","type":"Certificate"},
        {"name":"Cutshort Certified Java - Advanced","link":"https://cutshort.io/certificate/63442","type":"Certificate"},
        {"name":"My Github Repository (Project Code)","link":"https://github.com/VigneswaranAnusuya/MyProjects","type":"Code"}
    ];
    this.boxString='<div class="info"> <div class="center name">{{name}}</div> </div> <div class="type"> <div class="typeVal">{{type}}</div> </div>';
    this.regexString=[{"title":"name","regex":"{{name}}"},{"title":"type","regex":"{{type}}"}];
    this.currArr=[];

    this.copyToClip=function()
    {
        var link = $(this).parents('.box').attr('link');
        navigator.clipboard.writeText(link);
    }

    this.openInTab=function()
    {
        var link = $(this).parents('.box').attr('link');
        var type = $(this).parents('.box').attr('type');
        window.open(link, '_blank');
    }

    this.buildBoxes = function(arr)
    {
        var parent = $("#tabs");
        parent.empty();
        arr.forEach(function(val){
            var temp =home.boxString;var htmlObject;
            home.regexString.forEach(function(v){
                temp = temp.replace(v["regex"],val[v["title"]]);
            });
            htmlObject = $(document.createElement('div'));
            htmlObject.html(temp).addClass('box').attr('link',val['link']).attr('type',val['type']);
            htmlObject.find('.info').on('click',home.openInTab);
            parent.append(htmlObject);
        });
    }

    this.init = function()
    {
        this.buildBoxes(this.arrAll);
    }

}
home.init();
