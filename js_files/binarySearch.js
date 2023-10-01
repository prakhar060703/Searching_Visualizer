
async function binarySearch(){
    const ele = document.querySelectorAll(".bar");
    console.log(vari);
    
    narray = [];
    for (let i = 0; i < ele.length; i++) {
        narray.push(array[i]);
    }

    deleteChild();
    // creating an array of random numbers 
    
    
    narray.sort(function(a,b){
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    });
    console.log(narray);
    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < ele.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${narray[i]*3}px`;
        bar.style.width=`${narray[i]*0 +30}px`;
        bar.innerText=`${narray[i]}`;
        bar.style.fontSize=`20px`;
        bar.style.color=`brown`;
        bar.style.fontWeight=`bold`;
        bar.style.align=`bottom`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
    const elem = document.querySelectorAll(".bar");
    let userinput=vari;let flag=-1;
    for(let i=0;i<elem.length; i++){
        console.log(parseInt(elem[i].style.height));
       if( parseInt(elem[i].style.height)/3 == userinput){
         flag=i;
         break;
       }
    }
    console.log(flag);
    if(flag!=-1){
        let l=0,r=elem.length-1;
        let mid=parseInt((l+r)/2);
        while(l<=r){
            console.log(mid);
            elem[mid].style.background = 'red';
            await waitforme(delay+100);
           if(parseInt(elem[mid].style.height)/3<userinput){
            l=mid+1;
           } 
           else if( parseInt(elem[mid].style.height)/3 == userinput){
                 elem[mid].style.background = 'white';
                 await waitforme(delay+1200);
                    elem[mid].style.background = '#2ff07f';
                   
                break;
           }
           else{
            r=mid-1;
           }
           elem[mid].style.background = '#2ff07f';
          mid = parseInt((l+r)/2);
          
        }
    }
    else{
        document.querySelector('#baba').innerHTML=`-> ${userinput} is not present in array Now clear me!!  Try Again!!`;
        
    }   

}
 const saraja=(event)=>{
    document.querySelector('#user_input').value="";
    document.querySelector('#baba').innerHTML="";

 }

const binarySearchbtn = document.querySelector(".binarySearch");
binarySearchbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableclear();
    disableSearchingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await binarySearch();
    enableSearchingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableclear();
});