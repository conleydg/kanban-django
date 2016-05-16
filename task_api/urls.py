from django.conf.urls import url, include
from rest_framework import routers
from tasks import views
from django.contrib import admin


router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet, base_name='tasks')
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r"^bootstrap_ui/", include("bootstrap_ui.urls")),
    url(r'^/api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
