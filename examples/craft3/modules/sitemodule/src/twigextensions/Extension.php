<?php
namespace modules\sitemodule\twigextensions;

use Twig_Extension;
use Twig_SimpleFunction;
use Twig_SimpleFilter;

class Extension extends Twig_Extension
{
    // Public Methods
    // =========================================================================

    public function getName(): string
    {
        return 'Site Module Twig Extension';
    }

    public function getFunctions(): array
    {
        return [
            new Twig_SimpleFunction('bust', [$this, 'bust']),
            new Twig_SimpleFunction('svgPlaceholder', [$this, 'svgPlaceholder']),
        ];
    }

    public function bust($path)
    {
        return '?version=' . filemtime(BASE_PATH . $path);
    }

    public function svgPlaceholder($dimensions)
    {
        $src = '<svg width="'.$dimensions['width'].'" height="'.$dimensions['height'].'" viewBox="0 0 '.$dimensions['width'].' '.$dimensions['height'].'" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h108v100H0z" fill="none"/></svg>';
        
        return 'data:image/svg+xml;base64,'.base64_encode($src); 
    }
}
