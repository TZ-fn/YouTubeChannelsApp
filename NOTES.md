Na początku poprawiłem kilka błędów które wskazały mi lintery (z ważniejszych: dodałem atrybut "lang" do tagu 'html' oraz "viewport" 'meta' tag).

Następnie zabrałem się za stylowanie loga JS w headerze. Początkowo chciałem użyć normalnego tekstu w HTMLu, ale po namyśle postanowiłem użyć pseudo elementu, bo logo ma charakter dekoracyjny.

Chciałem dodać routing zwracający channels.json. W trakcie kodowania routera okazało się, że plik z danymi jest już zwracany bezpośrednio pod adresem /channels.json. Pomimo tego dodałem moją wersję używającą routera i zwracająca dane pod adresem /channels.
