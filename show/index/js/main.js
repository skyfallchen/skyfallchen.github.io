let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let char = params.get("charpropid");
let user = params.get("id_loginid");

/*彈窗_中 */
$(".pop").on("click", function () {
  $(".mask_b").fadeIn();
  let popId = $(this).data("pop");
  $(".pop_b").fadeIn();
  if (popId == "home_notice") {
    $(".pop_b_wrap").html(`<div class="pop_b_title">注意事項</div>
        <div class="pop_b_content">
            <ul>
                <li>1.<a href="../page1/page1.html" class="blue_pop info_page_1">「黃金通行證」</a>：每日簽到領好禮，開通黃金通行證加碼送，獎勵每帳號限領1次。</li>
                <li>2.<a href="../page2/page2.html" class="blue_pop info_page_2">「黃金輪盤」</a>：透過商城消費、通行證簽到可獲得黃金積分，消耗黃金積分可轉動黃金輪盤獲取獎勵。</li>
                <li>3.<a href="../page3/page3.html" class="blue_pop info_page_3">「週年摸彩箱」</a>：商城每消費滿3000點，可獲得一張週年摸彩券，投入摸彩箱抽取+10技能武器（自選）。</li>
                <li>4. 黃金積分與所持摸彩券若至活動截止時尚未使用完畢，將視同放棄權益，不予補償。</li>
                <li>5. 掘夢網保有中止、變更以及解釋活動規則的最終權利。</li>
            </ul>
        </div>`);
    // $(".info_page_1").on("click", function () {
    //   location.href =
    //     "https://nage.digeam.com/event/20231004/page1/page1.html?charpropid=" +
    //     char +
    //     "&id_loginid=" +
    //     user;
    // });
    // $(".info_page_2").on("click", function () {
    //   location.href =
    //     "https://nage.digeam.com/event/20231004/page2/page2.html?charpropid=" +
    //     char +
    //     "&id_loginid=" +
    //     user;
    // });
    // $(".info_page_3").on("click", function () {
    //   location.href =
    //     "https://nage.digeam.com/event/20231004/page3/page3.html?charpropid=" +
    //     char +
    //     "&id_loginid=" +
    //     user;
    // });
  } else if (popId == "page1_notice") {
    $(".pop_b_wrap").html(`<div class="pop_b_title">注意事項</div>
        <div class="pop_b_content">
        <table>
                <thead>
                    <tr>
                        <th colspan="3">黃金通行證開通禮</th>
                    </tr>
                    <tr>
                    <th width="3">道具名</th>
                    <th width="100">道具說明</th>
                    <th width="3">備註</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>VIP會員卡(15D)</td>
                        <td>右擊使用後，可開通15日VIP功能（自動練功、自動拾取、免費移動地圖、隨身商店、遠端倉庫…等功能）</td>
                        <td>永久/可交易</td>
                    </tr>
                    <tr>
                        <td>[造型]歐風貴族風套裝(女)</td>
                        <td>右擊使用後，可套用當前裝備中的防具外型，</br>限女性角色使用。</td>
                        <td rowspan="2">2選1/永久/</br>可交易​</td>
                    </tr>
                    <tr>
                    <td>[造型]歐風貴族風套裝(男)</td>
                    <td>右擊使用後，可套用當前裝備中的防具外型，</br>限男性角色使用。</td>
                    </tr>
                </tbody>
                </table>
            <ul>
                <li>1.「幸運獎勵」與「黃金獎勵」每帳號每日限領取一次。</li>
                <li>2. 開通「黃金通行證」時，請於跳窗頁面內選擇欲領取的「[造型]歐風貴族裝」性別，系統將依照選擇項目，發送至當前角色提領中心。</li>
                <li>3.「黃金通行證」的補簽機會適用黃金獎勵與幸運獎勵，總計可補簽5次。</li>
                <li>4. 開通「黃金通行證」金額不列入黃金積分與摸彩券活動標準。</li>
                <li>5. 獲得的活動獎勵道具將於30分鐘內發送至遊戲內角色提領中心。</li>
                <li>6. 遊戲內的角色提領中心最多顯示前60格未提領道具，超過時請先提領部分道具後，重新開啟提領中心即可。</li>
                <li>7. 提領中心內的道具最多保留6個月，逾期未領取將自動消失。</li>
                <li>8. 掘夢網保有中止、變更以及解釋活動規則的最終權利。</li>
            </ul>
        </div>`);
  }  else if (popId == "page2_notice") {
    $(".pop_b_wrap").html(`<div class="pop_b_title">注意事項</div>
        <div class="pop_b_content">
            <ul>
            <li>1. 本活動採滿額兌換制，每個帳號達成累積消費門檻，將於本頁面自動顯示帳號目前擁有的黃金積分。</li>
            <li>2.「保底」意即連續299次未中金獎勵時，第300次必得金獎勵，期間若已獲取金獎勵將重新計算距離保底次數。</li>
            <li>3. 獲得的活動獎勵道具將於30分鐘內發送至遊戲內角色提領中心。</li>
            <li>4. 遊戲內的角色提領中心最多顯示前60格未提領道具，超過時請先提領部分道具後，重新開啟提領中心即可。</li>
            <li>5. 本活動為「消費」性質活動，消費意即於遊戲商城中，使用「點數」購買任意金額道具的行為，開通「黃金通行證」與「儲值」金額不列入活動標準。</li>
            <li>6. 黃金積分使用期限至2023/11/12(日)23:59止，逾期未消耗完畢者視同放棄活動積分。</li>
            <li>7. 掘夢網保有中止、變更以及解釋活動規則的最終權利。</li>
            </ul>
        </div>`);
  } else if (popId == "page2_gift") {
    $(".pop_b_wrap").html(`<div class="pop_b_title">獎勵內容</div>
        <div class="pop_b_content">
        <table class="table_g">
        <thead>
        <tr>
            <th colspan="3">金獎勵</th>
        </tr>
        <tr>
        <th width="150px">道具名</th>
        <th width="350px">道具說明</th>
        <th width="100px">備註</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="./img/01.png">刃牙+9</td>
            <td>力量+40 敏捷+40 HP+750 SP+200 攻速+112% </br>連環刺擊+20 攻擊+39%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/02.png">蠍殺+9</td>
            <td>力量+40 敏捷+40 HP+750 SP+80 攻速112%</br>致命一擊+20 攻擊+39%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/03.png">水晶權杖+9</td>
            <td>攻擊+50 防禦+68 靈力+40 意念+40 HP+750 SP+200 移速+14 星雲召喚+20 攻擊+39%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/04.png">P90TR衝鋒槍+9</td>
            <td>攻擊+50 防禦+65 靈力+40 意念+40 HP+750 SP+200 移速+14 九天狂舞2階+20 攻擊+39%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/05.png">凌空斬+8</td>
            <td>力量+35 敏捷+35 HP+650 SP+300 攻速+103%</br>一文字斬+19 攻擊+38%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/06.png">爪魅+8</td>
            <td>力量+35 敏捷+35 HP+650 攻速+103%</br>斗轉星移+19 攻擊+38%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/07.png">巖石權杖+8</td>
            <td>攻擊+45 防禦+62 靈力+35 意念+35 HP+650 SP+180 移速+13 異次元震鳴+19 攻擊+38%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/08.png">轉輪手槍+8</td>
            <td>攻擊+45 防禦+59 靈力+35 意念+35 HP+650 SP+180 移速+13 舞天迴旋+19 遲緩+19 攻擊+38%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/09.png">幻影碎殺+7</td>
            <td>力量+30 敏捷+30 HP+550 SP+96 攻速+90%</br>致命一擊+18 攻擊+35%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/10.png">冥王+7</td>
            <td>力量+30 敏捷+30 HP+550 攻速+90%</br>奪命反擊+18 攻擊+36%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/11.png">靈魂權杖+7</td>
            <td>攻擊+40 防禦+56 靈力+30 意念+30 格檔+9 SP+170</br>移速+12 離子光速+18 攻擊+35%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/12.png">榴彈槍+7</td>
            <td>攻擊+40 防禦+53 靈力+30 意念+30 HP+550 SP+160 移速+12 天使降臨+18 攻擊+35%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/13.png">暗黑之翼</td>
            <td>武術/持械專用 裝備於「後背」欄位，強化後可獲得能力值加乘，可強化至+10</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/14.png">光明之翼</td>
            <td>超能/神行專用 裝備於「後背」欄位，強化後可獲得能力值加乘，可強化至+10</td>
            <td>永久/可交易</td>
        </tr>
    </tbody>
    </table>
    <table class="table_s">
    <thead>
        <tr>
            <th colspan="3">銀獎勵</th>
        </tr>
        <tr>
            <th width="150px">道具名</th>
            <th width="350px">道具說明</th>
            <th width="100px">備註</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="./img/15.png">黃金寶石五代</td>
            <td>升級4~6級用強化石機率提升30%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/16.png">黃金寶石四代</td>
            <td>升級4~6級用強化石機率提升20%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/17.png">黃金寶石三代</td>
            <td>升級4~6級用強化石機率提升15%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/18.png">紫水晶寶石五代</td>
            <td>升級7~10級用強化石機率提升15%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/19.png">紫水晶寶石四代</td>
            <td>升級7~10級用強化石機率提升10%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/20.png">紫水晶寶石三代</td>
            <td>升級7~10級用強化石機率提升7%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/21.png">SP寶石+4</td>
            <td>SP+20 適用鑲嵌部位：下衣</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/22.png">SP寶石+3</td>
            <td>SP+15 適用鑲嵌部位：下衣</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/23.png">HP寶石+4</td>
            <td>HP+100 適用鑲嵌部位：上衣</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/24.png">HP寶石+3</td>
            <td>HP+70 適用鑲嵌部位：上衣</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/25.png">S&E寶石+3</td>
            <td>力量、靈力+4 適用鑲嵌部位：帽子</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/26.png">S&E寶石+2</td>
            <td>力量、靈力+3 適用鑲嵌部位：帽子</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/27.png">D&S寶石+3</td>
            <td>敏捷、意志+4 適用鑲嵌部位：臉</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/28.png">D&S寶石+2</td>
            <td>敏捷、意志+3 適用鑲嵌部位：臉</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/29.png">黑色羽毛</td>
            <td>收集20個可向波本市藍寶寶NPC[339,431]兌換暗黑之翼</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/30.png">白色羽毛</td>
            <td>收集20個可向波本市藍寶寶NPC[339,431]兌換光明之翼</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/31.png">特殊男髮型禮包</td>
            <td>開啟後隨機獲得男性髮型券1張，於服飾店消耗4張相同髮型券可進行解鎖與套用</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/32.png">特殊女髮型禮包</td>
            <td>開啟後隨機獲得女性髮型券1張，於服飾店消耗4張相同髮型券可進行解鎖與套用</td>
            <td>永久/可交易</td>
        </tr>
    </tbody>
</table>
<table class="table_c">
    <thead>
        <tr>
            <th colspan="3">銅獎勵</th>
        </tr>
        <tr>
            <th width="150px">道具名</th>
            <th width="350px">道具說明</th>
            <th width="100px">備註</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="./img/33.png">黃金寶石二代</td>
            <td>升級4~6級用強化石機率提升10%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/34.png">黃金寶石一代</td>
            <td>升級4~6級用強化石機率提升5%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/35.png">黃金寶石</td>
            <td>升級4~6級用強化石</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/36.png">紫水晶寶石二代</td>
            <td>升級7~10級用強化石機率提升5%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/37.png">紫水晶寶石一代</td>
            <td>升級7~10級用強化石機率提升3%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/38.png">50%buff等級經驗券(6H)</td>
            <td>使用後6小時內戰鬥經驗值提升50%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/39.png">50%buff等級經驗券(3H)</td>
            <td>使用後3小時內戰鬥經驗值提升50%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/40.png">2倍等級經驗券(5H)</td>
            <td>使用後5小時內戰鬥經驗值2倍</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/41.png">2倍等級經驗券(1H)</td>
            <td>使用後1小時內戰鬥經驗值2倍</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/42.png">2倍聲望經驗券(5D)</td>
            <td>使用後5日內聲望經驗值2倍</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/43.png">4倍聲望經驗券(5D)</td>
            <td>使用後5日內聲望經驗值4倍</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/44.png">易兒保(6H)</td>
            <td>使用後6小時內昏迷時減免經驗值懲罰</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/45.png">維兒剛(3D)</td>
            <td>使用後3日內命中率提升20%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/46.png">維兒柔(3D)</td>
            <td>使用後3日內迴避率提升20%</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/47.png">再生丹</td>
            <td>使用後角色可於原地甦醒，減免金錢懲罰</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/48.png">錢兒保(5H)</td>
            <td>使用後5小時內角色復活時可減免金錢懲罰</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/49.png">堅固藥水(3D)</td>
            <td>使用後3日內裝備中道具耐久度不會下降</td>
            <td>永久/可交易</td>
        </tr>
        <tr>
            <td><img src="./img/50.png">堅固藥水(1D)</td>
            <td>使用後1日內裝備中道具耐久度不會下降</td>
            <td>永久/可交易</td>
        </tr>
    </tbody>
</table>
        </div> `);
  } else if (popId == "page3_notice") {
    $(".pop_b_wrap").html(`<div class="pop_b_title">注意事項</div>
        <div class="pop_b_content">
        <ul>
                <li>1. 本活動採滿額兌換制，每個帳號達成累積消費門檻，將於本頁面自動顯示帳號目前擁有的持有摸彩券。</li>
                <li>2. 請於「自選獎勵」區域設定期望獎勵，活動截止前可自由調整獎勵，中獎者將依照活動截止時設定的項目發送獎勵。</li>
                <li>3. 每張摸彩券即代表1次中獎機會，投入越多張至摸彩箱中，中獎機率越高。</li>
                <li>4. 活動結束前，未將持有摸彩券投入摸彩箱者，視同放棄權益。</li>
                <li>5. 遊戲內的角色提領中心最多顯示前60格未提領道具，超過時請先提領部分道具後，重新開啟提領中心即可。</li>
                <li>6. 掘夢網保留審核、決定或變更活動之權力，並且依照實際情況予以增刪、修訂活動辦法，所有參加的玩家於活動中請配合官方網站的相關公告。</li>
            </ul>
        </div>`);
  } else if (popId == "page3_gift") {
    $(".pop_b_wrap").html(`<div class="pop_b_title">獎勵內容</div>
        <div class="pop_b_content">
        <table>
        <thead>
            <tr>
                <th width="70">道具名</th>
                <th width="5">數量</th>
                <th width="150">道具說明</th>
                <th width="50">備註</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="./img/01.png">刃牙+10</td>
                <td>1</td>
                <td>力量+50 命中+10 HP+1800 SP+220</br>攻速+118% 連環刺擊+22 攻擊+40%</td>
                <td>永久/可交易</td>
            </tr>
            <tr>
                <td><img src="./img/02.png">凌空斬+10</td>
                <td>1</td>
                <td>力量+50 命中+10 HP+1800 SP+360</br>攻速+118% 一文字斬+22 攻擊+40%</td>
                <td>永久/可交易</td>
            </tr>
            <tr>
                <td><img src="./img/03.png">蠍殺+10</td>
                <td>1</td>
                <td>力量+50 命中+10 HP+1800 SP+88</br>攻速+118% 致命一擊+22 攻擊+40%</td>
                <td>永久/可交易</td>
            </tr>
            <tr>
                <td><img src="./img/04.png">冥王+10</td>
                <td>1</td>
                <td>力量+50 命中+10 HP+1800 攻速+118%</br>奪命反擊+22 攻擊+40%</td>
                <td>永久/可交易</td>
            </tr>
            <tr>
                <td><img src="./img/05.png">水晶權杖+10</td>
                <td>1</td>
                <td>攻擊+50 防禦+69 靈力+50 命中+10 HP+1800 SP+220 移速+15 星雲召喚+22 攻擊+40%</td>
                <td>永久/可交易</td>
            </tr>
            <tr>
                <td><img src="./img/06.png">靈魂權杖+10</td>
                <td>1</td>
                <td>攻擊+50 防禦+69 靈力+50 命中+10 HP+1800 SP+220 移速+15 離子光速+22 攻擊+40%</td>
                <td>永久/可交易</td>
            </tr>
            <tr>
                <td><img src="./img/07.png">P90TR衝鋒槍+10</td>
                <td>1</td>
                <td>攻擊+50 防禦+66 靈力+50 命中+10 HP+1800 SP+220 移速+15 九天狂舞2階+22 攻擊+40%</td>
                <td>永久/可交易</td>
            </tr>
            <tr>
                <td><img src="./img/08.png">轉輪手槍+10</td>
                <td>1</td>
                <td>攻擊+50 防禦+66 靈力+50 命中+10 HP+1800 SP+220 移速+15 舞天迴旋+22 攻擊+40%</td>
                <td>永久/可交易</td>
            </tr>
        </tbody>
    </table>
        </div>`);
  } else if (popId == "") {
    $(".pop_b_wrap").html(`<div class="pop_b_title"></div>
        <div class="pop_b_content">

        </div>`);
  }
});

