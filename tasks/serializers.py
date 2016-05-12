from django.contrib.auth.models import User, Group
from rest_framework import serializers
from tasks.models import Task, LANGUAGE_CHOICES, STYLE_CHOICES
from django.db import models

class TaskSerializer(serializers.Serializer):
    status_choices = ((1, 'backglog'),
                    (2, 'ready'),
                    (3, 'doing'),
                    (4, 'done'))

    urgency_level = ((1, 'Urgent'),
                    (2, 'Pressing'),
                    (3, 'Not Urgent'),
                    (4, 'If you have nothing else to do'),
                    )
    pk = serializers.IntegerField(read_only=True)
    title = models.CharField(max_length=200)
    priority = models.IntegerField(choices=urgency_level, default=2)
    status = models.IntegerField(choices=status_choices, default=1)
    description = models.TextField()

    def create(self, validated_data):
        return Task.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.priority = validated_data.get('priority', instance.priority)
        instance.status = validated_data.get('status', instance.status)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance
