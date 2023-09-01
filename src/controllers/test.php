<?php
// Controller temporário!!!

/*
$i1 = DateInterval::createFromDateString('9 hours');
print_r($i1);
*/
/*
$wh = WorkingHours::loadFromUserAndDate(1, date('Y-m-d'));

$workedIntervalString = $wh->getWorkedInterval()->format('%H:%I:%S');
print_r($workedIntervalString);
echo '<hr>';

$lunchIntervalString = $wh->getLunchInterval()->format('%H:%I:%S');
print_r($lunchIntervalString);
echo '<hr>';

print_r($wh->getExitTime());
echo '<hr>';
*/

echo User::getCount(['id' => 3]);