$(".close , .close_text, .black_btn").on("click", function () {
  $(
    ".pop_b , .mask_b , .pop_s , .pop_l, .pop_c,.pop_s_yesonly,.pop_buy_choose"
  ).fadeOut();
});
//重整
$(".close_text").on("click", function () {
  $(
    ".pop_b , .mask_b , .pop_s , .pop_l, .pop_c,.pop_s_yesonly,.pop_buy_choose"
  ).fadeOut();
  location.reload();
});

/*彈窗_造型展示*/
$(".blue_pop").on("click", function () {
  $(".mask_b").fadeIn();
  let popId = $(this).data("pop");
  $(".pop_l").fadeIn();
  if (popId == "clothes") {
    $(".pop_l_wrap")
      .html(`<div class="pop_b_title">限定造型<span>—歐風貴族裝</span></div>
        <div class="clothes"></div>`);
  }
});

/*彈窗_小*/
$(".play_100,.play_10,.put,.buy_btn").on("click", function () {
  $(".mask_b").fadeIn();
  let popId = $(this).data("pop");
  $(".pop_s").fadeIn();
  if (popId == "play100") {
    $(".pop_s_wrap")
      .html(`<div class="pop_s_title">你確定要消耗<span>100</span>點黃金積分​</br>
        轉<span>11</span>次黃金輪盤嗎？​​</div>`);
    $(".red_btn").attr("onclick", "play(100)");
  } else if (popId == "play10") {
    $(".pop_s_wrap")
      .html(`<div class="pop_s_title">你確定要消耗<span>10</span>點黃金積分​</br>
        轉<span>1</span>次黃金輪盤嗎？​​</div>`);
    $(".red_btn").attr("onclick", "play(10)");
  } else if (popId == "put") {
    $(".pop_s_wrap").html(
      `<div class="pop_s_title">您目前持有<span>` +
        $(".unlockCard").text() +
        `</span>張摸彩券​</br>
            要投入摸彩箱中嗎？​​​</div>`
    );
    $(".red_btn").attr("onclick", "put()");
  } else if (popId == "buy_pass") {
    $(".pop_s_wrap").html(
      `<div class="pop_s_title">你要花費590點</br>開通黃金通行證嗎？​`
    );
  } else if (popId == "buy_choose") {
    $(".pop_s_wrap")
      .html(`<div class="pop_s_title">你要花費590點</br>開通黃金通行證嗎？</div>
        <div class="pop_s_content">
        ※請先選擇欲領取的</br>「[造型]歐風貴族裝」性別​​</br>
        <div class="input_box">
        <label><input type="radio" name="gender" value="1">男性 </label>
        <label><input type="radio" name="gender" value="0">女性 </label>
        </div>
    </div>​`);
  }
});

