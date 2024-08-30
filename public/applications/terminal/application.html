<section data-sec='window-2024' id='windowsystem2024s' class="window-system2024" data-width="600px" data-height="400px"
    data-top="100px" data-left="10px" style="background: transparent;">
    <div style="
    width: 100%;
    height: auto;
    background: white;
    color: white;
    padding-top: 4px;
    border-radius: 5px;">

        <div class="useful-toolbar" style="
        border-bottom: 1px solid black;height: 25px;">
            <div style="display: flex;height: 100%;"><img src="./gnome-ico/close.svg" class="close-system-window"
                    style="width: 14px !important;"><img src="./gnome-ico/chgres.svg" class="chgres-system-window"><img
                    src="./gnome-ico/min.svg" class="min-system-window" style="width: 14px !important;"></div>
            <!-- Change Your Title-->
            <p class="title-system-0123" style="color:black;">Terminal</p>
            <img src="./applications/terminal/term.svg" class="appico-system-window-0123">
        </div>
    </div>
    <div class="therest" style="
    height: calc(100% - 20px);
    overflow: hidden;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0px 0px 0px 5px;">
        <div class="stdin" style="display: flex;flex-direction:column;"><input style="
    background: transparent;
    border: 0;
    outline: 0;
    word-break: break-all;
    font-family:sans-serif;
    width:100%;
    resize:none;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;" class="stdii"></div>
    </div>

    <script class="application-script">
        function cont() {
            function append_input(){
                $('.stdin').last().append(`<input type='text' style="background: transparent;border: 0;outline: 0;word-break: break-all;font-family:sans-serif;width:100%;resize:none;color: white;font-size: 18px;letter-spacing: 2px;" class="stdii-continue">`)
                $('.window-system2024').find('.stdii-continue').last().focus()
            }
            let STDP;

            $(document).on('contextmenu', '.window-system2024', function (e) {
                e.preventDefault()
                $('.dss').remove()
                console.log(e.offsetY, e.offsetX)
                $(document).off('mousedown.dragging').on('mousedown.dragging', function () {
                    $('.dss').remove()

                })
                $('.window-system2024').append(`<div class='dss' style='position:fixed;top:${e.clientY}px;left:${e.clientX}px;height:300px;width:300px;background:black;'>loai</div>`)

            })

            async function importTerminal() {
                let terminalImport = await fetch('./applications/terminal/terminal-tools/terminal-init.json')
                terminalImport = await terminalImport.json()


                return `${terminalImport.pcname}@${terminalImport.username}:-$ `

            }
            async function main_window() {
                let terminal_fi = await importTerminal()
                function add_line() {
                    $('.window-system2024').find('.therest').append(`<div class="stdin" style="display: flex;flex-direction:column;"><input type='text' style="background: transparent;border: 0;outline: 0;word-break: break-all;font-family:sans-serif;width:100%;resize:none;color: white;font-size: 18px;letter-spacing: 2px;" class="stdii"></div></div>`)
                    $('.window-system2024').find('.stdii').last().val(terminal_fi).focus()
                    inputtrap()
                    inputting()
                }
                function inputting() {
                    inputtrap()
                    $('.window-system2024').find('.stdii').off('keydown').on('keydown', async function (event) {

                        if (event.key == 'Enter') {
                            $(this).css('height', 'min-content')
                            $(this).prop('disabled', true)
                            let len = $(this).val().trim().split(terminal_fi)[1]
                            console.log($(this).val())
                            let list = len.split(' ')
                            let first = list.shift()
                            list = list.join(' ')
                            console.log(first, list)
                            list = [first, list]
                            console.log(list)
                            console.log(first)
                            let fet = await fetch(`./applications/terminal/terminal-tools/${list[0]}.jst`)
                            let text = await fet.text()
                            text = text.replaceAll('terminal-params', `"${list[1]}"`)
                            text = text.replaceAll('winID', `'.window-system2024'`)
                            console.log(text)
                            $('.stdii').off('input')
                            STDP = $(this).closest('.stdin')
                            try { eval(text)}catch(e){console.log(e);add_line()}
                            console.log('running throw error default -00')
                            // inputting()
                        }
                    })
                }
                function increase() {
                    $('.window-system2024').find('.stdii-continue').off('keydown').on('keydown', async function (event) {
                        if ($(this).scrollLeft() > 0) {
                            $(this).closest('.stdin').append(`<input type='text' style="background: transparent;border: 0;outline: 0;word-break: break-all;font-family:sans-serif;width:100%;resize:none;color: white;font-size: 18px;letter-spacing: 2px;" class="stdii-continue">`)
                            $('.window-system2024').find('.stdii-continue').last().focus()
                            increase()
                        }
                        console.log($(this).val().length)
                        if (event.key == 'Backspace' && $(this).val().length <= 1) {
                            let index = $(this).closest('.stdin').find('.stdii-continue').index($(this))

                            if (index == 0) { $(this).closest('.stdin').find('.stdii').focus(); console.log(true) } else { $('.stdii-continue')[index - 1].focus() }
                            // easy
                            $(this).remove()
                        }
                        if (event.key == 'Enter') {
                            let list = []
                            $(this).closest('.stdin').find('.stdii-continue').toArray().forEach((e) => { list.push(e.value) })
                            list = list.join('')
                            let fst = $(this).closest('.stdin').find('.stdii').val().trim().split(terminal_fi)
                            fst.shift()
                            fst = `${fst.join('')}${list}`
                            let terminalpar = fst.split(' ')
                            let term = terminalpar.shift()
                            terminalpar = terminalpar.join(' ')
                            terminalpar = [term, terminalpar]

                            console.log(terminalpar[0])
                            let fet = await fetch(`./applications/terminal/terminal-tools/${terminalpar[0]}.jst`)

                            let text = await fet.text()
                            text = text.replaceAll('terminal-params', `"${terminalpar[1]}"`)

                            text = text.replaceAll('winID', `'.window-system2024'`)



                            STDP = $(this).closest('.stdin')
                            try { eval(text)}catch(e){console.log(e);add_line()}
                            console.log('running throw error default -00')
                            // inputting()


                        }
                    })
                }
                function inputtrap() {
                    $('.window-system2024').find('.stdii').off('input').on('input', function (event) {
                        let len = $(this).val().trim().split(terminal_fi)
                        console.log(len)

                        if ($(this).scrollLeft() > 0) {
                            $(this).closest('.stdin').append(`<input type='text' style="background: transparent;border: 0;outline: 0;word-break: break-all;font-family:sans-serif;width:100%;resize:none;color: white;font-size: 18px;letter-spacing: 2px;" class="stdii-continue">`)
                            $('.window-system2024').find('.stdii-continue').last().focus()
                            increase()
                        }


                        if (len.length < 2) {
                            setTimeout(() => {
                                $(this).val(terminal_fi)

                            }, 1);
                        }

                    })
                }
                function append_to_window(point,color,bgcolor,msg) {

                        $('.window-system2024').find(point).append(`<h6 style='color:${color};background-color:${bgcolor};font-family:Sans-serif;font-size:18px;letter-spacing:2px;'>${msg.replaceAll('\n','<br>')}</h6>`)

                    
                }

                function window() {

                    function disable_backspace(event) {

                        if (event.key == 'Backspace') {
                            event.preventDefault()
                        }
                    }
                    $('.window-system2024').find('.stdii').val(terminal_fi)
                    // inputtrap()
                    inputting()

                }
                window()
            }
            main_window()
        }
        cont()
    </script>
</section>