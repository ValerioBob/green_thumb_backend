FROM python:3

ADD script.py /
ADD route.gpx /
ADD green-thumb-labap-firebase-adminsdk-fcdl2-d86591345d.json /

RUN pip install firebase-admin
RUN pip install gpxpy

CMD [ "python", "./script.py" ]


# sudo docker build -t courier-container .
