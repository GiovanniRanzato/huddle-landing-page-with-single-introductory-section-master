const loadedData = {
    title: "Build The Community Your Fans Will Love",
    message: "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. ",
    cta: "Register",
    icons: {
        fb: {
            src: "./images/facebook-brands.svg",
            alt: "fb-icon",
            url: "#"
        
        },
        tw: {
            src: "./images/twitter-brands.svg",
            alt: "tw-icon",
            url: "#"
        
        },
        in: {
            src: "./images/instagram-brands.svg",
            alt: "fn-icon",
            url: "#"
        
        },
    }
}


function loadData(){
    document.getElementById("title").innerHTML=loadedData.title;
    document.getElementById("message").innerHTML=loadedData.message;
    document.getElementById("cta").innerHTML=loadedData.cta;

    Object.keys(loadedData.icons).forEach(( key, i) => {
        const iconId = "icon-"+i;
        const linkId = "link-"+i;
        document.getElementById(iconId).setAttribute("src",loadedData.icons[key].src);
        document.getElementById(iconId).setAttribute("alt",loadedData.icons[key].alt);
        document.getElementById(linkId).setAttribute("href",loadedData.icons[key].url);
    })
    
    

}
loadData();






