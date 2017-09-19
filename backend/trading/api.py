import requests

from .models import Currency, Trade
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import list_route
from .serializers import CurrencySerializer, TradeSerializer


class CurrencyViewSet(viewsets.ModelViewSet):
    queryset = Currency.objects.all()
    serializer_class = CurrencySerializer


class TradeViewSet(viewsets.ModelViewSet):
    queryset = Trade.objects.all().order_by('-date_booked')
    serializer_class = TradeSerializer

    @list_route(methods=['get'])
    def getRate(self, request, pk=None):
        
        sell_currency = self.request.query_params.get('sell_currency', None)
        buy_currency = self.request.query_params.get('buy_currency', None)
        rate_request = requests.get("http://api.fixer.io/latest?base=" + sell_currency + "&symbols=" + buy_currency)

        rate = rate_request.json()["rates"][str(buy_currency)]

        return Response(rate)