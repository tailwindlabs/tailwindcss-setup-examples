<?php

defined('_JEXEC') or die;

use Joomla\CMS\Factory as CMSFactory;
use Joomla\CMS\HTML\HTMLHelper as CMSHTMLHelper;

$app = CMSFactory::getApplication();
$config = CMSFactory::getConfig();
$document = CMSFactory::getDocument();

// Output as HTML5
$this->setHtml5(true);

// Getting params from template
$params = $app->getTemplate(true)->params;

// Detecting Active Variables
$option = $app->input->getCmd('option', '');
$view = $app->input->getCmd('view', '');
$layout = $app->input->getCmd('layout', '');
$task = $app->input->getCmd('task', '');
$itemid = $app->input->getCmd('Itemid', '');

JHtml::_('stylesheet', 'style.css', array('version' => 'auto', 'relative' => true));

?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">

<head>
    <title><?php echo $document->getTitle(); ?></title>
    <meta name="description" content="<?php echo $pageDescription; ?>" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <jdoc:include type="head" />
</head>

  <body class="site <?php echo $option
      .' view-'.$view
      .($layout ? ' layout-'.$layout : ' no-layout')
      .($task ? ' task-'.$task : ' no-task')
      .($itemid ? ' itemid-'.$itemid : '')
      .('rtl' === $this->direction ? ' rtl' : '');
?>">

    <section class="container mx-auto py-10">
      <h1>Welcome to Tailwind for Joomla</h1>
    </section>

    <!-- Begin Content -->
    <jdoc:include type="message" />
    <jdoc:include type="component" />
    <!-- End Content -->

    <jdoc:include type="modules" name="analytics" style="none" />
    <jdoc:include type="modules" name="debug" style="none" />
  </body>
</html>
