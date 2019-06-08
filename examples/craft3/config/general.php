<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return [
    '*' => [

        // General
        'environment' => CRAFT_ENVIRONMENT, // Allows us to check the environment within our templates
        'siteUrl' => BASE_URL, // Sets site URL depending on environment (Dev, Staging, Production) in index.php
        'phpSessionName' => 'PHPSESSID', // Remove CraftSessionId
        'sendPoweredByHeader' => false, // Remove X-Powered-By: Craft CMS
        'phpMaxMemoryLimit' => '4048M',
        'defaultWeekStartDay' => 1, // Default start day to Sunday
        'defaultSearchTermOptions' => ['subLeft' => true, 'subRight' => true ], // Fuzzy search for CP and front-end
        'useProjectConfigFile' => true,
        'isSystemLive' => true,

        // Security
        'tokenParam' => 't', // PayPal Express causes issues if left to 'token'
        'enableCsrfProtection' => true,
        'securityKey' => getenv('SECURITY_KEY'),

        // URLs
        'cpTrigger' => 'office', // change Control Panel url from 'admin'
        'omitScriptNameInUrls' => true, // Remove index.php for urls
        'usePathInfo' => true,
        'defaultCpLanguage' => 'en_au',

        // Users
        'postCpLoginRedirect' => 'entries', // Head to Entries tab once logged into CP
        'autoLoginAfterAccountActivation' => true, // Auto-login after signup
        'useEmailAsUsername' => true,
        'loginPath' => 'account/login',
        'logoutPath' => 'account/logout',
        'setPasswordPath' => 'account/set-password',
        'setPasswordSuccessPath' => 'account',
        'postLoginRedirect' => 'account',
        'requireMatchingUserAgentForSession' => false, // Prevent device emulation starting new session

        // Templating
        'errorTemplatePrefix' => '_errors/', // Group error templates

        // Pagination
        'pageTrigger' => '?page',

        // Assets
        'generateTransformsBeforePageLoad' => true,
        'maxUploadFileSize' => 524288000, // 500MB
        'defaultImageQuality' => 95,

        // Aliases parsed in sites’ settings, volumes’ settings, and Local volumes’ settings
        'aliases' => [
            '@basePath' => BASE_PATH,
            '@baseUrl' => BASE_URL,
        ],

        //
        // Plugins
        //

        // SproutForms
        'sproutForms' => [
            'enableTemplateOverrides' => true,
            'enableFileAttachments' => true,
        ],

        // Embedded Assets
        'extraAllowedFileExtensions' => 'json',

    ],
    'local' => [

        'devMode' => true,
        'enableTemplateCaching' => false,
        'userSessionDuration' => 'P1Y', // Stay logged in

    ],
    'staging' => [

        //'isOffline' => true, // Offline Plugin - Shut down Staging when not in use

        // Prevent administrative changes from being made on staging
        // 'allowAdminChanges' => false,

    ],
    'production' => [

        // Updates
        'allowUpdates' => false, // Don't allow updates

        // Prevent administrative changes from being made on staging
        // 'allowAdminChanges' => false,

    ],
];
