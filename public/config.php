<?php
// Nastavte RESEND_API_KEY jako proměnnou prostředí na serveru (getenv('RESEND_API_KEY')).
// Tento soubor už klíč neobsahuje – dřívější natvrdo zapsaný klíč byl veřejně vystavený a je potřeba ho v Resend zneplatnit.
$RESEND_API_KEY = getenv('RESEND_API_KEY') ?: '';
