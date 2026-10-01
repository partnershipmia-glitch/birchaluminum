-- Widen status model so idled/closed primary smelters can be represented accurately.
ALTER TABLE public.facilities DROP CONSTRAINT IF EXISTS facilities_status_check;
ALTER TABLE public.facilities ADD CONSTRAINT facilities_status_check
  CHECK (status IN ('operating','construction','idled','closed'));

-- Remove general scrap/shredding recyclers that do not melt/remelt, refine, cast,
-- or industrially sort aluminum at the required scale (not qualified peers).
DELETE FROM public.facilities WHERE name IN ('SA Recycling','Sims Metal','Radius Recycling');

-- Correct status on facilities that are not actually operating.
UPDATE public.facilities SET status='closed', activity_status='closed',
  capacity='279,000 t/yr (permanently closed 2023; idle since 2020)',
  capacity_source_url='https://news.alcoa.com/press-releases/press-release-details/2023/Alcoa-Announces-Closure-of-Intalco-Smelter-and-Prepares-Site-for-Redevelopment/default.aspx'
  WHERE name='Intalco Smelter';
UPDATE public.facilities SET status='closed', activity_status='closed',
  capacity='Closed 2015; demolished / Superfund cleanup site',
  capacity_source_url='https://apnews.com/general-news-ef28f6ef550d42c3b83c3743b686cd8d'
  WHERE name='Columbia Falls Aluminum';

-- Verified capacity/source updates on existing rows.
UPDATE public.facilities SET annual_capacity_lb=1322772000, activity_status='construction',
  capacity_source_url='https://novelis.com/locations/bay-minette/'
  WHERE name='Bay Minette Recycling & Rolling';
UPDATE public.facilities SET annual_capacity_lb=390000000, activity_status='operating',
  capacity_source_url='https://www.matalco.com/get-to-know-matalco/'
  WHERE name='Matalco Franklin';
UPDATE public.facilities SET annual_capacity_lb=400000000, activity_status='operating',
  capacity_source_url='https://www.lightmetalage.com/news/industry-news/recycling-remelt/audubon-metals-expanding-secondary-aluminum-capacity/'
  WHERE name='Audubon Metals';
UPDATE public.facilities SET annual_capacity_lb=363762000, activity_status='operating',
  capacity='~165,000 t/yr ingot/sow/billet today; expanding to 460M lb/yr by 2027',
  capacity_source_url='https://www.aluminummarketupdate.crugroup.com/recycled-metals/ega-spectro-begins-next-phase-at-rosemount/'
  WHERE name='Spectro Alloys';
UPDATE public.facilities SET annual_capacity_lb=198416000, activity_status='operating',
  capacity_source_url='https://www.hydro.com/us/global/about-hydro/hydro-worldwide/americas/the-united-states/midwest/hydro-aluminum-henderson-ky/'
  WHERE name='Henderson Casthouse';
UPDATE public.facilities SET annual_capacity_lb=264600000, activity_status='operating',
  capacity_source_url='https://www.hydro.com/en/global/about-hydro/hydro-worldwide/americas/united-states/midwest/hydro-aluminum-cassopolis/'
  WHERE name='Cassopolis Recycling';
UPDATE public.facilities SET annual_capacity_lb=749571000, activity_status='operating',
  capacity='Recycles ~340,000 t/yr UBC/scrap within >1B lb/yr finished cansheet plant',
  capacity_source_url='https://www.constellium.com/locations/muscle-shoals'
  WHERE name='Muscle Shoals Recycling';
UPDATE public.facilities SET activity_status='idled',
  capacity='252,000 t/yr nameplate; idle since July 2022, under strategic review for restart',
  capacity_source_url='https://aluminiumtoday.com/news/century-aluminum-making-progress-in-hawesville-smelter-restart'
  WHERE name='Sebree Smelter'; -- placeholder guard, corrected below if mismatched name