/*日期左右切換*/
$(".arms_R").on("click", function () {
  $(this).css("visibility", "hidden");
  $(".arms_L").css("visibility", "visible");
  $(".right_box_later").fadeToggle();
  $(".right_box_later").css("display", "flex");
  $(".right_box_front").fadeToggle();
  $(".right_box_front").css("display", "none");
});
$(".arms_L").on("click", function () {
  $(this).css("visibility", "hidden");
  $(".arms_R").css("visibility", "visible");
  $(".right_box_later").fadeToggle();
  $(".right_box_later").css("display", "none");
  $(".right_box_front").fadeToggle();
  $(".right_box_front").css("display", "flex");
});

/*道具說明*/
$(".hover_info").hide();
$(
  "#day0_g,#day1_g,#day3_g,#day4_g,#day6_g,#day7_g,#day9_g,#day10_g,#day12_g,#day13_g,#day15_g,#day16_g,#day17_g"
).on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">黃金積分x4</div>
        <div class="hover_info_text">
        累積滿10點可前往黃金輪盤抽取1次獎勵。
        </div>`);
  $(this).find(".hover_info").show();
});
$(
  "#day0_l,#day1_l,#day2_l,#day4_l,#day5_l,#day6_l,#day8_l,#day9_l,#day10_l,#day12_l,#day13_l,#day14_l,#day16_l,#day17_l"
).on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">黃金積分x1</div>
        <div class="hover_info_text">
        累積滿10點可前往黃金輪盤抽取1次獎勵。
        </div>`);
  $(this).find(".hover_info").show();
});
$("#day2_g").on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">堅固護盾(7D)x1</div>
        <div class="hover_info_text">
        置於背包可保護裝備中的任1道具耐久度降至0%時免於損毀，發揮保護效果時消失。
        </div>
        <p>7日/不可交易</p>`);
  $(this).find(".hover_info").show();
});

$("#day5_g").on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">2倍等級經驗券(3H)x1</div>
        <div class="hover_info_text">
        使用後3小時內戰鬥經驗值2倍
        </div>
        <p>永久/可交易</p>`);
  $(this).find(".hover_info").show();
});
$("#day8_g").on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">氣血翻湧箱x1</div>
        <div class="hover_info_text">
        開啟後機率性獲得D&S寶石+2、SP寶石+2、HP寶石+2
        </div>
        <p>永久/可交易</p>`);
  $(this).find(".hover_info").show();
});
$("#day11_g").on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">活力百倍箱x1</div>
        <div class="hover_info_text">
        開啟後機率性獲得S&E寶石+2、移速寶石+2、攻速寶石+2
        </div>
        <p>永久/可交易</p>`);
  $(this).find(".hover_info").show();
});
$("#day14_g").on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">寶石剔除工具(單)x3</div>
        <div class="hover_info_text">
        左鍵拖曳至裝備圖示上可剔除該裝備上的1個鑲嵌石
        </div>
        <p>永久/可交易</p>`);
  $(this).find(".hover_info").show();
});
$("#day3_l").on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">50%Buff等級經驗券(3H)x1</div>
        <div class="hover_info_text">
        使用後3小時內戰鬥經驗值提升50%
        </div>
        <p>14日/不可交易</p>`);
  $(this).find(".hover_info").show();
});
$("#day7_l").on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">鑲嵌寶石箱x1</div>
        <div class="hover_info_text">
        開啟後隨機獲得1個屬性鑲嵌寶石
        </div>
        <p>14日/不可交易</p>`);
  $(this).find(".hover_info").show();
});
$("#day11_l").on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">堅固藥水(5H)x1</div>
        <div class="hover_info_text">
        使用後5小時內裝備中道具耐久度不會下降
        </div>
        <p>14日/不可交易</p>`);
  $(this).find(".hover_info").show();
});
$("#day15_l").on("mouseenter", function () {
  $(this).find(
    ".hover_info"
  ).html(`<div class="hover_info_title">寶石剔除工具(單)x1</div>
        <div class="hover_info_text">
        左鍵拖曳至裝備圖示上可剔除該裝備上的1個鑲嵌石
        </div>
        <p>30日/不可交易</p>`);
  $(this).find(".hover_info").show();
});

