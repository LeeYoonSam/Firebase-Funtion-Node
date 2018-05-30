const serverKey = require('./secretKey');

/* NodeJs 샘플 코드 */
var request = require('request');

/*
측정소별 실시간 측정정보 조회
측정소명과 측정데이터 기간(일, 한달, 3개월)으로 해당 측정소의 일반항목 측정정보를 제공하는 측정소별 실시간 측정정보조회

http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=&numOfRows=10&pageSize=10&pageNo=1&startPage=1&stationName=%EC%A2%85%EB%A1%9C%EA%B5%AC&dataTerm=DAILY&ver=1.3

<item>
<dataTime>2018-05-30 23:00</dataTime>
<mangName>도시대기</mangName>
<so2Value>0.004</so2Value>
<coValue>0.5</coValue>
<o3Value>0.015</o3Value>
<no2Value>0.041</no2Value>
<pm10Value>38</pm10Value>
<pm10Value24>34</pm10Value24>
<pm25Value>27</pm25Value>
<pm25Value24>21</pm25Value24>
<khaiValue>68</khaiValue>
<khaiGrade>2</khaiGrade>
<so2Grade>1</so2Grade>
<coGrade>1</coGrade>
<o3Grade>1</o3Grade>
<no2Grade>2</no2Grade>
<pm10Grade>2</pm10Grade>
<pm25Grade>2</pm25Grade>
<pm10Grade1h>2</pm10Grade1h>
<pm25Grade1h>2</pm25Grade1h>
</item>
*/

/*
통합대기환경지수 나쁨 이상 측정소 목록조회
통합대기환경지수가 나쁨 등급 이상인 측정소명과 주소 목록 정보를 제공하는 통합대기환경지수 나쁨 이상 측정소 목록조회

http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getUnityAirEnvrnIdexSnstiveAboveMsrstnList?serviceKey=&numOfRows=10&pageSize=10&pageNo=1&startPage=1

<item>
<stationName>남중동</stationName>
<addr>전북 익산시 인북로 32길 1 (익산시의회)익산시의회 옥상</addr>
</item>
<item>
<stationName>운서</stationName>
<addr>인천 중구 영종대로 85(운서동)영종도서관 옥상</addr>
</item>
*/



/*
시도별 실시간 측정정보 조회
시도명을 검색조건으로 하여 시도별 측정소목록에 대한 일반 항목과 CAI 최종 실시간 측정값과 지수 정보 조회 기능을 제공하는 시도별 실시간 측정정보 조회

http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=&numOfRows=10&pageSize=10&pageNo=1&startPage=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.3

<item>
<stationName>중구</stationName>
<mangName>도시대기</mangName>
<dataTime>2018-05-30 23:00</dataTime>
<so2Value>0.003</so2Value>
<coValue>0.4</coValue>
<o3Value>0.020</o3Value>
<no2Value>0.032</no2Value>
<pm10Value>36</pm10Value>
<pm10Value24>34</pm10Value24>
<pm25Value>24</pm25Value>
<pm25Value24>19</pm25Value24>
<khaiValue>59</khaiValue>
<khaiGrade>2</khaiGrade>
<so2Grade>1</so2Grade>
<coGrade>1</coGrade>
<o3Grade>1</o3Grade>
<no2Grade>2</no2Grade>
<pm10Grade>2</pm10Grade>
<pm25Grade>2</pm25Grade>
<pm10Grade1h>2</pm10Grade1h>
<pm25Grade1h>2</pm25Grade1h>
</item>

 */


/*
대기질 예보통보 조회
통보코드와 통보시간으로 예보정보와 발생 원인 정보를 조회하는 대기질(미세먼지/오존) 예보통보 조회	
http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=&numOfRows=10&pageSize=10&pageNo=1&startPage=1&searchDate=2017-04-19&InformCode=PM10

<items></items>
<totalCount>0</totalCount>
*/

/*
시도별 실시간 평균정보 조회
시도별 측정소목록에 대한 일반 항목의 시간 및 일평균 자료 및 지역 평균 정보를 제공하는 시도별 실시간 평균정보 조회

http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?serviceKey=&numOfRows=10&pageSize=10&pageNo=1&startPage=1&itemCode=PM10&dataGubun=HOUR&searchCondition=MONTH

<item>
<dataTime>2018-05-30 22:00</dataTime>
<itemCode>PM10</itemCode>
<dataGubun>시간평균</dataGubun>
<seoul>37</seoul>
<busan>50</busan>
<daegu>54</daegu>
<incheon>35</incheon>
<gwangju>75</gwangju>
<daejeon>70</daejeon>
<ulsan>46</ulsan>
<gyeonggi>35</gyeonggi>
<gangwon>42</gangwon>
<chungbuk>49</chungbuk>
<chungnam>41</chungnam>
<jeonbuk>60</jeonbuk>
<jeonnam>62</jeonnam>
<gyeongbuk>57</gyeongbuk>
<gyeongnam>55</gyeongnam>
<jeju>36</jeju>
<sejong>42</sejong>
</item>
*/



/*
시군구별 실시간 평균정보 조회
시도의 각 시군구별 측정소목록의 일반 항목에 대한 시간대별 평균농도를 제공하는 시군구별 실시간 평균정보 조회

http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst?serviceKey=&numOfRows=10&pageSize=10&pageNo=1&startPage=1&sidoName=%EC%84%9C%EC%9A%B8&searchCondition=DAILY

<item>
<dataTime>2018-05-30 23:00</dataTime>
<cityName>강남구</cityName>
<so2Value>0.004</so2Value>
<coValue>0.3</coValue>
<o3Value>0.023</o3Value>
<no2Value>0.026</no2Value>
<pm10Value>32</pm10Value>
<pm25Value>18</pm25Value>
</item>
*/

var url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=o' + serverKey.getServerKey(); /* Service Key*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 */
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('서울'); /* 시도 이름 (서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종) */
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); /* 요청 데이터기간 (시간 : HOUR, 하루 : DAILY) */

console.log(queryParams);

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});