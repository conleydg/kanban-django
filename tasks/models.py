from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
from django.contrib.auth.models import User


LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted((item, item) for item in get_all_styles())

class Task(models.Model):
    status_choices = ((1, 'backglog'),
                    (2, 'ready'),
                    (3, 'doing'),
                    (4, 'done'))

    urgency_level = ((1, 'Urgent'),
                    (2, 'Pressing'),
                    (3, 'Not Urgent'),
                    (4, 'If you have nothing else to do'),
                    )

    title = models.CharField(max_length=200)
    priority = models.IntegerField(choices=urgency_level, default=2)
    status = models.IntegerField(choices=status_choices, default=1)
    description = models.TextField()
    auth_u = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.title
