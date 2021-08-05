let sideBarStatus = false;

let sideBar = function(){
    let getSideBar = document.querySelector('.side-bar');
    let getSideBarUl = document.querySelector('.side-bar ul');
    let getSideBarTitle = document.querySelector('.side-bar span');
    let getSideBarLink = document.querySelectorAll('.side-bar a');

    if(sideBarStatus === false){
        getSideBarUl.style.visibility = "visible"
        getSideBar.style.width = "220px";
        getSideBarTitle.style.opicity = '0.5';

        let arrayLength = getSideBarLink.length;
        for(let i=0; i <arrayLength;i++){
            getSideBarLink[i].style.opicity='1';
        }
        sideBarStatus = true;
    }
    else if(sideBarStatus === true){
        getSideBar.style.width = "60px";
        getSideBarTitle.style.opicity = '0';

        let arrayLength = getSideBarLink.length;
        for(let i=0; i <arrayLength;i++){
            getSideBarLink[i].style.opicity='0';

        }
         getSideBarUl.style.visibility = "hidden";
        sideBarStatus = false;  }

}