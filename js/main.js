const body = document.querySelector('body'),
      sideBar = body.querySelector('.sidebar'),
      toggle = body.querySelector('.toggle'),
      searchBtn = body.querySelector('.search-box'),
      modeSwitch = body.querySelector('.toggle-switch'),
      modeText = body.querySelector('.mode-text');


      toggle.addEventListener('click', () => {
        sideBar.classList.toggle('close')
      })

      modeSwitch.addEventListener('click', () => {
        body.classList.toggle('dark')
      })