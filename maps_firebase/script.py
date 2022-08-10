import firebase_admin
from firebase_admin import credentials, firestore
from firebase_admin import db
from google.cloud.firestore import GeoPoint
import gpxpy
import gpxpy.gpx
import time


gpx_file = open('./route.gpx', 'r')

gpx = gpxpy.parse(gpx_file)

cred = credentials.Certificate("./green-thumb-labap-firebase-adminsdk-fcdl2-d86591345d.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection(u'Location').document(u'E7Bmmy9iDa2vt1QeDn1L')
doc = doc_ref.get()
latitude = doc.to_dict()['location'].latitude
longitude = doc.to_dict()['location'].longitude


for track in gpx.tracks:
    for segment in track.segments:
        for point in segment.points:
           

            new_latitude = point.latitude
            new_longitude = point.longitude
            new_location = GeoPoint(new_latitude, new_longitude)

            time.sleep(3.0)

            doc_ref.update({u'location': new_location})