var area = document.getElementById('area');
var title = document.querySelector('.title');
var mainUl = document.querySelector('.mainUl');
var hot = document.querySelector('.hot');

// todo 可以查資料長怎樣
    for(var q=0 ; q<data.length; q++){
        console.log(data[q].Ticketinfo);
    };

// todo location下拉選單地區資料
    function selectArea(){
        var str = "";
        // todo 判斷第 i 個data
            for(var i=0;i<data.length;i++){
            // todo 第 i 個data跟 i+1 個開始直到結束來比較
                for(var j=i+1;j<data.length;){
                // todo 若第 i 個的資料跟 i+1 個開始後面的資料都不一樣的話，就印出來，一樣的話就跳出迴圈
                    if(data[i].Zone !== data[j].Zone){
                        j++;
                        if(j == data.length){
                            str += '<option value="'+data[i].Zone+'">'+data[i].Zone+'</option>';
                            // console.log(data[i].Zone);
                        }
                    }else{
                        break;
                    }
                };
            };
            // todo 最後再加上最後一筆資料
            area.innerHTML = str + '<option value="'+data[99].Zone+'">'+data[99].Zone+'</option>';
    };
    selectArea();
    mainUl.innerHTML = "";

// todo 選擇地區按鈕事件
    area.addEventListener('click',function(e){
        title.textContent = e.target.value;
        var str = "";
        mainUl.innerHTML = "";
        for(var a=1;a<data.length;a++){
            if(data[a].Zone == e.target.value){
            // todo 因為唯獨高雄市收費的字數最多，所以多加一個判斷，讓他改變樣式
                if(data[a].Zone == "高雄市"){
                    str += 
                        '<li>'+
                            '<div class="picture" style="background: url('+data[a].Picture1+') no-repeat center center transparent" ; background-size: cover;></div>'+
                            '<h4>'+data[a].Picdescribe1+'</h4>'+
                            '<h5>'+data[a].Zone+'</h5>'+
                            '<p class="time">'+data[a].Opentime+'</p>'+
                            '<p class="address">'+data[a].Add+'</p>'+
                            '<p class="phone" style="display:block">'+data[a].Tel+'</p>'+
                            '<span style="margin-left:18px">'+data[a].Ticketinfo+'</span>'+
                        '</li>'
                }else{
                    str += 
                        '<li>'+
                            '<div class="picture" style="background: url('+data[a].Picture1+') no-repeat center center transparent ; background-size: cover"></div>'+
                            '<h4>'+data[a].Picdescribe1+'</h4>'+
                            '<h5>'+data[a].Zone+'</h5>'+
                            '<p class="time">'+data[a].Opentime+'</p>'+
                            '<p class="address">'+data[a].Add+'</p>'+
                            '<p class="phone">'+data[a].Tel+'</p>'+
                            '<span>'+data[a].Ticketinfo+'</span>'+
                        '</li>'
                }
            };
        };
        mainUl.innerHTML = str;
    },false);

// todo hot區塊按鈕事件
    hot.addEventListener('click',function(e){
        if(e.target.nodeName == "A"){
            e.preventDefault();
            console.log(e.target.innerText);
            title.textContent = e.target.innerText;
            var str = "";
            mainUl.innerHTML = "";
            for(var a=1;a<data.length;a++){
                if(data[a].Zone == e.target.innerText){
                // todo 因為唯獨高雄市收費的字數最多，所以多加一個判斷，讓他改變樣式
                    if(data[a].Zone == "高雄市"){
                        str += 
                            '<li>'+
                                '<div class="picture" style="background: url('+data[a].Picture1+') no-repeat center center transparent" ; background-size: cover;></div>'+
                                '<h4>'+data[a].Picdescribe1+'</h4>'+
                                '<h5>'+data[a].Zone+'</h5>'+
                                '<p class="time">'+data[a].Opentime+'</p>'+
                                '<p class="address">'+data[a].Add+'</p>'+
                                '<p class="phone" style="display:block">'+data[a].Tel+'</p>'+
                                '<span style="margin-left:18px">'+data[a].Ticketinfo+'</span>'+
                            '</li>'
                    }else{
                        str += 
                            '<li>'+
                                '<div class="picture" style="background: url('+data[a].Picture1+') no-repeat center center transparent ; background-size: cover"></div>'+
                                '<h4>'+data[a].Picdescribe1+'</h4>'+
                                '<h5>'+data[a].Zone+'</h5>'+
                                '<p class="time">'+data[a].Opentime+'</p>'+
                                '<p class="address">'+data[a].Add+'</p>'+
                                '<p class="phone">'+data[a].Tel+'</p>'+
                                '<span>'+data[a].Ticketinfo+'</span>'+
                            '</li>'
                    }
                };
            };
            mainUl.innerHTML = str;
        }
        
    },false);


// todo goTop事件
    $(document).ready(function () {
        $('.goTop').click(function (e) { 
            e.preventDefault();
            jQuery("html,body").animate({
                scrollTop:0
            },1000);
        });

        $(window).scroll(function () { 
            if( $(this).scrollTop()>300 ){
                $('.goTop').fadeIn("fast");
            }else{
                $('.goTop').fadeOut("fast");
            }
                
        });
    });