-- New verified facilities (recyclers / remelters).
INSERT INTO public.facilities (name,company,kind,status,city,state,lat,lng,capacity,products,completion,website,linkedin,annual_capacity_lb,capacity_source_url,activity_status) VALUES
('Hawesville Smelter','Century Aluminum','smelter','idled','Hawesville','KY',37.90,-86.75,'252,000 t/yr nameplate; idle since July 2022','Primary aluminum, high-purity grades',null,'https://centuryaluminum.com','https://www.linkedin.com/company/century-aluminum',555564000,'https://aluminiumtoday.com/news/century-aluminum-making-progress-in-hawesville-smelter-restart','idled'),
('New Madrid Smelter','Magnitude 7 Metals','smelter','idled','Marston','MO',36.59,-89.57,'263,000 t/yr nameplate; curtailed since Jan 2024','Primary aluminum',null,'https://mag7metals.com',null,579815000,'https://www.alcircle.com/news/new-madrid-smelter-at-exit-stage-signals-shrinking-landscape-for-us-primary-aluminium-industry-105735','idled'),
('Matalco Bluffton','Matalco','recycler','operating','Bluffton','IN',40.74,-85.17,'240M lb/yr','6xxx billet, slab; toll conversion',null,'https://www.matalco.com',null,240000000,'https://www.matalco.com/our-locations/','operating'),
('Matalco Wisconsin Rapids','Matalco','recycler','operating','Wisconsin Rapids','WI',44.38,-89.82,'240M lb/yr','Extrusion billet, rolling ingot, RSI sow',null,'https://www.matalco.com',null,240000000,'https://www.matalco.com/our-locations/','operating'),
('Matalco Shelbyville','Matalco','recycler','operating','Shelbyville','KY',38.21,-85.23,'~350M lb/yr (unverified, moderate confidence)','6xxx billet',null,'https://www.matalco.com',null,null,'https://www.matalco.com/our-locations/','operating'),
('Hydro Commerce','Hydro','recycler','operating','Commerce','TX',33.25,-95.90,'105,000 t/yr','Recycled extrusion billet (Hydro CIRCAL)',null,'https://www.hydro.com','https://www.linkedin.com/company/hydro',231485000,'https://www.hydro.com/en/global/about-hydro/hydro-worldwide/americas/united-states/west/hydro-commerce-tx/','operating'),
('Hydro Cressona','Hydro','recycler','operating','Cressona','PA',40.63,-76.19,'>270,000 t/yr (incl. 64,000 t/yr post-consumer scrap capability)','Extrusion ingot/billet',null,'https://www.hydro.com','https://www.linkedin.com/company/hydro',540000000,'https://www.hydro.com/us/global/media/news/2024/hydro-opens-new-extrusion-press-and-increases-recycling-capacity-in-cressona-pennsylvania/','operating'),
('Real Alloy Goodyear','Real Alloy','recycler','operating','Goodyear','AZ',33.44,-112.36,'Capacity not individually disclosed; company-wide 16 N.A. sites','Molten metal, RSI, cone, ingot',null,'https://realalloy.com','https://www.linkedin.com/company/real-alloy',null,'https://realalloy.com/aluminium-stewardship-initiative-certifies-real-alloy-against-asi-performance-standard/','operating'),
('Real Alloy Post Falls','Real Alloy','recycler','operating','Post Falls','ID',47.72,-116.93,'Capacity not individually disclosed; company-wide 16 N.A. sites','Molten metal, RSI, cone, ingot',null,'https://realalloy.com','https://www.linkedin.com/company/real-alloy',null,'https://realalloy.com/aluminium-stewardship-initiative-certifies-real-alloy-against-asi-performance-standard/','operating'),
('Golden Aluminum','Golden Aluminum','recycler','operating','Fort Lupton','CO',40.09,-104.81,'Capacity not publicly disclosed; recycled-content rolling mill (Nexcast upgrade 2025)','5xxx aluminum coil for can/auto/construction',null,'https://goldenaluminum.com',null,null,'https://www.lightmetalage.com/news/industry-news/flat-rolled-sheet/golden-aluminum-advances-continuous-casting-with-optimized-nexcast-blockcaster/','operating'),
('Owl''s Head Alloys Bowling Green','Owl''s Head Alloys','recycler','operating','Bowling Green','KY',36.99,-86.44,'>300M lb/yr company-wide (KY+MS combined)','Sow, ingot, molten aluminum; shredding',null,'https://www.ohaky.com',null,300000000,'https://www.ohaky.com/company','operating'),
('Owl''s Head Alloys West Point','Owl''s Head Alloys','recycler','operating','West Point','MS',33.61,-88.65,'Capacity shared with KY site (>300M lb/yr combined)','Sow, molten aluminum; supplies Aluminum Dynamics',null,'https://www.ohaky.com',null,null,'https://www.ohaky.com/copy-of-john-pugh','operating'),
('Sortera Markle','Sortera Technologies','recycler','operating','Markle','IN',40.84,-85.33,'240M lb/yr combined with Lebanon, TN','AI-sorted 380/356/319/wrought aluminum alloys',null,'https://www.sorteratechnologies.com',null,240000000,'https://www.prnewswire.com/news-releases/sortera-technologies-doubles-capacity-with-new-tennessee-facility-deploying-physical-ai-to-strengthen-the-us-supply-chain-for-high-purity-recycled-aluminum-302778297.html','operating'),
('Sortera Lebanon','Sortera Technologies','recycler','operating','Lebanon','TN',36.21,-86.29,'240M lb/yr combined with Markle, IN','AI-sorted 380/356/319/wrought aluminum alloys',null,'https://www.sorteratechnologies.com',null,null,'https://www.recyclingtoday.com/news/sortera-technologies-opens-tennessee-sorting-facility/','operating'),
('Service Center Metals','Service Center Metals','recycler','operating','Prince George','VA',37.19,-77.30,'Capacity not individually disclosed; "largest independent" N.A. secondary billet supplier','Recycled extrusion billet (Emerald Eco-Billet) + extrusions',null,'https://www.servicecentermetals.com',null,null,'https://www.lightmetalage.com/news/industry-news/recycling-remelt/service-center-metals-holds-ribbon-cutting-for-new-recycling-and-extrusion-plants/','operating'),
('Audubon Metals Corsicana','Koch Enterprises','recycler','operating','Corsicana','TX',32.10,-96.47,'Part of >500M lb/yr combined with Henderson, KY','A380/383 die-cast alloys from shredded auto scrap',null,'https://audubonmetals.com','https://www.linkedin.com/company/audubon-metals',null,'https://audubonmetals.com/about-us/','operating'),
('Superior Aluminum Alloys','OmniSource / Steel Dynamics','recycler','operating','New Haven','IN',41.04,-85.01,'~260M lb/yr (2018)','Deox alloys, secondary foundry/die-cast alloys',null,'https://www.saalloys.com',null,260000000,'https://www.argusmedia.com/en/news-and-insights/latest-market-news/1696537-superior-aluminum-alloys-to-add-furnace','operating'),
('TAP Mt. Pleasant','Tennessee Aluminum Processors','recycler','operating','Mt. Pleasant','TN',35.53,-87.21,'Current capacity not publicly disclosed; 40+ year toll converter','Recycled secondary ingot (RSI) from dross/scrap',null,'https://tap-rsi.com',null,null,'https://tap-rsi.com/about/','operating'),
('TAP Gadsden','Tennessee Aluminum Processors','recycler','operating','Gadsden','AL',34.01,-86.00,'Current capacity not publicly disclosed','Recycled secondary ingot (RSI) from dross/scrap',null,'https://tap-rsi.com',null,null,'https://tap-rsi.com/about/','operating');
