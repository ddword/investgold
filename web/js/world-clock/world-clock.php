<?php
/**
 * User: Ruslan
 */

$width = $height =  76;
$center = $width/2;
$radius = $width/2 - 1;
$minuteLength = ($height/2) - 5;
$hourLength = ($height/2) - 13;
$cities = [
    'sydney' => [
        'timezone' => 'Australia/Sydney',
        'name' => 'Сидней'
    ],
    'moscow' => [
        'timezone' => 'Europe/Moscow',
        'name' => 'Москва'
    ],
    'tokyo' => [
        'timezone' => 'Asia/Tokyo',
        'name' => 'Токио'
    ],
    'new_york' => [
        'timezone' => 'America/New_York',
        'name' => 'Нью-Йорк'
    ],
    'london' => [
        'timezone' => 'Europe/London',
        'name' => 'Лондон'
    ],
];
$base = json_encode($cities);
$hash = md5($base);
$citiesCacheFile = 'templates/' . $this->template . '/plugins/world-clock/' . $hash . '.js';
if(!file_exists($citiesCacheFile)){
    file_put_contents($citiesCacheFile, 'var cities = ' . $base . '; var clock = {centerX: ' . $center . ', centerY: ' . $center . '};');
}
$doc->addScript('templates/' . $this->template . '/js/moment.js');
$doc->addScript('templates/' . $this->template . '/js/moment-timezone.js');
$doc->addScript('templates/' . $this->template . '/plugins/world-clock/' . $hash . '.js');
$doc->addScript('templates/' . $this->template . '/plugins/world-clock/world-clock.js');
$doc->addStyleSheet('templates/' . $this->template . '/plugins/world-clock/world-clock.css');



$dots = '';
for($i=0;$i<12;$i++){
    $x = $center + ($center-5)*sin(3.14*$i*2/12);
    $y = $center + ($center-5)*cos(3.14*$i*2/12);
    $dots .= '<circle cx="' . $x . '" cy="' . $y . '" r="1" class="dot"/>' . PHP_EOL;
}

$timestamp = time();

$timeValues = [];

foreach($cities as $alias => $city){

    $timeZone = new DateTime();
    $timeZone->setTimestamp($timestamp);
    $timeZone->setTimezone(new DateTimeZone($city['timezone']));
    $hour = $timeZone->format('H');
    $minute = $timeZone->format('i');
    $hourDegree = ceil(180 + ($hour/12)*360 + ($minute/(60*12))*360);
    $minuteDegree = ceil(180 + ($minute/60)*360);

?>
  <div class="clock <?=$alias?>">
      <div class="scoreboard">
          <svg width="<?=$width?>" height="<?=$height?>">
              <circle class="border" cx="<?=$center?>" cy="<?=$center?>" r="<?=$radius?>"/>
              <?=$dots?>
              <g class="hands">
                  <rect class="hour" x="<?=$center?>" y="<?=$center - 5?>" width="1" height="<?=$hourLength?>" rx="1" ry="1" transform="rotate(<?=$hourDegree?> <?=$center?> <?=$center?>)" />
                  <rect class="minute" x="<?=$center?>" y="<?=$center - 5?>" width="1" height="<?=$minuteLength?>" transform="rotate(<?=$minuteDegree?> <?=$center?> <?=$center?>)"/>
              </g>
          </svg>
      </div>
      <div class="name">
          <?=$city['name']?>
      </div>
  </div>
<?php
}
?>