$(
  "#day2_g,#day5_g,#day8_g,#day11_g,#day14_g,#day3_l,#day7_l,#day11_l,#day15_l,#day0_g,#day1_g,#day3_g,#day4_g,#day6_g,#day7_g,#day9_g,#day10_g,#day12_g,#day13_g,#day15_g,#day16_g,#day17_g,#day0_l,#day1_l,#day2_l,#day4_l,#day5_l,#day6_l,#day8_l,#day9_l,#day10_l,#day12_l,#day13_l,#day14_l,#day16_l,#day17_l"
).on("mouseleave", function () {
  $(".hover_info").hide();
});

var loginres = {
  status: 1,
  point: 100,
  lottery: 100,
  pass: "n",
  resign: 5,
  today_g: "y",
  today_l: "y",
  light: "",
  light_resign: ["day1_l","day2_l","day3_l","day4_l"],
  giftlist: [
    {
      name: "角色名",
      item: "道具名",
      get: "獲取途徑",
      date: "10/25 0:0:0",
    },
    {
      name: "角色名2",
      item: "道具名",
      get: "獲取途徑",
      date: "10/25 0:0:0",
    },
    {
      name: "角色名3",
      item: "道具名",
      get: "獲取途徑",
      date: "10/25 0:0:0",
    },
    {
      name: "角色名4",
      item: "道具名",
      get: "獲取途徑",
      date: "10/25 0:0:0",
    },
  ],
  userinfo: { awards: 0, already_use: 0, distanc: 300 },
};

