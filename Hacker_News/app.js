const container = document.getElementById('root');
const ajax = new XMLHttpRequest(); // 출력 결과를 돌려줌
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(url){
  ajax.open('GET',url,false); // 데이터를 가져옴
  ajax.send(); // 데이터가 들어옴

  return JSON.parse(ajax.response);
}

function newsFeed(){
  const newsFeed = getData(NEWS_URL);
  const newsList = [];

  newsList.push('<ul>');

  for(let i = 0; i < 10; i++){
    const div = document.createElement("div");

    newsList.push(
    div.innerHTML = `
    <li>
      <a href = "#${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
      </a>
    </li>`);
  }

newsList.push('</ul>');

container.innerHTML = newsList.join('') 
//배열 요소 안에 들어있는 문자열을 하나로 합침 ,로 구분한다.
// , 로 구분하지 않도록 빈 문자열로 join을 호출한다.  
}

function newsDetail(){
  const id = location.hash.substr(1);

  const newsContent = getData(CONTENT_URL.replace('@id',id));
  const title = document.createElement('h1');

  container.innerHTML = `
  <h1>${newsContent.title}</h1>
  <div>
    <a href ="#">목록으로</a>
  </div>`;
  
}

function router(){
  const routePath = location.hash;

  if(routePath === ''){
    newsFeed();
  } else{
    newsDetail();
  }
}
window.addEventListener('hashchange', router ); // # 뒤에 값이 바뀌면 실행

router();