import Vue from 'vue'

Vue.filter('highlight', function(word, query){
    console.log(word, query);
    var check = new RegExp(query, "ig");
    return word.toString().replace(check, function(matchedText){
        return ('<span class="highlight">' + matchedText + '</span>');
    });
  });


//   Vue.filter('highlight', function(words, query) {
//     return words.replace(query, '<span class="highlight">' + query + '</span>')
// });