get_setting();
function get_setting() {
  // $.post(
  //   "get_setting.php",
  //   {
  //     type: "login",
  //     user: user,
  //     char: char,
  //   },
  //   function (_res) {
  //     var res = JSON.parse(_res);
      var res = loginres;
      //獲取紀錄
      $("#all_history").on("click", function () {
        $(".mask_b").fadeIn();
        $(".pop_b").fadeIn();
        let str = "";
        res.giftlist.forEach((i) => {
          str += `<tr>
                 <td>${i.name}</td>
                 <td>${i.item}</td>
                 <td>${i.get}</td>
                 <td>${i.date}</td>
             </tr>`;
        });
        $(".pop_b_wrap").html(`<div class="pop_b_title">獲取紀錄</div>
          <div class="pop_b_content">
              <table>
                  <thead>
                      <tr>
                          <th>角色</th>
                          <th>道具</th>
                          <th>獲取途徑</th>
                          <th>發送時間</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${str}
                  </tbody>
              </table>
          </div>`);
      });
    }
//   );
// }

var rouletteres = {
  status: 1,
  item: [{img:"01", item_name:"道具1"},{img:"01", item_name:"道具2"},{img:"01", item_name:"道具3"}
  ,{img:"05", item_name:"道具4"},{img:"06", item_name:"道具5"},{img:"08", item_name:"道具6"}
  ,{img:"02", item_name:"道具7"},{img:"04", item_name:"道具8"},{img:"09", item_name:"道具9"}
  ,{img:"03", item_name:"道具10"},{img:"07", item_name:"道具11"}]
};

var buypassres = {
  status: 1,
};

var signres = {
  status: 2,
  resign: 5,
};

var choose = {
  status: 1,
};

var lottery = {
  status: 1,
};
