$(document).ready(function() {
    alert("The rights to this song are copyright and are not owned by me in any matter.")
 
    $('#Light-mode-button').click(()=>{
        $('body').css('color', 'black')
        $('body').css('background-color', 'white')
        $('a').css('color', 'black')
        $('td').css('border', '5px dotted black')
        $('img').css('box-shadow', '10px 5px 5px black')
    })

    $('#Dark-mode-button').click(()=>{
        $('body').css('color', 'White')
        $('body').css('background-color', 'rgb(26, 26, 26)')
        $('a').css('color', 'white')
        $('td').css('border', '5px dotted white')
        $('img').css('box-shadow', '10px 5px 5px white')
    })

})