window.onload = () => {
    //variables
    index = 0;

    image = document.getElementById("image");
    title = document.getElementById("title");
    desc = document.getElementById("desc");

    images = [
        "img1.png"
    ];
    titles = [
        "Coming Soon.."
    ];
    descriptions = [
        "🛠️ This website is a work in progress. New games & projects will be available here."
    ];

    refresh(index);
}

function refresh(i){
    image.src = "images/"+images[i];
    title.innerHTML = titles[i];
    desc.innerHTML = descriptions[i];
}

function rightbtn(){
    if(index == images.length - 1){
        index = 0;
    }else{
        index++;
    }
    refresh(index);
}

function leftbtn(){
    if(index > 0){
        index--;
    }else{
        index = images.length - 1;
    }
    refresh(index);
}