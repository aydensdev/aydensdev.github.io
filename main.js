window.onload = () => {
    //variables
    index = 0;

    image = document.getElementById("image");
    title = document.getElementById("title");
    desc = document.getElementById("desc");
    launch = document.getElementById("launch");
    
    data = [
        {
            name: "comingsoon",
            title: "Coming Soon..",
            desc: "🛠️ This website is a work in progress. New games & projects will be available here.",
            launch: ""
        }
    ];

    refresh();
}

function refresh(){
    image.src = data[index].name + "/thumbnail.png";
    title.innerHTML = data[index].title;
    desc.innerHTML = data[index].desc;
}

function launchbtn(){
    if(launch != ""){
        window.location = data[index].launch;
    }
}

function rightbtn(){
    if(index == data.length - 1){
        index = 0;
    }else{
        index++;
    }
    refresh();
}

function leftbtn(){
    if(index > 0){
        index--;
    }else{
        index = data.length - 1;
    }
    refresh();
}