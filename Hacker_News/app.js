const container = document.getElementById('root');
const ajax = new XMLHttpRequest(); // 출력 결과를 돌려줌
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

ajax.open('GET',NEWS_URL,false); // 데이터를 가져옴
ajax.send(); // 데이터가 들어옴

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

for(let i = 0; i < 10; i++){
  const li = document.createElement('li');
  const a = document.createElement('a');

  window.addEventListener('hashchange',function (){
    location.hash.substr();

    ajax.open("GET",CONTENT_URL.replace('@id',id),false);
    ajax.send();

    const newsContent = JSON.parse(ajax.response);
    const title = document.createElement('h1');

    title.innerHTML = newsContent.title;
    
    content.appendChild(title);
  }); // # 뒤에 값이 바뀌면 실행

  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`; // 제목 , 댓글

  a.addEventListener("click",function () {});
  li.appendChild(a);
  ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);

