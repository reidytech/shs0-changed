<?php

$hostname = "localhost:3306";
$username = "shsmath";
$password = "somerville";
$dbname = "VoteCount";
$usertable = "Votes";


mysql_connect($hostname, $username, $password, $dbname) or die("<html> <script language = 'Javascript'> alert('Unable to connect to database! Please try again later'),history.go(-1)</script></html>");

mysql_select_db($dbname);
$query="SELECT * FROM $usertable";
$result = mysql_query($query);

echo "<table>
<tr>
<th>A</th>
<th>B</th>
<th>C</th>

</tr>";
while($row = mysql_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['A'] . "</td>";
    echo "<td>" . $row['B'] . "</td>";
    echo "<td>" . $row['C'] . "</td>";
    echo "</tr>";
}
echo "</table>";
?>