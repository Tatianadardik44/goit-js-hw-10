import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formPromis = document.querySelector(".form");

formPromis.addEventListener("submit", norma);
function norma(event) {
    event.preventDefault();
    const delay = event.target.elements.delay.value; 
    const delayNum = Number(delay);
    const dovilne = event.target.state.value;
    
    const promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dovilne === `fulfilled`) {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            } else  {
                reject(`❌ Rejected promise in ${delay}ms`);
            }
        }, delayNum)
        
    });
    
    promis
        .then((res) => iziToast.show({
            message: res,
            position: 'topRight',
            backgroundColor: '#59a10d',
            messageColor: '#fff',
        })
        
    )
         
    .catch ((error) => iziToast.show({
                   message: error,
                   position: 'topRight',
                   backgroundColor: '#ef4040',
                   messageColor: '#fff',
    }))
    formPromis.reset();
    
};





