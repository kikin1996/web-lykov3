-- Aktualizace stavů domů: Dům 3 = V jednání, Domy 8 a 10 = Rezervovaný
update houses set status = 'V jednání'   where id = '3';
update houses set status = 'Rezervovaný' where id in ('8', '10');

-- Prohození cen mezi Domem 1 a Domem 2 (Dům 1 zvolen jako showroom)
update houses set price = 11705900, price_without_vat = 10451696 where id = '1';
update houses set price = 11604900, price_without_vat = 10361518 where id = '2';
