$(document).ready(function () {
    $('.apps-ico').click(function(event){
        event.stopPropagation()
        $('.main-menu-system-0123').css('display','flex')
        console.log(true);
        $(document).on('click',function(event){
            console.log(true,'ff')
            event.stopPropagation()
            const ev = document.getElementById('main-menu-system-0123')            
            if(ev !== event.target && $('.apps-ico')[0] !== event.target && $('#search-in-applications')[0] !==event.target && $('.app-ss-system-0123')[0] !== event.target){

                $('.main-menu-system-0123').css('display','none')
                
            }
        })
    })

})
$(document).on('click','.application-system-0123',async function(){
    const path = $(this).data('path')
    const ext = await fetch(path)
    const resp = await ext.text()
    $(".desktop-system-0123").append(resp)
    const width = $('.window').last().data('width')
    const height = $('.window').last().data('height')
    const title = $('.window').last().data('title')
    const top = $('.window').last().data('top')
    const left = $('.window').last().data('left')
    $('.window').last().css('height',height)
    $('.window').last().css('width',width)
    $('.window').last().css('top',top)
    $('.window').last().css('left',left)

    

})
$(document).on('click','.application',async function(){
    const path = $(this).data('path')
    const ext = await fetch(path)
    const resp = await ext.text()
    $(".desktop-system-0123").append(resp)

    const width = $('.window').last().data('width')
    const height = $('.window').last().data('height')
    const title = $('.window').last().data('title')
    const top = $('.window').last().data('top')
    const left = $('.window').last().data('left')
    $('.window').last().css('height',height)
    $('.window').last().css('width',width)
    $('.window').last().css('top',top)
    $('.window').last().css('left',left)

    

})
$(document).on('mousedown', '.useful-toolbar', function(event) {
    const toolbar = $(this); // Store reference to the .useful-toolbar element
    const x = event.clientX - toolbar.offset().left;
    const y = event.clientY - toolbar.offset().top;

    $(document).on('mousemove.dragging', function(event) {
        console.log(true);
        $('.window').css('z-index',0)
        toolbar.closest('.window').css('z-index',100)

        console.log(x, y);

        toolbar.closest('.window').css('top', `${event.clientY - y}px`);
        toolbar.closest('.window').css('left', `${event.clientX - x}px`);
    });

    $(document).on('mouseup', function() {
        
        $(document).off('mousemove.dragging');
    });
});

$(document).on('click','.close-system-window',function(){

    $(this).closest('script').remove()
    $(this).closest('.window').remove()

})
$(document).on('click','.chgres-system-window',function(event){
    
    const width = $(this).closest('.window')[0].style.width
    const height = $(this).closest('.window')[0].style.height
    const top = $(this).closest('.window')[0].style.top
    const left = $(this).closest('.window')[0].style.left
    $(this).closest('.window').css('width','100%')
    $(this).closest('.window').css('height','100%')
    $(this).closest('.window').css('left','0')
    $(this).closest('.window').css('top','0')



    $('.chgres-system-window').one('click',function(event){
        event.stopPropagation()

        console.log(width,height)
        $(this).closest('.window').css('width',`${width}`)
        $(this).closest('.window').css('height',`${height}`)
        $(this).closest('.window').css('position','fixed')
        $(this).closest('.window').css('left',left)
        $(this).closest('.window').css('top',top)
        
    })
})

