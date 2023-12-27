
window.addEventListener('DOMContentLoaded', ()=>{
    function openModal(modalSelector){
        const modalWindow = document.querySelector(modalSelector);
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    function closeModal(modalSelector){
        const modalWindow = document.querySelector(modalSelector);
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = '';
    }

    function modal(triggerSelector,modalSelector){
        const modalTrigger = document.querySelectorAll(triggerSelector),
            modalWindow = document.querySelector(modalSelector);
        
        modalTrigger.forEach(btn =>{
            btn.addEventListener('click',()=>openModal(modalSelector))
        });

        modalWindow.addEventListener('click',(e)=>{
            if(e.target === modalWindow || e.target.getAttribute('data-close')===''){
                closeModal(modalSelector);
            }
        });

        document.addEventListener('keydown',(e)=>{
            if(e.code ==='Escape' && modalWindow.classList.contains('show')){
                closeModal(modalSelector)
            };
        })

        function showModalByScroll (){
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
                openModal(modalSelector);
                window.removeEventListener('scroll', showModalByScroll)
            }
        }
    
        window.addEventListener('scroll', showModalByScroll);

    }

    openModal('.modal');
    closeModal('.modal');
    modal('[data-modal]','.modal');
});

