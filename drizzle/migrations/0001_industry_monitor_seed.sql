insert into public.commodities (code,name,category,unit,basis,source,sort) values
('AL-A380','Aluminum A380.1 Ingot','Aluminum','$/lb','U.S. Midwest, delivered','Birch Aluminum desk entry',1),
('AL-356','Aluminum 356 Ingot','Aluminum','$/lb','U.S. Midwest, delivered','Birch Aluminum desk entry',2),
('AL-P1020','Aluminum P1020 + Midwest premium','Aluminum','$/lb','U.S. Midwest','Birch Aluminum desk entry',3),
('SC-ZORBA','Zorba (90%+)','Scrap','$/lb','U.S. average, dealer buying','Birch Aluminum desk entry',10),
('SC-CAST','Cast Aluminum','Scrap','$/lb','U.S. average, dealer buying','Birch Aluminum desk entry',11),
('SC-WHEELS','Clean Aluminum Wheels','Scrap','$/lb','U.S. average, dealer buying','Birch Aluminum desk entry',12),
('SC-6063','6063 Extrusion','Scrap','$/lb','U.S. average, dealer buying','Birch Aluminum desk entry',13),
('SC-UBC','Aluminum Cans (UBC)','Scrap','$/lb','U.S. average, dealer buying','Birch Aluminum desk entry',14),
('SC-SHEET','Old Sheet Aluminum','Scrap','$/lb','U.S. average, dealer buying','Birch Aluminum desk entry',15),
('SC-CU1','#1 Copper','Scrap','$/lb','U.S. average, dealer buying','Birch Aluminum desk entry',20),
('SC-BRASS','Yellow Brass','Scrap','$/lb','U.S. average, dealer buying','Birch Aluminum desk entry',21);

insert into public.news_sources (name,site_url,feed_url) values
('Light Metal Age','https://www.lightmetalage.com/news/industry-news/recycling-remelt/','https://www.lightmetalage.com/news/industry-news/recycling-remelt/feed/'),
('Recycling Today','https://www.recyclingtoday.com/','https://news.google.com/rss/search?q=site:recyclingtoday.com+aluminum&hl=en-US&gl=US&ceid=US:en'),
('AL Circle','https://www.alcircle.com/news/primary-aluminium','https://news.google.com/rss/search?q=site:alcircle.com+aluminium&hl=en-US&gl=US&ceid=US:en'),
('SACA Coalition','https://www.linkedin.com/company/saca-coalition/posts/?feedView=all',null),
('Industry news (aluminum scrap & recycling)','https://news.google.com','https://news.google.com/rss/search?q=%22aluminum%22+(scrap+OR+recycling+OR+smelter+OR+%22die+casting%22)+when:7d&hl=en-US&gl=US&ceid=US:en'),
('Industry news (rare earths & critical minerals)','https://news.google.com','https://news.google.com/rss/search?q=%22rare+earth%22+OR+%22critical+minerals%22+United+States+when:7d&hl=en-US&gl=US&ceid=US:en');

insert into public.facilities (name,company,kind,status,city,state,lat,lng,capacity,products,completion,website,linkedin) values
('Sebree Smelter','Century Aluminum','smelter','operating','Robards','KY',37.64,-87.53,'~220,000 t/yr primary','Primary aluminum, billet',null,'https://centuryaluminum.com','https://www.linkedin.com/company/century-aluminum'),
('Mt. Holly Smelter','Century Aluminum','smelter','operating','Goose Creek','SC',33.05,-80.04,'~230,000 t/yr primary','Primary aluminum, foundry ingot',null,'https://centuryaluminum.com','https://www.linkedin.com/company/century-aluminum'),
('Warrick Operations','Alcoa','smelter','operating','Newburgh','IN',37.92,-87.33,'~160,000 t/yr (partial)','Primary aluminum, rolled products',null,'https://www.alcoa.com','https://www.linkedin.com/company/alcoa'),
('Massena Operations','Alcoa','smelter','operating','Massena','NY',44.95,-74.86,'~130,000 t/yr','Primary aluminum, billet',null,'https://www.alcoa.com','https://www.linkedin.com/company/alcoa'),
('Tulsa Primary Smelter','Emirates Global Aluminium (EGA)','smelter','construction','Inola','OK',36.15,-95.51,'~600,000 t/yr planned','Primary aluminum','End of decade (target)','https://www.ega.ae','https://www.linkedin.com/company/emirates-global-aluminium'),
('New U.S. Smelter','Century Aluminum','smelter','construction',null,'KY',37.5,-86.5,'~750,000 t/yr planned','Primary aluminum','Site & timing under review','https://centuryaluminum.com','https://www.linkedin.com/company/century-aluminum'),
('Bay Minette Recycling & Rolling','Novelis','recycler','construction','Bay Minette','AL',30.88,-87.77,'~600,000 t/yr rolling','Beverage can sheet, recycled content','2026 (target)','https://www.novelis.com','https://www.linkedin.com/company/novelis'),
('Cassopolis Recycling','Hydro','recycler','operating','Cassopolis','MI',41.91,-86.01,'~120,000 t/yr','Extrusion billet',null,'https://www.hydro.com','https://www.linkedin.com/company/hydro'),
('Henderson Casthouse','Hydro','recycler','operating','Henderson','KY',37.84,-87.59,'~110,000 t/yr','Extrusion billet',null,'https://www.hydro.com','https://www.linkedin.com/company/hydro'),
('Muscle Shoals Recycling','Constellium','recycler','operating','Muscle Shoals','AL',34.74,-87.67,'Recycling center','Can sheet, recycled UBC',null,'https://www.constellium.com','https://www.linkedin.com/company/constellium'),
('Audubon Metals','Koch Enterprises','recycler','operating','Henderson','KY',37.80,-87.55,'Large-volume secondary','A380 / 383 die-cast alloys',null,'https://www.audubonmetals.com','https://www.linkedin.com/company/audubon-metals'),
('Smelter Service Corp','Smelter Service Corp','recycler','operating','Mount Pleasant','TN',35.53,-87.21,'Secondary smelter','Foundry & die-cast alloys, deox',null,'https://www.smeltersvc.com','https://www.linkedin.com/company/smelter-service-corporation'),
('Spectro Alloys','Spectro Alloys','recycler','operating','Rosemount','MN',44.74,-93.12,'Secondary smelter','Ingot & sow, die-cast alloys',null,'https://www.spectroalloys.com','https://www.linkedin.com/company/spectro-alloys'),
('Matalco Franklin','Matalco','recycler','operating','Franklin','KY',36.72,-86.58,'Billet casthouse','Extrusion billet',null,'https://www.matalco.com','https://www.linkedin.com/company/matalco'),
('Real Alloy Wabash','Real Alloy','recycler','operating','Wabash','IN',40.80,-85.82,'Secondary smelter','Specification alloys, molten metal',null,'https://www.realalloy.com','https://www.linkedin.com/company/real-alloy'),
('Birch Aluminum','Birch Aluminum','recycler','construction','Decatur','AL',34.61,-86.98,'~6M lb throughput','356 / 380 ingot & sow','End of 2028','https://birchaluminum.com',null);