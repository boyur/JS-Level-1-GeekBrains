var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2 -> а = а + 1 :: (a = 2); c = a;
d = b++; alert(d); // 1 -> d = b; b = b + 1 :: (b = 2);

c = (2+ ++a); alert(c); // 5 -> а = а + 1; 2 + a :: (a = 3)
d = (2+ b++); alert(d); // 4 -> 2 + b :: (b = 2); b = b + 1 :: (b = 3)

alert(a); // 3 :: (a = 3)
alert(b); // 3 :: (b = 3)