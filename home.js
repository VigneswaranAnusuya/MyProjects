var home  = new function(){
    this.arrAll = [
        {"name":"Vigneswaran anusuya (LinkedIn)","link":"https://www.linkedin.com/in/vigneswaran-anusuyadevi"},
        {"name":"10 Sec Math Game (My Project)","link":"https://vigneswarananusuya.github.io/MyProjects/Games/MathGame/"},
        {"name":"JavaScript Certificate (HackerRank)","link":"https://www.hackerrank.com/certificates/86be58e519b3"},
        {"name":"Java Certificate (HackerRank)","link":"https://www.hackerrank.com/certificates/fc61b3a47a6a"},
        {"name":"Cutshort Certified Java - Advanced","link":"https://cutshort.io/certificate/63442"}
    ];
    this.boxString='<div class="info"> <div class="center name">{{name}}</div> </div> <div class="link"> <div class="linkVal">Copy</div> </div>';
    this.regexString=[{"title":"name","regex":"{{name}}"},{"title":"link","regex":"{{link}}"}];
    this.currArr=[];

    this.processBoxClick = function(ev){
        if(ev.target.id=="tabs"){
                    console.log(ev.target);
        }
        console.log(ev);
        e=ev;
    };

    this.copyToClip=function(){
        var link = $(this).parents('.box').attr('link');
        navigator.clipboard.writeText(link);
    }

    this.openInTab=function(){
        var link = $(this).parents('.box').attr('link');
        window.open(link, '_blank');
    }

    this.buildBoxes = function(arr){
        var parent = $("#tabs");
        parent.empty();
        arr.forEach(function(val){
            var temp =home.boxString;var htmlObject;var link;
            home.regexString.forEach(function(v){
                temp = temp.replace(v["regex"],val[v["title"]]);
            });
            htmlObject = $(document.createElement('div'));
            htmlObject.html(temp).addClass('box').attr('link',val['link']);
            htmlObject.find('.linkVal').on('click',home.copyToClip);
            htmlObject.find('.info').on('click',home.openInTab);
            parent.append(htmlObject);
        });
    }

    this.init = function(){
        this.buildBoxes(this.arrAll);
    }

}
var e;
home.init();
