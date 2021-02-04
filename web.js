function inProgress(){
    alert("This section is in progress :D");
    document.getElementById("mySidenav").style.width = "400px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSidenav(){
    document.getElementById("mySidenav").style.width = "0px";
    document.body.style.backgroundColor = "white";
}

/*trying to replace contents with js*/
/*
const la1_name = ["Home", "Learn Anything", "Learn Programming", "Learn in Thai", "About Me", "aKhan Academy", "aCoursera", "LinkedIn x Microsoft", "Future Learn", "aTyping.com", 
, "LinkedIn x Microsoft", "Future Learn", "aTyping.com"
, "LinkedIn x Microsoft", "Future Learn", "aTyping.com"]; 

window.onload = function() {
    const la1_query = document.getElementsByTagName("a");
    for(var j = 0; j < la1_query.length; j++) {
        var p = document.createElement("p");
        var node = document.createTextNode(la1_name[j]);
        //adding the text to the paragraph
        p.appendChild(node);

        var div = document.getElementById("a");
        //adding the paragraph to the div
        div.appendChild(p);
        //la1_query[j].innerHTML = la1_name[j] ;
    }
}; 
*/

/*function MyList(props) {
    const arr = props.data;
    const listItems = arr.map((val) =>
      <li>{val}</li>
    );
    return <ul>{listItems}</ul>;
}

const arr = ["A", "B", "C"];
const el = <MyList data={arr} />; */

/*
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    //creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);
};
*/
