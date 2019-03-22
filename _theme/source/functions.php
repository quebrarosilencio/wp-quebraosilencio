<?php


// ACF includes
//include 'includes/acf/acf-maxprotect.php';

if ( get_site_url() == 'http://localhost/wp-quebrarosilencio' || get_site_url() == 'http://localhost:3000/wp-quebrarosilencio') {
	$site_url = get_site_url() . '/index.php';
} else {
	$site_url = get_site_url();
}

function mytheme_register_nav_menus() {
	register_nav_menus( array(
			'primary' => __( 'Primary Menu', 'your-text-domain' ),
			'footer' => __( 'Footer Menu', 'your-text-domain' )
	));
}
add_action( 'after_setup_theme', 'mytheme_register_nav_menus' );

function mytheme_widgets_init() {
	register_sidebar( array (
			'name' => __( 'Main Sidebar', 'your-text-domain' ),
			'id' => 'sidebar-1',
			'description' => __( 'Appears on posts and pages except the optional Front Page template, which has its own widgets', 'your-text-domain' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget' => '</aside>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
	));
}
add_action( 'widgets_init', 'mytheme_widgets_init' );