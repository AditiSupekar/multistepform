let currentTab=0;
let readyForSubmission=true;
const tabs=document.getElementsByClassName("tab");
const tabLen=tabs.length;
let isValidInput=false;
let validateInput=(a)=>{
    if(a.value.length>0){
        //console.log(a.value.length);
        a.classList.toggle("invalid",false);
        isValidInput= true;
    }
    else{
        a.classList.toggle("invalid",true);
        isValidInput= false;    
    }
}
const nextTab=()=>{
        console.log("++currenttab ",currentTab);
        console.log(isValidInput);
            if(isValidInput && currentTab>=0 && currentTab<tabLen-1){
                showTab(++currentTab);
                //isValidInput=false;
    }
}
const prevTab=()=>{
    console.log("--currenttab ",currentTab);
    console.log(isValidInput);
    if(isValidInput && currentTab>0 && currentTab<=tabLen){
      showTab(--currentTab);
      //isValidInput=false;
    }
}
const showTab=(n)=>{
  console.log("showingtab ",n);
  if(n>=0 && n<tabLen){
    hideTab(n-1);
    tabs[n].style.display="block";
    hideTab(n+1);
  }
}
const hideTab=(n)=>{
  console.log("hidingtab ",n);
  if(n>=0 && n<tabLen){
    tabs[n].style.display="none";
  }
}
console.log(tabs);
//tabs.forEach(hideTab);
console.log(currentTab);
showTab(currentTab);