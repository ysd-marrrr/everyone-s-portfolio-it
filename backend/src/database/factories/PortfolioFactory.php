<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Portfolio;
use App\Model;
use Faker\Generator as Faker;

$factory->define(Portfolio::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'url' => $faker->url,
        'image_url' => $faker->url
    ];
});
