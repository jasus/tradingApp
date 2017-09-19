# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import trading.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Currency',
            fields=[
                ('code', models.CharField(serialize=False, primary_key=True, max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='Trade',
            fields=[
                ('id', models.CharField(unique=True, primary_key=True, max_length=9, serialize=False, editable=False, default=trading.models.generate_id)),
                ('sell_amount', models.DecimalField(max_digits=20, decimal_places=4)),
                ('buy_amount', models.DecimalField(max_digits=20, decimal_places=4)),
                ('rate', models.DecimalField(max_digits=10, decimal_places=4)),
                ('date_booked', models.DateTimeField(auto_now_add=True)),
                ('buy_currency', models.ForeignKey(to='trading.Currency', related_name='buy_currency')),
                ('sell_currency', models.ForeignKey(to='trading.Currency', related_name='sell_currency')),
            ],
        ),
    ]
