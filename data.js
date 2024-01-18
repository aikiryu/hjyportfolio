let data = [
    {
        name : '북구N뉴 영상 공모전 입상작',
        describtion : '부산광역시 북구에서 주최한 영상 공모전에서 <br>강아지를 주제로 입상한 작품입니다. 아이폰13pro로 제작',
        link : 'Z3T2cMTS_WA',
        image: 'bg1.jpg'
    },
    {
        name : '2022 북구를 만나다 영상 공모전 입상작',
        describtion : '부산광역시 북구에서 주최한 2022 북구를 만나다 <br>영상 공모전에서 입상한 작품입니다. 아이폰13pro로 제작',
        link : 'GC-l_yx8IxQ',
        image: 'bg2.jpg'
    },
    {
        name : '쌀브랜드 미량 홍보영상',
        describtion : '쌀의 생산과정을 주제로 씨앗에서부터 쌀알이 되기까지의<br> 과정을 담았습니다',
        link : 'kOK1DZ49kMc',
        image: 'bg3.jpg'
    },
    {
        name : '브릭라운지 홍보영상',
        describtion : '기획 촬영 편집',
        link : 'YREbcX9GpXU',
        image: 'youtube4.jpg'
    },
    {
        name : '고메네 수제간식 tv 광고 송출 영상',
        describtion : '수제간식을 다루는 매장의 진정성과 과정을 담았습니다',
        link : 'B6BWIFRlpW4',
        image: 'youtube5.jpg'
    },  
    {
        name : '김해 호텔 호피폴라 레트로파티',
        describtion : '스케치 영상',
        link : 'dZ4ym97eFs0',
        image: 'youtube6.jpg'
    },
    {
        name : '베비부산 홍보영상',
        describtion : '기획 촬영 편집',
        link : 'AdsfG-1E2cc',
        image: 'youtube7.jpg'
    },
    {
        name : '아지트 x 범천글로리 파티',
        describtion : '스케치 영상',
        link : 'd_Izrw8XO0c',
        image: 'youtube8.jpg'
    }, 
    {
        name : '센텀사이언스 파크 더 라움홀 웨딩영상',
        describtion : '기획 촬영 편집',
        link : '4QF98kRpkco',
        image: 'youtube9.jpg'
    },
    {
        name : 'DJ razorshave UMF aftermovie',
        describtion : '스케치 영상',
        link : '06Es8Rw5pEw',
        image: 'youtube10.jpg'
    },
    {
        name : '레드릿x범천글로리 파티',
        describtion : '스케치 영상',
        link : 'RHuT3HOAhMk',
        image: 'youtube11.jpg'
    },
    {
        name : '힛더비치 X 범천글로리 파티',
        describtion : '스케치 영상',
        link : '5Wcv-_WW6pQ',
        image: 'youtube12.jpg'
    },
    {
        name : '청룡맥주 홍보영상',
        describtion : '기획 촬영 편집',
        link : 'Vx_Roc-ZV2s',
        image: 'youtube13.jpg'
    },
    {
        name : '김해평화뒷고기 x 부산국제영화제',
        describtion : '스케치 영상',
        link : 'Sd2jKaxrWsE',
        image: 'youtube14.jpg'
    },
    {
        name : '카페유니 홍보영상',
        describtion : '기획 촬영 편집',
        link : 'dmEkeIWN8Kg',
        image: 'youtube15.jpg'
    },
];


//이 이하로는 코드를 수정하면 안됩니다.

data.forEach(function(a,b){
    let container = document.querySelector('#portfolio');
    let item = document.createElement('div');
    let figure = document.createElement('figure');
    let figcaption = document.createElement('figcaption');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let span = document.createElement('span');
    let img = document.createElement('img');

    img.src = `images/${a.image}`;
    figure.append(img);

    item.classList.add('item');
    item.append(figure);
    h4.innerText = a.name;
    p.innerHTML = a.describtion;
    span.innerText = 'VIEW';
    btn.append(span);
    btn.classList.add('viewBtn');
    figcaption.append(h4);
    figcaption.append(p);
    figcaption.append(btn);
    item.append(figcaption);
    
    container.append(item);

});

$('.viewBtn').click(function(){

    let i = $(this).parents('.item').index();
    let vidAddress = data[i].link;
    let tit = data[i].name;

    let iframe = `<iframe src="https://www.youtube.com/embed/${vidAddress}" title="${tit}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
$('#view').fadeIn();
$('#view').css({'display':'flex'});
$('.playBox').html(iframe);

$('#view h4').text(tit);
$('body').css({'overflow' : 'hidden'})
});

$('.closeBox').click(function(){
 $('#view').fadeOut();
 $('.playBox').html('');
 $('#view h4').text('');
 $('body').css({
    'overflow' : 'unset',
    'oveflow-x':'hidden'})

});