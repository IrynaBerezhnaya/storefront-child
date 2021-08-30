<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

function add_scripts_and_styles() {
	wp_enqueue_script( 'main', get_stylesheet_directory_uri() . '/assets/js/main.js', array('jquery'), null, true );

	//Push some data to main JS file:
	wp_localize_script( 'main', 'mb_localize', array(
			'admin_url'   => admin_url( 'admin-ajax.php' ),
		)
	);

}

add_action( 'wp_enqueue_scripts', 'add_scripts_and_styles' );


/**
 * Add custom CSS files to admin page
 */
function mb_admin_enqueue_scripts() {
//	wp_enqueue_style( 'admin', get_stylesheet_directory_uri() . '/assets/admin_css/admin.css', array(), wp_get_theme()->get( 'Version' ) );
	wp_enqueue_script( 'admin', get_stylesheet_directory_uri() . '/assets/admin_js/admin.js', array( 'jquery' ), '1.0.1', true );
}

add_action( 'admin_enqueue_scripts', 'mb_admin_enqueue_scripts' );