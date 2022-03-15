Na początku poprawiłem kilka błędów które wskazały mi lintery (z ważniejszych: dodałem atrybut "lang" do tagu 'html' oraz meta tag "viewport" ).

Następnie zabrałem się za stylowanie loga JS w headerze. Początkowo chciałem użyć normalnego tekstu w HTMLu, ale po namyśle postanowiłem użyć pseudo elementu, ponieważ logo ma charakter dekoracyjny.

Chciałem dodać routing zwracający channels.json. W trakcie kodowania routera okazało się, że plik z danymi jest już zwracany bezpośrednio pod adresem '/channels.json'. Pomimo tego dodałem moją wersję używającą routera i zwracająca dane pod adresem /channels.

Dodałem pliki js do projektu, stworzyłem osobną funkcję do pobierania danych oraz osobną do generowania HTMLu z pobranych danych.

Stworzyłem funkcje formatujące liczby otrzymywane z API. Pierwsza funkcja usuwa z liczby niepotrzebne przecinki, kropki i spacje. Druga formatuje tak "oczyszczoną" liczbę do notacji imperialnej.
Nie chciałem modyfikować danych w pliku channels.json aby symulować pracę z danymi z API na które nie mamy wpływu.

Zakodowałem brakujące elementy do funkcji tworzącej karty, zmodyfikowałem CSS aby był jak najbardziej zbliżony do zrzutów ekranu.

Dodałem link do kanału do każdej z kart, kliknięcie na kartę dodaje aktualny timestamp do adresu jako UTM.

Stworzyłem funkcję sortChannels, która przyjmuje 3 parametry: tablicę kanałów, zmienną według której ma sortować i boolean wskazujący na kolejność sortowania.
Dodałem buttony pozwalające na zmianę kolejności sortowania or logikę odpowiedzialną za działanie buttona "Clear" i filtrowanie wyników.
Wyniki odświeżają się po każdej zmianie wartości według której mają być sortowane, zmianie kolejności wyników lub zmianie wartości pola filtrowania.
