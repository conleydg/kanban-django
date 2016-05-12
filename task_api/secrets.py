# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'b$dbzj#h6na!(d_nzzl19z=al_=(jxoy2_4r&1*(=of=-dxua2'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'task',
        'USER': 'David',
        'PASSWORD': '',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
