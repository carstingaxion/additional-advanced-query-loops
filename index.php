<?php
/**
 * Plugin Name:       Contextual Query Loop
 * Description:       Query loop block-variation to create custom queries based on the post- or template-context.
 * Plugin URI:        https://github.com/figuren-theater/contextual-query-loop
 * Version:           2.2.3
 * Requires at least: 6.1
 * Requires PHP:      7.2
 * Author:            Ryan Welcher, Carsten Bach
 * Author URI:        
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       contextual-query-loop
 * Domain Path:       /languages
 *
 * @package           ContextualQueryLoop
 */

namespace ContextualQueryLoop;

// Some helpful constants.
define( 'CQL_BUILD_DIR_PATH', plugin_dir_path( __FILE__ ) . 'build/' );
define( 'CQL_BUILD_DIR_URL', plugin_dir_url( __FILE__ ) . 'build/' );

// Require some files.
require_once __DIR__ . '/includes/enqueues.php';
require_once __DIR__ . '/includes/query-loop.php';
