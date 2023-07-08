CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"image" varchar(255) NOT NULL,
	"title" varchar(80) NOT NULL,
	"description" varchar(80) NOT NULL,
	"likes"  INT DEFAULT 0
);



INSERT INTO gallery ("image", "title", "description")
VALUES 
('images/goat_small.jpg', 'Goat', 'Photo of a goat taken at Glacier National Park.'),
('images/Egypt.jpg', 'Egypt', 'Location in Egypt, have good tea and best place to study.'),
('images/Mecca.jpg', 'Mecca', 'One prayer in Mecca is equal to 100,000!'),
('images/Medina.jpg', 'Medina', 'The Prophets Masjid.'),
('images/Somalia.jpg', 'Somalia', 'Location in Somalia, Liddo Beach is beautiful place to visit!');
