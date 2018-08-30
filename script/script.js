const homePage = () => {
  let ul = document.querySelector('.list');
  let profile = document.querySelector('.profile');
  ul.classList.remove('hidden');
  profile.classList.remove('active');
};

const aboutPage = () => {
  let ul = document.querySelector('.list');
  let profile = document.querySelector('.profile');
  ul.classList.add('hidden');
  profile.classList.add('active');
};
const projectPage = () => {};

const Home = {
  template: `
      <div>
        <div id="content">
          <div class="image">
          </div>
          <ul class="list">
            <li>
              <a href="javascript:; " v-on:click="aboutPage">My Resume</a>
            </li>
            <li>
              <router-link to="/project/1">My Project</router-link>
            </li>
          </ul>
          <div class="profile">
            <ul>
              <li>熱愛音樂以及現場演出</li>
              <li>喜歡與人交流，分享彼此生活</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  methods: {
    aboutPage
  }
};
const About = {
  template: `
      <div>
        <div id="content">
          <div class="image">
          </div>
          <ul class="list hidden">
            <li>
              <a href="javascript:; " v-on:click="aboutPage">My Resume</a>
            </li>
            <li>
              <router-link to="/project/1">My Project</router-link>
            </li>
          </ul>
          <div class="profile active">
            <ul>
              <li>熱愛音樂以及現場演出</li>
              <li>喜歡與人交流，分享彼此生活</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  methods: {
    aboutPage
  }
};
const Project = {
  template: `
      <div>
        <div id="content">
          <div class="pages">
            <ul class="page">
              <li>
                <router-link to="1" >1</router-link>
              </li>
              <li>
                <router-link to="2">2</router-link>
              </li>
              <li>
                <router-link to="3">3</router-link>
              </li>
              <li>
                <router-link to="4">4</router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
    </div>`
};
const Page1 = {
  template: `
      <div class="card">
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Drum Kit</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>把鍵盤當作MIDI訊號,藉此呼叫音源，頁面上對應的字母會變大變亮</p>
          </div>
          <div class="uk-card-footer">
            <a href="../project/1. drum kit/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom"> CSS+ JS Clock</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>用HTML建構時鐘，  使用ＪＳ控制CSS的Translate使指針移動</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/2. CSS+ JS Clock/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">CSS Variables</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>用JS和CSS控制圖片Padding、Blur、Background-color</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/03 - CSS Variables/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Flex Panel Gallery</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>使被點擊的圖片展開，在點擊其他圖片之後原本展開圖片將合起</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/05 - Flex Panel Gallery/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
      </div>`
};
const Page2 = {
  template: `
      <div class="card">
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Type Ahead</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>利用FetchAPI取得網站資料，透過Filter過濾數據呈現在畫面上</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/06 - Type Ahead/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Shift&Checkboxes</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>先點選其中一個Checkbox,按住Shift可以做到複選功能</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/10 - Hold Shift and Check Checkboxes/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Slide in on Scroll</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>點擊上方圓點會導覽到指定圖片上，圖片會在畫面到達同時出現</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/13 - Slide in on Scroll/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">LocalStorage</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>將資料處存在LocalStorag上，使得下次再開啟畫面時資料會被保存</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/15 - LocalStorage/index.html" class="uk-button uk-button-text">Read more
          </div>
        </div>
      </div>`
};
const Page3 = {
  template: `
      <div class="card">
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Mouse Move Shadow</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>滑鼠影子會依據滑鼠的座標跟著移動</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/16 - Mouse Move Shadow/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Follow Along Link Highlighter</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>選單添加聚光燈效果，聚光燈會跟著滑鼠位置移動</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/22 - Follow Along Link Highlighter/index-start.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Sticky Nav</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>選單會固定在最上方，在移動時隱藏Logo會顯示出來</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/24 - Sticky Nav/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Click and Drag</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>透過滑鼠點擊拖曳使得畫面中的圖片移動，放開右鍵則移動取消</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/26 - Strip Follow Along Nav/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
      </div>`
};
const Page4 = {
  template: `
      <div class="card">
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Strip Follow Along Nav</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>滑鼠移動到選單時，選單下方列表會顯示出來</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/27 - Click and Drag/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Countdown Timer</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>倒數計時器，右邊也可以自行填入時間，並且會顯示倒數完後的正確時間</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/29 - Countdown Timer/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Whack A Mole</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>打地鼠遊戲，會在時限之內依據打到的地鼠得到分數</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/30 - Whack A Mole/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">scss色票練習</h3>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>使用v-model來做出及時更新色票效果，熟悉v-for以及v-bind用法</p>
          </div>
          <div class="uk-card-footer">
            <a href="./project/scss色票練習/index.html" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
      </div>`
};
let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/project',
      name: 'project',
      component: Project,
      children: [
        {
          path: '1',
          name: 'page1',
          component: Page1
        },
        {
          path: '2',
          name: 'page2',
          component: Page2
        },
        {
          path: '3',
          name: 'page3',
          component: Page3
        },
        {
          path: '4',
          name: 'page4',
          component: Page4
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

const index = new Vue({
  el: '#index',
  router,
  methods: {
    homePage,
    aboutPage
  }
}).$mount('#index');
