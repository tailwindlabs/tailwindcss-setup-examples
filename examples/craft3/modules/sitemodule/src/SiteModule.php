<?php
namespace modules\sitemodule;

use modules\sitemodule\base\PluginTrait;
use modules\sitemodule\twigextensions\Extension;

use Craft;

use yii\base\Module;

class SiteModule extends Module
{
    // Traits
    // =========================================================================

    use PluginTrait;

    
    // Public Methods
    // =========================================================================

    public function init()
    {
        parent::init();

        self::$plugin = $this;

        $this->_checkOffline();
        $this->_registerTwigExtensions();
    }


    // Private Methods
    // =========================================================================
    
    private function _checkOffline()
    {
        $isOffline = Craft::$app->getConfig()->general->isOffline ?? null;

        if ($isOffline) {
            exit();
        }
    }
    
    private function _registerTwigExtensions()
    {
        Craft::$app->view->registerTwigExtension(new Extension);
    }

}