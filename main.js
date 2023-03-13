window.onload = () => {
    //variables
    index = 0;

    image = document.getElementById("image");
    title = document.getElementById("title");
    desc = document.getElementById("desc");
    launch = document.getElementById("launch");
    
    data = [
	{
		name: "drawtheline",
		title: "Where do you draw the line?",
		desc: "Take a quick test to see how you define different colors. Explore how different people perceive colors by comparing results.",
	},
        {
		name: "comingsoon",
		title: "Coming Soon..",
		desc: "🛠️ This website is a work in progress. New games & projects will be available here.",
        },
    ];

    refresh();
}

function refresh(){
	image.src = './thumbnails/'+ data[index].name +'.png';
    	title.innerHTML = data[index].title;
    	desc.innerHTML = data[index].desc;
}

function launchbtn(){
	if (data[index].name == "comingsoon"){ return };
	window.location = window.location + data[index].name;
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
