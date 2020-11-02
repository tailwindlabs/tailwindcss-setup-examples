<?php
/**
 * Craft web bootstrap file
 */

define('CRAFT_BASE_PATH', dirname(__DIR__));

// Custom constants
$protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
$httpHost = $_SERVER['HTTP_HOST'] ?? '';

define('BASE_URL', getenv('BASE_URL') ?: $protocol . $httpHost . '/');
define('BASE_PATH', getenv('BASE_PATH') ?: CRAFT_BASE_PATH . '/public_html/');

// Set path constants
define('CRAFT_VENDOR_PATH', CRAFT_BASE_PATH.'/vendor');
define('CRAFT_TEMPLATES_PATH', BASE_PATH.'/templates');

// Load Composer's autoloader
require_once CRAFT_VENDOR_PATH.'/autoload.php';

// Load dotenv?
if (file_exists(CRAFT_BASE_PATH.'/.env')) {
    (new Dotenv\Dotenv(CRAFT_BASE_PATH))->load();
}

// Load and run Craft
define('CRAFT_ENVIRONMENT', getenv('ENVIRONMENT') ?: 'production');
$app = require CRAFT_VENDOR_PATH.'/craftcms/cms/bootstrap/web.php';
$app->run();
