import Vue from 'vue'

Vue.filter('highlight', function(word, query){
    var check = new RegExp(query, "ig");
    return word.toString().replace(check, function(matchedText){
        return ('<span class="highlight">' + matchedText + '</span>');
    });
  });


