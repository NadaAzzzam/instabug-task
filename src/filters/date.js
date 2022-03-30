import Vue from 'vue'

Vue.filter('date', function(date){
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date || null))

  });
