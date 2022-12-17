# Notes
Full Stack Note Application In Django Angular and Postgres.

To start the app follow the next carefully:

1-  go to 'notes' folder and run "npm install -g @angular/cli".
2-  go to 'backend' folder and run "virtualenv venv".
3-  run ".\venv\Scripts\activate" => work on windows.
4-  run "pip install -r requirements.txt".
5-  run "cd notes".
6-  you must install postgres on your windows.
7-  open pgAdmin.exe and create database "notes".
8-  add configratoins to the sittings file.
9-  run "py manage.py makemigrations" > "py manage.py migrate".
10- run "py manage.py runserver" notice that backend server is running.
11- check "127.0.0.1:8000/note" for endpoint working successfully.
12- go to angular folder called notes and run "ng serve --open".
