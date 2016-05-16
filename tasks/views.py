from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from .models import Task
from .serializers import TaskSerializer, UserSerializer, GroupSerializer
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Permission, User
from django.shortcuts import render


def index(request):
    return render(request, 'tasks/index.html')

class TaskViewSet(viewsets.ModelViewSet):
    # queryset = Task.objects.all().order_by('priority')
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        qs = Task.objects.filter(auth_u_id=user.id)
        return qs.order_by('priority')
        # return Task.objects.all().order_by('priority')
        # return self.request.user.task.all()

        # user = self.request.user
        # return Task.objects.filter(auth_u_id=user.auth_u_id)
    # permission_classes = (permissions.IsAuthenticated)

    def perform_create(self, serializer):
        serializer.save(auth_u=self.request.user)


    # def users_task(self):
    #     queryset = Task.object.all()
    # #     return



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
