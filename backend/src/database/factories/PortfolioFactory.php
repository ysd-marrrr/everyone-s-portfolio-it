<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Portfolio;
use App\Model;
use Faker\Generator as Faker;

$factory->define(Portfolio::class, function (Faker $faker) {
    $image_fake_urls = array(
        "http://via.placeholder.com/640x640",
        "http://placeimg.com/640/640/people",
        "http://placekitten.com/640/640/",
        "https://placebear.com/640/640",
        "http://baconmockup.com/640/640",
        "https://www.fillmurray.com/640/640",
        ""
    );
    return [
        'title' => $faker->name,
        'url' => $faker->url,
        'image_url' => $image_fake_urls[array_rand($image_fake_urls, 1)]
    ];
});
