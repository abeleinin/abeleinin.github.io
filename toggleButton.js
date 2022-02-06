const toggleButton = document.getElementById('toggle-button')
const naviList = document.getElementById('navi-list')
const waveId = document.getElementById('wave-id')

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
    waveId.classList.toggle('none');
})