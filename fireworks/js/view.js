//活動說明
$(function () {
    $('.btnEvent').on("click", function () {
        $(".mask").fadeIn();
        $("#popEvent").fadeIn();
    })
})
//注意事項
$(function () {
    $('.btnNotice').on("click", function () {
        $(".mask").fadeIn();
        $("#popNotice").fadeIn();
    })
})

//原料內容物
$(function () {
    $('.shopInfo').on("click", function () {
        $(".mask").fadeIn();
        $("#pop").fadeIn();
        let popId = $(this).data("pop");
        console.log(popId);
        if (popId == "R") {
            $('.popWrap').html(`<div class="popTitle">
            <div class="titleDeco deg180"></div>基本原料內容物<div class="titleDeco"></div>
        </div>
        <div class="popContent">
            <table>
                <thead>
                    <tr>
                        <td width="50px"></td>
                        <td width="200px">道具名稱</td>
                        <td width="70px">數量</td>
                        <td width="100px">機率</td>
                        <td width="100px">原料份量</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="icon1"></div>
                        </td>
                        <td>雞德COS帽(男)</td>
                        <td>1</td>
                        <td>0.2%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon2"></div>
                        </td>
                        <td>雞德COS帽(女)</td>
                        <td>1</td>
                        <td>0.2%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon3"></div>
                        </td>
                        <td>雞德COS服(男)</td>
                        <td>1</td>
                        <td>0.2%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon4"></div>
                        </td>
                        <td>雞德COS服(女)</td>
                        <td>1</td>
                        <td>0.2%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon5"></div>
                        </td>
                        <td>夢幻巨星(男)</td>
                        <td>1</td>
                        <td>1.5%</td>
                        <td>16份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon6"></div>
                        </td>
                        <td>夢幻巨星(女)</td>
                        <td>1</td>
                        <td>1.5%</td>
                        <td>16份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon7"></div>
                        </td>
                        <td>合武符</td>
                        <td>1</td>
                        <td>2.8%</td>
                        <td>6份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon8"></div>
                        </td>
                        <td>合衣符</td>
                        <td>1</td>
                        <td>2.8%</td>
                        <td>6份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon9"></div>
                        </td>
                        <td>泰和銀櫃鑰匙</td>
                        <td>1</td>
                        <td>3%</td>
                        <td>6份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon10"></div>
                        </td>
                        <td>天使包</td>
                        <td>1</td>
                        <td>3.5%</td>
                        <td>6份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon11"></div>
                        </td>
                        <td>泰和白櫃</td>
                        <td>1</td>
                        <td>4%</td>
                        <td>5份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon12"></div>
                        </td>
                        <td>紫鬼靈(7日)</td>
                        <td>1</td>
                        <td>4.5%</td>
                        <td>6份</td>
                    <tr>
                        <td>
                            <div class="icon13"></div>
                        </td>
                        <td>合成初始符</td>
                        <td>5</td>
                        <td>5%</td>
                        <td>3份</td>
                    <tr>
                        <td>
                            <div class="icon14"></div>
                        </td>
                        <td>恩寵隊伍石碑</td>
                        <td>2</td>
                        <td>5.5%</td>
                        <td>3份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon15"></div>
                        </td>
                        <td>神仙石碑(銅)</td>
                        <td>2</td>
                        <td>6.3%</td>
                        <td>4份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon16"></div>
                        </td>
                        <td>赤附身</td>
                        <td>2</td>
                        <td>7.2%</td>
                        <td>4份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon17"></div>
                        </td>
                        <td>幸運隊伍石碑</td>
                        <td>3</td>
                        <td>7.2%</td>
                        <td>3份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon18"></div>
                        </td>
                        <td>泰和銅櫃鑰匙</td>
                        <td>1</td>
                        <td>7.5%</td>
                        <td>4份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon19"></div>
                        </td>
                        <td>神仙水1日</td>
                        <td>1</td>
                        <td>8.4%</td>
                        <td>3份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon20"></div>
                        </td>
                        <td>高級怪物召喚符咒</td>
                        <td>25</td>
                        <td>9.5%</td>
                        <td>2份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon21"></div>
                        </td>
                        <td>尚仁伺服器傳音秘笈</td>
                        <td>10</td>
                        <td>9.5%</td>
                        <td>2份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon22"></div>
                        </td>
                        <td>尚仁分流傳音秘笈</td>
                        <td>15</td>
                        <td>9.5%</td>
                        <td>2份</td>
                    <tr>

                </tbody>
            </table>
        </div> 
        <button class="close center" onclick="closePopup()">關閉</button>`);
        } else if (popId == "SR") {
            $('.popWrap').html(`                                    <div class="popTitle">
            <div class="titleDeco deg180"></div>經典原料內容物<div class="titleDeco"></div>
        </div>
        <div class="popContent">
            <table>
                <thead>
                    <tr>
                        <td width="50px"></td>
                        <td width="200px">道具名稱</td>
                        <td width="70px">數量</td>
                        <td width="100px">機率</td>
                        <td width="100px">原料份量</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="icon23"></div>
                        </td>
                        <td>雞德COS帽(男)</td>
                        <td>1</td>
                        <td>0.4%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon24"></div>
                        </td>
                        <td>雞德COS帽(女)</td>
                        <td>1</td>
                        <td>0.4%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon25"></div>
                        </td>
                        <td>雞德COS服(男)</td>
                        <td>1</td>
                        <td>0.4%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon26"></div>
                        </td>
                        <td>雞德COS服(女)</td>
                        <td>1</td>
                        <td>0.4%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon27"></div>
                        </td>
                        <td>紅心A</td>
                        <td>1</td>
                        <td>0.2%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon28"></div>
                        </td>
                        <td>紅寶石權杖</td>
                        <td>1</td>
                        <td>0.2%</td>
                        <td>40份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon29"></div>
                        </td>
                        <td>遺物重設符</td>
                        <td>1</td>
                        <td>2%</td>
                        <td>18份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon30"></div>
                        </td>
                        <td>學校樂隊禮包(男)</td>
                        <td>1</td>
                        <td>2%</td>
                        <td>16份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon31"></div>
                        </td>
                        <td>學校樂隊禮包(女)</td>
                        <td>1</td>
                        <td>2%</td>
                        <td>16份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon32"></div>
                        </td>
                        <td>煉武幸運符3</td>
                        <td>1</td>
                        <td>3.5%</td>
                        <td>6份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon33"></div>
                        </td>
                        <td>煉衣幸運符3</td>
                        <td>1</td>
                        <td>3.5%</td>
                        <td>6份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon34"></div>
                        </td>
                        <td>秘．高級六角箱</td>
                        <td>1</td>
                        <td>4.5%</td>
                        <td>8份</td>
                    <tr>
                        <td>
                            <div class="icon35"></div>
                        </td>
                        <td>泰和金櫃鑰匙</td>
                        <td>1</td>
                        <td>5%</td>
                        <td>8份</td>
                    <tr>
                        <td>
                            <div class="icon36"></div>
                        </td>
                        <td>上級合成初始符</td>
                        <td>1</td>
                        <td>5%</td>
                        <td>5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon37"></div>
                        </td>
                        <td>神仙石碑(銀)</td>
                        <td>2</td>
                        <td>5.5%</td>
                        <td>5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon38"></div>
                        </td>
                        <td>天使包</td>
                        <td>1</td>
                        <td>6%</td>
                        <td>6份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon39"></div>
                        </td>
                        <td>合成初始符</td>
                        <td>2</td>
                        <td>6%</td>
                        <td>5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon40"></div>
                        </td>
                        <td>文章抽出符咒</td>
                        <td>1</td>
                        <td>7%</td>
                        <td>3份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon41"></div>
                        </td>
                        <td>祝福隊伍石碑</td>
                        <td>2</td>
                        <td>7%</td>
                        <td>5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon42"></div>
                        </td>
                        <td>瞬移秘笈</td>
                        <td>15</td>
                        <td>7.5%</td>
                        <td>3.5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon43"></div>
                        </td>
                        <td>追蹤秘笈</td>
                        <td>15</td>
                        <td>7.5%</td>
                        <td>2.5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon44"></div>
                        </td>
                        <td>高級怪物召喚符咒</td>
                        <td>35</td>
                        <td>8%</td>
                        <td>2.5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon45"></div>
                        </td>
                        <td>尚仁伺服器傳音秘笈</td>
                        <td>15</td>
                        <td>8%</td>
                        <td>2.5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon46"></div>
                        </td>
                        <td>尚仁分流傳音秘笈</td>
                        <td>20</td>
                        <td>8%</td>
                        <td>2.5份</td>
                    <tr>
                </tbody>
            </table>
        </div>  
        <button class="close center" onclick="closePopup()">關閉</button>`)
        } else if (popId == "SSR") {
            $('.popWrap').html(`<div class="popTitle">
            <div class="titleDeco deg180"></div>高級原料內容物<div class="titleDeco"></div>
        </div>
        <div class="popContent">
            <table>
                <thead>
                    <tr>
                        <td width="50px"></td>
                        <td width="200px">道具名稱</td>
                        <td width="70px">數量</td>
                        <td width="100px">機率</td>
                        <td width="100px">原料份量</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="icon47"></div>
                        </td>
                        <td>S.虹彩俐落銀髮</td>
                        <td>1</td>
                        <td>0.3%</td>
                        <td>60份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon48"></div>
                        </td>
                        <td>S.虹彩緞帶馬尾</td>
                        <td>1</td>
                        <td>0.3%</td>
                        <td>60份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon49"></div>
                        </td>
                        <td>S.虹彩少年變身服(男)</td>
                        <td>1</td>
                        <td>0.3%</td>
                        <td>60份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon50"></div>
                        </td>
                        <td>S.虹彩少女變身服(女)</td>
                        <td>1</td>
                        <td>0.3%</td>
                        <td>60份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon51"></div>
                        </td>
                        <td>S.七彩之光</td>
                        <td>1</td>
                        <td>0.3%</td>
                        <td>60份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon52"></div>
                        </td>
                        <td>S.虹彩變身槍</td>
                        <td>1</td>
                        <td>0.2%</td>
                        <td>60份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon53"></div>
                        </td>
                        <td>強化研磨劑</td>
                        <td>1</td>
                        <td>1.5%</td>
                        <td>18份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon54"></div>
                        </td>
                        <td>遺物重設符</td>
                        <td>1</td>
                        <td>2%</td>
                        <td>18份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon55"></div>
                        </td>
                        <td>星．校園魔法師(男)</td>
                        <td>1</td>
                        <td>2.5%</td>
                        <td>16份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon56"></div>
                        </td>
                        <td>星．校園魔法師(女)</td>
                        <td>1</td>
                        <td>2.5%</td>
                        <td>16份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon57"></div>
                        </td>
                        <td>合成保護咒</td>
                        <td>1</td>
                        <td>3%</td>
                        <td>15份</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon58"></div>
                        </td>
                        <td>煉武幸運符4</td>
                        <td>1</td>
                        <td>3%</td>
                        <td>15份</td>
                    <tr>
                        <td>
                            <div class="icon59"></div>
                        </td>
                        <td>煉衣幸運符4</td>
                        <td>1</td>
                        <td>3%</td>
                        <td>15份</td>
                    <tr>
                        <td>
                            <div class="icon60"></div>
                        </td>
                        <td>裝備轉換符咒</td>
                        <td>1</td>
                        <td>4.5%</td>
                        <td>8份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon61"></div>
                        </td>
                        <td>秘．高級六角箱</td>
                        <td>1</td>
                        <td>5%</td>
                        <td>8份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon62"></div>
                        </td>
                        <td>泰和金櫃鑰匙</td>
                        <td>1</td>
                        <td>6%</td>
                        <td>8份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon63"></div>
                        </td>
                        <td>神仙石碑(金)</td>
                        <td>2</td>
                        <td>6.5%</td>
                        <td>8份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon64"></div>
                        </td>
                        <td>泰和金櫃</td>
                        <td>1</td>
                        <td>7%</td>
                        <td>8份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon65"></div>
                        </td>
                        <td>強飾符</td>
                        <td>2</td>
                        <td>8%</td>
                        <td>5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon66"></div>
                        </td>
                        <td>追蹤秘笈</td>
                        <td>20</td>
                        <td>8.5%</td>
                        <td>2.5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon67"></div>
                        </td>
                        <td>瞬移秘笈</td>
                        <td>20</td>
                        <td>8.5%</td>
                        <td>3.5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon68"></div>
                        </td>
                        <td>高級怪物召喚符咒</td>
                        <td>45</td>
                        <td>8.8%</td>
                        <td>3.5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon69"></div>
                        </td>
                        <td>尚仁伺服器傳音秘笈</td>
                        <td>20</td>
                        <td>9%</td>
                        <td>3.5份</td>
                    <tr>
                    <tr>
                        <td>
                            <div class="icon70"></div>
                        </td>
                        <td>尚仁分流傳音秘笈</td>
                        <td>25</td>
                        <td>9%</td>
                        <td>3.5份</td>
                    <tr>
                </tbody>
            </table>
        </div> 
        <button class="close center" onclick="closePopup()">關閉</button>`)
        }
    })
})
//璀璨煙花獎勵
$(function () {
    $('.fireworkAward').on("click", function () {
        $(".mask").fadeIn();
        $("#pop").fadeIn();
        $('.popWrap').html(`            <div class="popTitle">
            <div class="titleDeco deg180"></div>璀璨煙花獎勵<div class="titleDeco"></div>
        </div>
        <div class="popContent">
            <table>
                <thead>
                    <tr>
                        <td width="50px"></td>
                        <td width="250px">道具名稱</td>
                        <td width="70px">數量</td>
                        <td width="130px">機率</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="icon71"></div>
                        </td>
                        <td>天降小雪(特級)</td>
                        <td>1</td>
                        <td>2.0%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon72"></div>
                        </td>
                        <td>S.虹彩俐落銀髮</td>
                        <td>1</td>
                        <td>2.2%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon73"></div>
                        </td>
                        <td>S.虹彩緞帶馬尾</td>
                        <td>1</td>
                        <td>2.2%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon74"></div>
                        </td>
                        <td>S.虹彩少年變身服(男)</td>
                        <td>1</td>
                        <td>2.2%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon75"></div>
                        </td>
                        <td>S.虹彩少女變身服(女)</td>
                        <td>1</td>
                        <td>2.2%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon76"></div>
                        </td>
                        <td>S.七彩之光</td>
                        <td>1</td>
                        <td>2.2%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon77"></div>
                        </td>
                        <td>S.虹彩變身槍</td>
                        <td>1</td>
                        <td>2.0%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon78"></div>
                        </td>
                        <td>雞德COS帽(男)</td>
                        <td>1</td>
                        <td>2.5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon79"></div>
                        </td>
                        <td>雞德COS帽(女)</td>
                        <td>1</td>
                        <td>2.5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon80"></div>
                        </td>
                        <td>雞德COS服(男)</td>
                        <td>1</td>
                        <td>2.5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon81"></div>
                        </td>
                        <td>雞德COS服(女)</td>
                        <td>1</td>
                        <td>2.5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon82"></div>
                        </td>
                        <td>紅心A</td>
                        <td>1</td>
                        <td>2.5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon83"></div>
                        </td>
                        <td>紅寶石權杖</td>
                        <td>1</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon84"></div>
                        </td>
                        <td>純真菲高象靈物像</td>
                        <td>1</td>
                        <td>3%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon85"></div>
                        </td>
                        <td>傳說重設符</td>
                        <td>1</td>
                        <td>3%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon86"></div>
                        </td>
                        <td>上級研磨劑</td>
                        <td>1</td>
                        <td>4%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon87"></div>
                        </td>
                        <td>強化研磨劑</td>
                        <td>1</td>
                        <td>4.5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon88"></div>
                        </td>
                        <td>遺物重設符</td>
                        <td>1</td>
                        <td>5.5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon89"></div>
                        </td>
                        <td>煉武幸運符5</td>
                        <td>1</td>
                        <td>5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon90"></div>
                        </td>
                        <td>煉衣幸運符5</td>
                        <td>1</td>
                        <td>5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon91"></div>
                        </td>
                        <td>合成保護咒</td>
                        <td>1</td>
                        <td>6%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon92"></div>
                        </td>
                        <td>煉武幸運符4</td>
                        <td>1</td>
                        <td>6.5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon93"></div>
                        </td>
                        <td>煉衣幸運符4</td>
                        <td>1</td>
                        <td>6.5%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon94"></div>
                        </td>
                        <td>泰和金櫃</td>
                        <td>2</td>
                        <td>7%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon95"></div>
                        </td>
                        <td>泰和金櫃鑰匙</td>
                        <td>3</td>
                        <td>7.0%</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="icon96"></div>
                        </td>
                        <td>神仙石碑(金)</td>
                        <td>3</td>
                        <td>7.5%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="close center" onclick="closePopup()">關閉</button>`);

    })
})


//關閉彈窗
function closePopup() {
    $(".pop,.popS, .mask,.maskS").fadeOut();
}
//關閉小彈窗
function closeSpopup() {
    $(".popS,.maskS").fadeOut();
}
//關閉小彈窗&重讀資料
function closeSpopupGet() {
    $(".popS,.maskS").fadeOut();
    get_setting();
    recode();
}

//關閉彈窗&重讀資料
function closePopupGet() {
    $(".pop,.popS, .mask,.maskS").fadeOut();
    get_setting();
}

//重整頁面
function closePopReload() {
    location.reload();
}



//活動說明tab切換
// $('#buyRule').hide();
$('#makeRule').hide();
$(function () {
    $('.tabBtn').click(function () {
        var target = $(this).data('target');
        $(target).show().siblings('.ruleBox').hide();
        $(this).addClass('active').siblings('.tabBtn').removeClass('active');
    });
});