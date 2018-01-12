<?php
/**
 * Plugin Name: Falldown
 */

add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_script( 'falldown', WP_CONTENT_URL . '/themes/vip/entravision-plugins/falldown/falldown.js', array( 'jquery' ) );
} );
