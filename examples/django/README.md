# Django

1. Create an app for your Tailwind config:
```sh
python manage.py startapp tailwind
```
2. In the [`tailwind`](./django/tailwind) directory, remove `admin.py`, `migrations/`, `models.py`, `tests.py`, and `views.py`; they're unnecessary.

3. Install Tailwind in your Tailwind app. In this directory, create a [`static`](./django/static) directory to hold the yarn project and store the Tailwind SCSS in [`static/src`](./django/static/src):
```sh
yarn add tailwindcss
```

4. Create a directory at the root called [`templates`](./django/templates); in this directory create a template named [`index.html`](./django/templates/index.html) with the following contents:
```
{% load static %}
<link rel="stylesheet" href="{% static 'css/tailwind.min.css' %}">
<h1 class="text-5xl font-bold text-purple-500">{{ message }}</h1>
```

5. Create a yarn script to build Tailwind:
```json
"build": "rimraf ../../static/css && tailwindcss build src/tailwind.scss | postcss -o ../../static/css/tailwind.min.css"
```
You'll need to add `rimraf`, `postcss-cli` (and maybe `cssnano`) for the script above. After you run the yarn script, you should see a file at [`/static/css/tailwind.min.css`](./django/static/css/tailwind.min.css). 

You can use whichever package manager you want; this example uses Yarn Berry. 

6. Remove the `/admin` route and add your own `/` route in `myapp/views.py`:
```python
from django.shortcuts import render


def index(request):
    return render(request, 'index.html', context={'message': 'Hello World!'})
```
If you'll need the `/admin` route later on, feel free to keep it; it won't break anything.

7. Tell Django about your static files. At the bottom of `your_project/settings.py` (in this example it's [`django_tailwind/settings.py`](./django/django_tailwind/settings.py)) add :
```python
STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'),)
```

8. Fix Django's complaints about the database:
```sh
python manage.py migrate
```

9. Take a look at [`tailwind/static/postcss.config.js`](./django/tailwind/static/postcss.config.js) and [`tailwind/static/package.json`](./django/tailwind/static/package.json) in this folder to see how to purge the CSS based off of the classes used in your templates.

10. Have fun! Run the Django development server:
```sh
python manage.py runserver
```
