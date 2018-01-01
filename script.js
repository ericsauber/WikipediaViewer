
function myFunction() {

  var search = document.getElementById("search").value;
  
  $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': search
            },

            success: function (data) {
                
                var result = data[1];
                var desc = data[2];
                var links = data[3];
                var about;

                for (var a = 0; a < result.length; a++)  {
                    about = desc[a].toString().slice(0,70);
                    console.log(about);
                    
                    $('#results').append('<div class="thing"><strong>' + result[a] + '</strong>' + '<br>'
                                + about + '...<br>'
                                + '<a href="'+ links[a] + '">' + links[a] + '</a></div>' + '<br><br>');
                }
            }
        });
}