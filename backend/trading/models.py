from django.db import models
from django.utils.crypto import get_random_string

def generate_id():
    return "TR" + get_random_string(length=7, allowed_chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')


class Currency(models.Model):
    code = models.CharField(max_length = 3, primary_key = True)

    def __str__(self):
        return self.code

class Trade(models.Model):
    id = models.CharField(primary_key = True, unique = True, max_length = 9, editable = False, default = generate_id)
    sell_currency = models.ForeignKey(Currency, related_name = "sell_currency", on_delete = models.CASCADE)
    sell_amount = models.DecimalField(max_digits = 20, decimal_places = 4)
    buy_currency = models.ForeignKey(Currency, related_name = "buy_currency", on_delete = models.CASCADE)
    buy_amount = models.DecimalField(max_digits = 20, decimal_places = 4)
    rate = models.DecimalField(max_digits = 10, decimal_places = 4)
    date_booked = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return str(self.sell_amount) + "(" + str(self.sell_currency) + ")" + " >" + str(self.rate) + "> " + str(self.buy_amount) + "(" + str(self.buy_currency) + ")"