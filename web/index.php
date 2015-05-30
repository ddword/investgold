<?php
/**
 * User: Ruslan
 */
require_once __DIR__.'/../vendor/autoload.php';
$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../application/view',
));
$app->register(new Silex\Provider\UrlGeneratorServiceProvider());

/**
 * закончена
 */
$app->get('/', function () use ($app) {
    return $app['twig']->render('index.twig');
})->bind('главная');

/**
 * закончена
 */
$app->get('/strategii-upravleniya-kapitalom', function () use ($app) {
    return $app['twig']->render('strategii-upravleniya-kapitalom.twig');
})->bind('стратегии управления капиталом');

$app->get('/investitsionnye-portfeli', function () use ($app) {
    return $app['twig']->render('investitsionnye-portfeli.twig');
})->bind('инвестиционные портфели');

$app->get('/algoritmicheskaya-torgovlya', function () use ($app) {
    return $app['twig']->render('algoritmicheskaya-torgovlya.twig');
})->bind('алгоритмическая торговля');

$app->get('/khedzhirovanie-valyutnogo-riska', function () use ($app) {
    return $app['twig']->render('khedzhirovanie-valyutnogo-riska.twig');
})->bind('хеджирование валютного риска');

$app->get('/analitika', function () use ($app) {
    return $app['twig']->render('analitika.twig');
})->bind('аналитика');

$app->get('/partnery', function () use ($app) {
    return $app['twig']->render('partnery.twig');
})->bind('партнеры');

$app->get('/o-kompanii', function () use ($app) {
    return $app['twig']->render('o-kompanii.twig');
})->bind('о компании');

$app->get('/novosti', function () use ($app) {
    return $app['twig']->render('novosti.twig');
})->bind('новости');

$app->get('/kontakty', function () use ($app) {
    return $app['twig']->render('kontakty.twig');
})->bind('контакты');

$app->get('/birzhevye-indeksy', function () use ($app) {
    return $app['twig']->render('birzhevye-indeksy.twig');
})->bind('биржевые индексы');

$app->get('/kursy-valyut', function () use ($app) {
    return $app['twig']->render('kursy-valyut.twig');
})->bind('курсы валют');

$app->run();
