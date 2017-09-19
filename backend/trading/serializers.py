from rest_framework import serializers
from .models import Currency, Trade

class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = '__all__'

class TradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = ('sell_currency', 'sell_amount', 'buy_currency', 'buy_amount', 'rate', 'date_booked')