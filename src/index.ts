const deviceEl = <HTMLDivElement> document.getElementById( 'phone' ),
  iframeEl = <HTMLIFrameElement> document.getElementById( 'frame' ),
  controlsEl = <HTMLDivElement> document.getElementById( 'controls' ),
  viewsEl = <HTMLDivElement> document.getElementById( 'views' ),
  inputEls = {
    src: <HTMLInputElement> document.getElementById( 'iframeURL' ),
    width: <HTMLInputElement> document.getElementById( 'iframeWidth' ),
    height: <HTMLInputElement> document.getElementById( 'iframeHeight' ),
  };


function wait ( ms: number ) {
  return new Promise( resolve => setTimeout( resolve, ms ) );
}

async function updateView ( view: string ) {
  if ( deviceEl.classList.contains( 'rotate' ) ) {
    deviceEl.classList.remove( 'rotate' );
    await wait( 10 );
  }
  if ( view ) {
    deviceEl.className = 'phone view_' + view;

    if ( 'table' === view ) {
      await wait( 300 );
      deviceEl.classList.add( 'rotate' );
    }
  }
}

function updateIframe () {

  iframeEl.src = inputEls.src.value;
  deviceEl.style.width = `${ inputEls.width.value }px`;
  deviceEl.style.height = `${ inputEls.height.value }px`;
}
updateIframe();


controlsEl.addEventListener( 'change', function () {
  updateIframe();
} );

viewsEl.addEventListener( 'click', function ( evt ) {
  updateView( ( evt.target && ( <any> evt.target ).value ) || '' );
} );
