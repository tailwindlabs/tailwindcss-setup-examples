<?php

function add_tailwind() {
    wp_enqueue_style( 'tailwind', get_template_directory_uri() . '/css/style.css' );
}
add_action('wp_enqueue_scripts', 'add_tailwind');
