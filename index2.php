<?php 

$conection = mysqli_connect('localhost','root','','test_db');


$result= mysqli_query($conection, "SELECT * FROM `arcticle`");
echo 'Zapisi nayden:'.mysqli_num_rows($result);
?>


<ul>
<?php
while (($f = mysqli_fetch_assoc($result))){
	$arctic =mysqli_query($conection,"SELECT COUNT(`id`) FROM `arcticle` WHERE `id`= ".$f['id']);
echo '<li>'.$f['title'].'('.mysqli_num_rows($arctic).')'.'</li>';
}
?>
</ul>


