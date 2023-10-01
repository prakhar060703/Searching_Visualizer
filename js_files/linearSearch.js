async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    console.log(vari);
    let userinput=vari; let min_index;let flag=-1;

    for(let i=0;i<ele.length; i++){
        console.log(parseInt(ele[i].style.height));
       if( parseInt(ele[i].style.height)/3 == userinput){
         flag=i;
         break;
       }
    }
    console.log(flag);
    if(flag!=-1){
    
         min_index = flag;
        
        
        let j=0;
        while(parseInt(ele[j].style.height) != parseInt(ele[min_index].style.height)){
            console.log('In jth loop');
            
            
            ele[j].style.background = 'red';
            j++;

            await waitforme(delay);
             if(parseInt(ele[j].style.height) == parseInt(ele[min_index].style.height)){
                 console.log('In if condition height comparision');
            
                    ele[min_index].style.background = 'white';
                    ele[min_index-1].style.background = '#2ff07f';
                    await waitforme(delay+1200);
                    ele[min_index].style.background = '#2ff07f';
            //     //}
             } 
             else{
                
                ele[j-1].style.background = '#2ff07f';
             }   
          }
        }
        else{
            document.querySelector('#baba').innerHTML=`-> ${userinput} is not present in array
                                                        Now clear me!!  Try Again!!`;
             enableclear();
            
        }
    
}
let vari;
const changeme=(event)=>{
vari=event.target.value;
console.log(vari);
}

const linearSearchbtn = document.querySelector(".linearSearch");
linearSearchbtn.addEventListener('click', async function(){
    disableclear();
    disableSearchingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSearchingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableclear();
});