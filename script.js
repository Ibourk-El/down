const box = document.querySelector( ".box" )
let player = document.querySelector( ".player" )
let moveSpeed = 10
let x = 100

let bulletBox=[]
function bullet (row)
{ 
    let b = document.createElement( "span" )
    b.style.left=row+"px"
    b.style.top = 190 + "px"
    b.className="bullet"
    return b
}
function enemy ()
{ 
    
}


addEventListener( "keydown", (e) =>
{
    if ( e.key === "ArrowRight" )
    {
        x += moveSpeed
        player.style.left = x +"px"
    }
    else if ( e.key === "ArrowLeft" )
        {
        x -= moveSpeed
        player.style.left=x+"px"
    }
    else if ( e.key === " " )
    {
        bulletBox.push( [ bullet( x), 190] )
    }

    
} )

setInterval( game, 100 )

function game ()
{

    for ( let i = 0; i < bulletBox.length; i++ )
    {
        bulletBox[ i ][ 1 ] -= 10
        bulletBox[ i ][ 0 ].style.top = bulletBox[ i ][ 1 ] + "px"
        box.appendChild( bulletBox[ i ][ 0 ] )
        distroyBullet(bulletBox[ i ][ 1 ] )
    }
}

function distroyBullet (pos)
{
    if (pos<0)
    {
        bulletBox.pop()
        box.lastElementChild.remove()
    }
}
