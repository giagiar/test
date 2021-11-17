function setDateInterval(){
    var today = new Date();
    var tomorrow = new Date(today);
    var day30 = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    day30.setDate(day30.getDate() + 31);
    var dd = tomorrow.getDate();
    var mm = tomorrow.getMonth() + 1; //January is 0!
    var yyyy = tomorrow.getFullYear();

    if (dd < 10) {
       dd = '0' + dd;
    }

    if (mm < 10) {
       mm = '0' + mm;
    } 

    tomorrow = yyyy + '-' + mm + '-' + dd;
    
    dd = day30.getDate();
    mm = day30.getMonth() + 1; //January is 0!
    yyyy = day30.getFullYear();

    if (dd < 10) {
       dd = '0' + dd;
    }

    if (mm < 10) {
       mm = '0' + mm;
    } 

    day30 = yyyy + '-' + mm + '-' + dd;
    
    document.getElementById("orderDate").min = tomorrow;
    document.getElementById("orderDate").max = day30;    
}

function closeWindow(id){
    document.getElementById(id).style.display = 'none';
}

function openWindow(id) {
    
    if (document.getElementById(id).style.display === 'none' ){
        document.getElementById(id).style.display = 'inline';
    }
    else {
        document.getElementById(id).style.display = 'none';
   }
        
} 




function topFunction() {
 //   document.body.scrollTop = 0; // For Safari
//    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    const scrollHeight = window.scrollY,
          scrollStep = Math.PI / ( 20 ),
          cosParameter = scrollHeight / 2;
    var   scrollCount = 0,
          scrollMargin,
          scrollInterval = setInterval( function() {
            if ( window.scrollY != 0 ) {
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep);
                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } 
            else clearInterval(scrollInterval); 
        }, 15 );
}

function topiFunction() {
    //document.getElementById('article').contentWindow.scrollTo(0,0); 
    var scrollHeight = document.getElementById('article').contentWindow.scrollY;
    alert(scrollHeight);
    /*const scrollHeight = document.getElementById('article').contentWindow.scrollY,
          scrollStep = Math.PI / ( 20 ),
          cosParameter = scrollHeight / 2;
    var   scrollCount = 0,
          scrollMargin,
          scrollInterval = setInterval( function() {
            if ( document.getElementById('article').contentWindow.scrollY != 0 ) {
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep);
                document.getElementById('article').contentWindow.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } 
            else clearInterval(scrollInterval); 
        }, 15 );*/
}
 
function loadpage(id,pageurl) {
    document.getElementById(id).src = pageurl;
}


function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById('floatingbutton').style.display = "block";
  } else {
    document.getElementById('floatingbutton').style.display = "none";
  }
}

