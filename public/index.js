
let pids = [] // running applications main_functions_{Pids}()
$(document).ready(function () {
    $('.apps-ico').click(function (event) {
        event.stopPropagation()
        $('.main-menu-system-0123').css('display', 'flex')

        $(document).on('click', function (event) {

            event.stopPropagation()
            const ev = document.getElementById('main-menu-system-0123')
            if (ev !== event.target && $('.apps-ico')[0] !== event.target && $('#search-in-applications')[0] !== event.target && $('.app-ss-system-0123')[0] !== event.target) {

                $('.main-menu-system-0123').css('display', 'none')

            }
        })
    })

})
function message_pop(msg, type, window, handler) {
    let div;
    if (type == 'error') {
        div = `<div class='big' style='width:400px;border-radius:3px;height:250px;position:absolute;width:400px;height:200px; background:#fff;top:34%; left:calc(50% - 200px);box-shadow: 0px 0px 12px 1px;'><div class='useful-toolbar-pop'style='height:20px;width:400px;display:flex;align-items:center;justify-content:space-between;padding-left:2px;padding-top:3px;border-bottom:1px solid rgba(0,0,0,0.1);'><h1 style='font-size:13px;font-weight:100;font-family:sans-serif;'>Error</h1><img src='./gnome-ico/close.svg' class='close-sys-msg' style='margin-right:2px;'></div><div style='display: flex;height:75%;justify-content: space-evenly;align-items: center;'><img src='./applications/notepad/error.svg' style='height:40px ;   font-size: 15px;
    font-family: sans-serif;
    letter-spacing: 1px;'><h1 style='font-weight: 100;
    font-family: sans-serif;'>${msg}</h1></div><div style='display:flex;justify-content:right;'><button class='ok-msg'>OK</button></div></div>`

    } else if (type == 'msg') {
        div = `<div class='big' style='width:400px;border-radius:3px;height:250px;position:absolute;width:400px;height:200px; background:#fff;top:34%; left:calc(50% - 200px);box-shadow: 0px 0px 12px 1px;'><div class='useful-toolbar-pop'style='height:20px;width:400px;display:flex;align-items:center;justify-content:space-between;padding-left:2px;padding-top:3px;border-bottom:1px solid rgba(0,0,0,0.1);'><h1 style='font-size:13px;font-weight:100;font-family:sans-serif;'>Message</h1><img src='./gnome-ico/close.svg' class='close-sys-msg' style='margin-right:2px;'></div><div style='display: flex;height:75%;justify-content: space-evenly;align-items: center;'><img src='./applications/notepad/msg.svg' style='height:40px ;   font-size: 15px;
    font-family: sans-serif;
    letter-spacing: 1px;'><h1 style='font-weight: 100;
    font-family: sans-serif;'>${msg}</h1></div><div style='display:flex;justify-content:right;'><button class='ok-msg'>OK</button></div></div>`

    } else if (type == 'warn') {
        div = `<div class='big' style='width:400px;border-radius:3px;height:250px;position:absolute;width:400px;height:200px; background:#fff;top:34%; left:calc(50% - 200px);box-shadow: 0px 0px 12px 1px;'><div class='useful-toolbar-pop'style='height:20px;width:400px;display:flex;align-items:center;justify-content:space-between;padding-left:2px;padding-top:3px;border-bottom:1px solid rgba(0,0,0,0.1);'><h1 style='font-size:13px;font-weight:100;font-family:sans-serif;'>Warning</h1><img src='./gnome-ico/close.svg' class='close-sys-msg' style='margin-right:2px;'></div><div style='display: flex;height:75%;justify-content: space-evenly;align-items: center;'><img src='./applications/notepad/warning.svg' style='height:40px;font-size: 15px;
    font-family: sans-serif;
    letter-spacing: 1px;'><h1 style='font-weight: 100;
    font-family: sans-serif;'>${msg}</h1></div><div style='display:flex;justify-content:right;'><button class='ok-msg'>OK</button></div></div>`

    }
    window.append(div)
    if (handler) {
            window.find('.ok-msg').on('click', async function () {
            handler()
            $(this).closest('.big').remove()
        })
    }
    console.log(window)
    
}
async function openApplication(path) {

    const ext = await fetch(path)
    const resp = await ext.text()
    let pid = Date.now() + 100
    let rep = resp.replaceAll('window-system2024', `window-${pid}`)
    pids.push(pid)
    $(".desktop-system-0123").append(rep)

    const width = $(`.window-${pid}`).last().data('width')
    const height = $(`.window-${pid}`).last().data('height')
    const title = $(`.window-${pid}`).last().data('title')
    const top = $(`.window-${pid}`).last().data('top')
    const left = $(`.window-${pid}`).last().data('left')
    $(`.window-${pid}`).last().css('height', height)
    $(`.window-${pid}`).last().css('width', width)
    $(`.window-${pid}`).last().css('top', top)
    $(`.window-${pid}`).last().css('left', left)
}
$(document).on('click', '.application-system-0123', async function () {

    const path = $(this).data('path')
    const ext = await fetch(path)
    const resp = await ext.text()
    let pid = Date.now() + 100
    let rep = resp.replaceAll('window-system2024', `window-${pid}`)
    pids.push(pid)
    $(".desktop-system-0123").append(rep)


    const width = $(`.window-${pid}`).last().data('width')
    const height = $(`.window-${pid}`).last().data('height')
    const title = $(`.window-${pid}`).last().data('title')
    const top = $(`.window-${pid}`).last().data('top')
    const left = $(`.window-${pid}`).last().data('left')
    $(`.window-${pid}`).last().css('height', height)
    $(`.window-${pid}`).last().css('width', width)
    $(`.window-${pid}`).last().css('top', top)
    $(`.window-${pid}`).last().css('left', left)



})
$(document).on('click', '.application', async function () {
    const path = $(this).data('path')
    const ext = await fetch(path)
    const resp = await ext.text()
    let pid = Date.now() + 100
    const rep = resp.replaceAll('window-system2024', `window-${pid}`)
    console.log(rep)
    pids.push(pid)


    $(".desktop-system-0123").append(rep)


    const width = $(`.window-${pid}`).last().data('width')
    const height = $(`.window-${pid}`).last().data('height')
    const title = $(`.window-${pid}`).last().data('title')
    const top = $(`.window-${pid}`).last().data('top')
    const left = $(`.window-${pid}`).last().data('left')

    $(`.window-${pid}`).last().css('height', height)
    $(`.window-${pid}`).last().css('width', width)
    $(`.window-${pid}`).last().css('top', top)
    $(`.window-${pid}`).last().css('left', left)



})
$(document).on('mousedown', '.useful-toolbar', function (event) {
    const toolbar = $(this); // Store reference to the .useful-toolbar element
    const x = event.clientX - toolbar.offset().left;
    const y = event.clientY - toolbar.offset().top;

    $(document).on('mousemove.dragging', function (event) {

        $('[data-sec=window-2024]').css('z-index', 0)
        toolbar.closest('[data-sec=window-2024]').css('z-index', 100)



        toolbar.closest('section').css('top', `${event.clientY - y}px`);
        toolbar.closest('section').css('left', `${event.clientX - x}px`);
    });

    $(document).on('mouseup', function () {

        $(document).off('mousemove.dragging');
    });
});
$(document).on('mousedown', '.useful-toolbar-pop', function (event) {
    const toolbar = $(this); // Store reference to the .useful-toolbar element
    const x = event.clientX - toolbar.offset().left;
    const y = event.clientY - toolbar.offset().top;

    $(document).on('mousemove.dragging', function (event) {

        console.log(toolbar)
        toolbar.closest('.big').css('position', `fixed`);
        toolbar.closest('.big').css('top', `${event.clientY - y}px`);
        toolbar.closest('.big').css('left', `${event.clientX - x}px`);
    });

    $(document).on('mouseup', function () {

        $(document).off('mousemove.dragging');
    });
});
$(document).on('click', '.close-system-window', function () {

    $(this).closest('script').remove()
    $(this).closest('section').remove()

})
$(document).on('click', '.close-sys-msg', function () {

    $(this).closest('.big').remove()

})
$(document).on('click', '.chgres-system-window', function (event) {

    const width = $(this).closest('section')[0].style.width
    const height = $(this).closest('section')[0].style.height
    const top = $(this).closest('section')[0].style.top
    const left = $(this).closest('section')[0].style.left
    $(this).closest('section').css('width', '100%')
    $(this).closest('section').css('height', '100%')
    $(this).closest('section').css('left', '0')
    $(this).closest('section').css('top', '0')



    $('.chgres-system-window').one('click', function (event) {
        event.stopPropagation()


        $(this).closest('section').css('width', `${width}`)
        $(this).closest('section').css('height', `${height}`)
        $(this).closest('section').css('position', 'fixed')
        $(this).closest('section').css('left', left)
        $(this).closest('section').css('top', top)

    })
})

