alter table houses
  alter column usable_area type numeric using usable_area::numeric,
  alter column plot_area type numeric using plot_area::numeric;
