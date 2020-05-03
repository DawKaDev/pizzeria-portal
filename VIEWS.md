# Dashboard
    '/'
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - lista rezerwacji i eventów na dzisiaj
# Logowanie
    '/login'
    - pola na login i haslo
    - przycisk do zalogowania (link do dashoardu)

# Widok dostępności stolików
    '/tables'
    - wybór daty i godziny
    - tabela z lista rezerwacji oraz wydarzeń
        - każda kolumna 1 stolik
        - wiersz = 30 minut
        - ma przypominać widok tygodnia w kalendarzu googl'a, gdzie w kolumnacj zamiat dni są różne stoliki
        - po kliknieciu rezerwacji lub eventu, przechodzimy na strone szczegolowa
    '/tables/booking/:id'
    - zawiera wszystkie informacje dotyczace rezerwacji
    - umozliwai edycję i zapisywanie zmian
    '/tables/booking/new'
    - zawiera wszystkie informacje dotyczace rezerwacji
    - umozliwai edycję i zapisywanie zmian
    '/tables/events/:id'
    - zawiera wszystkie informacje dotyczace rezerwacji
    - umozliwai edycję i zapisywanie zmian
    '/tables/events/new'
    - zawiera wszystkie informacje dotyczace rezerwacji
    - umozliwai edycję i zapisywanie zmian

# Widok kelnera
    '/waiter'
    -tabela
        - w wierszach stoliki
        - w kolumnach status stolika (status, czas od ostaniej aktywnosci)
        - w ostatniej kolumnie dostepne akcje dla danego stolika
    '/waiter/order/new'
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówienie produkty z opcjami i ceną)
    - kwotę zamówienie
    '/waiter/order/:id'
    - jak powyższa

# Widok kuchni
    '/kitchen'
    - wyświetla liste zamowien w kolejnosci ich zlorzenia
    - lista zawiera nr stolik alub zamowienia zdlanego
    - pelne informacje dot zamowionych dań
    - na lisvie musi byc mozliwosc ozanczenia jako zrealizowane