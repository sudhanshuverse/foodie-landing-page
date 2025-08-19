const hamburgerMenu = document.querySelector( '.hamburger-menu' );
const headerContent = document.querySelector( '.header-content' );
const closeIcon = document.querySelector( '.close-icon' );
const nav = document.querySelector( 'nav' );

// Open menu
hamburgerMenu.addEventListener( 'click', ( e ) => {
    e.stopPropagation(); // prevent triggering window click
    headerContent.classList.add( 'menu-open' );
} );

// Close menu via close button
closeIcon.addEventListener( 'click', ( e ) => {
    e.stopPropagation();
    headerContent.classList.remove( 'menu-open' );
} );

// Prevent nav clicks from closing menu
nav.addEventListener( 'click', ( e ) => {
    e.stopPropagation();
} );

// Smooth scroll to top
document.querySelector( "footer .go-to-top a" ).addEventListener( 'click', ( e ) => {
    e.preventDefault();
    window.scrollTo( { top: 0, behavior: 'smooth' } );
} );

// Close menu if clicked outside nav or hamburger
window.addEventListener( 'click', ( e ) => {
    if ( !headerContent.contains( e.target ) ) {
        headerContent.classList.remove( 'menu-open' );
    }
} );

