import IndexView from '../views/IndexView.vue';
import HomeView from '../views/HomeView/HomeView.vue';
const viewMap ={
  IndexView,
  HomeView,
}

export default {
  // name:'App',
  components: {
    IndexView,
    HomeView,
  },
  data() {
    return {
      visibleView: 'HomeView',
    };
  },
  computed:{
    currentComponent(){
      return viewMap[this.visibleView]
    }
  },
  beforeCreate() {
    window.onhashchange = () => {
      this.visibleView = location.hash.replace('#', '');
    };
  },
  created() {
    window.vm = this;
  },
};